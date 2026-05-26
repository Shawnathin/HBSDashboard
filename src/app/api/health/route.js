import { getDbPath } from "../../../server/stateStore.js";

export const runtime = "nodejs";

export function GET() {
  return Response.json({ ok: true, dbPath: getDbPath() });
}
