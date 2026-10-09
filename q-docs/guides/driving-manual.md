# Driving Manual

How to bring the site up and exercise it, for a session checking that a change works.

## Bring it up

Run `npm run dev -- --port <n>` to build, serve, watch, and live-reload the site. Pick a port no other session holds. Without the flag the dev server takes 3000, or the next free port when 3000 is busy, so the URL it prints is the one to use.

Run `npm run build` for a one-off build. A build succeeded when its output ends in `✓ Built`.

## Take turns over `docs/`

Both commands write into `docs/`, the committed destination. A dev session therefore rewrites tracked files as it rebuilds. Sessions sharing a checkout take turns: one runs the dev server at a time. A session in its own worktree has its own `docs/`.

## Exercise it

- `/` and `/example/` are the pages. A URL without its trailing slash, such as `/example`, redirects to the slash form.
- Any missing URL answers 404 with `docs/404.html`.
- Live reload: the dev server injects a client that listens on the event stream at `/_underdot/events` and reloads the page when a rebuild finishes. Edit a file under `source/`, and an open page reloads with the change.

## Capture it

Drive a browser with Playwright from a scratch directory. Launch it with `chromium.launch({ channel: 'chrome' })` to use the installed Chrome. Playwright's default launch fails with "Executable doesn't exist" until `npx playwright install` downloads its own browsers.

## Output that looks like a failure

- **Sass deprecation warnings** about `@import`. Cause: `source/css/styles.scss` still uses `@import`. The build continues.
- **A bare `null` line** after the Sass warnings. Cause: the Sass plugin's warning output. The build continues.
- **"Browserslist: browsers data (caniuse-lite) is … months old"**. Cause: autoprefixer's browser data in the lockfile is old. The build continues.

Judge the build by its last line, `✓ Built` or an error, never by these.
