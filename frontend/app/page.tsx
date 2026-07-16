import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-[#F5F3FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center min-h-[440px]">

          {/* ── Left Content ── */}
          <div className="w-[44%] py-14 pr-6 flex-shrink-0">
            <h1 className="text-[2.4rem] font-extrabold text-gray-900 leading-[1.18] mb-5">
              Achieve Your Dream{' '}
              <span className="text-indigo-600">PTE Score</span>
              <br />
              <span className="text-indigo-600">Unlock</span> Global Opportunities
            </h1>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[420px]">
              Master every section with AI-powered feedback, realistic mock tests, and personalized
              preparation.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mb-10">
              <button
                id="hero-start-practice"
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-indigo-200"
              >
                Start Free Practice
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                id="hero-explore-courses"
                className="px-6 py-3 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
              >
                Explore Courses
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2.5">
                <Image src="/images/Vector.png" alt="Students icon" width={28} height={28} />
                <div>
                  <p className="text-sm font-bold text-gray-900">50,000+</p>
                  <p className="text-[11px] text-gray-500">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Image src="/images/Vector (1).png" alt="Rating icon" width={28} height={28} />
                <div>
                  <p className="text-sm font-bold text-gray-900">4.8/5</p>
                  <p className="text-[11px] text-gray-500">Average Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Image src="/images/Vector (2).png" alt="Mock test icon" width={28} height={28} />
                <div>
                  <p className="text-sm font-bold text-gray-900">100,000+</p>
                  <p className="text-[11px] text-gray-500">Mock Test Taken</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Hero Image + Floating Cards ── */}
          <div className="w-[56%] relative h-[460px] flex-shrink-0">

            {/* Dotted pattern decoration */}
            <div className="absolute right-0 top-8 w-48 h-48 hero-dots opacity-60 rounded-full" />

            {/* Floating Card: Speaking Practice */}
            <div className="absolute top-10 left-6 z-20 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 border border-gray-100">
              <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-800 leading-tight">Speaking Practice</p>
                <p className="text-[10px] text-gray-500 leading-tight">AI Feedback</p>
              </div>
            </div>

            {/* Floating Card: Mock Test (top right) */}
            <div className="absolute top-12 right-6 z-20 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-[11px] font-semibold text-gray-800">Mock Test</p>
              </div>
              <p className="text-[10px] text-gray-500 mb-1">Full Length Test</p>
              <div className="flex items-center gap-1">
                <svg className="w-2.5 h-2.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[10px] text-indigo-600 font-semibold">5:00</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
              <Image
                src="/images/ChatGPT Image Jun 1, 2026, 03_21_42 PM 1.png"
                alt="Student practicing PTE with AI-powered tools"
                width={490}
                height={420}
                className="object-contain"
                priority
              />
            </div>

            {/* Floating Card: Writing Evaluation (middle left) */}
            <div className="absolute top-[44%] left-2 z-20 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <p className="text-[11px] font-semibold text-gray-800">Writing Evaluation</p>
              </div>
              <p className="text-[10px] text-gray-500">Score 83/100</p>
            </div>

            {/* Floating Card: Study Plan (bottom right) */}
            <div className="absolute bottom-20 right-4 z-20 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[11px] font-semibold text-gray-800">Study Plan</p>
              </div>
              <p className="text-[10px] text-gray-500 mb-0.5">Daily Goal</p>
              <div className="flex items-center gap-1">
                <svg className="w-2.5 h-2.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[10px] text-gray-500">3/5 Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TRUST / PARTNERS SECTION
// ─────────────────────────────────────────────
function TrustSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-700 font-semibold text-[15px] mb-5">
          Trusted by 50,000+ students worldwide
        </p>
        <div className="border border-gray-200 rounded-xl py-4 px-4 flex items-center justify-around divide-x divide-gray-200">

          {/* Pearson PTE */}
          <div className="flex items-center gap-2 px-6">
            <div className="w-5 h-5 rounded bg-blue-700 flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">P</span>
            </div>
            <span className="text-gray-600 font-semibold text-sm">Pearson | PTE</span>
          </div>

          {/* British Council */}
          <div className="flex items-center gap-2 px-6">
            <div className="w-5 h-3.5 flex-shrink-0 overflow-hidden rounded-sm">
              <div className="w-full h-full bg-blue-800 relative">
                <div className="absolute inset-0 flex flex-col">
                  <div className="flex-1 bg-blue-900" />
                  <div className="h-[2px] bg-white" />
                  <div className="h-[3px] bg-red-600" />
                  <div className="h-[2px] bg-white" />
                  <div className="flex-1 bg-blue-900" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[2px] h-full bg-white opacity-80" />
                </div>
              </div>
            </div>
            <span className="text-gray-600 font-semibold text-sm">BRITISH COUNCIL</span>
          </div>

          {/* Global Opportunities */}
          <div className="px-6">
            <span className="text-gray-600 font-semibold text-sm">Global Opportunities</span>
          </div>

          {/* IELTS */}
          <div className="px-6">
            <span className="text-red-500 font-bold text-sm tracking-wide">IELTS</span>
          </div>

          {/* Language Cert */}
          <div className="px-6">
            <div className="text-center">
              <span className="text-gray-600 font-semibold text-xs block leading-tight">Language</span>
              <span className="text-gray-500 text-[10px]">Cert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FEATURES SECTION
// ─────────────────────────────────────────────
const features = [
  {
    title: 'AI Speaking Feedback',
    description:
      'Practice with confidence. Receive instant feedback on fluency, pronunciation, grammar, and vocabulary to excel in speaking quality.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Writing Evaluation',
    description:
      'Write with confidence. Build your skills with grammar, vocabulary, ideas, and overall writing quality improving tools.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Real Mock Test',
    description:
      'Practice under real exam conditions with timed sections, authentic question formats, and performance reports.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Vocabulary Builder',
    description:
      'Build your vocabulary with smart learning tools to improve understanding, memory & fluency, and achieve writing quality.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Score Prediction',
    description:
      'Get AI scorecard. Get a detailed overview of your score and a roadmap for improving your overall PTE performance.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

function FeaturesSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
          Everything You Need To Achieve Your{' '}
          <span className="text-indigo-600">Target Score</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{feature.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-5 h-2 rounded-full bg-indigo-600" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MOCK TEST EXPERIENCE SECTION
// ─────────────────────────────────────────────

// Waveform heights to mimic audio visualization
const WAVE_HEIGHTS = [4, 8, 14, 20, 28, 32, 28, 22, 16, 24, 32, 28, 20, 12, 18, 26, 30, 24, 16, 10, 18, 26, 32, 24, 16, 10, 20, 24, 16, 10, 16, 20, 12, 8, 4];

function MockTestSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden flex min-h-[300px]">

          {/* ── Left Panel: Dark Indigo ── */}
          <div className="w-[36%] bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-7 leading-snug">
                Mock Test<br />Experience
              </h2>
              <ul className="space-y-3.5 mb-8">
                {[
                  'Real Exam Simulation',
                  'Timed Practice',
                  'Instant Scoring',
                  'Detailed Analytics',
                  'Improving Weakness',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-indigo-100 text-[13px]">
                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              id="mock-test-try-free"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors self-start"
            >
              Try for free mock test
            </button>
          </div>

          {/* ── Right Panel: Test Interface ── */}
          <div className="w-[64%] bg-gray-50 p-6 flex flex-col justify-center">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">

              {/* Test Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-800">PTE Full Length Test</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-indigo-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-mono font-bold text-indigo-600">01:20:35</span>
                  </div>
                  <span className="text-[11px] text-gray-500">Question of 11 of 20</span>
                  <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Question Info */}
              <div className="mb-3">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">Summarize Spoken Test</h3>
                <p className="text-[11px] text-gray-500">You will hear a recording. Type the summary you hear</p>
              </div>

              {/* Audio Waveform */}
              <div className="bg-gray-50 rounded-lg p-3 mb-3 flex items-center gap-3">
                <div className="flex-1 flex items-end gap-[2px] h-10">
                  {WAVE_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        height: `${h}px`,
                        animationDelay: `${(i % 8) * 0.15}s`,
                      }}
                      className={`flex-1 rounded-full ${
                        i < 22
                          ? 'bg-indigo-500'
                          : 'bg-gray-300 wave-bar'
                      }`}
                    />
                  ))}
                </div>
                {/* Controls */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    aria-label="Clear recording"
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-red-400 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button
                    aria-label="Confirm recording"
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Answer Text Area */}
              <textarea
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-400 outline-none resize-none h-[60px] focus:border-indigo-300 transition-colors placeholder-gray-300 bg-white"
                placeholder="Type your answer here..."
                readOnly
              />

              {/* Next Button */}
              <div className="flex justify-end mt-3">
                <button
                  id="mock-test-next"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIALS SECTION
// ─────────────────────────────────────────────
const testimonials = [
  {
    name: 'Riya Sharma',
    location: 'fr Nepal',
    image: '/images/image 22.png',
    text: 'The AI speaking feedback helped me improve my fluency and pronunciation significantly. I achieved a PTE score of 67 in just 3 weeks!',
    score: '67%',
    rating: '5.0',
  },
  {
    name: 'Shubham Pandey',
    location: 'fr Nepal',
    image: '/images/image 23.png',
    text: 'The mock tests felt exactly like the real exam. The detailed one which helped me focus on my weak areas and improve faster.',
    score: '84%',
    rating: '5.0',
  },
  {
    name: 'Aayusha Sapkota',
    location: 'fr Nepal',
    image: '/images/image 24.png',
    text: 'This writing evaluation feature gave me valuable feedback on grammar and coherence. My confidence improved with every practice session.',
    score: '82%',
    rating: '5.0',
  },
  {
    name: 'Ryan Ghimire',
    location: 'fr Nepal',
    image: '/images/image 25.png',
    text: 'The AI speaking feedback helped me improve my fluency and overall spoken communication significantly. I achieved a PTE score of 88 in just a few weeks.',
    score: '88%',
    rating: '5.0',
  },
  {
    name: 'Priyanka Thapa',
    location: 'fr Nepal',
    image: '/images/image 26.png',
    text: 'The platform is excellent, polished, and easy to use. This exam preparation environment was truly life-changing. I felt fully prepared to achieve high scores.',
    score: '85%',
    rating: '5.0',
  },
  {
    name: 'Aryan Chettri',
    location: 'fr Nepal',
    image: '/images/image 27.png',
    text: 'The AI practice environment really helped me perform better under exam conditions. I felt fully prepared to tackle my weak areas and improve faster.',
    score: '80%',
    rating: '5.0',
  },
  {
    name: 'Diya Thakar',
    location: 'fr Nepal',
    image: '/images/image 28.png',
    text: 'Your data-driven insights and personalized recommendations were tailored specifically for me. This helped me become confident with the exam format.',
    score: '71%',
    rating: '5.0',
  },
  {
    name: 'Bibek Bhattarai',
    location: 'fr Nepal',
    image: '/images/image 29.png',
    text: 'Excellent speaking practice features. The platform is profoundly designed and helped me identify my weak areas and significantly improve my PTE score.',
    score: '88%',
    rating: '5.0',
  },
];

function TestimonialsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
          Student Success Stories
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-indigo-100 transition-all duration-200 flex flex-col"
            >
              {/* Yellow Quote Mark */}
              <div className="text-yellow-400 text-3xl font-bold leading-none mb-2 font-serif">"</div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-100 bg-gray-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-[10px] text-gray-400 leading-tight">{t.location}</p>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-[11px] text-gray-600 leading-relaxed flex-1 mb-4">{t.text}</p>

              {/* Bottom: Score Badge + Rating */}
              <div className="flex items-center justify-between">
                <span className="bg-indigo-600 text-white text-[9px] font-bold px-2.5 py-1 rounded-full">
                  PTE Score {t.score}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-xs font-semibold text-gray-700">{t.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <MockTestSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
