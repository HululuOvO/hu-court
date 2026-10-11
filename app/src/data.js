// Demonstration fixtures and rosters, never presented as real 2026 results.
// Replace this module with a licensed match-data provider for production.
const start = Date.now();
export const WINDOW = 12 * 3600000;
const t = (name, id, players) => ({ name, id, players: players.split("、") });
export const teams = {
  united: t(
    "曼联",
    66,
    "奥纳纳、达洛特、德利赫特、马奎尔、卢克·肖、卡塞米罗、梅努、布鲁诺·费尔南德斯、阿马德、加纳乔、霍伊伦",
  ),
  spurs: t(
    "热刺",
    73,
    "维卡里奥、波罗、罗梅罗、范德芬、乌多吉、本坦库尔、比苏马、麦迪逊、库卢塞夫斯基、孙兴慜、索兰克",
  ),
  liverpool: t(
    "利物浦",
    64,
    "阿利松、布拉德利、科纳特、范戴克、罗伯逊、赫拉芬贝赫、麦卡利斯特、索博斯洛伊、萨拉赫、路易斯·迪亚斯、加克波",
  ),
  chelsea: t(
    "切尔西",
    61,
    "桑切斯、里斯·詹姆斯、科尔威尔、福法纳、库库雷利亚、凯塞多、恩佐、帕尔默、内托、马杜埃凯、杰克逊",
  ),
  arsenal: t(
    "阿森纳",
    57,
    "拉亚、本·怀特、萨利巴、加布里埃尔、廷贝尔、赖斯、托马斯、厄德高、萨卡、马丁内利、哈弗茨",
  ),
  villa: t(
    "阿斯顿维拉",
    58,
    "马丁内斯、卡什、孔萨、保·托雷斯、迪涅、卡马拉、蒂勒曼斯、麦金、罗杰斯、贝利、沃特金斯",
  ),
  city: t(
    "曼城",
    65,
    "埃德森、里科·刘易斯、鲁本·迪亚斯、斯通斯、格瓦迪奥尔、罗德里、科瓦契奇、德布劳内、福登、多库、哈兰德",
  ),
  newcastle: t(
    "纽卡斯尔",
    67,
    "波普、特里皮尔、舍尔、博特曼、丹·伯恩、吉马良斯、托纳利、乔林顿、戈登、墨菲、伊萨克",
  ),
  barcelona: t(
    "巴塞罗那",
    81,
    "特尔施特根、孔德、库巴西、阿劳霍、巴尔德、德容、佩德里、加维、亚马尔、拉菲尼亚、莱万多夫斯基",
  ),
  getafe: t(
    "赫塔费",
    82,
    "戴维·索里亚、伊格莱西亚斯、杜阿尔特、阿尔德雷特、里科、阿兰巴里、米利亚、乌切、卡莱斯·佩雷斯、迪亚斯、马约拉尔",
  ),
  madrid: t(
    "皇家马德里",
    86,
    "库尔图瓦、卡瓦哈尔、吕迪格、米利唐、门迪、楚阿梅尼、巴尔韦德、贝林厄姆、罗德里戈、维尼修斯、姆巴佩",
  ),
  atletico: t(
    "马德里竞技",
    78,
    "奥布拉克、莫利纳、吉梅内斯、勒诺尔芒、加兰、科克、德保罗、巴里奥斯、利诺、格列兹曼、阿尔瓦雷斯",
  ),
};
export const matches = [
  {
    id: "m1",
    league: "英超",
    home: "united",
    away: "spurs",
    score: [1, 1],
    state: "finished",
    endedAt: start - 4 * 3600000,
    topic: "这场平局，曼联该不该被批评？",
    red: "踢成这样，曼联该被批评。",
    blue: "别只看比分，平局也有价值。",
    redBody: "机会没把握住，领先后也没守住。这样的表现，不能只用一个平局带过。",
    blueBody:
      "阵容和比赛过程也要看。一场平局可以批评，但不该把所有问题都归到这一场。",
    goals: [
      [34, "home", "布鲁诺·费尔南德斯"],
      [76, "away", "索兰克"],
    ],
    stats: [
      [56, 44, "控球率", true],
      [15, 10, "射门"],
      [5, 4, "射正"],
      [7, 4, "角球"],
    ],
    votes: [128, 97, 36],
  },
  {
    id: "m2",
    league: "英超",
    home: "liverpool",
    away: "chelsea",
    score: [2, 0],
    state: "finished",
    endedAt: start - 16 * 3600000,
    topic: "两球赢下比赛，是实力还是对手失误？",
    red: "主动压迫，才是赢球的关键。",
    blue: "对手的失误，放大了比分。",
    redBody: "前场压迫制造了机会，两个进球都有清晰的战术思路。",
    blueBody: "不能只用比分判断差距。两次防守失误改变了比赛。",
    goals: [
      [27, "home", "萨拉赫"],
      [68, "home", "加克波"],
    ],
    stats: [
      [54, 46, "控球率", true],
      [17, 9, "射门"],
      [7, 2, "射正"],
      [6, 3, "角球"],
    ],
    votes: [203, 84, 41],
  },
  {
    id: "m3",
    league: "英超",
    home: "arsenal",
    away: "villa",
    score: [1, 1],
    state: "finished",
    endedAt: start - 14 * 3600000,
    topic: "没能拿下比赛，进攻该不该背锅？",
    red: "机会不少，终结必须更好。",
    blue: "对手守得好，平局可以接受。",
    redBody: "创造了机会却没转化成进球，关键时刻的选择值得讨论。",
    blueBody: "对方防线保持得很完整，平局也反映了两队的真实较量。",
    goals: [
      [22, "home", "萨卡"],
      [64, "away", "沃特金斯"],
    ],
    stats: [
      [61, 39, "控球率", true],
      [18, 8, "射门"],
      [6, 3, "射正"],
      [8, 2, "角球"],
    ],
    votes: [117, 132, 28],
  },
  {
    id: "m4",
    league: "英超",
    home: "city",
    away: "newcastle",
    score: [0, 0],
    state: "live",
    goals: [],
    stats: [
      [64, 36, "控球率", true],
      [12, 7, "射门"],
      [3, 2, "射正"],
      [5, 3, "角球"],
    ],
    votes: [0, 0, 0],
  },
  {
    id: "m5",
    league: "西甲",
    home: "barcelona",
    away: "getafe",
    score: [3, 0],
    state: "finished",
    endedAt: start - 2 * 3600000,
    topic: "三球大胜，巴萨这场值得满分吗？",
    red: "进攻流畅，这场值得夸。",
    blue: "大比分，也掩盖了一些问题。",
    redBody: "前场配合顺畅，拉菲尼亚不断创造空间。这是一场有说服力的胜利。",
    blueBody: "对方给的空间比较多。防守转换和部分机会处理，仍然有提升空间。",
    goals: [
      [18, "home", "莱万多夫斯基"],
      [49, "home", "拉菲尼亚"],
      [72, "home", "亚马尔"],
    ],
    stats: [
      [68, 32, "控球率", true],
      [21, 6, "射门"],
      [9, 1, "射正"],
      [9, 2, "角球"],
    ],
    votes: [176, 65, 24],
  },
  {
    id: "m6",
    league: "西甲",
    home: "madrid",
    away: "atletico",
    score: null,
    state: "scheduled",
    goals: [],
    stats: [],
    votes: [0, 0, 0],
  },
];
export const courtState = (m, now = Date.now()) =>
  m.state !== "finished"
    ? m.state
    : now >= m.endedAt + WINDOW
      ? "closed"
      : "open";
export const makeComments = (m) => [
  {
    id: m.id + "-1",
    side: "red",
    name: "看球不熬夜",
    text:
      m.id === "m1"
        ? "领先之后退得太深了，问题不是没赢，是一直没把主动权拿回来。"
        : "比分背后还有过程，前场的选择值得再看一遍。",
    likes: 42,
    time: "18分钟前",
    replies: [
      {
        id: m.id + "r1",
        name: "边线观察员",
        text: "同意，后半段的变化确实很明显。",
        likes: 6,
      },
      {
        id: m.id + "r2",
        name: "晚场球迷",
        text: "但也要看对方的调整。",
        likes: 3,
      },
      {
        id: m.id + "r3",
        name: "球场散步",
        text: "下场能改过来才是关键。",
        likes: 2,
      },
    ],
  },
  {
    id: m.id + "-2",
    side: "blue",
    name: "周末看台",
    text: "可以批评比赛，但别只拿结果下结论。把几次关键机会放在一起看，才更公平。",
    likes: 31,
    time: "24分钟前",
    replies: [
      { id: m.id + "r4", name: "慢镜头", text: "过程和结果都得看。", likes: 4 },
    ],
  },
  {
    id: m.id + "-3",
    side: "neutral",
    name: "球场散步",
    text: "进攻效率、换人时机和最后二十分钟，我觉得这三点可以分开聊。",
    likes: 27,
    time: "32分钟前",
    replies: [],
  },
  {
    id: m.id + "-4",
    side: "red",
    name: "边线观察员",
    text: "我更在意临场调整。球员状态不好时，教练有没有及时给出变化？",
    likes: 18,
    time: "45分钟前",
    replies: [],
  },
  {
    id: m.id + "-5",
    side: "blue",
    name: "慢镜头",
    text: "有几次配合其实不错，最后一脚的处理差了一点。不是所有东西都要推倒重来。",
    likes: 15,
    time: "52分钟前",
    replies: [],
  },
  {
    id: m.id + "-6",
    side: "neutral",
    name: "晚场球迷",
    text: "期待下一场有回应。今天的讨论留着，到时再比较一下。",
    likes: 9,
    time: "1小时前",
    replies: [],
  },
];
