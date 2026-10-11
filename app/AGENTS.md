# Prototype Instructions

## Current HU design decisions

The latest 2026-10-12 feedback below supersedes earlier directions.

- HU uses a red, compact geometric vector wordmark with a rounded h shoulder and squared u inspired by the clarified Hulu reference. No Hulu text, green palette, or oversized/heavy letters. 58×42px desktop / 50×38px phone.
- Homepage remains white with the fading stadium hero. League headers now have individual pale tints (欧冠 blue, 英超 purple, 西甲 coral, 德甲 red, 意甲 azure), quiet pitch-circle lines and original league badges. Scores align vertically with club crest centers.
- There are 14 persistent sample fixtures across 欧冠、英超、西甲、德甲、意甲, with open, closed, live and scheduled examples. These are demonstrations, never real current results.
- Open demo courts remain usable indefinitely. Each court visit starts a fresh 12-hour countdown; tab changes within a court do not reset it, exiting/reentering or refreshing does. The countdown loops, and fixed closed sample cases remain closed. Non-demo data can still use a real expiry.
- Court tabs are 16px/14px weight 600. Opinion explanations 15px/13px, featured usernames 14px/13px weight 600, discussion text 15px/14px. Keep opinions dominant and percentages modest.
- Opening scale has an oscillating beam and independently counter-rotating pans for the intro, followed by the existing two red curtains. Keep 赛后小法庭 and small 全体起立. Result pages reveal the verdict, vote breakdown and summary in sequence with count-up values. Respect reduced motion throughout.
- Demo usernames include club-specific football references such as 弗格森的口香糖、克鲁伊夫的笔记、穆勒的空间说明书, alongside distinct neutral football handles.

Earlier visual decisions retained unless superseded above:

- Brand is HU only. Keep a compact vector wordmark, without a football suffix.
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
- Scores open match details; entering a court opens the intro. Jury uses single-choice rows with explicit confirmation and switching an existing vote. Preserve the repeatable demo countdown and responsive phone layout.
- This is a clearly labelled frontend sample. Comments, votes, likes and follows are in-session only, not shared between users.

## Implementation workflow

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before substantial visual changes, use Product Design get-context when the visual source is unclear or no longer matches the current goal. Record durable user design feedback here. When implementing from a selected generated mock, treat it as the source of truth except for newer explicit user feedback.

Build app UI in src/. Keep .openai/hosting.json, worker/index.js, scripts/prepare-sites-build.mjs, and tests/sites-worker.test.mjs intact for a Sites handoff. Before a Sites handoff run npm run build and npm run test:sites; leave dist/client/index.html, dist/server/index.js, and dist/.openai/hosting.json.

GitHub Pages publishes this project from app/. The published CSS embeds the same stadium WebP bytes because browser binary upload is unavailable; preserve that image when syncing CSS.

## Project name · 2026-10-11 17:50

GitHub project name: HU Sport Court; repository HululuOvO/hu-sport-court. Public site: https://hululuovo.github.io/hu-sport-court/. The website wordmark remains HU. This request adds no account/login feature. GitHub Pages base derives from GITHUB_REPOSITORY, with hu-sport-court as fallback.
