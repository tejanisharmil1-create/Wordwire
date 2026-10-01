import Link from 'next/link';
import { Share2, Bookmark, Printer, Volume2, Type, ArrowLeft } from 'lucide-react';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In a real app, fetch article by params.slug from database here
  
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb / Category */}
        <div className="mb-8 flex items-center justify-between border-b border-black pb-4">
          <Link href="/france" className="text-xs font-bold tracking-widest uppercase flex items-center hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            France &bull; Politics
          </Link>
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            Article ID: {params.slug}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black font-serif leading-[1.1] mb-6">
            Budget Talks Collapse Amid Historic Deficit
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-serif leading-relaxed mb-6">
            The coalition government faces an existential crisis as new spending measures fail to pass the assembly vote, sending shockwaves through European markets.
          </h2>

          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-y border-gray-200">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Jean-Luc+Dubois&background=random" alt="Jean-Luc Dubois" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <p className="text-sm font-bold tracking-wide uppercase">Jean-Luc Dubois</p>
                <p className="text-xs text-gray-500">Chief European Political Correspondent</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end text-xs text-gray-500 font-semibold tracking-wider space-y-1">
              <p>Published: October 1, 2026 at 10:42 AM</p>
              <p>Updated: October 1, 2026 at 11:15 AM</p>
              <p>Reading Time: 4 minutes</p>
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 mb-8 sticky top-[104px] bg-white z-40">
          <div className="flex space-x-4">
            <button aria-label="Share" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Share2 className="w-5 h-5" /></button>
            <button aria-label="Save" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Bookmark className="w-5 h-5" /></button>
          </div>
          <div className="flex space-x-4">
            <button aria-label="Listen" className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center text-xs font-bold uppercase tracking-wider"><Volume2 className="w-5 h-5 mr-2" /> Listen</button>
            <button aria-label="Print" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Printer className="w-5 h-5" /></button>
            <button aria-label="Text Size" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Type className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mb-10">
          <div className="aspect-[16/9] bg-gray-100 mb-3 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1549429177-3e1ee5b81a2e?w=1200&auto=format&fit=crop&q=80" alt="Assembly hall" className="w-full h-full object-cover grayscale" />
          </div>
          <figcaption className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase text-right">
            Photograph: Reuters / VANTOR Archival
          </figcaption>
        </figure>

        {/* Article Body */}
        <article className="prose prose-lg md:prose-xl font-serif max-w-none text-gray-800 prose-p:leading-relaxed prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-700 hover:prose-a:text-blue-900 prose-img:grayscale mb-12">
          
          <div className="p-4 bg-gray-50 border-l-4 border-black mb-8 not-prose">
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2 block">AI Summary</span>
            <p className="text-sm font-sans font-medium text-gray-700">
              The French government failed to pass its latest emergency budget bill on Thursday morning. The failure has prompted calls for a snap election and caused significant ripples across European financial markets, with the CAC 40 index dropping sharply.
            </p>
          </div>

          <p>
            <strong className="text-black font-sans uppercase text-sm tracking-wider mr-2">PARIS —</strong> 
            The coalition government's attempts to push through a highly contested emergency budget measure collapsed spectacularly early Thursday morning. After weeks of tense negotiations, the final assembly vote fell short by a slim margin, throwing the administration into deep political turmoil.
          </p>
          
          <p>
            Prime Minister's office released a brief statement confirming the failure of the bill but refused to comment immediately on the growing calls for a snap election. "The focus remains on stabilizing the national fiscal trajectory," the statement read. 
          </p>

          <h2>Market Reaction</h2>

          <p>
            The immediate fallout was felt acutely across financial markets. The CAC 40 index tumbled by over 1.5% in early trading, while French bond yields spiked to their highest levels in six months. Analysts warn that prolonged political instability could threaten France's sovereign debt rating.
          </p>

          <blockquote>
            "This isn't just a bump in the road; it's a fundamental crisis of governance at the worst possible time for the European economy." <br/>
            <cite>— Henri Laurent, Chief European Economist at VANTOR Intelligence</cite>
          </blockquote>

          <p>
            The opposition parties have already signaled their intent to call for a vote of no confidence next week. If successful, it would force the dissolution of the current government.
          </p>
        </article>

        {/* Footer info */}
        <div className="border-t-4 border-black pt-8 mb-12">
          <h3 className="text-xs font-bold tracking-widest uppercase mb-4">Editorial Notes</h3>
          <p className="text-xs text-gray-500 mb-2">Sources: Official Parliamentary Transcripts, VANTOR Financial Data</p>
          <p className="text-xs text-gray-500 mb-2">Editor: M. V.</p>
          <p className="text-xs text-gray-500">For corrections or feedback, please contact <a href="#" className="underline">editorial@vantor.com</a>.</p>
        </div>

        {/* Related Stories */}
        <section>
          <h3 className="text-2xl font-black font-serif border-b border-gray-200 pb-4 mb-6">Related Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="group cursor-pointer">
                <span className="text-[10px] font-bold tracking-widest text-red-700 uppercase">FRANCE &bull; ECONOMY</span>
                <h4 className="text-lg font-bold font-serif leading-snug mt-1 group-hover:text-gray-600 transition-colors">
                  What a snap election means for the Eurozone
                </h4>
                <p className="text-sm text-gray-600 mt-2">An in-depth look at the potential economic consequences.</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
