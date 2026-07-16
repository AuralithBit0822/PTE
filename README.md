# PTE-AI Frontend

AI-powered PTE (Pearson Test of English) exam practice platform — frontend application built with Next.js 14.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14+ (App Router) | React framework with server-side rendering |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Zustand | Lightweight state management |
| Recharts | Data visualization (score charts) |
| Axios | HTTP client with interceptors |
| Zod | Form validation schemas |
| @dnd-kit | Drag-and-drop for Re-order questions |
| Web Audio API | Audio recording and waveform visualization |

## Features

### PTE Question Types
- **Speaking:** Read Aloud (RA), Describe Image (DI), Answer Short Question (ASQ)
- **Writing:** Summarize Written Text (SWT), Essay
- **Reading:** Fill in the Blanks (FIB), Re-order Paragraphs

### Core Capabilities
- Full exam simulation with section-level timers
- AI-powered scoring on the real PTE 10-90 band scale
- Audio recording with waveform visualization
- Progress tracking with historical score charts
- Skill radar chart showing strengths and weaknesses
- Responsive design

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # App Router pages & layouts
│   │   ├── layout.tsx          # Root layout (providers, fonts)
│   │   ├── page.tsx            # Landing page
│   │   ├── (auth)/             # Auth routes (login, register)
│   │   ├── (dashboard)/        # Dashboard routes (sidebar layout)
│   │   ├── practice/           # Practice question pages
│   │   └── exam/               # Exam simulation pages
│   │
│   ├── components/
│   │   ├── ui/                 # Button, Input, Card, Modal, Timer, ScoreRing, Toast
│   │   ├── layout/             # Sidebar, TopBar, AuthGuard, ExamShell
│   │   ├── speaking/           # AudioRecorder, ReadAloudPanel, etc.
│   │   ├── writing/            # RichTextInput, EssayPanel, SWTPanel
│   │   ├── reading/            # FillBlanksPanel, ReorderPanel
│   │   ├── exam/               # ExamTimer, ExamProgress, QuestionNavigator
│   │   ├── scoring/            # ScoreCard, ScoreBreakdown, FeedbackPanel
│   │   └── charts/             # ScoreHistoryChart, SkillRadarChart
│   │
│   ├── lib/
│   │   ├── api-client.ts       # Axios instance with auth interceptors
│   │   ├── auth.ts             # Token management utilities
│   │   ├── hooks/              # useAuth, useRecorder, useExamTimer, useScoring
│   │   ├── validators/         # Zod schemas for form validation
│   │   └── utils/              # format-score, format-time, cn
│   │
│   ├── stores/                 # Zustand stores
│   │   ├── auth-store.ts       # Auth state + login/register/logout
│   │   ├── exam-store.ts       # Active exam state + answers
│   │   ├── practice-store.ts   # Practice session state
│   │   └── ui-store.ts         # Toast, modal, theme state
│   │
│   └── types/                  # TypeScript type definitions
│
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing page (public) |
| `/login` | Login form |
| `/register` | Registration form |
| `/dashboard` | Main dashboard with score overview and charts |
| `/profile` | User profile settings |
| `/history` | Practice history (filterable) |
| `/progress` | Detailed analytics and skill breakdown |
| `/practice` | Practice hub — select question type |
| `/practice/speaking/read-aloud` | Read Aloud practice |
| `/practice/speaking/describe-image` | Describe Image practice |
| `/practice/speaking/short-question` | Answer Short Question practice |
| `/practice/writing/summarize-text` | Summarize Written Text practice |
| `/practice/writing/essay` | Essay practice |
| `/practice/reading/fill-blanks` | Fill in the Blanks practice |
| `/practice/reading/reorder` | Re-order Paragraphs practice |
| `/exam` | Exam setup — choose type and start |
| `/exam/[examId]/speaking` | Active exam — Speaking section |
| `/exam/[examId]/writing` | Active exam — Writing section |
| `/exam/[examId]/reading` | Active exam — Reading section |
| `/exam/[examId]/results` | Exam results and review |

## Key Components

### Audio Recording (`useRecorder` hook)
State machine: `idle → preparing → recording → stopping → recorded`
- Uses `MediaRecorder` API with `audio/webm;codecs=opus`
- Returns audio blob, duration, and waveform data for visualization

### Exam Timer (`useExamTimer` hook)
- Section-level countdown with auto-submit on expiry
- Warning states at 5 minutes and 1 minute remaining

### Score Display (`ScoreCard` component)
- Animated circular score ring (10-90 band)
- Per-skill breakdown bars
- AI-generated feedback text and improvement tips

### API Client (`api-client.ts`)
- Axios instance with base URL from environment
- Request interceptor attaches JWT Bearer token
- Response interceptor handles 401 → auto-refresh → retry

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
cd frontend
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Environment Variables

Create `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## State Management

### Auth Store
```typescript
{ user, isAuthenticated, isLoading, login(), register(), logout(), refreshUser() }
```

### Exam Store
```typescript
{ currentExam, currentSection, answers, timeRemaining, createExam(), startSection(), saveAnswer(), submitAnswer(), submitExam() }
```

### Practice Store
```typescript
{ currentQuestion, isRecording, recordedAudio, score, scoringStatus, loadRandomQuestion(), submitSpeaking(), submitWriting(), submitReading() }
```

## License

MIT
