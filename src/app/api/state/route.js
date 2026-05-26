import { broadcastState } from "../../../server/realtime.js";
import { readState, writeState } from "../../../server/stateStore.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ state: readState() }, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const changed = writeState(body.state || {});

    if (changed.length) {
      broadcastState(body.sourceClientId || "server", changed);
    }

    return Response.json({ ok: true, changed });
  } catch {
    return Response.json({ error: "Invalid state request" }, { status: 400 });
  }
}
