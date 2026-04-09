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

## Deployment behavior
- Publishing is handled by the Mintlify GitHub App; pushing to the default branch triggers production docs deployment.
- There is no in-repo CI workflow config to rely on for docs validation gates.

## Agent-specific gotchas
- Run Mintlify commands from the repo root; running outside the `docs.json` directory causes 404/misleading preview failures.
- If docs prose conflicts with live config, trust `docs.json` and `api-reference/openapi.json` as executable source of truth.
- There is a repo-local MCP config at `.cursor/mcp.json` pointing to a local SSE server (`datapilot` at `http://localhost:7701/sse`); treat it as optional local tooling, not a deployment dependency.
