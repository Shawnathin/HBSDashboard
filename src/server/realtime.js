import { readState } from "./stateStore.js";

const encoder = new TextEncoder();

function getClientStore() {
  if (!globalThis.__dailyAppEventClients) {
    globalThis.__dailyAppEventClients = new Map();
    globalThis.__dailyAppNextClientId = 1;
  }

  return globalThis.__dailyAppEventClients;
}

export function getNextClientId() {
  const nextId = globalThis.__dailyAppNextClientId || 1;
  globalThis.__dailyAppNextClientId = nextId + 1;
  return `client-${nextId}`;
}

export function addEventClient(clientId) {
  const clients = getClientStore();

  return new ReadableStream({
    start(controller) {
      const write = (message) => {
        try {
          controller.enqueue(encoder.encode(message));
        } catch {
          clients.delete(clientId);
        }
      };

      clients.set(clientId, { write });
      write(`event: ready\ndata: ${JSON.stringify({ ok: true })}\n\n`);
    },
    cancel() {
      clients.delete(clientId);
    },
  });
}

export function broadcastState(sourceClientId, changed) {
  const payload = JSON.stringify({
    sourceClientId,
    changed,
    state: readState(),
  });

  for (const [clientId, client] of getClientStore()) {
    try {
      client.write(`event: state\ndata: ${payload}\n\n`);
    } catch {
      getClientStore().delete(clientId);
    }
  }
}
