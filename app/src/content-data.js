// Manually curated Chinese summaries: dated, attributed snapshots, not a live feed.
export const newsSnapshotDate = "2026-10-12";
export const communitySpaces = [
  {id:"barcelona",type:"club",name:"巴塞罗那",teamKey:"barcelona",note:"诺坎普看台",accent:"#9c344c"},
  {id:"united",type:"club",name:"曼联",teamKey:"united",note:"老特拉福德看台",accent:"#bd2028"},
  {id:"madrid",type:"club",name:"皇家马德里",teamKey:"madrid",note:"伯纳乌看台",accent:"#7770a0"},
  {id:"bayern",type:"club",name:"拜仁慕尼黑",teamKey:"bayern",note:"安联看台",accent:"#c32c3e"},
  {id:"arsenal",type:"club",name:"阿森纳",teamKey:"arsenal",note:"酋长球场看台",accent:"#b62234"},
  {id:"liverpool",type:"club",name:"利物浦",teamKey:"liverpool",note:"安菲尔德看台",accent:"#b6273c"},
  {id:"city",type:"club",name:"曼城",teamKey:"city",note:"伊蒂哈德看台",accent:"#4d839d"},
  {id:"chelsea",type:"club",name:"切尔西",teamKey:"chelsea",note:"斯坦福桥看台",accent:"#375e9c"},
  {id:"inter",type:"club",name:"国际米兰",teamKey:"inter",note:"蓝黑看台",accent:"#2e578d"},
  {id:"milan",type:"club",name:"AC 米兰",teamKey:"milan",note:"红黑看台",accent:"#ad3941"},
  {id:"psg",type:"club",name:"巴黎圣日耳曼",teamKey:"psg",note:"王子公园看台",accent:"#354b79"},
  {id:"dortmund",type:"club",name:"多特蒙德",teamKey:"dortmund",note:"南看台",accent:"#8c751e"},
  {id:"leipzig",type:"club",name:"莱比锡",teamKey:"leipzig",note:"红牛看台",accent:"#a43c4f"},
  {id:"brazil",type:"nation",name:"巴西",flag:"br",note:"桑巴军团",accent:"#6f8436"},
  {id:"argentina",type:"nation",name:"阿根廷",flag:"ar",note:"蓝白看台",accent:"#528dab"},
  {id:"france",type:"nation",name:"法国",flag:"fr",note:"高卢雄鸡",accent:"#345d99"},
  {id:"spain",type:"nation",name:"西班牙",flag:"es",note:"斗牛士看台",accent:"#af4a38"},
  {id:"germany",type:"nation",name:"德国",flag:"de",note:"日耳曼看台",accent:"#796144"},
  {id:"china",type:"nation",name:"中国",flag:"cn",note:"国足看台",accent:"#bf3640"},
];
const discussionSeeds = {
  barcelona:["高位防线怎么保护？回追速度还是站位更重要", "拉玛西亚小将，你最想给谁多一点时间", "拉菲尼亚的无球跑动，值得单独聊一聊"],
  united:["中场先补覆盖，还是先补出球？", "你第一次爱上曼联，是哪一场比赛", "领先之后，曼联该继续压上还是稳下来"],
  madrid:["面对低位防守，皇马的破局点在哪里", "伯纳乌记忆：你心里最经典的逆转", "年轻中场的分工，你更喜欢怎样的组合"],
  bayern:["凯恩回撤接球，谁来填禁区里的空位", "你最怀念的拜仁搭档是哪一对", "边路强攻之后，防守转换怎么衔接"],
  arsenal:["萨卡被包夹时，右路需要怎样的支援", "酋长看台：哪一场球让你念念不忘", "定位球和运动战，下一步该改善哪一项"],
  liverpool:["高强度压迫，怎样才能踢满整场", "安菲尔德的哪次逆转最让你激动", "边后卫前插以后，中场怎么补位"],
  city:["对手摆低位，曼城该加快还是放慢节奏", "伊蒂哈德记忆：你最喜欢的进球", "中锋之外，谁该提供第二个得分点"],
  chelsea:["年轻阵容需要时间，也需要怎样的标准", "斯坦福桥看台：你的第一位蓝军偶像", "前场机会不少，终结效率怎么提高"],
  inter:["三中卫体系里，翼卫该攻到多深", "蓝黑经典：你最想重看哪次德比", "中场轮换，如何兼顾强度和出球"],
  milan:["边锋内切以后，边后卫该怎样套上", "圣西罗记忆：你的红黑入坑时刻", "抢回球权后的第一脚，应该更直接吗"],
  psg:["巴黎前场的跑位，怎样避免挤在一条线", "王子公园看台：最喜欢哪位队长", "进攻好看之外，你更看重哪些细节"],
  dortmund:["快速反击，第一脚应该找边路还是中路", "南看台的记忆：最难忘的一个夜晚", "年轻球员的机会，应该如何分配"],
  leipzig:["高位逼抢之后，怎样保护身后的空间", "红牛看台：你最欣赏的成长故事", "进攻节奏很快，什么时候该稳一稳"],
  brazil:["新老交替：巴西中场最需要什么类型的球员", "桑巴记忆：你的第一位巴西偶像", "边路人才很多，国家队怎么找到平衡"],
  argentina:["阵地进攻里，阿根廷需要怎样的中场连接", "蓝白记忆：最让你热泪盈眶的瞬间", "国家队换代，经验和活力怎么平衡"],
  france:["法国的边路速度，怎样转化成稳定的机会", "高卢看台：你最喜欢哪届国家队", "中场先求控制，还是先求防守覆盖"],
  spain:["传控之外，西班牙还需要怎样的变化", "斗牛士记忆：哪场比赛最值得重看", "边锋拉开宽度，谁来接应肋部"],
  germany:["德国的前场压迫，怎样保持整体距离", "日耳曼看台：你最怀念哪位球员", "面对密集防守，中锋支点有多重要"],
  china:["国足先补基本功，还是先完善战术执行", "看球这些年，你最难忘的国足一战", "年轻球员，需要怎样的比赛环境"],
};
const names = {
  barcelona:["克鲁伊夫的笔记","诺坎普晚班","佩德里传球频道"],united:["弗格森的口香糖","老特拉福德夜班","鲁尼的倒钩"],madrid:["伯纳乌第十二人","莫德里奇的外脚背","白衣看台笔记"],bayern:["穆勒的空间说明书","安联看台常驻","凯恩账本"],arsenal:["酋长看台常驻","萨卡的左脚","温格的拉链"],liverpool:["安菲尔德晚班","杰拉德的远射","红军看台笔记"],city:["伊蒂哈德夜班","德布劳内传球线路","蓝月看台"],chelsea:["斯坦福桥常驻","兰帕德的后插上","蓝军看台笔记"],inter:["蓝黑看台常驻","萨内蒂的队长袖标","梅阿查夜班"],milan:["圣西罗晚班","卡卡的长途奔袭","红黑看台笔记"],psg:["王子公园常驻","巴黎左岸看球","红蓝看台笔记"],dortmund:["南看台晚班","罗伊斯的队长袖标","黄黑看台笔记"],leipzig:["红牛看台常驻","莱比锡看球笔记","压迫线路图"],brazil:["桑巴看台常驻","卡卡的奔跑路线","罗纳尔迪尼奥的微笑"],argentina:["蓝白看台常驻","里克尔梅的慢镜头","阿根廷晚班"],france:["齐达内的转身","高卢看台常驻","亨利的弧线"],spain:["伊涅斯塔的半步","斗牛士看台","布斯克茨的转身"],germany:["克洛泽的空翻","德国看台常驻","拉姆的站位图"],china:["工体看台常驻","国足看球笔记","球场第十二人"]
};
export const forumTopics = [
  ...communitySpaces.flatMap(s => discussionSeeds[s.id].map((title,i)=>({id:`forum-${s.id}-${i+1}`,spaceId:s.id,title,category:i===1 && s.id!=="barcelona"?"球迷看台":"战术讨论",author:names[s.id][i],summary:i===1 && s.id!=="barcelona"?"讲讲你的看球故事，也听听其他人的记忆。":"聊具体的跑位、配合和选择，把理由说清楚。",demo:true}))),
  {id:"m1",matchId:"m1",spaceId:"united",category:"赛后法庭",title:"曼联这场平局，最该聊的是哪二十分钟？",summary:"领先后的站位、换人和最后一脚，分开聊。",author:"老特拉福德夜班",demo:true},
  {id:"m5",matchId:"m5",spaceId:"barcelona",category:"赛后法庭",title:"巴萨的空间，是谁跑出来的？",summary:"除了进球，再看看无球跑动和中场衔接。",author:"克鲁伊夫的笔记",demo:true},
  {id:"m7",matchId:"m7",spaceId:"bayern",category:"赛后法庭",title:"拜仁两次领先：攻得漂亮，也守得住吗？",summary:"进攻给答案，防守留下问题。",author:"安联看台常驻",demo:true},
  {id:"m9",matchId:"m9",spaceId:"dortmund",category:"赛后法庭",title:"国家德比散场后，你最想夸谁？",summary:"给球员一点掌声，也给不同意见留个位置。",author:"南看台晚班",demo:true},
  {id:"m12",matchId:"m12",spaceId:"inter",category:"赛后法庭",title:"米兰德比：控制比赛，还是控制机会？",summary:"控球率、机会质量和终结效率，你更看重哪个？",author:"蓝黑看台常驻",demo:true},
  {id:"m15",matchId:"m15",spaceId:"psg",category:"赛后法庭",title:"巴黎的进攻，精彩还可以再进一步吗？",summary:"好看与高效之间，你希望球队先做到什么？",author:"王子公园常驻",demo:true},
];
export function makeForumComments(topic) {
  const texts=topic.category==="球迷看台"?["第一次和家人一起熬夜看球，比分忘了，看台的歌声一直记得。","经典比赛值得重看。最有意思的，是现在再看会注意到当年漏掉的跑位。","我想先听听大家的入坑故事，每个人应该都有自己的那一场。"]:["我更在意接应的位置。持球人身边有两个传球选择，节奏才不容易断。","不能只看最后一脚，丢球前中场的保护和回防距离也值得一起看。","我会把防守和进攻分开评价。某个球员做对了跑位，也可能在另一个环节需要改进。"];
  return texts.map((text,i)=>({id:`${topic.id}-comment-${i+1}`,side:"neutral",name:names[topic.spaceId][i],text,likes:[7,4,2][i],time:"示例发言",createdAt:3-i,replies:[]}));
}
export const newsArticles = [
  {id:"barca-defence",category:"西甲",spaceId:"barcelona",kind:"采访",title:"巴萨选中卫，先看能否适配高位防线",summary:"球探总监阿马拉尔谈引援标准：回追速度、抗压出球与防守能力，都要符合球队体系。",points:["据直播吧转述《每日体育报》专访，阿马拉尔强调中卫要能补防高位压上后的空间，并在逼抢下完成出球。","他介绍，球探部门会结合数据与实地考察主动寻找目标；这些标准并不代表某笔转会已经敲定。"],publishedAt:"2026-10-12 01:33",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-12/6acbc5dbe67b8native.htm"},
  {id:"de-jong-return",category:"西甲",spaceId:"barcelona",kind:"媒体报道",title:"每体：德容暂不随队出征，复出仍需等待",summary:"报道称德容恢复进展良好，有望进入对贝蒂斯的名单；具体复出时间仍待球队确认。",points:["直播吧援引《每日体育报》消息，德容不会随队前往土耳其参加对加拉塔萨雷的欧冠比赛。","报道认为他有望在下一场联赛回归名单。这里保留媒体判断，最终名单以俱乐部公布为准。"],publishedAt:"2026-10-12 00:59",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-12/6acbbd2025af5native.htm"},
  {id:"leipzig-coach",category:"德甲",spaceId:"leipzig",kind:"采访",title:"红牛总监否认纳格尔斯曼回归传闻",summary:"施密特在电视访谈中支持现任主帅，强调教练岗位的连续性。",points:["据直播吧报道，施密特在德国 ZDF 节目中回应传闻，否认俱乐部正在推动纳格尔斯曼回归莱比锡。","他表示全球团队会支持现任主帅德米凯利斯。这是管理层的公开表态，并非新任命消息。"],publishedAt:"2026-10-12 01:12",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-12/6acbc0b0288c9native.htm"},
  {id:"saka-expectations",category:"英超",spaceId:"arsenal",kind:"采访观点",title:"奥莱利谈萨卡：期待他找回冲击力",summary:"阿森纳名宿在采访中谈到萨卡的状态与对抗表现，也肯定了他的能力。",points:["直播吧转述奥莱利接受 talkSPORT 采访的观点：他期待萨卡在场上表现得更有侵略性。","奥莱利仍认可萨卡的实力。对球员状态的评价属于受访者观点，不能等同于客观定论。"],publishedAt:"2026-10-11 23:14",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-11/6acba363dbbfdnative.htm"},
  {id:"flick-award",category:"西甲",spaceId:"barcelona",kind:"奖项消息",title:"弗里克领取西甲九月最佳教练奖",summary:"巴萨发布教练团队合照，庆祝弗里克获得西甲月度奖项。",points:["据直播吧报道，弗里克领取了西甲官方九月最佳教练奖杯。","巴萨通过官方渠道分享了他与教练组的合影，将这份荣誉与团队一起庆祝。"],publishedAt:"2026-10-11 20:07",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-11/6acb7b07e960anative.htm"},
  {id:"europe-contenders",category:"欧冠",spaceId:"psg",relatedSpaces:["bayern","inter"],kind:"采访观点",title:"阿梅利亚看欧冠：更看好巴黎与拜仁",summary:"前意大利门将从阵容厚度和经验谈争冠判断，也提到了国米的竞争力。",points:["直播吧援引阿梅利亚接受 SportWeek 的采访：在他的判断里，巴黎和拜仁是更突出的争冠候选。","他认可国米在意大利球队中的前景，也提到巴萨与皇马的实力。这是个人预测，并非赛事结果。"],publishedAt:"2026-10-11 18:47",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-11/6acb591d78fecnative.htm"},
  {id:"kane-contract",category:"德甲",spaceId:"bayern",kind:"采访",title:"海纳对凯恩留队乐观，续约细节仍在谈",summary:"拜仁主席称谈判进展顺利，并否认合同年限是谈判障碍的说法。",points:["据直播吧转述《图片报》采访，海纳表示凯恩和家人在慕尼黑生活舒适，自己对留队前景有信心。","他指出谈判涉及肖像权等细节。报道中的积极表态不等于双方已经完成签约。"],publishedAt:"2026-10-11 16:58",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-11/6acb4f4e765b4native.htm"},
  {id:"sucic-mvp",category:"意甲",spaceId:"inter",kind:"赛后消息",title:"国米击败帕尔马，苏契奇获评全场最佳",summary:"报道显示，苏契奇打进首球、踢满全场，帮助国际米兰取得三球胜利。",points:["据直播吧报道，国际米兰以 3 比 0 战胜帕尔马，苏契奇被评为全场最佳。","他的传球为 58 次中成功 55 次。以上来自该篇赛后报道，独立于 HU 法庭里的示例赛况。"],publishedAt:"2026-10-11 04:13",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-11/6aca9bae21cf0native.htm"},
  {id:"brazil-next-cycle",category:"国家队",spaceId:"brazil",kind:"媒体报道",title:"巴媒谈巴西换代：让国青与成年队衔接",summary:"《环球体育》关注巴西新周期名单，报道强调年轻球员的国字号经历与梯队合作。",points:["据直播吧转述《环球体育》，当期巴西队 26 人名单中有 24 人具备青年国家队履历。","报道关注成年队与青年队教练组的交流，希望借助持续考察支持阵容更新。此文发布于十月二日，并非今天的新名单。"],publishedAt:"2026-10-02 18:17",source:"直播吧",sourceUrl:"https://news.zhibo8.com/zuqiu/2026-10-02/6abf844f47e96native.htm"},
].sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));

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
