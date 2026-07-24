"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ══════════════════════════════════════════════
// Icons
// ══════════════════════════════════════════════
function WaveformIcon() {
  return <svg viewBox="0 0 24 24"><path d="M4 9v6M8 6v12M12 3v18M16 7v10M20 10v4" /></svg>;
}
function RepeatIcon() {
  return <svg viewBox="0 0 24 24"><path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /></svg>;
}
function ImageTypeIcon() {
  return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>;
}
function LectureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <circle cx="5.8" cy="5.2" r="2.1" />
      <path d="M3.8 8.2a1 1 0 0 1 1-1h2.6a1 1 0 0 1 1 1V18H3.8V8.2z" />
      <rect x="4.1" y="18" width="1.3" height="3" rx=".3" />
      <rect x="6.8" y="18" width="1.3" height="3" rx=".3" />
      <rect x="7.2" y="9.3" width="4.5" height="1.4" rx=".7" />
      <path d="M11.5 4h7A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16h-7v-2h6V6h-6V4z" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4.5 4.2V15H4a2 2 0 0 1-2-2V5z" fill="currentColor" />
      <path d="M11 11a1.6 1.6 0 0 1 1.6-1.6h7A1.6 1.6 0 0 1 21 11v5.6a1.6 1.6 0 0 1-1.6 1.6h-5.7l-3 2.8v-2.8h-.1A1.6 1.6 0 0 1 9 16.6V11z" fill="currentColor" stroke="#f3f1fd" strokeWidth="1.6" />
    </svg>
  );
}
function XIcon() {
  return <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>;
}
function ChevronLeftIcon() {
  return <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>;
}
function InfoIcon() {
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8v.01" /></svg>;
}
function BulletDotIcon() {
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" /></svg>;
}
function MicIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" />
      <path d="M19 11a7 7 0 0 1-14 0M12 18v4" />
    </svg>
  );
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>;
}

// ══════════════════════════════════════════════
// Shared task metadata (drives top tab bar + sidebar list)
// ══════════════════════════════════════════════
const speakingTasks = [
  { id: "read-aloud", label: "Read Aloud", Icon: WaveformIcon },
  { id: "repeat-sentence", label: "Repeat Sentence", Icon: RepeatIcon },
  { id: "describe-image", label: "Describe Image", Icon: ImageTypeIcon },
  { id: "retell-lecture", label: "Retell Lecture", Icon: LectureIcon },
  { id: "answer-short-question", label: "Answer Short Question", Icon: ChatIcon },
] as const;

// ══════════════════════════════════════════════
// Shared UI pieces
// ══════════════════════════════════════════════
function TaskTopBar({ activeTaskId }: { activeTaskId: string }) {
  const activeTask = speakingTasks.find((t) => t.id === activeTaskId);
  return (
    <div className="task-topbar">
      <div className="task-topbar-left">
        <Link href="/practice" className="task-tab">Practice</Link>
        <span className="task-tab-sep">›</span>
        <Link href="/practice/speaking" className="task-tab">Speaking</Link>
        <span className="task-tab-sep">›</span>
        <span className="task-tab active">{activeTask?.label ?? activeTaskId}</span>
      </div>
      <Link href="/practice/speaking" className="task-exit-btn">
        <XIcon /> Exit Practice
      </Link>
    </div>
  );
}

function TaskSidebar({
  activeTaskId,
  questionCount,
  progress,
}: {
  activeTaskId: string;
  questionCount: number;
  progress: { current: number; total: number };
}) {
  const percent = Math.round((progress.current / progress.total) * 100);
  return (
    <aside className="task-sidebar">
      <h2 className="task-sidebar-title">Question Type</h2>
      <ul className="task-type-list">
        {speakingTasks.map((task) => {
          const isActive = task.id === activeTaskId;
          return (
            <li key={task.id}>
              <Link
                href={`/practice/speaking/${task.id}`}
                className={`task-type-item${isActive ? " active" : ""}`}
              >
                <span className="task-type-icon"><task.Icon /></span>
                <span className="task-type-label">
                  {task.id === "answer-short-question" ? "Answer Short Question" : task.label}
                </span>
                <span className="task-type-count">
                  {isActive ? `${questionCount}/${progress.total}` : `0/${progress.total}`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="task-progress-card">
        <h3>Your Progress</h3>
        <div className="task-progress-track">
          <div className="task-progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <span className="task-progress-label">{percent}% Completed</span>
      </div>
    </aside>
  );
}

function TaskInfoPanels({
  instructions,
  tips,
  currentIndex,
  totalQuestions,
  recordedSet,
  onNavigate,
}: {
  instructions: string[];
  tips: string[];
  currentIndex: number;
  totalQuestions: number;
  recordedSet: Set<number>;
  onNavigate: (index: number) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  return (
    <aside className="task-side-right">
      <div className="task-info-card">
        <h3 className="task-info-title"><InfoIcon /> Instructions</h3>
        <ul className="task-bullet-list">
          {instructions.map((line) => (
            <li key={line}>
              <span className="task-bullet-icon"><BulletDotIcon /></span>
              {line}
            </li>
          ))}
        </ul>
      </div>
      <div className="task-info-card">
        <h3 className="task-info-title"><InfoIcon /> Tips</h3>
        <ul className="task-bullet-list">
          {tips.map((line) => (
            <li key={line}>
              <span className="task-bullet-icon"><BulletDotIcon /></span>
              {line}
            </li>
          ))}
        </ul>
      </div>
      <div className="task-info-card">
        <h3 className="task-info-title"><InfoIcon /> Question Progress</h3>
        <div className="task-progress-grid">
          {(showAll ? Array.from({ length: totalQuestions }, (_, i) => i) : Array.from({ length: Math.min(10, totalQuestions) }, (_, i) => i)).map((i) => (
            <button
              key={i}
              type="button"
              className={`task-progress-box${i === currentIndex ? " active" : ""}${recordedSet.has(i) ? " recorded" : ""}`}
              onClick={() => onNavigate(i)}
              aria-label={`Go to question ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button type="button" className="task-progress-view-all" onClick={() => setShowAll((v) => !v)}>
          {showAll ? "Show Less" : `View All ${totalQuestions} Questions`}
        </button>
      </div>
    </aside>
  );
}

function TaskFooterNav({
  current,
  total,
  onPrevious,
  onNext,
}: {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="task-footer-nav">
      <button type="button" className="task-nav-btn" onClick={onPrevious} disabled={current === 1}>
        <ChevronLeftIcon /> Previous
      </button>
      <span className="task-question-count">Question {current} of {total}</span>
      <button type="button" className="practice-button task-nav-btn-next" onClick={onNext}>
        Next <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

// ══════════════════════════════════════════════
// Read Aloud task (fully implemented)
// ══════════════════════════════════════════════
const READ_ALOUD_TEXTS = [
  "The rapid advancement of technology has transformed the way we live, work and communicate. Artificial intelligence and automation are becoming increasingly integrated in our daily routines, offering both opportunities and challenges. A we embrace these changes, it is essential to adapt and acquire new skills to remain relevant in this ever-evolving world.",
  "Climate change remains one of the most pressing issues of our time, affecting ecosystems, economies, and communities worldwide. Governments and organizations are increasingly investing in renewable energy and sustainable practices to reduce carbon emissions and mitigate long-term environmental damage.",
  "Effective communication is a cornerstone of successful teamwork in any organization. Clear, concise, and respectful dialogue helps prevent misunderstandings and builds trust among colleagues, ultimately leading to higher productivity and a more positive work environment.",
  "The rise of remote work has reshaped traditional office culture, giving employees greater flexibility while also introducing new challenges around collaboration and work-life balance. Companies are experimenting with hybrid models to find an approach that suits both business needs and employee wellbeing.",
  "Reading regularly has been shown to improve vocabulary, critical thinking, and empathy. By exposing readers to diverse perspectives and unfamiliar situations, books encourage a deeper understanding of the world and the people who inhabit it.",
  "Urban planning plays a crucial role in shaping how cities function and how residents experience daily life. Thoughtful design of public spaces, transportation networks, and housing can significantly improve quality of life while reducing environmental impact.",
  "The global shift toward e-commerce has changed consumer behavior dramatically over the past decade. Businesses must now prioritize digital experience, fast delivery, and personalized service to remain competitive in an increasingly crowded marketplace.",
  "Scientific research relies heavily on collaboration across disciplines to solve complex problems. By combining expertise from fields such as biology, computer science, and engineering, researchers can develop innovative solutions to challenges that no single discipline could address alone.",
  "Financial literacy is an essential life skill that is often overlooked in traditional education systems. Understanding concepts such as budgeting, saving, and investing empowers individuals to make informed decisions and build long-term financial security.",
  "Travel broadens perspective by exposing individuals to different cultures, languages, and ways of life. Even short trips to unfamiliar places can challenge assumptions and foster a greater appreciation for the diversity of human experience.",
];
const TOTAL_QUESTIONS = READ_ALOUD_TEXTS.length;
const RECORD_LIMIT_SECONDS = 40;

const readAloudInstructions = [
  "Read the text aloud clearly and naturally.",
  "You will have up to 40 seconds to record.",
  "You can't re-record once you submit.",
  "Make sure to speak in a quiet environment.",
];
const readAloudTips = [
  "Speak clearly and at a moderate pace.",
  "Pronounce every word accurately.",
  "Maintain good fluency and intonation.",
];

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function ReadAloudTask() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [recordedSet, setRecordedSet] = useState<Set<number>>(new Set());
  const [visitedSet, setVisitedSet] = useState<Set<number>>(new Set(new Set([0])));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => {
          if (prev + 1 >= RECORD_LIMIT_SECONDS) {
            setIsRecording(false);
            setHasRecorded(true);
            setRecordedSet((p) => new Set(p).add(currentIndex));
            return RECORD_LIMIT_SECONDS;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRecording]);

  function handleMicClick() {
    if (isRecording) {
      setIsRecording(false);
      setHasRecorded(true);
      setRecordedSet((prev) => new Set(prev).add(currentIndex));
    } else {
      setElapsedSeconds(0);
      setHasRecorded(false);
      setIsRecording(true);
    }
  }

  function resetForQuestion() {
    setIsRecording(false);
    setElapsedSeconds(0);
    setHasRecorded(false);
  }

  function goToPrevious() {
    setCurrentIndex((i) => {
      const next = Math.max(0, i - 1);
      setVisitedSet((prev) => new Set(prev).add(next));
      resetForQuestion();
      return next;
    });
  }

  function goToNext() {
    setCurrentIndex((i) => {
      const next = Math.min(TOTAL_QUESTIONS - 1, i + 1);
      setVisitedSet((prev) => new Set(prev).add(next));
      resetForQuestion();
      return next;
    });
  }

  function goToQuestion(index: number) {
    setVisitedSet((prev) => new Set(prev).add(index));
    setCurrentIndex(index);
    resetForQuestion();
  }

  return (
    <div className="task-page">
      <TaskTopBar activeTaskId="read-aloud" />

      <div className="task-layout">
        <TaskSidebar
          activeTaskId="read-aloud"
          questionCount={visitedSet.size}
          progress={{ current: recordedSet.size, total: TOTAL_QUESTIONS }}
        />

        <section className="task-main">
          <div className="task-main-header">
            <span className="task-main-header-icon"><WaveformIcon /></span>
            <h1>Read Aloud</h1>
          </div>
          <p className="task-main-sub">
            Read the following text aloud as clearly and naturally as possible.
          </p>

          <h3 className="task-block-label">Text to Read</h3>
          <div className="task-text-box">{READ_ALOUD_TEXTS[currentIndex]}</div>

          <div className="task-recording-row">
            <h3 className="task-block-label">Your Recording</h3>
            <span className={`task-status-pill${hasRecorded ? " recorded" : ""}`}>
              {hasRecorded ? "Recorded" : "Not Recorded"}
            </span>
          </div>

          <div className="task-recording-box">
            <button
              type="button"
              className={`task-mic-button${isRecording ? " recording" : ""}`}
              onClick={handleMicClick}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
            >
              <MicIcon />
            </button>
            <p className="task-recording-title">
              {isRecording
                ? "Recording… click the microphone to stop"
                : hasRecorded
                ? "Recording complete"
                : "Click the microphone to start recording"}
            </p>
            <p className="task-recording-sub">You will have up to 40 seconds to read aloud.</p>
            <div className="task-timer">
              <ClockIcon /> {formatTime(elapsedSeconds)} / {formatTime(RECORD_LIMIT_SECONDS)}
            </div>
          </div>

          <TaskFooterNav
            current={currentIndex + 1}
            total={TOTAL_QUESTIONS}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />
        </section>

        <TaskInfoPanels
          instructions={readAloudInstructions}
          tips={readAloudTips}
          currentIndex={currentIndex}
          totalQuestions={TOTAL_QUESTIONS}
          recordedSet={recordedSet}
          onNavigate={goToQuestion}
        />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// Placeholder for not-yet-built task types
// ══════════════════════════════════════════════
function ComingSoonTask({ taskId }: { taskId: string }) {
  const task = speakingTasks.find((t) => t.id === taskId);
  return (
    <div className="task-page">
      <TaskTopBar activeTaskId={taskId} />
      <div className="task-coming-soon">
        <h1>{task ? task.label : "Task"}</h1>
        <p>This task type is coming soon.</p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// Dynamic dispatcher — params.taskId decides which task renders
// ══════════════════════════════════════════════
export default function TaskPage({ params }: { params: { taskId: string } }) {
  const { taskId } = params;

  if (taskId === "read-aloud") {
    return <ReadAloudTask />;
  }

  // Repeat Sentence, Describe Image, Retell Lecture, Answer Short Question
  // each get their own component here later, following the same pattern
  // as ReadAloudTask above, e.g.:
  // if (taskId === "repeat-sentence") return <RepeatSentenceTask />;
  // if (taskId === "describe-image") return <DescribeImageTask />;
  // if (taskId === "retell-lecture") return <RetellLectureTask />;
  // if (taskId === "answer-short-question") return <AnswerShortQuestionTask />;

  return <ComingSoonTask taskId={taskId} />;
}