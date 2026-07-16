import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PTE Prep — AI-Powered PTE Practice Platform',
  description:
    'Master every section with AI-powered feedback, realistic mock tests, and personalized PTE preparation. Join 50,000+ happy students worldwide.',
  keywords: 'PTE, PTE preparation, PTE practice, AI feedback, mock test, PTE score, English proficiency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
