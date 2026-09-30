# AGENTS.md

## What this repo is
- This is a Mintlify documentation repo, not an app/service monorepo.
- `docs.json` is the source of truth for site structure, nav, theme, tabs, and API reference wiring.
- API reference pages are generated from `api-reference/openapi.json` via `docs.json` (`navigation.tabs[].openapi`).

## High-signal working commands
- Start local docs preview from repo root (must be directory containing `docs.json`):
  - `mintlify dev`
- Use a custom local port:
  - `mintlify dev --port 3333`
- Validate docs links before shipping doc-heavy changes:
  - `mintlify broken-links`
- If local Mintlify runtime is broken:
  - `mintlify install`
  - if still failing with unknown CLI state, delete `~/.mintlify` and rerun `mintlify dev`

## Environment / toolchain constraints
- Node.js 19+ is expected for local CLI workflow.
- Repo does not define project-local JS scripts (`package.json` absent), so do not guess `npm run ...` tasks.

## Where to edit for common tasks
- Navigation / IA / tabs / navbar / footer: `docs.json`
- API endpoint docs, schemas, auth details: `api-reference/openapi.json`
- Content pages: root `.mdx` files plus section folders (`features/`, `integration/`, `tutorials/`, etc.)

## Languages
- The site has two languages, set in `docs.json` under `navigation.languages`: English (`en`, default, pages at the repo root) and Simplified Chinese (`cn`, pages under `zh/` with the same relative paths).
- When you add, rename or change an English page, make the same change to its `zh/` copy and to both language blocks in `docs.json`. A page path may appear in only one language.
- In `zh/` pages, internal links point to `/zh/...`, UI labels stay in English (the app is English only), and code blocks stay identical to the English page.
- The Chinese API Reference tab reuses `api-reference/openapi.json` and generates its pages into `zh/api-reference`.
- Screenshots live in `images/app/`. Blur every wallet address (yours, leaders, pool owners) before adding one; captions of screenshots with sample numbers say "Example data".
- Never write the em dash character (U+2014) in any language, including the Chinese double dash (two U+2014 in a row). Check with `git grep -nIF -e "$(printf '\342\200\224')"`: it must print nothing and exit 1.

## Deployment behavior
- Publishing is handled by the Mintlify GitHub App; pushing to the default branch triggers production docs deployment.
- There is no in-repo CI workflow config to rely on for docs validation gates.

## Agent-specific gotchas
- Run Mintlify commands from the repo root; running outside the `docs.json` directory causes 404/misleading preview failures.
- If docs prose conflicts with live config, trust `docs.json` and `api-reference/openapi.json` as executable source of truth.
- There is a repo-local MCP config at `.cursor/mcp.json` pointing to a local SSE server (`datapilot` at `http://localhost:7701/sse`); treat it as optional local tooling, not a deployment dependency.
