# HU design QA

final result: passed

## Current visual truth

Latest crest references: `../work/references/IMG_7037.PNG`, `IMG_7038.PNG`, `IMG_7039.PNG`. Adopt the clean transparent crest, preserve internal shield colors, and keep a solid-colored header with a straight boundary to the white content.

The user's latest screenshots and feedback supersede the earlier flat court mock. Home reference: `../work/references/Screenshot 2026-10-11 at 12.30.37.png`. Debate reference: `../work/references/Screenshot 2026-10-11 at 12.32.36.png`. Jury reference: `../work/references/Screenshot 2026-10-11 at 12.32.48.png`.

Requested deviations are implemented: HU only; red controls; stadium only in the fading home hero; text-only league headings; a continuous white straight-edged HU navigation above a distinct full-width solid-red score and title section, with no rounded banner; full-screen red/blue entrance; proportionate red/blue support strip and two large main opinions; neutral discussion below. Tabs start with debate. Comments open after choosing a voice; jury uses single-choice rows with explicit confirmation.

## Screenshot comparison

- Home: 1440 × 1024 CSS viewport, density 1. Reference 1488 × 1057 normalized to 1440 × 1024. Same home state, same six illustrative fixtures. `qa/comparison-home-v3.jpg` places source left and implementation right.
- Debate: `qa/comparison-court-v3.jpg` compares the support-strip / two-column / neutral hierarchy. Reference is a cropped Arsenal screen, implementation a Manchester United screen. Both are debate states, not pixel-identical fixtures; each crop is resized proportionally to 1000 px width and padded for comparison. The comment feed visible in the reference is intentionally moved behind opinion links per the user's earlier requirement.
- Desktop implementation: `qa/home-v3-desktop.png`, `qa/court-v3-desktop.png`, `qa/entrance-v3.png`.
- Phone: 390 × 844 viewport, full-page captures. `qa/court-v3-mobile.png`; jury layout `qa/jury-v2-mobile.png`. The phone toolbar was rechecked after the final tint update. No horizontal overflow.

## Findings resolved

1. P1: stadium covered the whole page and appeared behind court opinions. Restricted the photographic asset to a 480 px home hero, masked to white; no stadium in court.
2. P1: entrance was a small pale modal with little impact. Replaced with full-screen red/blue panels, large staggered title, a short hold, and opening seam transition. Latest revision uses solid red/blue halves that strike a central seam, a clean 开庭 title, and an outward opening that directly reveals the already-rendered court; no intermediate black screen. Escape and skip remain available.
3. P1: debate had no immediately visible confrontation proportions. Added large red/blue support strip, moving seam, animated percentages and live vote counts. Neutral votes are counted separately and that denominator is stated.
4. P2: top navigation appeared disconnected and had no selected match state inside court. Separated white straight-edged navigation from the solid-red score/title section; HU is a red wordmark and 比赛 is selected with a red underline. Home shares the same white straight-edged navigation and smaller medium-weight HU vector wordmark.
5. P2: jury voting cards were visually complex. Changed to vertical single-choice rows with an explicit confirmation button. Results appear after voting; switching moves the existing vote.
6. P2: early mobile headings split team names. Natural phrase breaks preserve 曼联; columns remain side by side for direct comparison.
7. P2: VS touched the blue percentage. Increased seam padding on desktop and phone.
8. P2: league icon looked decorative. Removed per final feedback.
9. P2: Tottenham SVG contains a translucent white square, visible against red. Removed the translucent background path and use a white Tottenham silhouette for contrast on the red score section. Manchester United’s three external white gaps are transparent while all shield and colored paths remain untouched. No white frame or multiply tint. Final evidence: `qa/HU-white-nav-red-banner-preview.png` and `qa/HU-white-nav-red-banner-mobile.png`.

No known unresolved P0/P1/P2 visual or flow findings remain for this frontend prototype scope.

## Typography, color, layout, assets and copy

- Heavy Chinese match/major-opinion headings, quieter body copy and smaller comments. Noto Sans SC with PingFang/system fallback. HU uses crisp medium-weight vector letterforms with a slight forward lean, directly in red on white navigation across home and court.
- White body; home uses its fading stadium hero below a white straight-edged toolbar; court uses one flat deep red score section, red/blue proportion strip, white opinion columns and a neutral gray panel. Main opinions remain more prominent than comments.
- Six aligned score rows, separate court button, responsive 390 px layout; no support percentages on the home page.
- Actual club crest SVGs loaded; Phosphor icons; original generated stadium WebP. GitHub source embeds the same WebP bytes in CSS to publish without binary upload. No screenshot used as page artwork, no fabricated league marks.
- Short Chinese labels, visible sample-data scope, no HU 足球 suffix, Hupu branding, floor numbers or virtual currency.

## Functional validation

- Click score: match-specific scorers, statistics and 11-player lineups. Court entrance: full-screen animation to debate, with skip/Escape.
- Debate landing has zero comment articles. Red, blue, neutral and hot-comments entries work.
- Posted a red-side opinion; discussion count increased from 2 to 3 and text appeared. Expanded 3 replies; submitted a fourth reply; reply count became 4. Like incremented 42 to 43.
- Confirmed red vote: 128→129, total 261→262. Changed to blue: red 128, blue 98, total still 262. Percentages and support seam recalculate. Selection alone does not count a vote.
- Closed courts disable vote changes. Reservation appears under 我的关注.
- Visible focus, labelled forms, reduced-motion support, no application console errors in captured logs.
- Final local production build and four Sites Worker checks passed; 12-hour/full-time boundary test passed. Public build additionally validates the uploaded source.

## Scope

This is a frontend prototype with clearly labelled sample fixtures. Comments, votes, likes and follows reset on refresh and are not shared between users. No real fixture API, login backend or notification delivery is implemented. Jury results are community sample votes, not an AI fact judgment.

Latest home/logo evidence: `qa/HU-home-wordmark-desktop.png` and `qa/HU-home-wordmark-mobile.png`. HU letterforms replace the rounded red tile. Latest feedback reduces strokes from 14 to 10–11 vector units and display width to 92px desktop / 72px phone. Current evidence: `qa/HU-refined-wordmark.png`.

Opening evidence: `qa/HU-opening-collision.png`, `qa/HU-opening-collision-mobile.png`. Phone 390px has no horizontal overflow. Click-to-court opens underneath the animation; 2.4s auto completion, skip button and Escape preserve navigation. Reduced motion is a static 0.5s introduction.

## 2026-10-11 · Latest refinement

- Reviewed four supplied screenshots, including the cropped support strip from 17:09:52.
- Replaced the leaning heavy HU with a smaller upright vector wordmark, 66px desktop / 53px phone.
- Entry: red/blue collision, a medium-weight 赛后开庭, small 全体起立, then a separate 全体起立 title and outward reveal. 3.6 seconds; static 0.5 seconds for reduced motion. Underlying page is inert until completion; Escape skips.
- Support strip reduced to 92px desktop / 62px phone, with smaller medium-weight percentages. Counts animate after the entrance and when voting changes.
- Debate landing directly shows 18 demo comments with stronger red, blue and neutral tags. Side discussions stay separate and clickable. Hot/latest sorting, posting, likes, expanding replies and sending replies work.
- Home restores league badges and adds six standings entries. Header includes disabled 社区 and 资讯.
- Full ESPN 2026–27 standings snapshot retrieved 2026-10-11: 欧冠 36, 西甲 20, 英超 20, 德甲 18, 意甲 20, 法甲 18. Metadata, source links and non-live status shown. All records checked for unique team IDs, sequential provider ranks, played = W+D+L and goal difference = goals for − against. Do not extrapolate demo matches from standings.
- Phone standings support a compact view and expandable full stats inside a horizontally scrollable table. At 390px, no body overflow.
- Local checks: Vite production build; Sites worker tests 4/4; 12-hour court boundary 1/1. Browser checks: 1286→1287 like; expanded three replies; posted a new neutral comment; replied to that comment; jury red 129/blue 97 then switched to red 128/blue 98; all table counts and phone detail expansion verified.
