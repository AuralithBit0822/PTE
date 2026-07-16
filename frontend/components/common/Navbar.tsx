'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Practice', href: '/practice' },
    { name: 'Mock Test', href: '/mock-test' },
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="bg-[#F5F3FF] sticky top-0 z-50">
      <div className="h-[88px] px-[165px] flex items-center justify-between gap-[10px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center shadow-sm group-hover:bg-indigo-700 transition-colors">
            {/* Graduation cap icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-[21px] font-extrabold tracking-tight">
            <span className="text-indigo-600">PTE.</span>
            <span className="text-gray-800">Prep</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-[17px] font-bold pb-0.5 transition-all duration-150 ${
                activeLink === link.name
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-indigo-600 hover:text-indigo-700 border-b-2 border-transparent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Search + Buttons */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-[7px] hover:border-indigo-300 transition-colors">
            <input
              type="text"
              placeholder="Search here...."
              className="bg-transparent text-sm text-gray-500 outline-none w-[130px] placeholder-gray-400"
            />
            <svg
              className="w-4 h-4 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Log in Button */}
          <Link
            href="/login"
            className="px-5 py-[7px] text-[14px] font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Log in
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/register"
            className="px-5 py-[7px] text-[14px] font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
