import HeroGrid from "@/components/home/HeroGrid";
import LiveStream from "@/components/ui/LiveStream";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Latest Ticker Area */}
      <div className="w-full border-b border-gray-200 py-2 px-4 md:px-8 bg-gray-50 flex items-center overflow-hidden">
        <span className="text-[10px] font-black tracking-widest uppercase mr-4 shrink-0">LATEST</span>
        <div className="flex space-x-6 text-xs font-semibold tracking-wide uppercase whitespace-nowrap overflow-x-auto scrollbar-hide text-gray-600">
          <Link href="/article/1" className="hover:text-black">France Budget Talks</Link>
          <span className="text-gray-300">|</span>
          <Link href="/article/2" className="hover:text-black">US Markets</Link>
          <span className="text-gray-300">|</span>
          <Link href="/article/3" className="hover:text-black">India Economy</Link>
          <span className="text-gray-300">|</span>
          <Link href="/article/4" className="hover:text-black">Germany Industry</Link>
          <span className="text-gray-300">|</span>
          <Link href="/article/5" className="hover:text-black">UK Politics</Link>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row">
        {/* Main Content Area */}
        <div className="w-full xl:w-3/4">
          <HeroGrid />
        </div>
        
        {/* Right Sidebar - Live Stream */}
        <aside className="w-full xl:w-1/4 border-t xl:border-t-0 xl:border-l border-gray-200">
          <LiveStream />
        </aside>
      </div>
    </div>
  );
}
