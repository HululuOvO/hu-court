# HU design QA

final result: passed

## Current visual truth

The user's latest screenshots and feedback supersede the earlier flat court mock. Home reference: `../work/references/Screenshot 2026-10-11 at 12.30.37.png`. Debate reference: `../work/references/Screenshot 2026-10-11 at 12.32.36.png`. Jury reference: `../work/references/Screenshot 2026-10-11 at 12.32.48.png`.

Requested deviations are implemented: HU only; red controls; stadium only in the fading home hero; text-only league headings; a tinted glass HU navigation bar; retain the red match banner rather than split team colors; full-screen red/blue entrance; proportionate red/blue support strip and two large main opinions; neutral discussion below. Tabs start with debate. Comments open after choosing a voice; jury uses single-choice rows with explicit confirmation.

## Screenshot comparison

- Home: 1440 × 1024 CSS viewport, density 1. Reference 1488 × 1057 normalized to 1440 × 1024. Same home state, same six illustrative fixtures. `qa/comparison-home-v3.jpg` places source left and implementation right.
- Debate: `qa/comparison-court-v3.jpg` compares the support-strip / two-column / neutral hierarchy. Reference is a cropped Arsenal screen, implementation a Manchester United screen. Both are debate states, not pixel-identical fixtures; each crop is resized proportionally to 1000 px width and padded for comparison. The comment feed visible in the reference is intentionally moved behind opinion links per the user's earlier requirement.
- Desktop implementation: `qa/home-v3-desktop.png`, `qa/court-v3-desktop.png`, `qa/entrance-v3.png`.
- Phone: 390 × 844 viewport, full-page captures. `qa/court-v3-mobile.png`; jury layout `qa/jury-v2-mobile.png`. The phone toolbar was rechecked after the final tint update. No horizontal overflow.

## Findings resolved

1. P1: stadium covered the whole page and appeared behind court opinions. Restricted the photographic asset to a 480 px home hero, masked to white; no stadium in court.
2. P1: entrance was a small pale modal with little impact. Replaced with full-screen red/blue panels, large staggered title, a short hold, and opening seam transition. Escape and skip remain available.
3. P1: debate had no immediately visible confrontation proportions. Added large red/blue support strip, moving seam, animated percentages and live vote counts. Neutral votes are counted separately and that denominator is stated.
4. P2: top navigation appeared disconnected and had no selected match state inside court. Added softly tinted glass, red HU tile and active 比赛 state across match/court routes; consistent header widths.
5. P2: jury voting cards were visually complex. Changed to vertical single-choice rows with an explicit confirmation button. Results appear after voting; switching moves the existing vote.
6. P2: early mobile headings split team names. Natural phrase breaks preserve 曼联; columns remain side by side for direct comparison.
7. P2: VS touched the blue percentage. Increased seam padding on desktop and phone.
8. P2: league icon looked decorative. Removed per final feedback.
9. P2: Tottenham SVG contains a translucent white square, visible against red. Kept authentic vectors and introduced consistent round white crest frames with balanced padding. Final desktop evidence: `qa/court-v4-crests.png`; phone: `qa/court-v4-mobile.png`. Both render without overflow.

No known unresolved P0/P1/P2 visual or flow findings remain for this frontend prototype scope.

## Typography, color, layout, assets and copy

- Heavy Chinese match/major-opinion headings, quieter body copy and smaller comments. Noto Sans SC with PingFang/system fallback. HU is a typographic italic wordmark, now on a red tile in the toolbar.
- White body with subtle rose/blue top atmosphere, frosted toolbar, strong red match banner, red/blue proportion strip, white opinion columns and a neutral gray panel. Main opinions remain more prominent than comments.
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
