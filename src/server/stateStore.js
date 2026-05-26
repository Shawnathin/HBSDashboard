import { createHash } from "node:crypto";
import { mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";

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

const fallbackAccounts = {
  shawn: { name: "Shawn", role: "Manager", pin: "1234" },
  herlyn: { name: "Herlyn", role: "Office", pin: "1234" },
  keith: { name: "Keith", role: "Owner", pin: "1234" },
  diego: { name: "Diego", role: "Staff", pin: "1234" },
  mark: { name: "Mark", role: "Staff", pin: "1234" },
};

const dataDir = resolve(process.env.DATA_DIR || join(process.cwd(), "data"));
const dbPath = resolve(process.env.DB_PATH || join(dataDir, "daily-app.sqlite"));

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

function getDatabase() {
  mkdirSync(dataDir, { recursive: true });

  if (!globalThis.__dailyAppDatabase) {
    globalThis.__dailyAppDatabase = new DatabaseSync(dbPath);
    globalThis.__dailyAppDatabase.exec(`
      CREATE TABLE IF NOT EXISTS app_state (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
    `);
  }

  return globalThis.__dailyAppDatabase;
}

function hashPin(pin) {
  return createHash("sha256").update(String(pin)).digest("hex");
}

export function getDbPath() {
  return dbPath;
}

export function readState() {
  const rows = getDatabase().prepare("SELECT key, value FROM app_state").all();

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

export function writeState(partialState = {}) {
  const statement = getDatabase().prepare(`
    INSERT INTO app_state (key, value, updated_at)
    VALUES (?, ?, datetime('now'))
    ON CONFLICT(key) DO UPDATE SET
      value = excluded.value,
      updated_at = excluded.updated_at
  `);
  const changed = [];

  for (const [key, value] of Object.entries(partialState)) {
    if (!stateKeys.has(key)) {
      continue;
    }

    statement.run(key, JSON.stringify(value));
    changed.push(key);
  }

  return changed;
}

export function getLoginUser(userKey, pin) {
  const account = loadAccounts()[userKey];

  if (!account) {
    return null;
  }

  const pinMatches = account.pinHash
    ? hashPin(pin) === account.pinHash
    : String(account.pin || "") === String(pin || "");

  if (!pinMatches) {
    return null;
  }

  return {
    key: userKey,
    name: account.name,
    role: account.role,
  };
}
