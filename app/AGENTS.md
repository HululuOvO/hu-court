# Prototype Instructions

## Current HU design decisions

The latest 2026-10-11 17:20 feedback supersedes previous screenshot directions.

- Brand is HU only. Keep a smaller upright, lighter vector wordmark: 66px desktop / 53px phone. No tile, heavy strokes, lean, or football suffix.
- Clean white, straight-edged full-width navigation with red wordmark and selected underline. Keep disabled 社区 and 资讯 entries alongside functional 比赛、积分榜、我的关注.
- Home alone uses the fading stadium hero. Match score/court title remains a distinct flat red, full-width straight-edged section above white debate content.
- Opening is a single solid garnet-red screen (#a62f3d), never red/blue halves, gradient blending, or overlapping/changing titles. Fixed centered 赛后法庭 (40px desktop / 32px phone, weight 400), with small 全体起立 beneath. 2.2 seconds: fade in, hold, then lift the red curtain onto the already-rendered court. Reduced motion is a static 0.5-second introduction. Preserve skip/Escape and focus containment.
- Support area is white with the short label 正反方对抗. Use 正方 / 反方 / 不站队 everywhere, not 红方 / 蓝方. Small percentage figures (25px desktop / 21px phone, weight 400), separated by plain small VS, over a thin 6px / 5px proportional track. No large colored blocks or seam circle. Counts animate after entry and vote changes; neutral votes are separate from the two-sided denominator.
- Muted garnet #a54750 and slate blue #536c8d distinguish opinions/tags and the support track. Keep main opinions prominent and comments smaller; two opinion columns, neutral entry beneath, directly visible hot feed with 18 demo comments. Side discussions, post, likes and expanding/sending nested replies remain functional.
- Court tabs, in order: 辩论席 / 陪审席 / 庭审记录 / 其他场次. Other matches can open their own court directly, including 巴塞罗那 vs 赫塔费. Closed courts go to their results; live/scheduled entries remain disabled until full time. Preserve match-specific comments/votes.
- White court header uses clean transparent crests without global tint or white backing. Manchester United’s external gaps are transparent, while internal shield colors remain original; Tottenham retains a white source-shaped silhouette against red. Match lists use original club assets.
- Restore authentic league badges. Standings order: 欧冠、西甲、英超、德甲、意甲、法甲. ESPN 2026–27 snapshot retrieved 2026-10-11, all teams, dated source links, no live-data claims. Phone expands detailed stats in its own scrollable table.
- Scores open match details; entering a court opens the intro. Jury uses single-choice rows with explicit confirmation and switching an existing vote. Preserve the 12-hour court window and responsive phone layout.
- This is a clearly labelled frontend sample. Comments, votes, likes and follows are in-session only, not shared between users.

## Implementation workflow

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before substantial visual changes, use Product Design get-context when the visual source is unclear or no longer matches the current goal. Record durable user design feedback here. When implementing from a selected generated mock, treat it as the source of truth except for newer explicit user feedback.

Build app UI in src/. Keep .openai/hosting.json, worker/index.js, scripts/prepare-sites-build.mjs, and tests/sites-worker.test.mjs intact for a Sites handoff. Before a Sites handoff run npm run build and npm run test:sites; leave dist/client/index.html, dist/server/index.js, and dist/.openai/hosting.json.

GitHub Pages publishes this project from app/. The published CSS embeds the same stadium WebP bytes because browser binary upload is unavailable; preserve that image when syncing CSS.
