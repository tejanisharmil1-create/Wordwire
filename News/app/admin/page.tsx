import { BarChart3, Users, FileText, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Articles', value: '14,231', icon: FileText, change: '+124 this week' },
    { label: 'Active Users', value: '45.2K', icon: Users, change: '+2.4K this week' },
    { label: 'Ingestion Sources', value: '184', icon: AlertCircle, change: '3 failing' },
    { label: 'Page Views', value: '1.2M', icon: BarChart3, change: '+15% vs last week' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-black font-serif uppercase tracking-tighter mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">{stat.label}</h3>
                <Icon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-3xl font-bold font-mono mb-2">{stat.value}</div>
              <div className="text-xs font-semibold text-green-600 tracking-wide">{stat.change}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 p-6">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6 border-b border-gray-100 pb-2">
            Recent Ingestion Activity
          </h3>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex justify-between items-center text-sm border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                <div>
                  <span className="font-bold">Reuters API</span>
                  <span className="text-gray-500 ml-2">Fetched 15 new articles</span>
                </div>
                <span className="text-xs text-gray-400 font-mono">12 mins ago</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6 border-b border-gray-100 pb-2">
            Pending Editorial Review
          </h3>
          <ul className="space-y-4">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex flex-col space-y-2 text-sm border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                <span className="font-bold font-serif text-lg">AI Generated Summary for "France Budget Crisis"</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-orange-600 font-bold uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">Needs Human Approval</span>
                  <button className="text-xs font-bold bg-black text-white px-3 py-1 uppercase hover:bg-gray-800 transition-colors">
                    Review
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
