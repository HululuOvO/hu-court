import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChatCircle } from "@phosphor-icons/react";
import { matches, teams } from "./data";
import { leagues } from "./standings-data";
import { communityTopics, chineseSources, newsArticles, qualificationZones, rankZone, ruleSources } from "./content-data";
export { rankZone };

function LeagueBadge({ league }) {
  return <img className="league-logo" src={league.logo} alt={league.name + "标识"} />;
}
function MissingContent({ label, href }) {
  return <section className="panel empty"><h1>{label}</h1><a href={href}>返回列表</a></section>;
}
export function Community({ topicId, comments, liked, like, addComment, addReply, enter, Thread, Crest }) {
  const [category, setCategory] = useState("全部");
  const topic = communityTopics.find(t => t.matchId === topicId);
  const match = topic && matches.find(m => m.id === topic.matchId);
  if (topicId && !match) return <MissingContent label="这个话题暂未收录" href="#/community" />;
  return <section className="content-page community-page">
    <div className="content-page-heading"><p className="eyebrow">球迷看台</p><h1>{topic ? topic.title : "比赛散场，讨论继续。"}</h1><p>{topic ? topic.summary : "先说比赛，再说观点。每一种声音都有位置。"}</p></div>
    {topic ? <>
      <a className="back-link" href="#/community"><ArrowLeft size={17} />所有话题</a>
      <div className="topic-match panel"><div><Crest team={teams[match.home]} /><strong>{teams[match.home].name} 对阵 {teams[match.away].name}</strong></div><button className="button primary" onClick={() => enter(match)}>进入法庭 <ArrowRight size={17} /></button></div>
      <Thread key={match.id} embedded match={match} side="hot" comments={comments[match.id]} liked={liked} like={like} addComment={addComment} addReply={addReply} closed={false} />
    </> : <>
      <nav className="content-filters" aria-label="话题分类">{["全部", "赛后复盘", "战术讨论", "球迷看台"].map(c => <button key={c} aria-pressed={category === c} className={category === c ? "selected" : ""} onClick={() => setCategory(c)}>{c}</button>)}</nav>
      <div className="topic-grid">{communityTopics.filter(t => category === "全部" || t.category === category).map(t => {
        const m = matches.find(m => m.id === t.matchId);
        return m && <a key={t.matchId} className="topic-card panel" href={"#/community/" + t.matchId}><div className="topic-card-top"><span>{t.category} · {m.league}</span><div className="topic-clubs"><Crest team={teams[m.home]} /><Crest team={teams[m.away]} /></div></div><h2>{t.title}</h2><p>{t.summary}</p><div className="topic-card-bottom"><span><ChatCircle size={16} />{comments[m.id].length} 条发言</span><ArrowUpRight size={20} /></div></a>;
      })}</div>
      <p className="content-note">话题与初始发言为演示内容。点击话题即可发言、点赞和回复。</p>
    </>}
  </section>;
}
export function News({ articleId, enter }) {
  const article = newsArticles.find(a => a.id === articleId);
  if (articleId && !article) return <MissingContent label="这篇手记暂未收录" href="#/news" />;
  return <section className="content-page news-page">
    <div className="content-page-heading"><p className="eyebrow">中文足球内容</p><h1>{article ? article.title : "看球，也读点好内容。"}</h1><p>{article ? article.tag + " · 原型示例" : "本站手记与中文资讯来源，先做一个好读的初版。"}</p></div>
    {article ? <article className="news-article panel"><a className="back-link" href="#/news"><ArrowLeft size={17} />所有资讯</a>{article.paragraphs.map((p, i) => <p key={i}>{p}</p>)}{article.matchId && <button className="button primary" onClick={() => enter(matches.find(m => m.id === article.matchId))}>聊聊这场比赛 <ArrowRight size={17} /></button>}</article> : <>
      <section className="source-grid" aria-label="中文资讯来源">{chineseSources.map(s => <a className="source-card panel" key={s.name} href={s.url} target="_blank" rel="noreferrer"><div><strong>{s.name}</strong><span>{s.text}</span></div><ArrowUpRight size={21} /></a>)}</section>
      <p className="content-note">以上为中文站点入口，尚未自动接入新闻流。下方手记为本站原创示例。</p>
      <div className="news-grid">{newsArticles.map(a => <a key={a.id} className="news-card panel" href={"#/news/" + a.id}><span className="article-tag">{a.tag}</span><h2>{a.title}</h2><p>{a.summary}</p><span className="news-read">读手记 <ArrowRight size={16} /></span></a>)}</div>
    </>}
  </section>;
}
export function Scorers({ leagueId, Crest }) {
  const league = leagues.find(l => l.id === leagueId) || leagues[0];
  const tally = new Map();
  matches.filter(m => m.league === league.name).forEach(m => m.goals.forEach(([, side, player]) => {
    const team = teams[m[side]], key = team.id + ":" + player, old = tally.get(key);
    tally.set(key, {...(old || {key, player, team, goals: 0}), goals: (old?.goals || 0) + 1});
  }));
  const leaders = [...tally.values()].sort((a, b) => b.goals - a.goals || a.player.localeCompare(b.player, "zh-CN"));
  return <section className="standings-page"><div className="standings-page-heading"><div><p className="eyebrow">本站示例比赛统计</p><h1>射手榜</h1></div><span>演示数据</span></div>
    <nav className="ranking-kind" aria-label="选择榜单"><a href={"#/standings/" + league.id}>积分榜</a><a className="selected" href={"#/scorers/" + league.id} aria-current="page">射手榜</a></nav>
    <nav className="standings-tabs" aria-label="选择射手榜赛事">{leagues.map(l => <a key={l.id} href={"#/scorers/" + l.id} className={l.id === league.id ? "selected" : ""} aria-current={l.id === league.id ? "page" : undefined}><LeagueBadge league={l} /><span>{l.name}</span></a>)}</nav>
    <div className="standings-table-panel panel"><header><LeagueBadge league={league} /><div><h2>{league.name}射手榜</h2><p>按本站示例进球累计，同进球数并列</p></div></header><div className="standings-scroll" role="region" aria-label={league.name + "示例射手榜"} tabIndex={0}><table><caption className="sr-only">{league.name}示例射手榜</caption><thead><tr><th scope="col">排名</th><th scope="col">球员</th><th scope="col">球队</th><th scope="col">进球</th></tr></thead><tbody>{leaders.map(p => <tr key={p.key}><td><span className="table-rank">{leaders.findIndex(x => x.goals === p.goals) + 1}</span></td><th scope="row">{p.player}</th><td><div className="standings-team"><Crest team={p.team} /><span>{p.team.name}</span></div></td><td className="table-points">{p.goals}</td></tr>)}</tbody></table></div><div className="standings-source"><span>仅统计本站示例赛况，并非真实赛季射手榜；实时数据源待接入。</span></div></div>
  </section>;
}
export function QualificationLegend({ leagueId }) {
  return <div className="qualification-legend"><h3>排名怎么看</h3><div>{qualificationZones(leagueId).filter(z => z.label).map(z => <span key={z.label}><i className={z.className} />{z.label}</span>)}</div><p>{leagueId === "uefa.champions" ? "欧冠联赛阶段共 36 队，按最终名次进入相应阶段。" : "以上为常规名额参考，并非已获资格。杯赛冠军、额外欧冠席位及名额顺延，会改变欧联与欧协联等具体分配。"} <a href={ruleSources[leagueId]} target="_blank" rel="noreferrer">官方说明 <ArrowUpRight size={12} /></a></p></div>;
}
