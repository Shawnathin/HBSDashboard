# Next.js Migration

## Current Status

The original app has been backed up at:

```text
backups/legacy-20260526-151312
```

This repo now has a Next.js app shell in `src/app`. The current production UI is copied into `public/legacy` and shown from the Next home page as a compatibility bridge. This keeps the app usable while the large legacy UI is moved into React components over time.

The backend endpoints from `server.mjs` have been ported to Next route handlers:

- `GET /api/health`
- `POST /api/login`
- `GET /api/state`
- `PUT /api/state`
- `GET /api/events`

The app still uses the existing SQLite database:

```text
data/daily-app.sqlite
```

## Commands

Dependencies are installed locally. This workspace did not have system `npm`, so a local npm helper was installed under `.tools` and ignored by `.gitignore`.

Install dependencies on a machine with normal Node/npm:

```bash
npm install
```

Run the Next.js dev server:

```bash
npm run dev
```

Run on another port when `4173` is already occupied:

```bash
PORT=4174 npm run start
```

Run the legacy Node server if rollback is needed:

```bash
npm run legacy:start
```

## Next Steps

1. Replace the legacy iframe one module at a time: login, dashboard, calendar, jobs, clients, team, notes, settings.
2. After the UI is componentized, decide whether to keep SQLite or migrate storage to Postgres.
3. Track the current npm audit warning for Next's PostCSS dependency and update Next when a patched release is available.
