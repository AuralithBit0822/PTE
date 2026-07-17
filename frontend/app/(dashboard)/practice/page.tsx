import Image from "next/image";
import Link from "next/link";

const Chevron = () => <span className="chevron" aria-hidden="true">›</span>;


function SoundIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6M8 6v12M12 3v18M16 7v10M20 10v4" /></svg>;
}

function TrophyIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M8 20h8" /></svg>;
}

function StarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>;
}

const stats = [
  { value: "12,410+", label: "Questions Practices", Icon: SoundIcon },
  { value: "98%", label: "Average Improvement", Icon: TrophyIcon },
  { value: "50,000+", label: "Active Learners", Icon: StarIcon },
];

const questionTypes = [
  ["Read Aloud", "Read the displayed text clearly and naturally to improve pronunciation and fluency.", "▥"],
  ["Repeat Sentence", "Listen carefully and repeat the sentence exactly as you hear it to improve memory.", "↪"],
  ["Describe Image", "Analyze visual information and deliver a clear, structured response with confidence.", "▣"],
  ["Retell Lecture", "Listen to a lecture and summarize the main ideas in a well-organized spoken response.", "▤"],
  ["Answer Short Question", "Respond quickly and accurately to general knowledge and everyday questions.", "▰"],
];

const practiceModes = [
  ["AI Feedback Practice", "Practice with instant AI feedback on fluency, pronunciation, grammar and content.", "◉"],
  ["Timed Practice", "Simulate real exam conditions with timed practice and improve your speed.", "⏱️"],
  ["Custom Practice", "Choose your question type, time and difficulty level to customize your practice.", "⚙️"],
];

const recentPractice = [
  ["Read Aloud", "Attempted on 21 May 2026", "82/100", "▥"],
  ["Repeat Sentence", "Attempted on 23 May 2026", "75/100", "↪"],
  ["Describe Image", "Attempted on 11 May 2026", "73/100", "▣"],
  ["Retell Lecture", "Attempted on 26 May 2026", "69/100", "▤"],
  ["Answer Short Question", "Attempted on 29 May 2026", "65/100", "▰"],
];

const performanceMetrics = [
  ["Pronunciation", "87/100"],
  ["Fluency", "87/100"],
  ["Content", "87/100"],
  ["Grammar", "87/100"],
];

export default function PracticePage() {
  return (
    <main className="practice-page">
      <section className="practice-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="breadcrumbs"><Link href="/">Home</Link><Chevron /><span>Practice</span><Chevron /></div>
            <h1>Practice <em>Smarter</em> and<br /><em>Achieve</em> Higher Scores</h1>
            <p>Build confidence, improve accuracy, and master every PTE<br /> question type through targeted practice.</p>
            <div className="stats-card">
              {stats.map(({ value, label, Icon }) => (
                <div className="stat" key={value}>
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
          <button className="outline-link">▥  View Performance</button>
        </div>
        <div className="question-grid">
          {questionTypes.map(([title, description, icon]) => (
            <article className="question-card" key={title}>
              <span className="card-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link className="practice-button" href="/practice/speaking">
                Practice Now
              </Link>
              <small>▧  10 Questions</small>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section mode-section">
        <div className="section-heading">
          <h2>Practice Options</h2>
          <Link className="text-link" href="/practice">
            Practice Now →
          </Link>
        </div>
        <div className="mode-grid">
          {practiceModes.map(([title, description, icon]) => (
            <article className="mode-card" key={title}>
              <span className="mode-icon">{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <Link className="text-link" href="/practice">
                Start Practice →
              </Link>
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
          {recentPractice.map(([title, date, score, icon]) => (
            <div className="recent-row" key={title}>
              <span className="recent-icon">{icon}</span>
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
            <button className="view-all">This Month⌄</button>
          </div>
          <div className="performance-main">
            <div className="donut">
              <div>
                <b>88%</b>
                <small>Performance</small>
              </div>
            </div>
            <div className="metrics">
              {performanceMetrics.map(([label, score]) => (
                <div className="metric" key={label}>
                  <span>{label}</span>
                  <b>{score}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="great-job">
            <span>♜</span>
            <div>
              <strong>Great job! You are improving consistently.</strong>
              <small>Keep practicing to achieve a perfect score!</small>
            </div>
          </div>
        </article>
      </section>

      <section className="daily-banner">
        <span className="daily-icon">◎</span>
        <div>
          <h3>Daily Practice, Better Results</h3>
          <p>Practice a little every day and see a big improvement in your speaking score.</p>
        </div>
        <Link href="/practice" className="practice-button">
          Start Daily Practice →
        </Link>
      </section>
    </main>
  );
}
