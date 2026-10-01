"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Filter } from 'lucide-react';

const mockLiveEvents = [
  { id: 1, headline: 'Parliament votes on emergency tax measure', country: 'FRANCE', category: 'POLITICS', time: '10:42 AM' },
  { id: 2, headline: 'Tech CEO testifies before Congress', country: 'USA', category: 'TECHNOLOGY', time: '10:38 AM' },
  { id: 3, headline: 'Market opens with significant tech sell-off', country: 'USA', category: 'MARKETS', time: '10:30 AM' },
  { id: 4, headline: 'Central Bank press conference begins', country: 'INDIA', category: 'ECONOMY', time: '10:15 AM' },
  { id: 5, headline: 'Energy grid operator issues winter warning', country: 'GERMANY', category: 'ENERGY', time: '09:55 AM' },
];

export default function LiveStream() {
  const [filter, setFilter] = useState('ALL');

  return (
    <div className="bg-gray-50 border border-gray-200 p-6 h-full">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <h2 className="font-bold tracking-widest text-sm uppercase">Live Now</h2>
        </div>
        <button className="text-gray-500 hover:text-black transition-colors">
          <Filter className="w-4 h-4" />
        </button>
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {['ALL', 'POLITICS', 'MARKETS', 'TECHNOLOGY'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase border ${
              filter === f 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {mockLiveEvents
          .filter(e => filter === 'ALL' || e.category === filter)
          .map((event) => (
          <div key={event.id} className="relative flex items-start pl-8 md:pl-0">
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-black -translate-x-1.5 md:-translate-x-2 z-10 mt-1"></div>
            
            <div className="bg-white p-4 border border-gray-200 shadow-sm w-full group hover:border-gray-400 transition-colors md:w-[calc(50%-2rem)] md:ml-auto md:even:ml-0 md:even:mr-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-widest text-red-700 uppercase">
                  {event.country} &bull; {event.category}
                </span>
                <span className="text-[10px] text-gray-500 font-semibold">{event.time}</span>
              </div>
              <Link href={`/live/${event.id}`}>
                <h3 className="font-bold font-serif leading-snug group-hover:text-gray-600 transition-colors">
                  {event.headline}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 text-xs font-bold tracking-widest uppercase border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
        Load More Updates
      </button>
    </div>
  );
}
