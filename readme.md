This project is the starting place I use for my own Underdot projects. As such, it's a little idiosyncratic and reflects my workflows and coding habits. For example you may not find my boilerplate css useful, but you can at least see how Underdot is set up and the various plugins are used.


## Development

* Underdot needs Node 22.18 or later.
* First run `npm install` to install dependencies.
* Use `npm run build` to compile the site once.
* Use `npm run dev` to start a development server. It rebuilds when source files change and reloads the browser.
* The server runs at `http://localhost:3000`, or the next free port when 3000 is busy. Use `npm run dev -- --port <n>` to pick the port.


## Deploying to GitHub pages

This site is set up to be hosted on GitHub pages.
* The default destination folder for Underdot is `/build` but this project uses `/docs` because it makes Github Pages deployment really easy. You need to commit the compiled files (everything in `/docs`) to the repo. Github Pages will not compile it for you. I also find committing the compiled files to the repo helpful for spotting bugs. If you see changes in compiled files that you didn't expect based on the changes you made to the source files you know something has gone wrong.
* Go to the Settings tab in Github and configure Github Pages to use the `main` branch and `/docs` directory.
* The domain name is configured in `source/CNAME`, which Underdot copies to `/docs` as it is. Simply replace `underdot-boilerplate.gh.l43.co` with your domain name. Or, delete the file to use the default Github Pages url.


## Working with q

This project uses [q](https://www.npmjs.com/package/@lab43/q), an agentic coding workflow that grounds Claude Code sessions in the project's own conventions. It arrives with the project's dependencies, and Claude Code loads it from the repo's tracked settings.

The project's rules live in `q-docs/conventions/`, and q ships rules of its own inside the package. Sessions read both before writing code, and record new decisions into the project's docs as they are made — the docs assemble themselves out of the work.

A session lists every `/q:` skill. Start with these:

- `/q:implement` — take on a task or bug
- `/q:create-plan`, then `/q:implement-plan` — plan bigger work, then execute the plan
- `/q:review` — review anything against the project's conventions
- `/q:upstream` — turn friction with q's rules or an extension's into a PR against the repo that owns them
