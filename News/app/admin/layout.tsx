import Link from 'next/link';
import { Home, FileText, Activity, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col fixed h-full z-50">
        <div className="p-6 border-b border-gray-800">
          <Link href="/" className="text-2xl font-black font-serif uppercase tracking-tighter">
            VANTOR
          </Link>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">CMS Admin</p>
        </div>
        <nav className="flex-1 py-6 space-y-1">
          <Link href="/admin" className="flex items-center px-6 py-3 text-sm font-semibold tracking-wide text-gray-300 hover:bg-gray-900 hover:text-white transition-colors">
            <Home className="w-4 h-4 mr-3" /> Dashboard
          </Link>
          <Link href="/admin/articles" className="flex items-center px-6 py-3 text-sm font-semibold tracking-wide text-gray-300 hover:bg-gray-900 hover:text-white transition-colors">
            <FileText className="w-4 h-4 mr-3" /> Articles
          </Link>
          <Link href="/admin/sources" className="flex items-center px-6 py-3 text-sm font-semibold tracking-wide text-gray-300 hover:bg-gray-900 hover:text-white transition-colors">
            <Activity className="w-4 h-4 mr-3" /> Sources & Ingestion
          </Link>
          <Link href="/admin/users" className="flex items-center px-6 py-3 text-sm font-semibold tracking-wide text-gray-300 hover:bg-gray-900 hover:text-white transition-colors">
            <Users className="w-4 h-4 mr-3" /> Users
          </Link>
          <Link href="/admin/settings" className="flex items-center px-6 py-3 text-sm font-semibold tracking-wide text-gray-300 hover:bg-gray-900 hover:text-white transition-colors">
            <Settings className="w-4 h-4 mr-3" /> Settings
          </Link>
        </nav>
        <div className="p-6 border-t border-gray-800">
          <button className="flex items-center text-sm font-semibold tracking-wide text-red-500 hover:text-red-400 transition-colors w-full">
            <LogOut className="w-4 h-4 mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
