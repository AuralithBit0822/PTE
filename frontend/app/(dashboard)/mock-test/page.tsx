import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/common/Footer';

export default function MockTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Hero Section */}
      <section className="bg-[#F5F3FF] pt-8 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm font-bold text-gray-900 mb-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#3B28CC]">Home</Link>
            <svg className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            <Link href="/practice" className="hover:text-[#3B28CC]">Practice</Link>
            <svg className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-[23px] md:text-[35px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
                Master the Mock <span className="text-[#3B28CC]">Test Experience</span>
                <br />
                <span className="text-[#3B28CC]">Get Ready</span> for the Real Exam.
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                Experience full-length PTE mock tests with AI-powered scoring,
                detailed analytics, and real exam conditions.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4">
                {/* Stat 1 */}
                <div className="bg-white rounded-2xl p-3.5 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white min-w-[150px] transition-transform hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3.5">
                    <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-[17px]">12</div>
                    <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Tests Attempted</div>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="bg-white rounded-2xl p-3.5 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white min-w-[150px] transition-transform hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3.5">
                    <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 21v-4M8 21h8M5 10a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M7 5v12a3 3 0 003 3h4a3 3 0 003-3V5M17 5H7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-[17px]">88%</div>
                    <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Average Score</div>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="bg-white rounded-2xl p-3.5 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white min-w-[150px] transition-transform hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3.5">
                    <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth={2.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-[17px]">23 hours</div>
                    <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Timed Practice</div>
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="bg-white rounded-2xl p-3.5 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white min-w-[150px] transition-transform hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3.5">
                    <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-[17px]">85</div>
                    <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Best Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative flex-1 flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden bg-[#e0e5f2]">
                 <Image src="/images/girlPic.png" alt="Student with headphones" fill className="object-cover object-top" />
              </div>
              
              {/* Floating Cards (Approximation) */}
              <div className="absolute top-4 left-0 bg-white/90 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-3.5 flex items-center space-x-3 transform -translate-x-8 backdrop-blur-md border border-white/60">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">Full length Mock Test</div>
                  <div className="text-[11px] font-medium text-gray-500">Timed.2h:15m</div>
                </div>
              </div>

              <div className="absolute top-10 right-0 bg-white/90 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-3.5 flex items-center space-x-3 transform translate-x-12 backdrop-blur-md border border-white/60">
                <div className="w-9 h-9 rounded-full bg-[#3008F8] flex items-center justify-center shadow-md">
                   <span className="text-white text-[11px] font-bold tracking-wider">PTE</span>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">PTE Prep</div>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-0 bg-white/90 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-5 flex flex-col transform -translate-x-12 backdrop-blur-md border border-white/60">
                 <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Your Average Score</div>
                 <div className="text-3xl font-extrabold text-gray-900">88</div>
                 <div className="text-[11px] text-gray-600 font-semibold mt-1">
                   <span className="text-red-500 font-bold">-8</span> This Week
                 </div>
              </div>

              <div className="absolute top-32 right-0 bg-white/90 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-5 flex flex-col transform translate-x-16 backdrop-blur-md border border-white/60">
                 <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tests Attempted</div>
                 <div className="flex items-center space-x-2">
                   <span className="text-3xl font-extrabold text-gray-900">12</span>
                   <span className="text-[11px] font-semibold text-gray-500">-Students</span>
                 </div>
                 <div className="text-[11px] text-gray-600 font-semibold mt-1">
                   <span className="text-[#10B981] font-bold">-3</span> This week
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Mock Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[1, 2, 1, 1].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Full Length Mock Test {item}</h3>
              <p className="text-sm text-gray-500 mb-6">Complete PTE Academic test with all sections.</p>
              
              <div className="flex w-full justify-between px-2 text-xs text-gray-600 mb-6 font-medium">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  2h:15m<br/>Duration
                </div>
                <div className="flex items-center text-right">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  200<br/>Questions
                </div>
              </div>

              <button className="w-full bg-[#3B28CC] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mb-4 transition-colors">
                Start Test
              </button>
              <Link href={`/mock-test/${item}`} className="text-[#3B28CC] font-semibold text-sm flex items-center hover:underline">
                View Detail
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Section-wise Mock */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Section -wise Mock</h2>
          <div className="flex flex-col space-y-4">
            {[
              { title: 'Speaking', desc: 'Test your speaking skills with real exam questions.', q: 20, time: 50, color: 'bg-purple-100 text-purple-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /> },
              { title: 'Writing', desc: 'Test your speaking skills with real exam questions.', q: 20, time: 50, color: 'bg-blue-100 text-blue-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> },
              { title: 'Listening', desc: 'Test your speaking skills with real exam questions.', q: 20, time: 50, color: 'bg-indigo-100 text-indigo-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /> },
              { title: 'Reading', desc: 'Test your speaking skills with real exam questions.', q: 20, time: 50, color: 'bg-purple-100 text-purple-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                  <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mr-4 shrink-0`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {section.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-500">{section.desc}</p>
                  </div>
                </div>
                
                <div className="flex items-center w-full md:w-auto justify-between md:justify-end space-x-6 md:space-x-12">
                  <div className="text-center md:text-left">
                    <div className="font-bold text-gray-900">{section.q}</div>
                    <div className="text-xs text-gray-500">Questions</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-bold text-gray-900">{section.time} mins</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-[#3B28CC] border border-[#3B28CC] px-4 py-2 rounded-lg font-semibold text-sm flex items-center hover:bg-[#EEF2FF] transition-colors whitespace-nowrap">
                      Start Free Practice
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Mock Test Attempts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Mock Test Attempts</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-4 font-bold text-gray-900 w-1/3">Test Name</th>
                  <th className="py-4 px-4 font-bold text-gray-900">Score</th>
                  <th className="py-4 px-4 font-bold text-gray-900 w-1/4">Overall</th>
                  <th className="py-4 px-4 font-bold text-gray-900">Date</th>
                  <th className="py-4 px-4 font-bold text-gray-900 text-right">Review</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Full Length Mock Test 1', score: '88/100', progress: 87, date: '21 May 2026' },
                  { name: 'Full Length Mock Test 2', score: '91/100', progress: 91, date: '27 May 2026' },
                  { name: 'Speaking Mock Test', score: '85/100', progress: 84, date: '15 May 2026' },
                  { name: 'Writing Mock Test', score: '95/100', progress: 95, date: '19 May 2026' },
                  { name: 'Full Length Mock Test 3', score: '75/100', progress: 80, date: '11 May 2026' },
                ].map((attempt, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#3B28CC] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-900 font-medium">{attempt.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700 font-medium">{attempt.score}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#3B28CC] rounded-full" style={{ width: `${attempt.progress}%` }}></div>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{attempt.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700 font-medium">{attempt.date}</td>
                    <td className="py-4 px-4 text-right">
                      <Link href="#" className="text-[#3B28CC] font-semibold hover:underline">Review</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="#" className="text-[#3B28CC] font-bold text-sm flex items-center hover:underline">
              View All Attempts
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
