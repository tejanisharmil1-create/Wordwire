import HeroGrid from "@/components/home/HeroGrid";
import LiveStream from "@/components/ui/LiveStream";

export default function CountryPage({ params }: { params: { country: string } }) {
  const countryName = params.country.toUpperCase();

  return (
    <div className="bg-white">
      {/* Country Header */}
      <div className="w-full border-b border-black py-8 px-4 md:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-serif">
            {countryName}
          </h1>
          <div className="flex space-x-6 mt-6 text-xs font-bold tracking-widest uppercase text-gray-500">
            <a href="#" className="hover:text-black transition-colors text-black">Latest</a>
            <a href="#" className="hover:text-black transition-colors">Politics</a>
            <a href="#" className="hover:text-black transition-colors">Economy</a>
            <a href="#" className="hover:text-black transition-colors">Business</a>
            <a href="#" className="hover:text-black transition-colors">Markets</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row mt-8">
        {/* Main Content Area */}
        <div className="w-full xl:w-3/4">
          <div className="px-4 md:px-8 mb-6">
            <h2 className="text-2xl font-bold font-serif border-b border-gray-200 pb-2">Top Stories in {params.country}</h2>
          </div>
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
