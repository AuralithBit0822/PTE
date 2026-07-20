import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/common/Footer';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#FAFAFA] pt-16 pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
              PTE Resources
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Your one-stop library for PTE success. Explore free study materials, guides, templates, and tips to help you prepare smarter and achieve your target score.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 py-4 px-5 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-0.5">Free & Premium</div>
                  <div className="text-xs text-gray-500 font-medium">Quality resources</div>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 py-4 px-5 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-0.5">Exam-Focused</div>
                  <div className="text-xs text-gray-500 font-medium">Updated & relevant</div>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 py-4 px-5 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-0.5">Easy to Access</div>
                  <div className="text-xs text-gray-500 font-medium">Download anytime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Placeholder */}
          <div className="flex-1 relative w-full h-[450px] flex items-center justify-center">
             <div className="w-[90%] h-[90%] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">Hero Image (Student with Laptop)</div>
             </div>
             {/* Floating elements matching design */}
             <div className="absolute top-10 left-0 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 z-20 flex flex-col items-center">
                <div className="w-10 h-10 bg-[#EEF2FF] rounded-lg flex items-center justify-center">
                   <svg className="w-5 h-5 text-[#3B28CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
             </div>
             <div className="absolute top-20 right-4 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 z-20 flex flex-col items-center">
                <div className="w-10 h-10 bg-[#3B28CC] rounded-lg flex items-center justify-center text-white">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Category Cards (Horizontal scrolling list or grid) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-20 -mt-10">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
          {[
            { title: 'Reading Practice', desc: 'Reading improves your performance.', res: '10 Resources', resColor: 'text-[#137333]', bg: 'bg-[#E6F4EA]', iconColor: 'text-[#137333]' },
            { title: 'Answer question', desc: 'Respond clearly and confidently.', res: '10 Resources', resColor: 'text-[#137333]', bg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
            { title: 'Mock Test', desc: 'Free full-length for mock tests.', res: '10 Resources', resColor: 'text-red-500', bg: 'bg-red-100', iconColor: 'text-red-500' },
            { title: 'Audio Materials', desc: 'Improve listening and speaking skills.', res: '10 Resources', resColor: 'text-blue-500', bg: 'bg-blue-100', iconColor: 'text-blue-500' },
            { title: 'Tips & Strategies', desc: 'Expert tips to improve your performance.', res: '10 Resources', resColor: 'text-orange-500', bg: 'bg-orange-100', iconColor: 'text-orange-500' },
            { title: 'Sample Answer', desc: 'High-scoring sample answer for practices.', res: '10 Resources', resColor: 'text-[#137333]', bg: 'bg-purple-100', iconColor: 'text-purple-600' },
            { title: 'AI Speaking', desc: 'Plan your learning with confidence.', res: '10 Resources', resColor: 'text-red-500', bg: 'bg-red-100', iconColor: 'text-red-500' },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow min-w-[220px] snap-center">
              <div className={`w-14 h-14 rounded-full ${cat.bg} flex items-center justify-center mb-6`}>
                 <div className={`w-6 h-6 ${cat.iconColor}`}>
                    {/* Generic icon shape */}
                    <div className="w-full h-full bg-current rounded-sm"></div>
                 </div>
              </div>
              <h3 className="font-extrabold text-gray-900 mb-3">{cat.title}</h3>
              <p className="text-sm font-medium text-gray-500 mb-8 flex-1">{cat.desc}</p>
              <div className={`font-bold text-sm ${cat.resColor}`}>
                 {cat.res}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Popular Resources */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 mb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Popular Resources</h2>
          <Link href="#" className="border border-gray-200 text-[#3B28CC] font-bold py-2.5 px-6 rounded-lg flex items-center hover:bg-gray-50 transition-colors shadow-sm text-sm">
            Practice Now <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Reading Practice', desc: 'In depth guides to understand all PTE modules.', resCount: '5 Articles', btn: 'Read Now', bg: 'bg-[#A7F3D0]', iconColor: 'text-[#065F46]' },
            { title: 'Vocabulary Practice', desc: 'Essential vocabulary to improve your skills.', resCount: '100+ Words', btn: 'Learn', bg: 'bg-[#6EE7B7]', iconColor: 'text-[#047857]' },
            { title: 'Read Aloud Practice', desc: 'Practice with read aloud and improve your pronunciation.', resCount: '5 Voice', btn: 'Read', bg: 'bg-[#FBCFE8]', iconColor: 'text-[#BE185D]' },
            { title: 'Answer Question Practice', desc: 'High-scoring guides and understand all PTE modules.', resCount: '5 Articles', btn: 'Read Now', bg: 'bg-[#FDE68A]', iconColor: 'text-[#B45309]' },
            { title: 'Mock Test Practice', desc: 'Mock Test Practice and understand all PTE modules.', resCount: '5 Articles', btn: 'Read Now', bg: 'bg-[#FECACA]', iconColor: 'text-[#B91C1C]' },
            { title: 'Listening Audio Practice', desc: 'Practice learning with native English audio files.', resCount: '5 Audio', btn: 'Listen', bg: 'bg-[#BAE6FD]', iconColor: 'text-[#0369A1]' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center mr-5 shrink-0`}>
                     <div className={`w-8 h-8 ${item.iconColor}`}>
                        {/* Generic icon block */}
                        <div className="w-full h-full bg-current rounded-sm"></div>
                     </div>
                  </div>
                  <div>
                     <h3 className="font-extrabold text-gray-900 mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
               </div>
               <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <div className="flex items-center text-sm font-semibold text-gray-600">
                     <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                     {item.resCount}
                  </div>
                  <button className="border border-gray-200 text-[#3B28CC] font-bold py-1.5 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                     {item.btn}
                  </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      
      {/* Hide scrollbar utility class (for the horizontal scrolling list) */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
