import Link from 'next/link';

export default function BreakingNews() {
  return (
    <div className="w-full bg-red-700 text-white px-4 py-2 flex items-center md:px-8 border-b-4 border-red-900">
      <div className="flex items-center space-x-4">
        <span className="font-bold tracking-widest text-xs uppercase animate-pulse">Breaking</span>
        <span className="text-gray-300">|</span>
        <Link href="/article/1" className="text-sm font-medium hover:underline truncate max-w-[250px] md:max-w-2xl">
          Budget Talks Collapse Amid Historic Deficit - New elections potentially on the horizon
        </Link>
        <span className="text-xs text-red-200 hidden md:inline-block">2 min ago</span>
      </div>
    </div>
  );
}
