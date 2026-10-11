// Demonstration fixtures and rosters, never presented as real 2026 results.
// Replace this module with a licensed match-data provider for production.
const start = Date.now();
export const WINDOW = 12 * 3600000;
const t = (name, id, players, crest) => ({ name, id, crest, players: players.split("、") });
export const teams = {
  marseille: t("马赛", "marseille", "鲁利、巴列尔迪、科尼利厄斯、穆里略、梅林、霍伊别尔、朗吉耶、拉比奥、格林伍德、路易斯·恩里克、古伊里", "https://a.espncdn.com/i/teamlogos/soccer/500/176.png"),
  lyon: t("里昂", "lyon", "佩里、梅特兰·奈尔斯、马塔、尼亚卡特、塔利亚菲科、马蒂奇、托利索、韦勒图、切尔基、福法纳、米卡乌塔泽", "https://a.espncdn.com/i/teamlogos/soccer/500/167.png"),
  monaco: t("摩纳哥", "monaco", "马耶茨基、万德松、辛戈、科雷尔、卡约·恩里克、扎卡里亚、卡马拉、戈洛温、阿克利乌什、南野拓实、恩博洛", "https://a.espncdn.com/i/teamlogos/soccer/500/174.png"),
  bayern: t("拜仁慕尼黑", "bayern", "诺伊尔、莱默尔、于帕梅卡诺、金玟哉、戴维斯、基米希、帕夫洛维奇、穆西亚拉、奥利塞、格纳布里、凯恩", "https://a.espncdn.com/i/teamlogos/soccer/500/132.png"),
  dortmund: t("多特蒙德", "dortmund", "科贝尔、瑞尔森、安东、施洛特贝克、本塞拜尼、萨比策、恩梅查、布兰特、阿德耶米、吉滕斯、吉拉西", "https://a.espncdn.com/i/teamlogos/soccer/500/124.png"),
  leipzig: t("莱比锡", "leipzig", "古拉西、亨里希斯、奥尔班、卢克巴、劳姆、海达拉、施拉格尔、西蒙斯、鲍姆加特纳、奥蓬达、塞斯科", "https://a.espncdn.com/i/teamlogos/soccer/500/11420.png"),
  inter: t("国际米兰", "inter", "索默、帕瓦尔、阿切尔比、巴斯托尼、邓弗里斯、巴雷拉、恰尔汗奥卢、姆希塔良、迪马尔科、劳塔罗、图拉姆", "https://a.espncdn.com/i/teamlogos/soccer/500/110.png"),
  milan: t("AC 米兰", "milan", "迈尼昂、卡拉布里亚、托莫里、加比亚、特奥、福法纳、赖因德斯、普利西奇、洛夫图斯·奇克、莱奥、莫拉塔", "https://a.espncdn.com/i/teamlogos/soccer/500/103.png"),
  juventus: t("尤文图斯", "juventus", "迪格雷戈里奥、萨沃纳、加蒂、卡卢卢、坎比亚索、洛卡特利、图拉姆、孔塞桑、库普梅纳斯、伊尔迪兹、弗拉霍维奇", "https://a.espncdn.com/i/teamlogos/soccer/500/111.png"),
  napoli: t("那不勒斯", "napoli", "梅雷特、迪洛伦佐、拉赫马尼、布翁乔尔诺、奥利维拉、洛博特卡、安古伊萨、麦克托米奈、波利塔诺、克瓦拉茨赫利亚、卢卡库", "https://a.espncdn.com/i/teamlogos/soccer/500/114.png"),
  psg: t("巴黎圣日耳曼", "psg", "多纳鲁马、阿什拉夫、马尔基尼奥斯、帕乔、努诺·门德斯、维蒂尼亚、若昂·内维斯、法比安·鲁伊斯、登贝莱、巴尔科拉、贡萨洛·拉莫斯", "https://a.espncdn.com/i/teamlogos/soccer/500/160.png"),
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
    demoStatus: "open",
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
    demoStatus: "closed",
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
    demoStatus: "closed",
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
    demoStatus: "open",
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
  {
    id: "m7", league: "欧冠", home: "bayern", away: "psg", score: [2, 2], state: "finished", demoStatus: "open",
    topic: "两度领先又被追平，拜仁该不该被批评？",
    red: "进攻有火力，防守不能掉线。", blue: "强强对话，平局不是失败。",
    redBody: "两次领先都没守住，转换时的站位和防线保护需要复盘。", blueBody: "对手也有顶级进攻。创造了机会，过程并不是毫无亮点。",
    goals: [[19,"home","凯恩"],[38,"away","登贝莱"],[61,"home","奥利塞"],[84,"away","巴尔科拉"]],
    stats: [[53,47,"控球率",true],[16,14,"射门"],[6,5,"射正"],[6,5,"角球"]], votes: [185,142,49],
  },
  { id: "m8", league: "欧冠", home: "madrid", away: "inter", score: null, state: "scheduled", goals: [], stats: [], votes: [0,0,0] },
  {
    id: "m9", league: "德甲", home: "bayern", away: "dortmund", score: [2, 1], state: "finished", demoStatus: "open",
    topic: "赢下国家德比，拜仁这场够有说服力吗？",
    red: "关键时刻，实力决定胜负。", blue: "赢了比赛，也得正视隐患。",
    redBody: "中场控制和关键球的把握更好，赢球有清晰的比赛内容。", blueBody: "领先后的防守有些被动，不能让胜利遮住最后阶段的问题。",
    goals: [[24,"home","凯恩"],[57,"away","吉拉西"],[78,"home","穆西亚拉"]],
    stats: [[58,42,"控球率",true],[18,11,"射门"],[7,4,"射正"],[7,3,"角球"]], votes: [156,83,31],
  },
  { id: "m10", league: "德甲", home: "leipzig", away: "dortmund", score: null, state: "scheduled", goals: [], stats: [], votes: [0,0,0] },
  { id: "m11", league: "德甲", home: "bayern", away: "leipzig", score: [1,0], state: "live", goals: [[31,"home","凯恩"]], stats: [[59,41,"控球率",true],[12,8,"射门"],[4,3,"射正"],[5,3,"角球"]], votes: [0,0,0] },
  {
    id: "m12", league: "意甲", home: "inter", away: "milan", score: [1,1], state: "finished", demoStatus: "open",
    topic: "德比握手言和，国米错过了赢球机会吗？",
    red: "占据主动，效率还得更高。", blue: "德比很难，一分也有价值。",
    redBody: "机会创造得足够多，门前的处理和最后一传可以做得更好。", blueBody: "对手防线并不容易突破。高强度的德比，稳定拿分也重要。",
    goals: [[29,"home","劳塔罗"],[73,"away","普利西奇"]],
    stats: [[55,45,"控球率",true],[17,10,"射门"],[5,4,"射正"],[6,4,"角球"]], votes: [139,112,44],
  },
  { id: "m13", league: "意甲", home: "juventus", away: "napoli", score: null, state: "scheduled", goals: [], stats: [], votes: [0,0,0] },
  {
    id: "m14", league: "意甲", home: "napoli", away: "milan", score: [2,0], state: "finished", demoStatus: "closed",
    topic: "两球取胜，那不勒斯靠的是整体还是个人？",
    red: "整体配合，是这场的答案。", blue: "关键个人表现，更值得称赞。",
    redBody: "压迫、跑位和中场衔接一起发挥了作用，进球是整体工作的结果。", blueBody: "战术创造机会，但关键时刻的个人处理决定了最后的比分。",
    goals: [[36,"home","卢卡库"],[69,"home","麦克托米奈"]],
    stats: [[51,49,"控球率",true],[14,12,"射门"],[6,3,"射正"],[5,5,"角球"]], votes: [208,96,38],
  },

  {
    id: "m15", league: "法甲", home: "psg", away: "marseille", score: [2,1], state: "finished", demoStatus: "open",
    topic: "赢下焦点战，巴黎的表现够有说服力吗？",
    red: "进攻够精彩，这场值得夸。", blue: "赢球之外，防守还得更稳。",
    redBody: "前场跑动和中场衔接更流畅，两粒进球是配合的回报。", blueBody: "领先后的防线保护仍有问题，胜利不能遮住最后阶段的被动。",
    goals: [[25,"home","登贝莱"],[54,"away","格林伍德"],[77,"home","巴尔科拉"]],
    stats: [[61,39,"控球率",true],[18,10,"射门"],[7,4,"射正"],[6,3,"角球"]], votes: [167,104,39],
  },
  {id: "m16", league: "法甲", home: "lyon", away: "monaco", score: null, state: "scheduled", goals: [], stats: [], votes: [0,0,0]},
];
export const courtState = (m, now = Date.now()) =>
  m.state !== "finished"
    ? m.state
    : m.demoStatus
      ? m.demoStatus
      : now >= m.endedAt + WINDOW
      ? "closed"
      : "open";
// Each demo visit loops its countdown; no example is retired by this clock.
export const demoRemaining = (startedAt, now = Date.now()) =>
  WINDOW - (Math.max(0, now - startedAt) % WINDOW);
const fanNames = {
  psg: ["王子公园晚班", "巴黎的中场节拍", "登贝莱的加速键"],
  marseille: ["维洛德罗姆第十二人", "马赛看台的风", "格林伍德的左脚"],
  united: ["弗格森的口香糖", "梦剧场补时员", "布鲁诺传球频道"],
  liverpool: ["安菲尔德夜班", "萨拉赫的左脚", "克洛普的眼镜"],
  arsenal: ["温格的长款羽绒服", "酋长球场第九排", "萨卡的右边路"],
  barcelona: ["克鲁伊夫的笔记", "诺坎普晚班", "佩德里传球频道"],
  bayern: ["安联看台常驻", "穆勒的空间说明书", "凯恩的进球账本"],
  inter: ["梅阿查看台常驻", "劳塔罗的射门靴", "巴雷拉跑不累"],
  napoli: ["马拉多纳球场晚风", "那不勒斯蓝调", "中场喝杯意式"],
};
export const makeComments = (m) => [
  {
    id: m.id + "-1",
    side: "red",
    name: "看球不熬夜",
    text:
      m.id === "m1"
        ? "领先之后退得太深了，问题不是没赢，是一直没把主动权拿回来。"
        : m.redBody + "关键片段值得再看一遍。",
    likes: 1286,
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
    text: m.blueBody + "把几次关键机会放在一起看，才更公平。",
    likes: 864,
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
    likes: 532,
    time: "32分钟前",
    replies: [],
  },
  {
    id: m.id + "-4",
    side: "red",
    name: "边线观察员",
    text: "我更在意临场调整。球员状态不好时，教练有没有及时给出变化？",
    likes: 219,
    time: "45分钟前",
    replies: [],
  },
  {
    id: m.id + "-5",
    side: "blue",
    name: "慢镜头",
    text: "有几次配合其实不错，最后一脚的处理差了一点。不是所有东西都要推倒重来。",
    likes: 87,
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
{
  "id": m.id + "-7",
  "side": "red",
  "name": "第九排看台",
  "text": "接受平局，不等于接受整场的处理方式。该讨论的问题还是要讨论。",
  "likes": 63,
  "time": "9分钟前",
  "replies": [
    {
      "id": m.id + "r7",
      "name": "路过看台",
      "text": "把具体片段拿出来聊，确实更有意思。",
      "likes": 2
    }
  ]
},
{
  "id": m.id + "-8",
  "side": "blue",
  "name": "加时再聊",
  "text": "有些配合是有进步的。批评可以具体一点，别一句话否定所有人。",
  "likes": 42,
  "time": "10分钟前",
  "replies": []
},
{
  "id": m.id + "-9",
  "side": "neutral",
  "name": "只聊比赛",
  "text": "正方在说表现，反方在说结果，其实这两件事不冲突。",
  "likes": 35,
  "time": "11分钟前",
  "replies": [
    {
      "id": m.id + "r9",
      "name": "路过看台",
      "text": "把具体片段拿出来聊，确实更有意思。",
      "likes": 2
    }
  ]
},
{
  "id": m.id + "-10",
  "side": "red",
  "name": "禁区外一脚",
  "text": "关键时刻不敢向前，最后就只能被动应对。",
  "likes": 24,
  "time": "12分钟前",
  "replies": []
},
{
  "id": m.id + "-11",
  "side": "blue",
  "name": "周日球迷",
  "text": "对手也在调整，不可能九十分钟都按自己的节奏踢。",
  "likes": 16,
  "time": "13分钟前",
  "replies": []
},
{
  "id": m.id + "-12",
  "side": "neutral",
  "name": "半场茶歇",
  "text": "想听大家分析一下换人，而不是互相贴标签。",
  "likes": 12,
  "time": "14分钟前",
  "replies": [
    {
      "id": m.id + "r12",
      "name": "路过看台",
      "text": "把具体片段拿出来聊，确实更有意思。",
      "likes": 2
    }
  ]
},
{
  "id": m.id + "-13",
  "side": "red",
  "name": "看台上的风",
  "text": "下一场最想看到的是更果断的最后一脚。",
  "likes": 7,
  "time": "15分钟前",
  "replies": []
},
{
  "id": m.id + "-14",
  "side": "blue",
  "name": "后场组织",
  "text": "先把每一次机会拆开看，至少能知道问题出在哪。",
  "likes": 5,
  "time": "16分钟前",
  "replies": []
},
{
  "id": m.id + "-15",
  "side": "neutral",
  "name": "不熬夜也看球",
  "text": "投了不站队。两边都有我认同的地方。",
  "likes": 3,
  "time": "17分钟前",
  "replies": []
},
{
  "id": m.id + "-16",
  "side": "red",
  "name": "场边笔记",
  "text": "今天的比赛值得复盘，期待球队给出回应。",
  "likes": 1,
  "time": "18分钟前",
  "replies": []
},
{
  "id": m.id + "-17",
  "side": "blue",
  "name": "开场哨",
  "text": "没赢当然遗憾，但还是想多给一点耐心。",
  "likes": 0,
  "time": "19分钟前",
  "replies": []
},
{
  "id": m.id + "-18",
  "side": "neutral",
  "name": "刚到看台",
  "text": "刚看完回放，来听听大家的观点。",
  "likes": 0,
  "time": "20分钟前",
  "replies": []
},

].map((comment, index) => ({
  ...comment,
  name: [
    (fanNames[m.home] || ["主场看台有话说"])[0],
    (fanNames[m.home] || ["", "补时再聊"])[1],
    "中场端水大师",
    (fanNames[m.home] || ["", "", "战术板上的橡皮"])[2],
    (fanNames[m.away] || ["客场看台有话说"])[0],
    "VAR今天上班吗", "九十分钟不散场", "越位线上散步", "听完两边再投票",
    "边后卫又压上了", "补时还有一分钟", "只看回放不吵架", "第十二人不下班",
    "草皮上的小算盘", "传控还是反击", "禁区外有点想法", "门柱今天也努力了", "散场以后再聊",
  ][index],
  text: m.score && m.score[0] !== m.score[1] ? comment.text.replace("接受平局", "接受结果") : comment.text,
  createdAt: start - Number.parseInt(comment.time) * (comment.time.includes("小时") ? 3600000 : 60000),
}));
