"use client";

import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

const majorIndices = [
  { name: 'S&P 500', value: '5,147.21', change: '+24.15', pct: '+0.47%', status: 'Open' },
  { name: 'Dow Jones', value: '38,991.02', change: '+105.21', pct: '+0.27%', status: 'Open' },
  { name: 'NASDAQ', value: '16,215.34', change: '-12.45', pct: '-0.08%', status: 'Open' },
  { name: 'FTSE 100', value: '7,921.45', change: '+45.10', pct: '+0.57%', status: 'Closed' },
  { name: 'DAX', value: '17,814.51', change: '-21.30', pct: '-0.12%', status: 'Closed' },
  { name: 'CAC 40', value: '8,012.33', change: '+11.20', pct: '+0.14%', status: 'Closed' },
  { name: 'Nikkei 225', value: '39,123.45', change: '+412.55', pct: '+1.07%', status: 'Closed' },
];

const commodities = [
  { name: 'Crude Oil (WTI)', value: '$81.40', change: '+1.15', pct: '+1.43%' },
  { name: 'Brent Crude', value: '$85.34', change: '+1.02', pct: '+1.21%' },
  { name: 'Gold (COMEX)', value: '$2,175.40', change: '+14.20', pct: '+0.66%' },
  { name: 'Silver', value: '$24.50', change: '+0.30', pct: '+1.24%' },
];

const currencies = [
  { name: 'EUR/USD', value: '1.0845', change: '-0.0012', pct: '-0.11%' },
  { name: 'GBP/USD', value: '1.2678', change: '+0.0021', pct: '+0.16%' },
  { name: 'USD/JPY', value: '148.50', change: '+0.45', pct: '+0.30%' },
  { name: 'Bitcoin/USD', value: '68,412.00', change: '+1,245.00', pct: '+1.85%' },
];

export default function MarketDashboard() {
  const renderCard = (item: any) => {
    const isPos = item.change.startsWith('+');
    return (
      <div key={item.name} className="border border-gray-200 p-4 hover:border-gray-400 transition-colors bg-white">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold tracking-wide">{item.name}</span>
          {item.status && (
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {item.status}
            </span>
          )}
        </div>
        <div className="text-2xl font-mono mb-2">{item.value}</div>
        <div className={`font-mono flex items-center text-sm font-semibold ${isPos ? 'text-green-600' : 'text-red-600'}`}>
          {isPos ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
          {item.change} ({item.pct})
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 border-b border-black">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-serif mb-4">
          Markets
        </h1>
        <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">
          Live financial data and analytics from global exchanges
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 space-y-12">
        <section>
          <h2 className="text-xl font-bold font-serif mb-6 pb-2 border-b border-gray-200 uppercase tracking-wide">
            Global Indices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {majorIndices.map(renderCard)}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold font-serif mb-6 pb-2 border-b border-gray-200 uppercase tracking-wide">
            Commodities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {commodities.map(renderCard)}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold font-serif mb-6 pb-2 border-b border-gray-200 uppercase tracking-wide">
            Currencies & Crypto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {currencies.map(renderCard)}
          </div>
        </section>
      </div>
    </div>
  );
}
