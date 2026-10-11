# Prototype Instructions

## HU decisions
- HU only, no 足球 suffix, JRs or 虎扑 branding.
- Use the selected white stadium mock. Red primary buttons, red/blue large opinions.
- Scores open match details; court buttons show an unfolding intro then debate.
- Tabs: 辩论席 / 陪审席 / 庭审记录. Show red, blue and neutral entries before comments.
- Comments and hot comments open only after choosing an entry. Smaller text and spacious comments.
- Responsive phone layout. First release uses clearly labelled sample data, in-session interactions.
- Latest references: 12.30.37 home and 12.32.36 debate screenshots. Stadium belongs only to the fading homepage hero; court is white with a strong red match banner. Full-screen red/blue entrance, large red/blue proportional support bar, clear side headings, neutral entry below. Keep debate first and comments behind entries. Jury uses simple single-choice rows and explicit submit, with animated count changes and vote switching.
- Latest toolbar feedback: tint the top navigation with subtle color, strengthen HU identity and unify it with the red court banner. Keep the red match banner rather than introducing split team colors. League headings use text only. Preserve all interactive flows.


Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Final clarification: the uppermost HU navigation is a clean white, straight-edged full-width bar, no gradient, glass tile or rounded nav pills. HU is a red wordmark, navigation uses a red underline. Below it, score and court title stay in a solid red, full-width, straight-edged section. Debate stays white with red/blue support strip.
- Crest feedback: no white backing and no global tint. Manchester United's three external white gaps are transparent; every shield/color path remains unchanged. Tottenham uses a clear white silhouette on the red section, with its source shape and negative spaces retained. Match lists use the original club assets.

- Latest HU/home feedback: HU must be visually larger and heavier. Use a crisp vector HU letterform with thick strokes and a slight forward lean, without a backing tile. Home and court share the same straight white navigation with red wordmark and underline; keep the stadium home hero and current match/court flows.

- Latest logo/entrance feedback: shrink HU to 92px desktop/72px phone and reduce stroke weight while keeping crisp vector letters. Entry is a 2.4-second full-screen red/blue collision: halves meet with a brief seam flash, a clean 开庭 title holds, then halves open outward. Reduced motion uses a static 0.5-second opening. Preserve pure colors and no gradient blending.

- Render the court underneath the entrance at click time. The red/blue panels open directly onto that court, with the backdrop cleared before exit. Keep focus inside the opening until it finishes or is skipped.
