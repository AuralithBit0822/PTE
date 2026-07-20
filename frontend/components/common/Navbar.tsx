'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Practice', href: '/practice' },
    { name: 'Mock Test', href: '/mock-test' },
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="w-full bg-[#F5F3FF] sticky top-0 z-50">
      <div className="h-[65px] px-8 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/images/image_ada94b1b 1.png" alt="PTE Prep" width={50} height={50} className="rounded-full bg-[rgba(74,45,219,0.2)]" />
          <span className="text-[22px] font-[800] tracking-tight">
            <span className="text-indigo-600">PTE.</span>
            <span className="text-indigo-600">Prep</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[18px] font-bold pb-0.5 transition-all duration-150 ${
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
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
          <div className="flex items-center gap-9 bg-gray-50 border border-gray-200 rounded-lg px-3 py-[7px] hover:border-indigo-300 transition-colors">
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
