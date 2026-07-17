import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/Footer";

const Chevron = () => <span className="chevron" aria-hidden="true">›</span>;

// ── Icon components (stroke-based, matches home page style) ──
function WaveformIcon() {
  return <svg viewBox="0 0 24 24"><path d="M4 9v6M8 6v12M12 3v18M16 7v10M20 10v4" /></svg>;
}
function TrophyIcon() {
  return <svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M8 20h8" /></svg>;
}
function StarIcon() {
  return <svg viewBox="0 0 24 24"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>;
}
function RepeatIcon() {
  return <svg viewBox="0 0 24 24"><path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /></svg>;
}
function ImageIcon() {
  return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>;
}
function LectureIcon() {
  return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="13" height="9" rx="1" /><path d="M7 20l3-3M20 8v6M22 11h-4" /></svg>;
}
function ChatIcon() {
  return <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /></svg>;
}
function RobotIcon() {
  return <svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="3" /><circle cx="9" cy="14" r="1.2" /><circle cx="15" cy="14" r="1.2" /><path d="M12 8V4m0 0h-2m2 0h2" /></svg>;
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>;
}
function SlidersIcon() {
  return <svg viewBox="0 0 24 24"><path d="M4 6h10M17 6h3M4 12h4M11 12h9M4 18h13" /><circle cx="14" cy="6" r="2" /><circle cx="7" cy="12" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
}
function TargetIcon() {
  return <svg viewBox="0 0 24 24"><circle cx="11" cy="13" r="8" /><circle cx="11" cy="13" r="4.5" /><circle cx="11" cy="13" r="1" /><path d="M16 8l4-4m0 0h-3m3 0v3" /></svg>;
}
function BarChartIcon() {
  return <svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7" /></svg>;
}
function DocIcon() {
  return <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></svg>;
}
const stats = [
  { value: "12,410+", label: "Questions Practices", Icon: WaveformIcon },
  { value: "98%", label: "Average Improvement", Icon: TrophyIcon },
  { value: "50,000+", label: "Active Learners", Icon: StarIcon },
];

const questionTypes = [
  ["Read Aloud", "Read the displayed text clearly and naturally to improve pronunciation and fluency.", WaveformIcon],
  ["Repeat Sentence", "Listen carefully and repeat the sentence exactly as you hear it to improve memory.", RepeatIcon],
  ["Describe Image", "Analyze visual information and deliver a clear, structured response with confidence.", ImageIcon],
  ["Retell Lecture", "Listen to a lecture and summarize the main ideas in a well-organized spoken response.", LectureIcon],
  ["Answer Short Question", "Respond quickly and accurately to general knowledge and everyday questions.", ChatIcon],
] as const;

const practiceModes = [
  ["AI Feedback Practice", "Practice with instant AI feedback on fluency, pronunciation, grammar and content.", RobotIcon],
  ["Timed Practice", "Simulate real exam conditions with timed practice and improve your speed.", ClockIcon],
  ["Custom Practice", "Choose your question type, time and difficulty level to customize your practice.", SlidersIcon],
] as const;

const recentPractice = [
  ["Read Aloud", "Attempted on 21 May 2026", "82/100", WaveformIcon],
  ["Repeat Sentence", "Attempted on 23 May 2026", "75/100", RepeatIcon],
  ["Describe Image", "Attempted on 11 May 2026", "73/100", ImageIcon],
  ["Retell Lecture", "Attempted on 26 May 2026", "69/100", LectureIcon],
  ["Answer Short Question", "Attempted on 29 May 2026", "65/100", ChatIcon],
] as const;

const performanceMetrics = [
  { label: "Pronunciation", score: "87/100", color: "#2e10f2" },
  { label: "Fluency", score: "87/100", color: "#16a34a" },
  { label: "Content", score: "87/100", color: "#f97316" },
  { label: "Grammar", score: "87/100", color: "#22d3ee" },
];

export default function PracticePage() {
  return (
    <main className="practice-page">
      <section className="practice-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link><Chevron /><span>Practice</span><Chevron />
            </div>
            <h1>Practice <em>Smarter</em> and<br /><em>Achieve</em> Higher Scores</h1>
            <p>Build confidence, improve accuracy, and master every PTE<br /> question type through targeted practice.</p>
            <div className="stats-card">
              {stats.map(({ value, label, Icon }) => (
                <div className="stat" key={label}>
                  <span className="stat-icon"><Icon /></span>
                  <span><strong>{value}</strong><small>{label}</small></span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image src="/images/girlPic.png" alt="Student wearing headphones and practising speaking" width={800} height={600} priority />
          </div>
        </div>
      </section>

      <section className="content-section question-section">
        <div className="section-heading">
          <h2>Practice by Question Type</h2>
          <button className="outline-link"><BarChartIcon /> View Performance</button>
        </div>
        <div className="question-grid">
          {questionTypes.map(([title, description, Icon]) => (
            <article className="question-card" key={title}>
              <span className="card-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link className="practice-button" href="/practice/speaking">
                Practice Now
              </Link>
              <small className="card-meta"><DocIcon /> 10 Questions</small>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section mode-section">
        <div className="section-heading">
          <h2>Practice Options</h2>
          <Link className="text-link" href="/practice">
            Practice Now →
          </Link>
        </div>
        <div className="mode-grid">
          {practiceModes.map(([title, description, Icon]) => (
            <article className="mode-card" key={title}>
              <span className="mode-icon"><Icon /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="text-link" href="/practice">
                  Start Practice →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section dashboard-grid">
        <article className="dashboard-card recent-card">
          <div className="card-heading">
            <h2>Your Recent Practice</h2>
            <button className="view-all">View All</button>
          </div>
          {recentPractice.map(([title, date, score, Icon]) => (
            <div className="recent-row" key={title}>
              <span className="recent-icon"><Icon /></span>
              <div>
                <h3>{title}</h3>
                <p>{date}</p>
              </div>
              <b>{score}</b>
            </div>
          ))}
        </article>

        <article className="dashboard-card performance-card">
          <div className="card-heading">
            <h2>Overall Performance</h2>
            <button className="view-all">This Month ⌄</button>
          </div>
          <div className="performance-main">
            <div
              className="donut"
              style={{
                background:
                  "conic-gradient(#2e10f2 0% 22%, #16a34a 22% 44%, #f97316 44% 66%, #22d3ee 66% 88%, #e9e9f2 88% 100%)",
              }}
            >
              <div>
                <b>88%</b>
                <small>Performance</small>
              </div>
            </div>
            <div className="metrics">
              {performanceMetrics.map(({ label, score, color }) => (
                <div className="metric" key={label}>
                  <span className="metric-label">
                    <i className="dot" style={{ background: color }} />
                    {label}
                  </span>
                  <b>{score}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="great-job">
            <span><TrophyIcon /></span>
            <div>
              <strong>Great job! You are improving consistently.</strong>
              <small>Keep practicing to achieve a perfect score!</small>
            </div>
          </div>
        </article>
      </section>

      <section className="daily-banner">
        <span className="daily-icon"><TargetIcon /></span>
        <div>
          <h3>Daily Practice, Better Results</h3>
          <p>Practice a little every day and see a big improvement in your speaking score.</p>
        </div>
        <Link href="/practice" className="practice-button">
          Start Daily Practice →
        </Link>
      </section>

      <Footer />
    </main>
  );
}