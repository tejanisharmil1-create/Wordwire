"use client";

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const mockMarketData = [
  { symbol: 'S&P 500', value: '5,147.21', change: '+24.15', percentage: '+0.47%', status: 'open' },
  { symbol: 'NASDAQ', value: '16,215.34', change: '-12.45', percentage: '-0.08%', status: 'open' },
  { symbol: 'Dow Jones', value: '38,991.02', change: '+105.21', percentage: '+0.27%', status: 'open' },
  { symbol: 'FTSE 100', value: '7,921.45', change: '+45.10', percentage: '+0.57%', status: 'closed' },
  { symbol: 'DAX', value: '17,814.51', change: '-21.30', percentage: '-0.12%', status: 'closed' },
  { symbol: 'CAC 40', value: '8,012.33', change: '+11.20', percentage: '+0.14%', status: 'closed' },
  { symbol: 'Nikkei', value: '39,123.45', change: '+412.55', percentage: '+1.07%', status: 'closed' },
  { symbol: 'EUR/USD', value: '1.0845', change: '-0.0012', percentage: '-0.11%', status: 'open' },
  { symbol: 'Bitcoin', value: '68,412.00', change: '+1,245.00', percentage: '+1.85%', status: 'open' },
  { symbol: 'Gold', value: '2,175.40', change: '+14.20', percentage: '+0.66%', status: 'open' },
];

export default function MarketWidget() {
  const [data, setData] = useState(mockMarketData);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => 
        currentData.map(item => {
          if (item.status === 'closed') return item;
          
          const changeVal = (Math.random() - 0.5) * 5;
          const isPositive = changeVal >= 0;
          
          return {
            ...item,
            change: `${isPositive ? '+' : ''}${changeVal.toFixed(2)}`,
          };
        })
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white py-3 px-4 overflow-hidden border-b-4 border-gray-800">
      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
        <div className="flex items-center space-x-2 mr-4">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Markets</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        {data.map((market, index) => {
          const isPositive = market.change.startsWith('+');
          const isNegative = market.change.startsWith('-');
          
          return (
            <div key={index} className="flex items-center space-x-3 text-sm">
              <span className="font-bold tracking-wide">{market.symbol}</span>
              <span className="font-mono">{market.value}</span>
              <span className={`font-mono flex items-center ${isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-gray-400'}`}>
                {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : isNegative ? <TrendingDown className="w-3 h-3 mr-1" /> : <Minus className="w-3 h-3 mr-1" />}
                {market.change} ({market.percentage})
              </span>
              <span className="text-gray-600 px-2">|</span>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
