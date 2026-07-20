import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/common/Footer';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#FAFAFA] pt-16 pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
              Master PTE with <br />
              <span className="text-[#3B28CC]">Structured Learning Paths</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Choose the right course based on your current level and target score. Learn smarter and achieve more.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="bg-[#3B28CC] hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors">
                Explore Courses
              </button>
              <button className="bg-white border border-[#E5E7EB] text-[#3B28CC] font-bold py-3.5 px-6 rounded-xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#EEF2FF] p-1 rounded mr-3">
                   <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                Take Placement Quiz
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 py-3 px-5">
                <div className="w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <span className="font-bold text-gray-900 text-sm">Expert Trainers</span>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 py-3 px-5">
                <div className="w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="font-bold text-gray-900 text-sm">AI-Powered Learning</span>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 py-3 px-5">
                <div className="w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="font-bold text-gray-900 text-sm">Real Exam Simulation</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Placeholder */}
          <div className="flex-1 relative w-full h-[450px] flex items-center justify-center">
             <div className="w-[90%] h-[90%] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">Hero Image (Student)</div>
             </div>
             {/* Floating elements matching design */}
             <div className="absolute top-10 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 z-20 flex flex-col items-center">
                <div className="text-xs font-bold text-gray-900 mb-2">Achieve Your<br/>Target Score</div>
                <div className="w-16 h-12 bg-gray-100 rounded-md"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Choose Your Learning Path */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Choose Your Learning Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beginner Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="bg-[#E6F4EA] text-[#137333] text-xs font-bold px-3 py-1 rounded-full w-fit mb-6 tracking-wide uppercase">Beginner</div>
            <div className="flex items-center mb-6">
               <div className="w-12 h-12 rounded-xl bg-[#E6F4EA] flex items-center justify-center mr-4">
                 <span className="text-[#137333] font-bold text-xl">🌱</span>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900">PTE Foundation</h3>
                 <p className="text-sm font-medium text-gray-500">Target Score: 30-50</p>
               </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {['Grammar Basics', 'Vocabulary Building', 'Speaking Fundamentals', 'Reading Basics', 'Listening Essentials', 'Weekly Practice Tests'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-[#137333] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mb-6">
               <div className="flex items-center text-sm font-bold text-gray-900">
                  <svg className="w-5 h-5 text-[#137333] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2"/></svg>
                  <div>Duration<br/><span className="font-extrabold text-[#137333]">4 Weeks</span></div>
               </div>
               <div className="flex items-center text-sm font-bold text-gray-900">
                  <svg className="w-5 h-5 text-[#137333] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <div>Lessons<br/><span className="font-extrabold text-[#137333]">40+</span></div>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <div className="text-xl font-extrabold text-gray-900">NRP 1,000</div>
               <button className="border-2 border-[#137333] text-[#137333] font-bold py-2.5 px-6 rounded-xl hover:bg-[#E6F4EA] transition-colors">
                 View Courses
               </button>
            </div>
          </div>

          {/* Intermediate Card */}
          <div className="bg-white rounded-3xl border border-[#3B28CC] p-8 flex flex-col shadow-[0_8px_30px_rgba(59,40,204,0.12)] relative overflow-hidden transform scale-105 z-10">
            <div className="bg-[#EEF2FF] text-[#3B28CC] text-xs font-bold px-3 py-1 rounded-full w-fit mb-6 tracking-wide uppercase">Intermediate</div>
            <div className="flex items-center mb-6">
               <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mr-4">
                 <svg className="w-6 h-6 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900">PTE Score Booster</h3>
                 <p className="text-sm font-medium text-gray-500">Target Score: 50-70</p>
               </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {['Speaking Strategies', 'Easy Writing', 'Summarize Written Text', 'Reading Techniques', 'Listening Strategies', 'Weekly Mock Tests'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-[#3B28CC] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mb-6">
               <div className="flex items-center text-sm font-bold text-gray-900">
                  <svg className="w-5 h-5 text-[#3B28CC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2"/></svg>
                  <div>Duration<br/><span className="font-extrabold text-[#3B28CC]">6 Weeks</span></div>
               </div>
               <div className="flex items-center text-sm font-bold text-gray-900">
                  <svg className="w-5 h-5 text-[#3B28CC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <div>Lessons<br/><span className="font-extrabold text-[#3B28CC]">60+</span></div>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <div className="text-xl font-extrabold text-gray-900">NRP 1,500</div>
               <button className="bg-[#EEF2FF] border-2 border-[#3B28CC] text-[#3B28CC] font-bold py-2.5 px-6 rounded-xl hover:bg-[#E0E7FF] transition-colors">
                 View Courses
               </button>
            </div>
          </div>

          {/* Advanced Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="bg-[#F3E8FF] text-[#7E22CE] text-xs font-bold px-3 py-1 rounded-full w-fit mb-6 tracking-wide uppercase">Advanced</div>
            <div className="flex items-center mb-6">
               <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] flex items-center justify-center mr-4">
                 <svg className="w-6 h-6 text-[#7E22CE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900">PTE 80+ Mastery</h3>
                 <p className="text-sm font-medium text-gray-500">Target Score: 80-100</p>
               </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {['Advanced Templates', 'AI Feedback & Evaluation', 'Full-Length Mock Tests', 'Performance Analytics', 'Expert Guidance & Mentoring', 'Personalized Study Plan'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-[#7E22CE] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mb-6">
               <div className="flex items-center text-sm font-bold text-gray-900">
                  <svg className="w-5 h-5 text-[#7E22CE] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2"/></svg>
                  <div>Duration<br/><span className="font-extrabold text-[#7E22CE]">8 Weeks</span></div>
               </div>
               <div className="flex items-center text-sm font-bold text-gray-900">
                  <svg className="w-5 h-5 text-[#7E22CE] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <div>Lessons<br/><span className="font-extrabold text-[#7E22CE]">80+</span></div>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <div className="text-xl font-extrabold text-gray-900">NRP 3,500</div>
               <button className="border-2 border-[#7E22CE] text-[#7E22CE] font-bold py-2.5 px-6 rounded-xl hover:bg-[#F3E8FF] transition-colors">
                 View Courses
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skill-Based Courses */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Skill-Based Courses</h2>
            <Link href="#" className="text-[#3B28CC] font-bold flex items-center hover:underline">
              View All Skills <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Speaking Mastery', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z', evalText: 'AI Speaking Evaluation' },
              { title: 'Writing Excellence', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', evalText: 'AI Writing Evaluation', text2: 'Model Answers & Templates' },
              { title: 'Listening Mastery', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', evalText: 'Audio Practice Exercises' },
              { title: 'Reading Mastery', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', evalText: 'AI Speaking Evaluation' },
            ].map((skill, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{skill.title}</h3>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center text-sm text-gray-600 font-medium">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    25+ Video Lessons
                  </li>
                  <li className="flex items-center text-sm text-gray-600 font-medium">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    150+ Practice Questions
                  </li>
                  <li className="flex items-center text-sm text-gray-600 font-medium">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {skill.text2 || skill.evalText}
                  </li>
                  <li className="flex items-center text-sm text-gray-600 font-medium">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Progress Tracking
                  </li>
                </ul>
                <Link href="#" className="text-[#3B28CC] font-bold text-sm flex items-center hover:underline">
                  Start Learning <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-5 px-4 text-left font-extrabold text-gray-900 border-r border-gray-200 w-1/4">Features</th>
                <th className="py-5 px-4 font-extrabold text-[#137333] border-r border-gray-200 bg-[#E6F4EA]/30">PTE Foundation<br/><span className="text-sm">30-50</span></th>
                <th className="py-5 px-4 font-extrabold text-[#0284C7] border-r border-gray-200 bg-[#E0F2FE]/30">PTE Score Booster<br/><span className="text-sm">50-70</span></th>
                <th className="py-5 px-4 font-extrabold text-[#7E22CE] bg-[#F3E8FF]/30">PTE 80+ Mastery<br/><span className="text-sm">80-100</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Lessons', f: true, s: true, m: true },
                { name: 'Practice Questions', f: true, s: true, m: true },
                { name: 'AI Feedback & Evaluation', f: true, s: true, m: true },
                { name: 'Full-Length Mock Tests', f: false, s: true, m: true },
                { name: 'Study Plan', f: false, s: true, m: true },
                { name: 'Expert Mentoring', f: true, s: true, m: true },
                { name: 'Performance Analytics', f: false, s: true, m: true },
                { name: 'Certificate of Completion', f: false, s: false, m: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-left font-bold text-gray-700 border-r border-gray-200 flex items-center">
                     <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                     {row.name}
                  </td>
                  <td className="py-4 px-4 border-r border-gray-200">
                    {row.f ? <svg className="w-6 h-6 text-[#137333] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-6 h-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>}
                  </td>
                  <td className="py-4 px-4 border-r border-gray-200">
                    {row.s ? <svg className="w-6 h-6 text-[#137333] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-6 h-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>}
                  </td>
                  <td className="py-4 px-4">
                    {row.m ? <svg className="w-6 h-6 text-[#137333] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-6 h-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Journey & Testimonials */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Left: Journey */}
           <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Your PTE Learning Journey</h2>
              <div className="flex items-center justify-between relative mt-8">
                 <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-6"></div>
                 
                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                       <span className="text-xl">🌱</span>
                    </div>
                    <div className="font-extrabold text-gray-900 text-sm">1<br/>Foundation</div>
                    <div className="text-[10px] text-gray-500 font-medium">(Score 30-50)</div>
                 </div>

                 <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>

                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                       <span className="text-xl">📈</span>
                    </div>
                    <div className="font-extrabold text-gray-900 text-sm">2<br/>Score Booster</div>
                    <div className="text-[10px] text-gray-500 font-medium">(Score 60-70)</div>
                 </div>

                 <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>

                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                       <span className="text-xl">🎯</span>
                    </div>
                    <div className="font-extrabold text-gray-900 text-sm">3<br/>79+ Mastery</div>
                    <div className="text-[10px] text-gray-500 font-medium">(Score 80+)</div>
                 </div>

                 <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>

                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3 border-4 border-white shadow-sm">
                       <span className="text-xl">🏆</span>
                    </div>
                    <div className="font-extrabold text-gray-900 text-sm">Real Exam</div>
                    <div className="text-[10px] text-gray-500 font-medium">Achieve success.</div>
                 </div>
              </div>
           </div>

           {/* Right: Testimonials */}
           <div>
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-extrabold text-gray-900">Recent Student Achievement</h2>
                 <Link href="#" className="text-gray-900 font-bold flex items-center hover:underline text-sm">
                   View All <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </Link>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                 {[
                   { name: 'Riya Sharma', text: 'The AI speaking feedback helped me improve my fluency and pronunciation significantly.', score: '97%', stars: '5.0', color: 'bg-purple-50', tColor: 'text-purple-600' },
                   { name: 'Shubham Pandey', text: 'The mock tests felt exactly like the real exam. The detailed analytics helped me focus on weak areas.', score: '94%', stars: '5.0', color: 'bg-orange-50', tColor: 'text-orange-600' },
                   { name: 'Aayanka Sapkota', text: 'The writing evaluation gave me valuable feedback on grammar and coherence. Highly recommend!', score: '90%', stars: '5.0', color: 'bg-green-50', tColor: 'text-green-600' }
                 ].map((t, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-5 min-w-[280px] shadow-sm flex flex-col">
                       <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                          <div>
                             <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                             <div className="text-xs text-gray-500 flex items-center">🇳🇵 Nepal</div>
                          </div>
                       </div>
                       <p className="text-xs text-gray-600 mb-6 flex-1 italic">"{t.text}"</p>
                       <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className={`text-xs font-bold px-2 py-1 rounded ${t.color} ${t.tColor} flex items-center`}>
                             <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                             PTE Score: {t.score}
                          </div>
                          <div className="text-xs font-bold text-gray-900 flex items-center">
                             <span className="text-yellow-400 mr-1 text-sm">★</span> {t.stars}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. Why Choose Our Courses */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Why Choose Our Courses?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {[
             { title: 'AI Speaking Feedback', desc: 'Speak with confidence. Receive instant feedback on fluency and pronunciation.', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
             { title: 'Writing Evaluation', desc: 'Write with confidence. Receive instant feedback on grammar and logic.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
             { title: 'Real Mock Test', desc: 'Practice under real exam conditions with timed tests and accurate scoring.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
             { title: 'Vocabulary Builder', desc: 'Build your vocabulary with smart learning tools designed for memory.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
             { title: 'Personalized Plan', desc: 'Get a customized study schedule mapped to your exam date and goals.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
           ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
                 <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5 mx-auto">
                    <svg className="w-6 h-6 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                 </div>
                 <h3 className="font-bold text-gray-900 text-center mb-3 text-sm">{feature.title}</h3>
                 <p className="text-xs text-gray-500 text-center leading-relaxed flex-1">{feature.desc}</p>
              </div>
           ))}
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-24">
         <div className="bg-[#E0E7FF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C7D2FE] rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#C7D2FE] rounded-full opacity-50 blur-3xl"></div>
            
            <div className="flex items-center z-10 mb-8 md:mb-0">
               <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mr-6 shrink-0">
                  <span className="text-4xl">🎓</span>
               </div>
               <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Ready to Achieve Your Target Score?</h2>
                  <p className="text-gray-700 font-medium text-sm md:text-base">Join thousands of successful students and start your PTE journey today.</p>
               </div>
            </div>
            
            <button className="bg-[#3B28CC] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl z-10 whitespace-nowrap shadow-[0_8px_30px_rgba(59,40,204,0.3)] transition-transform hover:-translate-y-1 flex items-center">
               Find My Perfect Course
               <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
}
