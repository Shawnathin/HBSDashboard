# Home Billiards Daily App Beta Deployment

## What Is Included

- `server.mjs` serves the app to the local network.
- `data/daily-app.sqlite` is created automatically and stores shared app data.
- Live updates are pushed to connected browsers with server-sent events.
- Login is backed by server-side account PIN checks when the app is opened from the beta server.
- The Shawn welcome sound only plays when Shawn logs in.

## Accounts

The beta server has these account keys:

- `shawn`
- `keith`
- `herlyn`
- `diego`
- `mark`

For quick local testing only, every account defaults to PIN `1234`.

Before beta testing, set `APP_ACCOUNTS_JSON` with real PINs:

```bash
export APP_ACCOUNTS_JSON='{"shawn":{"pin":"2468"},"keith":{"pin":"1357"},"herlyn":{"pin":"9753"},"diego":{"pin":"8642"},"mark":{"pin":"7531"}}'
```

For stronger handling, pass `pinHash` instead of `pin`; the server compares SHA-256 hashes.

## Run On The Main On-Prem Computer

1. Install Node.js 24 or newer.
2. Put this app folder on the computer that will act as the office server.
3. From the app folder, start it:

```bash
npm start
```

If `npm` is not available but Node is installed, use:

```bash
node server.mjs
```

4. Open the app on the server at:

```text
http://localhost:4173
```

5. Other computers on the same network should open:

```text
http://SERVER-IP-ADDRESS:4173
```

## Data And Backups

The database file is:

```text
data/daily-app.sqlite
```

Back up that file regularly. To move the beta to another on-prem computer, stop the server, copy the full app folder including `data/daily-app.sqlite`, then start it on the new computer.

## Live Features

When users open the app through the beta server:

- Calendar changes sync to other computers.
- Chat messages sync live.
- Clients, services, tickets, notes, and projects sync live.
- Employee profiles, time-off blocks, and account-security settings sync live.
- The Settings export still downloads a JSON snapshot for developer review or emergency backup.

## Team Portal

The Team section is the employee portal for Shawn, Herlyn, Keith, Mark, and Diego. It includes:

- Employee directory and editable employee details.
- Mark identified as the installer for service work.
- Vacation, sick, personal, appointment, and unpaid time-off entry.
- Time-off requests automatically create unbillable calendar blocks in the shared schedule.
- Account management controls for password reset flags, MFA, passkeys, account lock/unlock, session timeout policy, and security status.

Locked or disabled accounts are rejected by the beta server login endpoint when the app is running through `server.mjs`.

## Developer Notes

This beta backend stores each app collection as JSON in SQLite. That keeps deployment simple and gives the business one portable database file. Before a larger rollout, the next step should be row-level tables for appointments, clients, messages, tickets, notes, and projects so simultaneous edits to the same collection can be merged with stricter conflict handling.
