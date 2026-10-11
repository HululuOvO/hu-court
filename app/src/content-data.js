// Original Chinese prototype content; no third-party articles are republished.
export const communityTopics = [
  { matchId: "m1", category: "赛后复盘", title: "曼联这场平局，最该聊的是哪二十分钟？", summary: "领先后的站位、换人和最后一脚，分开聊会更清楚。" },
  { matchId: "m7", category: "赛后复盘", title: "拜仁两次领先：攻得漂亮，也守得住吗？", summary: "进攻给答案，防守留下问题。来听听两边怎么说。" },
  { matchId: "m5", category: "战术讨论", title: "巴萨的空间，是谁跑出来的？", summary: "除了进球，再看看无球跑动和中场衔接。" },
  { matchId: "m9", category: "球迷看台", title: "国家德比散场后，你最想夸谁？", summary: "给球员一点掌声，也给不同意见留个位置。" },
  { matchId: "m12", category: "战术讨论", title: "米兰德比：控制比赛，还是控制机会？", summary: "控球率、机会质量和终结效率，你更看重哪个？" },
  { matchId: "m15", category: "球迷看台", title: "巴黎的进攻，精彩还可以再进一步吗？", summary: "好看与高效之间，你希望球队先做到什么？" },
];
export const chineseSources = [
  { name: "懂球帝", text: "球队资讯与中文足球内容", url: "https://www.dongqiudi.com/" },
  { name: "虎扑", text: "球迷话题与赛后讨论", url: "https://bbs.hupu.com/" },
  { name: "直播吧", text: "足球新闻与比赛资讯", url: "https://news.zhibo8.com/zuqiu/" },
];
export const newsArticles = [
  { id: "united", tag: "赛后手记", title: "一场平局，可以从三个问题聊起", summary: "比分之外，看看主动权、换人和机会处理。", matchId: "m1", paragraphs: ["这是一篇围绕示例比赛的赛后手记。先把结果放在一边：领先以后，球队为什么渐渐失去了主动？", "第二个问题是调整。替补上场以后，球队的出球和前场接应有没有变化？批评一个决定，最好说清楚它影响了哪一段比赛。", "最后再看终结。错失机会和创造不出机会，是两种不同的问题。你更在意哪一点？去法庭里说说。"] },
  { id: "bayern", tag: "赛后手记", title: "两次领先，为什么还是没能带走胜利？", summary: "进攻和防守，可以同时有不同的评价。", matchId: "m7", paragraphs: ["示例里的拜仁与巴黎踢成了平局。进球让人兴奋，但从领先到被追平的过程，同样值得认真看。", "复盘时可以把镜头放在丢球之前：中场有没有及时保护防线，边路有没有留下空间？讨论具体动作，比一句“防守太差”更有意思。", "认可进攻，并不意味着忽略防守。正方和反方未必互相否定，也可以把这场比赛拼得更完整。"] },
  { id: "barcelona", tag: "战术笔记", title: "不拿球的那个人，也可能是关键", summary: "从拉菲尼亚的跑动，聊聊球场上的空间。", matchId: "m5", paragraphs: ["这篇手记对应巴萨示例比赛。看进球时，不妨先暂停在最后一传之前，找找谁把防守球员带走了。", "一次拉边、一次前插，可能让队友多出半秒做决定。精彩配合的价值，也藏在这些不直接出现在进球数字里的动作中。", "你觉得这场最值得夸的是终结、传球还是跑位？来讨论，把理由说出来。"] },
  { id: "court-guide", tag: "看台指南", title: "第一次进法庭，不必先选边", summary: "愿意说就说，只想投票也可以。", matchId: "m1", paragraphs: ["先看正方和反方的主要观点，再决定要不要加入讨论。点击观点卡片，可以读发言、回复或者表达自己的看法。", "只想投票，就去陪审席。两边都有道理，也可以选不站队。投票以后仍然可以修改选择。", "这是一个初版互动案例，发言、回复和投票只保留在本次页面体验中。开庭案例不会因为演示倒计时结束而消失。"] },
  { id: "reading-stats", tag: "看台指南", title: "数据能帮我们看球，也需要配合比赛", summary: "一个数字，往往回答不了所有问题。", paragraphs: ["控球率说明谁更常持有球权，却不能单独说明谁的机会更好。射门次数很多，也可能大多来自禁区外。", "看数据时，最好带着一个具体问题：球队能不能把球送进危险区域？领先以后有没有退得太深？", "初版提供积分榜快照，以及按本站示例比赛进球统计的射手榜。两者的数据范围不同，页面会分别注明。"] },
];

export function qualificationZones(id) {
  if (id === "uefa.champions") return [
    {end: 8, label: "1–8 名 · 直进十六强", className: "zone-champions"},
    {end: 24, label: "9–24 名 · 淘汰赛附加赛", className: "zone-europa"},
    {end: 36, label: "25–36 名 · 淘汰", className: "zone-drop"},
  ];
  const france = id === "fra.1", germany = id === "ger.1";
  return [
    {end: france ? 3 : 4, label: france ? "1–3 名 · 欧冠正赛" : "1–4 名 · 欧冠正赛", className: "zone-champions"},
    ...(france ? [{end: 4, label: "第 4 名 · 欧冠资格赛", className: "zone-qualifying"}] : []),
    {end: 5, label: "第 5 名 · 欧联常规席位", className: "zone-europa"},
    {end: 6, label: "第 6 名 · 欧战顺延参考区", className: "zone-conference"},
    {end: france || germany ? 15 : 17, label: "", className: ""},
    ...(france || germany ? [{end: 16, label: "第 16 名 · 保级附加赛", className: "zone-playoff"}] : []),
    {end: france || germany ? 18 : 20, label: france || germany ? "17–18 名 · 降级" : "18–20 名 · 降级", className: "zone-drop"},
  ];
}
export function rankZone(id, rank) {
  return qualificationZones(id).find(z => rank <= z.end) || {label: "", className: ""};
}
export const ruleSources = {
  "eng.1": "https://www.premierleague.com/en/european-qualification-explained",
  "ger.1": "https://www.bundesliga.com/en/bundesliga/news/how-many-bundesliga-teams-can-qualify-for-europe-19689",
  "fra.1": "https://ligue1.com/en/articles/l1_article_5609-2026-27-everything-you-need-to-know-about-european-competitions",
  "esp.1": "https://www.laliga.com/en-GB/laliga-easports/standing",
  "ita.1": "https://www.legaseriea.it/en/serie-a/league-table",
  "uefa.champions": "https://www.uefa.com/uefachampionsleague/news/0268-12157d69ce2d-9f4b3f9e7bb1-1000--new-format-for-champions-league-post-2024-everything-you-need-to-know/",
};
