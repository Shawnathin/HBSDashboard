import { addEventClient, getNextClientId } from "../../../server/realtime.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request) {
  const url = new URL(request.url);
  const clientId = url.searchParams.get("clientId") || getNextClientId();
  const stream = addEventClient(clientId);

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
