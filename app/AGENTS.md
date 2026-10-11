# Prototype Instructions

## Current HU design decisions

The latest 2026-10-11 17:35 feedback supersedes previous screenshot directions.

- Brand is HU only. Keep a smaller upright, lighter vector wordmark: 52px desktop / 43px phone, with taller 88×64 letter proportions instead of a flat/wide wordmark. No tile, heavy strokes, lean, or football suffix.
- Clean white, straight-edged full-width navigation with red wordmark and selected underline. Keep disabled 社区 and 资讯 entries alongside functional 比赛、积分榜、我的关注.
- Home alone uses the fading stadium hero. Match score/court title remains a distinct flat red, full-width straight-edged section above white debate content.
- Latest visual source is Screenshot 2026-10-11 at 17.31.44.png: bright court red #cf0000 and strong blue #245eaf, subtle diagonal stripes and a large dark scale watermark in the banner. No muted gray-red/slate palette. Keep clean white navigation and a straight boundary to the court content.
- Banner label is 赛后小法庭, centered above the match topic and score. Countdown sits beside a rotating popular-comment highlight; use actual sample comment names, texts and likes rather than fabricated real-time activity. Top-five comments rotate every 4.5 seconds, pause on hover/focus; no automatic cycling under reduced motion. 开庭中 has a small pulsing dot.
- Opening uses two same-red horizontal curtains, a light animated scale, fixed centered 赛后小法庭 and small 全体起立 beneath. No red/blue split or title swapping. 2.6 seconds fade/hold, then upper/lower curtains open away from the center directly onto the rendered court. Reduced motion is a static 0.5-second introduction. Preserve skip/Escape and focus containment.
- Support area keeps 正方 / 反方 / 不站队 wording. Restore visible opposing red/blue color blocks at 60px desktop / 48px phone; numbers are only 28px / 24px, weight 500, not huge. Small white VS circle follows the proportional boundary. Percentage and supporting counts grow from zero over 720ms after entry; neutral is separate from the two-sided denominator.
- Main opinions stay prominent. Below each, show its most-liked actual sample comment with synchronized like and working 反驳/reply controls. Use unique form IDs because featured comments also appear in the feed. Preserve the neutral entry, directly visible hot feed, separate side discussions, posting, likes and nested replies.
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

## Project name · 2026-10-11 17:50

GitHub project name: HU Sport Court; repository HululuOvO/hu-sport-court. Public site: https://hululuovo.github.io/hu-sport-court/. The website wordmark remains HU. This request adds no account/login feature. GitHub Pages base derives from GITHUB_REPOSITORY, with hu-sport-court as fallback.
