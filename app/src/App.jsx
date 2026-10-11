import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  CaretDown,
  Heart,
  ChatCircle,
  UserCircle,
  Scales,
  Clock,
  ArrowUpRight,
  X,
  CheckCircle,
  SoccerBall,
} from "@phosphor-icons/react";
import { matches, teams, courtState, makeComments, WINDOW } from "./data";
const sides = { red: "红方", blue: "蓝方", neutral: "不站队", hot: "热评" };
const parseRoute = () => location.hash.slice(1).split("/").filter(Boolean);
const go = (path = "") => (location.hash = "/" + path);
function Crest({ team, large = false }) {
  return (
    <span className={"crest-frame" + (large ? " large" : "")}>
      <img
        className={"crest " + (large ? "large" : "")}
        src={"https://crests.football-data.org/" + team.id + ".svg"}
        alt={team.name + "队徽"}
      />
    </span>
  );
}
function Badge({ match, now }) {
  const s = courtState(match, now);
  return (
    <span className={"badge " + s}>
      {s === "open"
        ? "开庭中"
        : s === "closed"
          ? "已结案"
          : s === "live"
            ? "进行中 67′"
            : "未开赛"}
    </span>
  );
}
function Remaining({ match, now }) {
  const t = Math.max(0, match.endedAt + WINDOW - now);
  return (
    <span>
      {Math.floor(t / 3600000)}小时{Math.floor((t % 3600000) / 60000)}分后结案
    </span>
  );
}
function OpinionTitle({ text }) {
  const i = text.indexOf("，");
  return i < 0 ? (
    text
  ) : (
    <>
      <span>{text.slice(0, i + 1)}</span>
      <span>{text.slice(i + 1)}</span>
    </>
  );
}
function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(value);
  const previous = useRef(value);
  useEffect(() => {
    const from = previous.current;
    previous.current = value;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let frame;
    const started = performance.now();
    const tick = (time) => {
      const progress = Math.min(1, (time - started) / 450);
      setDisplay(Math.round(from + (value - from) * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return display.toLocaleString("zh-CN");
}
function SupportBar({ match, vote }) {
  const red = match.votes[0] + (vote === 0 ? 1 : 0);
  const blue = match.votes[1] + (vote === 1 ? 1 : 0);
  const percent = red + blue ? Math.round(red / (red + blue) * 100) : 50;
  return (
    <div className="support-summary">
      <div className="support-heading"><span>红蓝对抗</span><small>双方支持率 · 中立票单独计入</small></div>
      <div className="support-bar" role="img" aria-label={`红方 ${percent}%，蓝方 ${100 - percent}%`}>
        <div className="support-red" style={{ width: percent + "%" }}><span>红方</span><strong><AnimatedNumber value={percent} />%</strong></div>
        <div className="support-blue" style={{ width: 100 - percent + "%" }}><strong><AnimatedNumber value={100 - percent} />%</strong><span>蓝方</span></div>
        <span className="support-vs" style={{ left: percent + "%" }}>VS</span>
      </div>
      <div className="support-counts"><span><AnimatedNumber value={red} /> 人支持红方</span><span><AnimatedNumber value={blue} /> 人支持蓝方</span></div>
    </div>
  );
}
function Score({ match }) {
  return (
    <div className="score">
      {match.score ? (
        <>
          {match.score[0]}
          <span>:</span>
          {match.score[1]}
        </>
      ) : (
        <span className="vs">VS</span>
      )}
    </div>
  );
}
export function App() {
  const [route, setRoute] = useState(parseRoute),
    [now, setNow] = useState(Date.now()),
    [followed, setFollowed] = useState([]),
    [intro, setIntro] = useState(null),
    [toast, setToast] = useState("");
  const [comments, setComments] = useState(() =>
      Object.fromEntries(matches.map((m) => [m.id, makeComments(m)])),
    ),
    [votes, setVotes] = useState({}),
    [liked, setLiked] = useState({});
  const [profile, setProfile] = useState(false),
    [nickname, setNickname] = useState("我"),
    [draftName, setDraftName] = useState("");
  const introRef = useRef(null),
    modalRef = useRef(null),
    mainRef = useRef(null);
  useEffect(() => {
    const change = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);
  useEffect(() => {
    if (!intro) return;
    introRef.current?.focus();
    const timer = setTimeout(() => {
      setIntro(null);
      go("court/" + intro.id);
    }, 1900);
    return () => clearTimeout(timer);
  }, [intro]);
  useEffect(() => {
    if (profile) modalRef.current?.focus();
  }, [profile]);
  useEffect(() => {
    if (route.length) mainRef.current?.focus({ preventScroll: true });
  }, [route.join("/")]);
  const match = matches.find((m) => m.id === route[1]),
    home = route[0] !== "match" && route[0] !== "court";
  const enter = (m) => {
    const s = courtState(m, now);
    if (s === "open") setIntro(m);
    else if (s === "closed") go("court/" + m.id + "/records");
  };
  const follow = (m) => {
    setFollowed((f) =>
      f.includes(m.id) ? f.filter((id) => id !== m.id) : [...f, m.id],
    );
    setToast(followed.includes(m.id) ? "已取消关注" : "已加入我的关注");
  };
  const cast = (id, side) => {
    setVotes((v) => ({ ...v, [id]: side }));
    setToast("已投票，可以修改选择");
  };
  const like = (id) => setLiked((l) => ({ ...l, [id]: !l[id] }));
  const addComment = (id, side, text) => {
    setComments((c) => ({
      ...c,
      [id]: [
        {
          id: crypto.randomUUID(),
          side,
          name: nickname,
          text,
          likes: 0,
          time: "刚刚",
          replies: [],
        },
        ...c[id],
      ],
    }));
    setToast("发言已加入本次体验");
  };
  const addReply = (id, parent, text) => {
    setComments((c) => ({
      ...c,
      [id]: c[id].map((x) =>
        x.id === parent
          ? {
              ...x,
              replies: [
                ...x.replies,
                { id: crypto.randomUUID(), name: nickname, text, likes: 0 },
              ],
            }
          : x,
      ),
    }));
    setToast("回复已加入本次体验");
  };
  return (
    <>
      <div className="site-atmosphere" aria-hidden="true" />
      {home && <div className="stadium-background" aria-hidden="true" />}
      <div className={"site-shell " + (route[0] === "court" ? "court-shell" : "")}>
        <header className="topbar glass">
          <a className="brand" href="#/" aria-label="HU 首页">
            HU
          </a>
          <nav className="main-nav" aria-label="主导航">
            <a
              className={route[0] !== "following" ? "selected" : ""}
              href="#/"
            >
              比赛
            </a>
            <a
              className={route[0] === "following" ? "selected" : ""}
              href="#/following"
            >
              我的关注
            </a>
          </nav>
          <button
            className="profile-button icon-button"
            aria-label="设置体验昵称"
            onClick={() => {
              setDraftName(nickname === "我" ? "" : nickname);
              setProfile(true);
            }}
          >
            <UserCircle size={28} />
          </button>
        </header>
        <main ref={mainRef} tabIndex={-1}>
          {home ? (
            <Home
              followed={followed}
              following={route[0] === "following"}
              now={now}
              enter={enter}
              follow={follow}
            />
          ) : !match ? (
            <section className="panel empty">
              <h1>这场比赛暂未收录。</h1>
              <a href="#/">返回比赛</a>
            </section>
          ) : route[0] === "match" ? (
            <MatchDetail
              match={match}
              now={now}
              tab={route[2] || "overview"}
              enter={enter}
              follow={follow}
              followed={followed.includes(match.id)}
            />
          ) : (
            <Court
              match={match}
              now={now}
              section={route[2] || "debate"}
              comments={comments[match.id]}
              vote={votes[match.id]}
              cast={cast}
              liked={liked}
              like={like}
              addComment={addComment}
              addReply={addReply}
            />
          )}
        </main>
        <footer>
          <span className="footer-brand">HU</span>
          <span>示例数据 · 前端互动体验</span>
          <span>发言和投票仅保留在本次体验</span>
        </footer>
      </div>
      {intro && (
        <div
          className="court-entrance"
          role="dialog"
          aria-modal="true"
          aria-label="正在进入法庭"
          ref={introRef}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIntro(null);
              go("court/" + intro.id);
            }
            if (e.key === "Tab") e.preventDefault();
          }}
        >
          <div className="entrance-red" aria-hidden="true" />
          <div className="entrance-blue" aria-hidden="true" />
          <div className="entrance-screen">
            <span className="brand">HU</span>
            <span className="entrance-kicker">赛后小法庭</span>
            <p>
              {teams[intro.home].name} <span>vs</span> {teams[intro.away].name}
            </p>
            <h2><span>现在，</span><span>开庭。</span></h2>
            <span className="entrance-caption">有分歧，就说个明白。</span>
            <button
              onClick={() => {
                setIntro(null);
                go("court/" + intro.id);
              }}
            >
              直接进入 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <CheckCircle size={20} />
          {toast}
        </div>
      )}
      {profile && (
        <div className="modal-backdrop" onClick={() => setProfile(false)}>
          <section
            className="profile-modal panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            ref={modalRef}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setProfile(false);
              if (e.key === "Tab") {
                const els = modalRef.current.querySelectorAll("button,input"),
                  first = els[0],
                  last = els[els.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  last.focus();
                }
                if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  first.focus();
                }
              }
            }}
          >
            <button
              className="icon-button close-modal"
              onClick={() => setProfile(false)}
              aria-label="关闭昵称设置"
            >
              <X size={22} />
            </button>
            <h2 id="profile-title">你在看台的名字</h2>
            <p>设置本次体验的昵称。</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNickname(draftName.trim() || "我");
                setProfile(false);
                setToast("昵称已更新");
              }}
            >
              <label htmlFor="nickname">昵称</label>
              <input
                id="nickname"
                maxLength={16}
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                placeholder="比如：周末看台"
              />
              <button className="button primary">保存昵称</button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
function Home({ followed, following, now, enter, follow }) {
  const [filter, setFilter] = useState("all");
  const visible = matches.filter(
    (m) =>
      (!following || followed.includes(m.id)) &&
      (filter === "all" || courtState(m, now) === filter),
  );
  return (
    <>
      <section className="home-hero">
        <p className="eyebrow">2026年10月11日 · 星期日 · 示例赛程</p>
        <h1>
          {following ? "把喜欢的比赛，留在这里。" : "比赛结束，聊个明白。"}
        </h1>
        <div className="hero-controls">
          <span>{following ? "我的关注" : "今日比赛"}</span>
          <label className="filter-select">
            <select
              aria-label="筛选比赛状态"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">全部比赛</option>
              <option value="open">开庭中</option>
              <option value="closed">已结案</option>
              <option value="scheduled">未开赛</option>
              <option value="live">进行中</option>
            </select>
            <CaretDown size={17} />
          </label>
        </div>
      </section>
      {visible.length ? (
        ["英超", "西甲"].map((league) => {
          const group = visible.filter((m) => m.league === league);
          return group.length ? (
            <section
              className="league-panel panel"
              key={league}
              aria-label={league + "比赛"}
            >
              <h2>
                {league}
                <span>{group.length}场</span>
              </h2>
              {group.map((m) => (
                <article className="match-row" key={m.id}>
                  <div className="row-status">
                    <span>
                      {m.state === "finished"
                        ? "全场结束"
                        : m.state === "live"
                          ? "正在比赛"
                          : "即将开始"}
                    </span>
                    <Badge match={m} now={now} />
                  </div>
                  <a
                    className="match-score-link"
                    href={"#/match/" + m.id}
                    aria-label={
                      teams[m.home].name +
                      "对" +
                      teams[m.away].name +
                      "，查看比分和赛况"
                    }
                  >
                    <div className="row-team home">
                      <span>{teams[m.home].name}</span>
                      <Crest team={teams[m.home]} />
                    </div>
                    <div className="score-group">
                      <Score match={m} />
                      <span className="score-hint">查看赛况</span>
                    </div>
                    <div className="row-team away">
                      <Crest team={teams[m.away]} />
                      <span>{teams[m.away].name}</span>
                    </div>
                  </a>
                  <div className="row-action">
                    {m.state === "scheduled" ? (
                      <button
                        className={
                          "button " +
                          (followed.includes(m.id) ? "subtle" : "outline")
                        }
                        onClick={() => follow(m)}
                      >
                        {followed.includes(m.id) ? (
                          <Check size={18} />
                        ) : (
                          <Bell size={18} />
                        )}{" "}
                        {followed.includes(m.id) ? "已预约" : "预约法庭"}
                      </button>
                    ) : m.state === "live" ? (
                      <button className="button subtle" disabled>
                        完赛后开庭
                      </button>
                    ) : (
                      <button
                        className={
                          "button " +
                          (courtState(m, now) === "open" ? "primary" : "subtle")
                        }
                        onClick={() => enter(m)}
                      >
                        {courtState(m, now) === "open"
                          ? "进入法庭"
                          : "查看结果"}
                        <ArrowRight size={18} />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </section>
          ) : null;
        })
      ) : (
        <section className="panel empty">
          <Bell size={40} weight="light" />
          <h2>{following ? "还没有关注的比赛" : "暂无符合条件的比赛"}</h2>
          <p>
            {following
              ? "预约一场比赛，就会出现在这里。"
              : "换个筛选条件看看。"}
          </p>
          <a className="button primary" href="#/">
            去看比赛 <ArrowRight size={18} />
          </a>
        </section>
      )}
    </>
  );
}
function MatchHeader({ match, now, court = false }) {
  return (
    <section
      className={"match-header panel" + (court ? " court-score-header" : "")}
    >
      <div className="match-meta">
        <span>{match.league} · 示例赛况</span>
        <Badge match={match} now={now} />
      </div>
      <div className="big-scoreboard">
        <a href={"#/match/" + match.id} className="big-team">
          <Crest team={teams[match.home]} large />
          <h2>{teams[match.home].name}</h2>
        </a>
        <div className="big-score-center">
          <span>
            {match.state === "finished"
              ? "全场结束"
              : match.state === "live"
                ? "进行中 · 67′"
                : "未开赛"}
          </span>
          <Score match={match} />
          {court ? (
            <a href={"#/match/" + match.id}>
              查看赛况 <ArrowUpRight size={15} />
            </a>
          ) : (
            <small>阵容与进球均为演示数据</small>
          )}
        </div>
        <a href={"#/match/" + match.id} className="big-team">
          <Crest team={teams[match.away]} large />
          <h2>{teams[match.away].name}</h2>
        </a>
      </div>
    </section>
  );
}
function MatchDetail({ match, now, tab, enter, follow, followed }) {
  return (
    <>
      <a className="back-link" href="#/">
        <ArrowLeft size={18} />
        返回比赛
      </a>
      <MatchHeader match={match} now={now} />
      <div className="detail-actions">
        {match.state === "finished" ? (
          <button className="button primary" onClick={() => enter(match)}>
            <Scales size={20} />
            {courtState(match, now) === "closed" ? "查看庭审结果" : "进入法庭"}
            <ArrowRight size={18} />
          </button>
        ) : (
          <button className="button outline" onClick={() => follow(match)}>
            {followed ? <Check size={18} /> : <Bell size={18} />}{" "}
            {followed ? "已关注 · 点击取消" : "关注这场比赛"}
          </button>
        )}
      </div>
      <nav className="section-tabs" aria-label="赛况导航">
        {[
          ["overview", "赛况"],
          ["stats", "数据"],
          ["lineup", "阵容"],
        ].map(([key, name]) => (
          <a
            key={key}
            className={tab === key ? "active" : ""}
            href={"#/match/" + match.id + "/" + key}
          >
            {name}
          </a>
        ))}
      </nav>
      {match.state === "scheduled" ? (
        <section className="panel empty">
          <Clock size={40} weight="light" />
          <h2>终场哨响，再来开庭。</h2>
          <p>赛况、进球和首发将在比赛开始后显示。</p>
          <span className="demo-note">此场为预约流程演示，不发送通知。</span>
        </section>
      ) : tab === "lineup" ? (
        <section className="panel content-panel">
          <h2>
            首发阵容 <span className="muted">示例 · 4–3–3</span>
          </h2>
          <div className="lineups">
            {[match.home, match.away].map((key) => (
              <div key={key}>
                <h3>
                  <Crest team={teams[key]} />
                  {teams[key].name}
                </h3>
                {teams[key].players.map((name, i) => (
                  <div className="player-row" key={name}>
                    <span>{[1, 2, 4, 5, 3, 6, 8, 10, 7, 11, 9][i]}</span>
                    <strong>{name}</strong>
                    <small>
                      {i === 0
                        ? "门将"
                        : i < 5
                          ? "后卫"
                          : i < 8
                            ? "中场"
                            : "前锋"}
                    </small>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : tab === "stats" ? (
        <section className="panel content-panel stats-panel">
          <h2>比赛数据</h2>
          {match.stats.map(([h, a, label, p]) => (
            <div className="stat-row" key={label}>
              <div>
                <strong>
                  {h}
                  {p ? "%" : ""}
                </strong>
                <span>{label}</span>
                <strong>
                  {a}
                  {p ? "%" : ""}
                </strong>
              </div>
              <div className="stat-bars">
                <span style={{ width: (h / (h + a)) * 100 + "%" }} />
                <span style={{ width: (a / (h + a)) * 100 + "%" }} />
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="panel content-panel">
          <h2>比赛进程</h2>
          <div className="timeline">
            {match.state === "finished" && (
              <div className="timeline-row">
                <span>90′</span>
                <CheckCircle size={22} />
                <div>
                  <strong>全场结束</strong>
                  <p>
                    {teams[match.home].name} {match.score.join(" : ")}{" "}
                    {teams[match.away].name}
                  </p>
                </div>
              </div>
            )}
            {[...match.goals].reverse().map(([minute, side, player]) => (
              <div className="timeline-row" key={minute}>
                <span>{minute}′</span>
                <SoccerBall size={22} />
                <div>
                  <strong>{player}</strong>
                  <p>{teams[match[side]].name} · 进球</p>
                </div>
              </div>
            ))}
            {!match.goals.length && (
              <p className="empty-inline">暂时还没有进球。</p>
            )}
            <div className="timeline-row">
              <span>0′</span>
              <Clock size={22} />
              <div>
                <strong>比赛开始</strong>
                <p>示例比赛进程</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
function Court({
  match,
  now,
  section,
  comments,
  vote,
  cast,
  liked,
  like,
  addComment,
  addReply,
}) {
  const state = courtState(match, now),
    closed = state === "closed",
    thread = sides[section] ? section : null;
  if (state !== "open" && state !== "closed")
    return (
      <section className="panel empty">
        <h1>这场还没开庭。</h1>
        <p>比赛结束后，法庭才会开放。</p>
        <a className="button primary" href={"#/match/" + match.id}>
          查看赛况
        </a>
      </section>
    );
  const tab =
    section === "jury" ? "jury" : section === "records" ? "records" : "debate";
  return (
    <>
      <a className="back-link" href="#/">
        <ArrowLeft size={18} />
        返回比赛
      </a>
      <div className="court-banner">
      <MatchHeader match={match} now={now} court />
      <div className="court-title">
        <div>
          <p className="eyebrow">HU 小法庭</p>
          <h1>{match.topic}</h1>
        </div>
        <span className="court-clock">
          <Clock size={17} />
          {closed ? "庭审已结束" : <Remaining match={match} now={now} />}
        </span>
      </div>
      </div>
      <nav className="section-tabs" aria-label="法庭导航">
        {[
          ["debate", "辩论席"],
          ["jury", "陪审席"],
          ["records", "庭审记录"],
        ].map(([key, name]) => (
          <a
            key={key}
            className={tab === key ? "active" : ""}
            href={"#/court/" + match.id + "/" + key}
          >
            {name}
          </a>
        ))}
      </nav>
      {tab === "jury" ? (
        <Jury match={match} vote={vote} cast={cast} closed={closed} />
      ) : tab === "records" ? (
        <Records match={match} vote={vote} closed={closed} now={now} />
      ) : thread ? (
        <Thread
          key={thread}
          match={match}
          side={thread}
          comments={comments}
          liked={liked}
          like={like}
          addComment={addComment}
          addReply={addReply}
          closed={closed}
        />
      ) : (
        <section className="debate-entry">
          <SupportBar match={match} vote={vote} />
          <div className="opinion-grid">
            {["red", "blue"].map((side) => (
              <a
                className={"opinion-card " + side}
                href={"#/court/" + match.id + "/" + side}
                key={side}
              >
                <div className="opinion-meta">
                  <span>{sides[side]}观点</span>
                  <span className="opinion-support"><AnimatedNumber value={match.votes[side === "red" ? 0 : 1] + (vote === (side === "red" ? 0 : 1) ? 1 : 0)} /> 人支持</span>
                </div>
                <h2>
                  <OpinionTitle text={match[side]} />
                </h2>
                <p>{match[side + "Body"]}</p>
                <div className="opinion-footer">
                  进入讨论 · 发表意见 <ArrowRight size={20} />
                </div>
              </a>
            ))}
          </div>
          <a
            className="neutral-entry panel"
            href={"#/court/" + match.id + "/neutral"}
          >
            <div>
              <span>第三种声音 · <AnimatedNumber value={match.votes[2] + (vote === 2 ? 1 : 0)} /> 人不站队</span>
              <h2>不站队，说句公道话。</h2>
            </div>
            <ArrowUpRight size={28} />
          </a>
          <a className="hot-entry" href={"#/court/" + match.id + "/hot"}>
            <ChatCircle size={21} />
            看看热评 <span>{comments.length}条发言</span>
            <ArrowRight size={18} />
          </a>
        </section>
      )}
    </>
  );
}
function Jury({ match, vote, cast, closed }) {
  const [selection, setSelection] = useState(vote);
  useEffect(() => setSelection(vote), [vote, match.id]);
  const total =
    match.votes.reduce((a, b) => a + b, 0) + (vote !== undefined ? 1 : 0);
  return (
    <section className="panel jury-panel">
      <div className="section-heading">
        <p className="eyebrow">陪审席</p>
        <h2>{closed ? "这场讨论，大家这样看。" : "你更认同哪一种说法？"}</h2>
        <p>{closed ? "投票已结束。" : vote !== undefined ? "已投票，可以修改选择。" : "选一个，投完看结果。"}</p>
      </div>
      {(vote !== undefined || closed) && <SupportBar match={match} vote={vote} />}
      <div className="vote-options" role="group" aria-label="选择投票观点">
        {["red", "blue", "neutral"].map((side, i) => (
          <button
            key={side}
            className={"vote-option " + side + (selection === i ? " chosen" : "")}
            onClick={() => setSelection(i)}
            disabled={closed}
            aria-pressed={selection === i}
          >
            <span className="vote-radio" aria-hidden="true">{selection === i && <Check size={16} weight="bold" />}</span>
            <div className="vote-copy"><strong>{side === "neutral" ? "不站队，说句公道话。" : match[side]}</strong><p>{side === "neutral" ? "两边都有道理，也都有值得讨论的地方。" : match[side + "Body"]}</p></div>
            {(vote !== undefined || closed) && (
              <span className="vote-result">
                <b>
                  <AnimatedNumber value={Math.round(
                    ((match.votes[i] + (vote === i ? 1 : 0)) / total) * 100,
                  )} />
                  %
                </b>
                <span><AnimatedNumber value={match.votes[i] + (vote === i ? 1 : 0)} />票</span>
              </span>
            )}
          </button>
        ))}
      </div>
      {!closed && <button className="button primary submit-vote" disabled={selection === undefined || selection === vote} onClick={() => cast(match.id, selection)}>{vote === undefined ? "确认投票" : selection === vote ? "已投票" : "修改投票"}<ArrowRight size={18} /></button>}
      <p className="vote-note">
        <AnimatedNumber value={total} />票 · 示例投票
        {vote !== undefined && !closed ? " · 已投票，可修改选择" : ""}
      </p>
    </section>
  );
}
function Records({ match, vote, closed, now }) {
  const total =
      match.votes.reduce((a, b) => a + b, 0) + (vote !== undefined ? 1 : 0),
    tallies = match.votes.map((n, i) => n + (vote === i ? 1 : 0)),
    winner = tallies.indexOf(Math.max(...tallies));
  return (
    <section className="panel records-panel">
      <p className="eyebrow">庭审记录</p>
      <h2>{closed ? "终场之后，观点有了回响。" : "讨论还在继续。"}</h2>
      {closed ? (
        <>
          <div className={"verdict " + ["red", "blue", "neutral"][winner]}>
            <span>社区投票结果</span>
            <h3>
              {winner === 0
                ? match.red
                : winner === 1
                  ? match.blue
                  : "暂不站队，继续观察。"}
            </h3>
            <p>获得最多支持 · {Math.round((tallies[winner] / total) * 100)}%</p>
          </div>
          <Jury match={match} vote={vote} cast={() => {}} closed />
          <p className="demo-note">
            结果来自示例投票，不代表事实认定或 AI 判决。
          </p>
        </>
      ) : (
        <>
          <p>完赛后开放12小时，结束后展示投票结果。</p>
          <p className="court-clock">
            <Clock size={18} />
            <Remaining match={match} now={now} />
          </p>
          <a
            className="button primary"
            href={"#/court/" + match.id + "/debate"}
          >
            回到辩论席 <ArrowRight size={18} />
          </a>
        </>
      )}
      <div className="record-summary">
        <div>
          <span>比赛</span>
          <strong>
            {teams[match.home].name} {match.score.join(" : ")}{" "}
            {teams[match.away].name}
          </strong>
        </div>
        <div>
          <span>庭审时长</span>
          <strong>12小时</strong>
        </div>
        <div>
          <span>陪审票数</span>
          <strong>{total}票</strong>
        </div>
        <div>
          <span>状态</span>
          <Badge match={match} now={now} />
        </div>
      </div>
    </section>
  );
}
function Thread({
  match,
  side,
  comments,
  liked,
  like,
  addComment,
  addReply,
  closed,
}) {
  const [sort, setSort] = useState(side === "hot" ? "hot" : "latest"),
    [text, setText] = useState(""),
    [opinion, setOpinion] = useState(side === "hot" ? "neutral" : side);
  const list = comments
    .filter((c) => side === "hot" || c.side === side)
    .sort((a, b) =>
      sort === "hot"
        ? b.likes + (liked[b.id] ? 1 : 0) - (a.likes + (liked[a.id] ? 1 : 0))
        : 0,
    );
  return (
    <section className="thread-view">
      <a className="back-link" href={"#/court/" + match.id + "/debate"}>
        <ArrowLeft size={17} />
        所有观点
      </a>
      <div className={"thread-heading " + side}>
        <span>{sides[side]}</span>
        <h2>
          {side === "hot"
            ? "这场比赛，大家怎么说？"
            : side === "neutral"
              ? "不站队，说句公道话。"
              : match[side]}
        </h2>
      </div>
      <div className="panel comments-panel">
        <div className="comments-title">
          <h3>
            讨论 <span>{list.length}</span>
          </h3>
          <div className="sort-controls" aria-label="评论排序">
            <button
              className={sort === "hot" ? "selected" : ""}
              onClick={() => setSort("hot")}
            >
              热评
            </button>
            <button
              className={sort === "latest" ? "selected" : ""}
              onClick={() => setSort("latest")}
            >
              最新
            </button>
          </div>
        </div>
        {!closed && (
          <form
            className="composer"
            onSubmit={(e) => {
              e.preventDefault();
              if (text.trim()) {
                addComment(match.id, opinion, text.trim());
                setText("");
              }
            }}
          >
            {side === "hot" && (
              <label className="composer-side">
                选择观点
                <select
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  aria-label="发言立场"
                >
                  <option value="red">红方</option>
                  <option value="blue">蓝方</option>
                  <option value="neutral">不站队</option>
                </select>
              </label>
            )}
            <label className="sr-only" htmlFor="comment-text">
              你的观点
            </label>
            <textarea
              id="comment-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="说说你看到的比赛。"
              maxLength={300}
              rows={2}
            />
            <div className="composer-bottom">
              <span>{text.length}/300</span>
              <button className="button primary" disabled={!text.trim()}>
                发言 <ArrowUpRight size={17} />
              </button>
            </div>
          </form>
        )}
        {closed && <p className="closed-note">庭审已结束，发言保留在这里。</p>}
        <div className="comment-list">
          {list.length ? (
            list.map((c) => (
              <Comment
                key={c.id}
                comment={c}
                matchId={match.id}
                liked={liked}
                like={like}
                addReply={addReply}
                closed={closed}
              />
            ))
          ) : (
            <p className="empty-inline">还没有发言。来聊聊你的看法。</p>
          )}
        </div>
      </div>
    </section>
  );
}
function Comment({ comment: c, matchId, liked, like, addReply, closed }) {
  const [expanded, setExpanded] = useState(false),
    [replying, setReplying] = useState(false),
    [reply, setReply] = useState("");
  return (
    <article className="comment">
      <div className="comment-header">
        <UserCircle size={31} weight="light" />
        <div>
          <strong>{c.name}</strong>
          <span>{c.time}</span>
        </div>
        <span className={"side-tag " + c.side}>{sides[c.side]}</span>
      </div>
      <p className="comment-text">{c.text}</p>
      <div className="comment-actions">
        <button
          className={liked[c.id] ? "liked" : ""}
          onClick={() => like(c.id)}
          aria-label={
            (liked[c.id] ? "取消点赞" : "点赞") + " " + c.name + "的发言"
          }
          aria-pressed={!!liked[c.id]}
        >
          <Heart size={18} weight={liked[c.id] ? "fill" : "regular"} />
          {c.likes + (liked[c.id] ? 1 : 0)}
        </button>
        <button disabled={closed} onClick={() => setReplying((v) => !v)}>
          <ChatCircle size={18} />
          回复 {c.replies.length || ""}
        </button>
      </div>
      {c.replies.length > 0 && (
        <button
          className="expand-replies"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "收起回复" : "展开 " + c.replies.length + " 条回复"}
          <CaretDown size={14} className={expanded ? "rotated" : ""} />
        </button>
      )}
      {expanded && (
        <div className="reply-list">
          {c.replies.map((r) => (
            <div className="reply" key={r.id}>
              <div>
                <strong>{r.name}</strong>
                <p>{r.text}</p>
              </div>
              <button
                className={liked[r.id] ? "liked" : ""}
                aria-label={
                  (liked[r.id] ? "取消点赞" : "点赞") + " " + r.name + "的回复"
                }
                aria-pressed={!!liked[r.id]}
                onClick={() => like(r.id)}
              >
                <Heart size={16} weight={liked[r.id] ? "fill" : "regular"} />
                {r.likes + (liked[r.id] ? 1 : 0)}
              </button>
            </div>
          ))}
        </div>
      )}
      {replying && !closed && (
        <form
          className="reply-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (reply.trim()) {
              addReply(matchId, c.id, reply.trim());
              setReply("");
              setReplying(false);
              setExpanded(true);
            }
          }}
        >
          <label className="sr-only" htmlFor={"reply-" + c.id}>
            回复{c.name}
          </label>
          <input
            id={"reply-" + c.id}
            maxLength={200}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder={"回复 " + c.name}
          />
          <button className="button primary" disabled={!reply.trim()}>
            发送
          </button>
          <button
            className="icon-button"
            type="button"
            aria-label="取消回复"
            onClick={() => setReplying(false)}
          >
            <X size={18} />
          </button>
        </form>
      )}
    </article>
  );
}
