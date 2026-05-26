import { getLoginUser, readState } from "../../../server/stateStore.js";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const security = readState()?.accountSecurity?.[body.userKey];

    if (security?.status === "locked" || security?.status === "disabled") {
      return Response.json({ ok: false, locked: true }, { status: 423 });
    }

    const user = getLoginUser(body.userKey, body.pin);

    if (!user) {
      return Response.json({ ok: false }, { status: 401 });
    }

    return Response.json({ ok: true, user });
  } catch {
    return Response.json({ error: "Invalid login request" }, { status: 400 });
  }
}
