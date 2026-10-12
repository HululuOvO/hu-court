import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChatCircle, PencilSimple, CaretRight } from "@phosphor-icons/react";
import { matches, teams } from "./data";
import { communitySpaces, forumTopics, newsArticles, newsSnapshotDate, qualificationZones, rankZone, ruleSources } from "./content-data";
export { rankZone };
const spaceHref = s => `#/community/${s.type}/${s.id}`;
const spaceFor = id => communitySpaces.find(s => s.id === id);
function SpaceMark({ space, Crest }) {
  return space?.teamKey ? <Crest team={teams[space.teamKey]} /> : <img className="nation-flag" src={`https://flagcdn.com/${space?.flag}.svg`} alt={space?.name + "国旗"} />;
}
function MissingContent({ label, href }) {
  return <section className="panel empty"><h1>{label}</h1><a href={href}>返回列表</a></section>;
}
function NewsMeta({ article }) {
  return <div className="news-meta"><span>{article.category}</span><span>{article.kind}</span><span>{article.source}</span><time dateTime={article.publishedAt.replace(" ","T")+":00+08:00"}>{article.publishedAt.slice(5)}</time></div>;
}
export function Community({ segments = [], customTopics, addTopic, comments, liked, like, addComment, addReply, enter, Thread, Crest }) {
  const [sort, setSort] = useState("hot");
  const [composing, setComposing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const allTopics = [...customTopics, ...forumTopics];
  const topicId = segments[0] === "topic" ? segments[1] : /^m\d+$/.test(segments[0] || "") ? segments[0] : null;
  const topic = allTopics.find(t => t.id === topicId);
  const type = topic ? spaceFor(topic.spaceId)?.type : segments[0] === "nation" ? "nation" : "club";
  const space = topic ? spaceFor(topic.spaceId) : spaceFor(segments[1] || (type === "nation" ? "brazil" : "barcelona"));
  if ((topicId && !topic) || !space || space.type !== type) return <MissingContent label="这个看台暂未收录" href="#/community" />;
  const topics = allTopics.filter(t=>t.spaceId===space.id).sort((a,b)=>sort === "latest" ? (b.createdAt || 0)-(a.createdAt || 0) : (comments[b.id] || []).reduce((n,c)=>n+c.likes+(liked[c.id]?1:0),0)-(comments[a.id] || []).reduce((n,c)=>n+c.likes+(liked[c.id]?1:0),0));
  const relatedNews = newsArticles.filter(a => a.spaceId===space.id || a.relatedSpaces?.includes(space.id)).slice(0,3);
  const match = topic?.matchId && matches.find(m=>m.id===topic.matchId);
  return <section className="content-page community-page">
    <header className="section-title"><div><h1>社区</h1><p>找到你的看台，聊聊你的球队。</p></div><span className="edition-label">球迷看台</span></header>
    <nav className="section-switch" aria-label="社区分区"><a href="#/community/club/barcelona" className={type==="club"?"selected":""} aria-current={type==="club"?"page":undefined}>俱乐部</a><a href="#/community/nation/brazil" className={type==="nation"?"selected":""} aria-current={type==="nation"?"page":undefined}>国家队</a></nav>
    <div className="community-layout">
      <nav className="space-directory" aria-label={type==="club"?"俱乐部看台":"国家队看台"}><h2>{type==="club"?"俱乐部":"国家队"}</h2>{communitySpaces.filter(s=>s.type===type).map(s=><a key={s.id} href={spaceHref(s)} className={s.id===space.id?"selected":""} aria-current={s.id===space.id?"page":undefined}><SpaceMark space={s} Crest={Crest}/><span>{s.name}</span><CaretRight size={13}/></a>)}</nav>
      <div className="space-main" key={space.id}>
        {topic ? <>
          <a className="back-link" href={spaceHref(space)}><ArrowLeft size={17}/>返回{space.name}看台</a>
          <article className="forum-detail panel"><div className="forum-detail-label"><span>{topic.category}</span><span>{topic.demo?"示例话题":"我的帖子 · 本次体验"}</span></div><h1>{topic.title}</h1><div className="forum-author"><SpaceMark space={space} Crest={Crest}/><strong>{topic.author}</strong><span>{space.name}看台</span></div><p>{topic.summary}</p>{match && <button className="court-inline-link" onClick={()=>enter(match)}>去赛后法庭，听听两边的观点 <ArrowRight size={17}/></button>}</article>
          <Thread key={topic.id} embedded community={!match} match={match || {id:topic.id}} side="hot" comments={comments[topic.id] || []} liked={liked} like={like} addComment={addComment} addReply={addReply} closed={false}/>
        </> : <>
          <header className="space-banner" style={{"--space-accent":space.accent}}><div className="space-heading"><SpaceMark space={space} Crest={Crest}/><div><span>{space.note}</span><h2>{space.name}</h2><p>{type==="nation"?"聊阵容，聊大赛，也聊你的国家队记忆。":"比赛之外，这里还有属于球迷的故事。"}</p></div></div><button className="button primary" aria-expanded={composing} onClick={()=>setComposing(v=>!v)}><PencilSimple size={17}/>{composing?"收起":"发帖"}</button></header>
          {composing && <form className="new-topic panel" onSubmit={e=>{e.preventDefault(); if(title.trim()&&body.trim()){const id=addTopic({spaceId:space.id,title:title.trim(),summary:body.trim()});setTitle("");setBody("");setComposing(false);location.hash="/community/topic/"+id;}}}><h3>在{space.name}看台发帖</h3><label htmlFor="topic-title">标题</label><input id="topic-title" maxLength={60} placeholder="一句话说清你想聊什么" value={title} onChange={e=>setTitle(e.target.value)} required/><label htmlFor="topic-body">内容</label><textarea id="topic-body" maxLength={500} rows={4} placeholder="说说你的看法，也给大家留个讨论的问题。" value={body} onChange={e=>setBody(e.target.value)} required/><div><span>发帖与讨论保留在本次体验</span><button className="button primary" disabled={!title.trim() || !body.trim()}>发布帖子 <ArrowUpRight size={16}/></button></div></form>}
          <section className="forum-feed panel" aria-label={space.name+"话题列表"}><header><h3>看台话题 <span>{topics.length}</span></h3><div className="sort-controls"><button onClick={()=>setSort("hot")} className={sort==="hot"?"selected":""} aria-pressed={sort==="hot"}>热门</button><button onClick={()=>setSort("latest")} className={sort==="latest"?"selected":""} aria-pressed={sort==="latest"}>最新</button></div></header>{topics.map(t=><a key={t.id} className="forum-row" href={"#/community/topic/"+t.id}><div className="forum-row-tag"><span className={t.matchId?"court-topic-tag":""}>{t.category}</span>{t.demo && <span>示例</span>}</div><h3>{t.title}</h3><p>{t.summary}</p><div className="forum-row-meta"><strong>{t.author}</strong><span><ChatCircle size={15}/>{(comments[t.id] || []).length} 条发言</span><ArrowUpRight size={17}/></div></a>)}</section>
        </>}
        <p className="content-note">初始话题与发言为示例。你可以发帖、点赞和回复，内容仅保留在本次体验。</p>
      </div>
      <aside className="space-aside"><section className="aside-block"><h3>看台之间</h3><p>喜欢俱乐部，也牵挂国家队。</p><a href={type==="club"?"#/community/nation/brazil":"#/community/club/barcelona"}>{type==="club"?"去国家队看台":"去俱乐部看台"}<ArrowRight size={17}/></a></section>{relatedNews.length>0 && <section className="aside-block related-news"><h3>{space.name}资讯</h3>{relatedNews.map(a=><a href={"#/news/"+a.id} key={a.id}><span>{a.category} · {a.publishedAt.slice(5,10)}</span><strong>{a.title}</strong><small>{a.source} · 站内摘要</small></a>)}</section>}<section className="aside-block community-guide"><h3>聊球，也尊重彼此</h3><p>有观点，也带上理由。讨论比赛，别攻击球迷。</p><a href="#/">去赛后法庭<ArrowRight size={17}/></a></section></aside>
    </div>
  </section>;
}
export function News({ articleId, Crest }) {
  const [category,setCategory]=useState("全部");
  const article=newsArticles.find(a=>a.id===articleId);
  if(articleId && !article) return <MissingContent label="这篇资讯暂未收录" href="#/news"/>;
  const categories=["全部","欧冠","英超","西甲","德甲","意甲","国家队"];
  const articles=newsArticles.filter(a=>category==="全部" || a.category===category);
  const featured=category === "全部" ? articles[0] : null;
  const feedArticles=articles.filter(a=>a.id!==featured?.id);
  return <section className="content-page news-page">
    <header className="section-title"><div><h1>资讯</h1><p>看重点，读摘要，再聊观点。</p></div><span className="edition-label">收录于 {newsSnapshotDate}</span></header>
    {article ? <div className="news-detail-layout"><article className="news-story panel"><a className="back-link" href="#/news"><ArrowLeft size={17}/>全部资讯</a><NewsMeta article={article}/><h1>{article.title}</h1><p className="story-lead">{article.summary}</p><div className="story-section-title"><span/>报道要点</div>{article.points.map((p,i)=><p className="story-point" key={i}><span>{String(i+1).padStart(2,"0")}</span>{p}</p>)}<div className="story-source"><p>HU 根据公开报道整理的中文摘要，保留了消息出处和判断性质。</p><a href={article.sourceUrl} target="_blank" rel="noreferrer">来源：{article.source} · 阅读原文 <ArrowUpRight size={16}/></a></div><a className="story-discuss" href={spaceHref(spaceFor(article.spaceId))}><SpaceMark space={spaceFor(article.spaceId)} Crest={Crest}/><div><strong>去{spaceFor(article.spaceId).name}看台聊聊</strong><span>这条消息，你怎么看？</span></div><ArrowRight size={20}/></a></article><aside className="news-aside"><section className="aside-block related-news"><h3>接着看看</h3>{newsArticles.filter(a=>a.id!==article.id).slice(0,4).map(a=><a href={"#/news/"+a.id} key={a.id}><span>{a.category} · {a.publishedAt.slice(5,10)}</span><strong>{a.title}</strong><small>{a.source} · 站内摘要</small></a>)}</section></aside></div> : <>
      <nav className="news-categories" aria-label="资讯分类">{categories.map(c=><button key={c} className={category===c?"selected":""} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</nav>
      <div className="news-layout"><div className="news-main">{featured && <a className="news-feature" href={"#/news/"+featured.id} style={{"--space-accent":spaceFor(featured.spaceId).accent}}><div><span className="feature-label">焦点摘要</span><h2>{featured.title}</h2><p>{featured.summary}</p><NewsMeta article={featured}/><span className="feature-read">读摘要 <ArrowRight size={17}/></span></div><div className="feature-identity"><SpaceMark space={spaceFor(featured.spaceId)} Crest={Crest}/><span>{spaceFor(featured.spaceId).name}</span></div></a>}<section className="news-feed panel" aria-label="新闻摘要列表"><header><h2>{category==="全部"?"近期收录":category+"资讯"}</h2><span>{feedArticles.length} 篇摘要</span></header>{feedArticles.map(a=><a className="news-row" href={"#/news/"+a.id} key={a.id}><div className="news-row-identity" style={{"--space-accent":spaceFor(a.spaceId).accent}}><SpaceMark space={spaceFor(a.spaceId)} Crest={Crest}/></div><div className="news-row-content"><h3>{a.title}</h3><p>{a.summary}</p><NewsMeta article={a}/></div><CaretRight size={18}/></a>)}</section><p className="content-note">按报道发布时间排列。此页为有来源的摘要快照，尚未自动更新；媒体判断与采访观点均单独注明。</p></div><aside className="news-aside"><section className="aside-block news-reading"><span className="aside-eyebrow">先读，再聊</span><h3>消息留在这里，观点交给看台。</h3><p>点开新闻，在 HU 里看摘要和报道要点。想核对细节，再打开原文。</p><a href="#/community">去社区聊聊 <ArrowRight size={17}/></a></section><section className="aside-block related-news"><h3>球队看台</h3>{["barcelona","united","bayern","brazil"].map(id=>{const s=spaceFor(id);return <a className="news-space-link" href={spaceHref(s)} key={id}><SpaceMark space={s} Crest={Crest}/><strong>{s.name}</strong><CaretRight size={15}/></a>})}</section><div className="news-snapshot-note"><strong>摘要快照</strong><p>收录日期：{newsSnapshotDate}<br/>新闻真实来源，讨论为初版示例。</p></div></aside></div>
    </>}
  </section>;
}
export function QualificationLegend({ leagueId }) {
  return <div className="qualification-legend"><h3>排名怎么看</h3><div>{qualificationZones(leagueId).filter(z => z.label).map(z => <span key={z.label}><i className={z.className} />{z.label}</span>)}</div><p>{leagueId === "uefa.champions" ? "欧冠联赛阶段共 36 队，按最终名次进入相应阶段。" : "以上为常规名额参考，并非已获资格。杯赛冠军、额外欧冠席位及名额顺延，会改变欧联与欧协联等具体分配。"} <a href={ruleSources[leagueId]} target="_blank" rel="noreferrer">官方说明 <ArrowUpRight size={12} /></a></p></div>;
}
