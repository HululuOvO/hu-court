# HU design QA

## 2026-10-11 17:35 · Reference-driven refinement

- Source: user-provided Screenshot 2026-10-11 at 17.31.44.png. Matched bright red #cf0000 / blue #245eaf, diagonal banner texture and a large scale watermark. Branding remains HU, not the source’s JRs mark.
- Smaller and taller HU vector, 52px desktop / 43px phone. Centered 赛后小法庭 and match topic above scoreboard. Countdown and a top-five comment ticker below; likes derive from the same interactive sample comments. Ticker cycles every 4.5s and pauses on hover/focus; pulsing open-state dot.
- Restored modest opposing color blocks: 60px desktop / 48px phone, 28px / 24px percentage figures at weight 500, VS centered on the actual proportional seam. Values count up over 720ms rather than oversized static typography.
- Opening: same-red upper and lower curtains, small balancing scale, fixed title and small 全体起立. Curtains separate vertically onto the rendered court. 2.6s, static 0.5s reduced-motion alternative. No red/blue blending, duplicate titles or intermediate page.
- Featured most-liked comment beneath each position has real shared-state likes and 反驳 submission. Form IDs use React useId to avoid duplicates with the inline feed.
- Browser verified: featured like 1286→1287, mirrored in the regular feed; submitted rebuttal, replies 3→4 and exact text visible. Entered 巴萨 via other matches; court topic changed correctly. Phone 390×844: no body overflow, 48px colored meter, 24px figures, 43px logo, live-dot animation present.
- Production build passed. Existing worker and 12-hour timing checks are retained; hosting files unchanged.

## Current revision · 2026-10-11 17:20

User references: cropped oversized support bar at 17:17:41 and overlapping opening titles at 17:18:02. References are internal only; the desktop reference contains personal content and is not published.

- Replaced large red/blue support blocks and the VS circle with white space, small weight-400 percentages and a separated thin proportional line. Desktop: 25px figures / 6px track. Phone: 21px / 5px. Muted garnet #a54750 and slate blue #536c8d. Side labels throughout are 正方、反方、不站队.
- Opening has one full-screen solid #a62f3d backdrop, fixed centered 赛后法庭 and small 全体起立 beneath. No red/blue split, title swaps or overlapping words. Main title 40px desktop / 32px phone, weight 400. 2.2-second fade/hold/upward reveal onto the rendered court; static 0.5-second reduced-motion alternative, Escape and skip preserved.
- Added 其他场次 beside 庭审记录. Five other fixtures are ordered by court availability. Open fixtures enter their own court, closed fixtures show results, live/scheduled fixtures have disabled buttons. Two-column desktop and one-column phone list.
- Preserved white straight-edged navigation, the distinct red score/title section, transparent original-shaped crests, HU wordmark, visible comments and separate side discussions.

## Validation

- Vite production build passed; Sites output files preserved. Existing prior revision passed four worker checks and the 12-hour boundary test.
- Browser: entered 巴塞罗那 vs 赫塔费 from 曼联’s Other matches tab. Verified the pure-red backdrop, fixed title/subtitle and zero red/blue opening panels. Route and match topic changed correctly.
- Submitted a neutral comment in the 巴萨 court: 18→19 comments, exact text visible. Switched to the closed 利物浦 vs 切尔西 court and arrived on its records with voting disabled.
- Phone 390×844: all four court tabs fit equally at 89.5px; body width 390px with no horizontal overflow in debate or other matches. Support track 5px, percentages 21px/400. Opening title 32px/400 and centered.
- Earlier regression checks remain relevant: posting, likes, expanding/replying, vote confirmation/switching, score details, follows and six full standings tables.
- Standings snapshot: ESPN 2026–27, retrieved 2026-10-11. Team totals: 欧冠36、西甲20、英超20、德甲18、意甲20、法甲18. Dated source links, explicitly non-live. Phone details scroll within the table.

## Scope

Clearly labelled sample fixtures; comments, votes, likes and follows reset on refresh and are not shared between users. No real fixture feed, login backend or notification delivery. Court results are sample community votes, not an AI fact judgment.
