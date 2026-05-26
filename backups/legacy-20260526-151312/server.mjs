import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const dataDir = resolve(process.env.DATA_DIR || join(__dirname, "data"));
const dbPath = resolve(process.env.DB_PATH || join(dataDir, "daily-app.sqlite"));
const stateKeys = new Set([
  "businessProfile",
  "crews",
  "appointments",
  "services",
  "clients",
  "serviceTickets",
  "cueRepairs",
  "customOrders",
  "employeeProfiles",
  "accountSecurity",
  "chatMessages",
  "projects",
  "projectAutomations",
  "betaFeedback",
  "notes",
]);
const staticTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};
const fallbackAccounts = {
  shawn: { name: "Shawn", role: "Manager", pin: "1234" },
  herlyn: { name: "Herlyn", role: "Office", pin: "1234" },
  keith: { name: "Keith", role: "Owner", pin: "1234" },
  diego: { name: "Diego", role: "Staff", pin: "1234" },
  mark: { name: "Mark", role: "Staff", pin: "1234" },
};

mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(dbPath);
db.exec(`
  CREATE TABLE IF NOT EXISTS app_state (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const readAllStateStatement = db.prepare("SELECT key, value FROM app_state");
const upsertStateStatement = db.prepare(`
  INSERT INTO app_state (key, value, updated_at)
  VALUES (?, ?, datetime('now'))
  ON CONFLICT(key) DO UPDATE SET
    value = excluded.value,
    updated_at = excluded.updated_at
`);
const clients = new Map();
let nextClientId = 1;

function loadAccounts() {
  if (!process.env.APP_ACCOUNTS_JSON) {
    return fallbackAccounts;
  }

  try {
    const parsed = JSON.parse(process.env.APP_ACCOUNTS_JSON);
    return Object.fromEntries(
      Object.entries(fallbackAccounts).map(([key, account]) => [
        key,
        { ...account, ...(parsed[key] || {}) },
      ])
    );
  } catch (error) {
    console.warn("APP_ACCOUNTS_JSON could not be parsed. Falling back to temporary beta PINs.");
    return fallbackAccounts;
  }
}

const accounts = loadAccounts();

function hashPin(pin) {
  return createHash("sha256").update(String(pin)).digest("hex");
}

function verifyPin(account, pin) {
  if (!account) {
    return false;
  }
  if (account.pinHash) {
    return hashPin(pin) === account.pinHash;
  }
  return String(account.pin || "") === String(pin || "");
}

function readState() {
  const rows = readAllStateStatement.all();
  if (!rows.length) {
    return null;
  }

  return rows.reduce((state, row) => {
    try {
      state[row.key] = JSON.parse(row.value);
    } catch {
      state[row.key] = null;
    }
    return state;
  }, {});
}

function writeState(partialState = {}) {
  const changed = [];

  for (const [key, value] of Object.entries(partialState)) {
    if (!stateKeys.has(key)) {
      continue;
    }

    upsertStateStatement.run(key, JSON.stringify(value));
    changed.push(key);
  }

  return changed;
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 5_000_000) {
        rejectBody(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolveBody(raw ? JSON.parse(raw) : {});
      } catch (error) {
        rejectBody(error);
      }
    });
    request.on("error", rejectBody);
  });
}

function broadcastState(sourceClientId, changed) {
  const payload = JSON.stringify({
    sourceClientId,
    changed,
    state: readState(),
  });

  for (const client of clients.values()) {
    client.write(`event: state\ndata: ${payload}\n\n`);
  }
}

function serveStatic(pathname, response) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = normalize(resolve(join(__dirname, requestedPath)));

  if (!filePath.startsWith(__dirname) || !existsSync(filePath)) {
    sendJson(response, 404, { error: "Not found" });
    return;
  }

  const type = staticTypes[extname(filePath)] || "application/octet-stream";
  response.writeHead(200, {
    "Content-Type": type,
    "Cache-Control": type.includes("html") ? "no-store" : "public, max-age=300",
  });
  response.end(readFileSync(filePath));
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/api/health") {
    sendJson(response, 200, { ok: true, dbPath });
    return;
  }

  if (url.pathname === "/api/login" && request.method === "POST") {
    try {
      const body = await readBody(request);
      const account = accounts[body.userKey];
      const security = readState()?.accountSecurity?.[body.userKey];

      if (security?.status === "locked" || security?.status === "disabled") {
        sendJson(response, 423, { ok: false, locked: true });
        return;
      }

      if (!verifyPin(account, body.pin)) {
        sendJson(response, 401, { ok: false });
        return;
      }

      sendJson(response, 200, {
        ok: true,
        user: {
          key: body.userKey,
          name: account.name,
          role: account.role,
        },
      });
    } catch {
      sendJson(response, 400, { error: "Invalid login request" });
    }
    return;
  }

  if (url.pathname === "/api/state" && request.method === "GET") {
    sendJson(response, 200, { state: readState() });
    return;
  }

  if (url.pathname === "/api/state" && request.method === "PUT") {
    try {
      const body = await readBody(request);
      const changed = writeState(body.state || {});

      if (changed.length) {
        broadcastState(body.sourceClientId || "server", changed);
      }

      sendJson(response, 200, { ok: true, changed });
    } catch {
      sendJson(response, 400, { error: "Invalid state request" });
    }
    return;
  }

  if (url.pathname === "/api/events" && request.method === "GET") {
    const clientId = url.searchParams.get("clientId") || `client-${nextClientId++}`;

    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });
    response.write(`event: ready\ndata: ${JSON.stringify({ ok: true })}\n\n`);
    clients.set(clientId, response);

    request.on("close", () => {
      clients.delete(clientId);
    });
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    serveStatic(url.pathname, response);
    return;
  }

  sendJson(response, 405, { error: "Method not allowed" });
});

server.listen(port, host, () => {
  console.log(`Home Billiards beta app running at http://localhost:${port}`);
  console.log(`Database: ${dbPath}`);
  if (!process.env.APP_ACCOUNTS_JSON) {
    console.log("Using temporary beta PIN 1234 for all accounts. Set APP_ACCOUNTS_JSON before real beta use.");
  }
});
