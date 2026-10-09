## Documentation

This project follows q, an agentic coding workflow. Its documentation is indexed below, a subsection per kind of doc (source: @lab43/q conventions/documentation.md, Taxonomy). Doc changes — the README and this briefing itself included — go through `/q:update-docs`.

If the session's skill list has no `/q:` skills, this machine is missing the q plugin — ask the user to install the project's dependencies (`npm install`, or the project's package manager's equivalent), then run `/q:reconcile`.

When another session is already working this repo, take a worktree rather than sharing the checkout (source: @lab43/q references/run-contract.md, The delivery branch).

Package doc paths are package name plus path from the package's `q-extension/` payload directory, resolved under `node_modules/`: `@lab43/q conventions/principles.md` is `node_modules/@lab43/q/q-extension/conventions/principles.md` (source: @lab43/q conventions/documentation.md, Package doc paths).

### Conventions

Binding decisions about how this project's code and docs get written, recorded as they are made (source: @lab43/q conventions/documentation.md, Taxonomy).

Conventions come in three tiers: q's own, the conventions of any installed extensions, and this project's own `q-docs/conventions/` (source: @lab43/q conventions/conventions.md, Three tiers of conventions). q and the extensions are dependencies in `package.json`. Project rules win over an extension's rule, and an extension's rule wins over q's. Check all three tiers before writing code, before design decisions and reviews, and before changing docs.

`@lab43/q` — The rules of the q workflow, governing how a project's work gets planned, decided, documented, and shipped.

- `@lab43/q conventions/principles.md` — cross-cutting rules for any design decision, plan, or review
- `@lab43/q conventions/documentation.md` — what belongs in a project's documentation, where it lives, and how it stays accurate
- `@lab43/q conventions/conventions.md` — how a project's conventions are tiered, written, and enforced
- `@lab43/q conventions/extensions.md` — the extension format: rules for authoring and publishing a q extension
- `@lab43/q conventions/plans.md` — how a project's plans are written, sequenced, and carried to completion
- `@lab43/q conventions/specs.md` — how a project's specs are written and how the code is held to them
- `@lab43/q conventions/issue-tracking.md` — rules for working a project's issue tracker from any session
- `@lab43/q conventions/pull-requests.md` — rules for authoring a pull request
- `@lab43/q conventions/writing.md` — rules for writing prose: docs, plans, PR bodies, anything a human or agent will read

`underdot` — Rules for writing a site built on Underdot: its configuration, source tree, templates, and plugins.

- `underdot conventions/configuration.md` — rules for writing a site's Underdot configuration file
- `underdot conventions/ejs.md` — rules for writing a site's EJS pages, templates, and partials
- `underdot conventions/templates.md` — rules for writing a site's pages and templates in any engine

This project's own:

- `q-docs/conventions/principles.md` — cross-cutting rules, including deviations from q's
- `q-docs/conventions/documentation.md` — documentation rulings and deviations

### Specs

What this product commits to, stated as behavior the code must honor (source: @lab43/q conventions/documentation.md, Taxonomy).

- none yet

### Guides

How to use and operate this product, rather than how to write its code (source: @lab43/q conventions/documentation.md, Taxonomy).

`underdot` — Rules for writing a site built on Underdot: its configuration, source tree, templates, and plugins.

- `underdot guides/migrating-from-v1.md` — what to change in a site built on Underdot v1 so it builds on v2

This project's own:

- `q-docs/guides/driving-manual.md` — how to bring the site up and exercise it, for a session checking that a change works
