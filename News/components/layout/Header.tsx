import Link from 'next/link';
import { Search, Menu, User, TrendingUp } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold tracking-widest uppercase border-b border-gray-100 md:px-8">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-red-600">
            <span className="w-2 h-2 mr-2 bg-red-600 rounded-full animate-pulse"></span>
            LIVE
          </span>
          <span className="hidden text-gray-500 md:inline-block">Breaking News</span>
        </div>
        
        {/* Centered Logo on Desktop, Left on Mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-3xl font-black tracking-tighter uppercase font-serif">
            VANTOR
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/markets" className="hidden md:flex items-center text-gray-600 hover:text-black transition-colors">
            <TrendingUp className="w-4 h-4 mr-1" />
            Markets
          </Link>
          <button aria-label="Search" className="text-gray-600 hover:text-black transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-black transition-colors">Sign In</Link>
            <Link href="/subscribe" className="px-4 py-1 text-white bg-black border border-black hover:bg-transparent hover:text-black transition-colors">
              Subscribe
            </Link>
          </div>
          <button aria-label="Menu" className="md:hidden text-black">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:flex items-center justify-center py-3 space-x-6 text-sm font-semibold tracking-wide uppercase bg-white">
        <Link href="/world" className="hover:text-gray-500 transition-colors">World</Link>
        <Link href="/france" className="hover:text-gray-500 transition-colors">France</Link>
        <Link href="/usa" className="hover:text-gray-500 transition-colors">USA</Link>
        <Link href="/canada" className="hover:text-gray-500 transition-colors">Canada</Link>
        <Link href="/germany" className="hover:text-gray-500 transition-colors">Germany</Link>
        <Link href="/uk" className="hover:text-gray-500 transition-colors">UK</Link>
        <Link href="/spain" className="hover:text-gray-500 transition-colors">Spain</Link>
        <Link href="/australia" className="hover:text-gray-500 transition-colors">Australia</Link>
        <Link href="/india" className="hover:text-gray-500 transition-colors">India</Link>
        <span className="text-gray-300">|</span>
        <Link href="/business" className="hover:text-gray-500 transition-colors">Business</Link>
        <Link href="/technology" className="hover:text-gray-500 transition-colors">Tech</Link>
        <Link href="/politics" className="hover:text-gray-500 transition-colors">Politics</Link>
        <Link href="/markets" className="hover:text-gray-500 transition-colors">Markets</Link>
      </nav>
    </header>
  );
}
