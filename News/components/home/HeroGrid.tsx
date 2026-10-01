import Link from 'next/link';

// Mock data to illustrate the grid
const stories = [
  {
    id: '1',
    category: 'FRANCE',
    headline: 'Budget Talks Collapse Amid Historic Deficit',
    summary: 'The coalition government faces an existential crisis as new spending measures fail to pass the assembly vote, sending shockwaves through European markets.',
    author: 'Jean-Luc Dubois',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1549429177-3e1ee5b81a2e?w=800&auto=format&fit=crop&q=60',
    size: 'large'
  },
  {
    id: '2',
    category: 'MARKETS',
    headline: 'Tech Stocks Tumble as Yields Surge',
    summary: 'Investors retreat from megacap technology firms.',
    author: 'Sarah Chen',
    time: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    category: 'INDIA',
    headline: 'Central Bank Surprises With Rate Hold',
    summary: 'Reserve Bank officials cite resilient growth against inflation.',
    author: 'Raj Patel',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    category: 'ENERGY',
    headline: 'European Gas Prices Hit Six-Month High',
    summary: 'Supply constraints in Norway rattle regional energy buyers ahead of winter.',
    author: 'Elena Rostova',
    time: '6 hours ago',
  },
  {
    id: '5',
    category: 'TECHNOLOGY',
    headline: 'New AI Regulations Passed in Brussels',
    summary: 'Strict oversight rules for foundational models implemented.',
    author: 'Michael Schmidt',
    time: '7 hours ago',
  }
];

export default function HeroGrid() {
  const mainStory = stories[0];
  const sideStories = stories.slice(1, 3);
  const bottomStories = stories.slice(3, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 px-4 md:px-8 max-w-[1600px] mx-auto">
      {/* Main Story (Takes up 8 columns on large screens) */}
      <article className="lg:col-span-8 group cursor-pointer border-b md:border-b-0 md:border-r border-gray-200 pr-0 md:pr-8 pb-8 md:pb-0">
        <Link href={`/article/${mainStory.id}`}>
          <div className="overflow-hidden mb-4 relative aspect-[16/9] bg-gray-100">
            {mainStory.image && (
              <img 
                src={mainStory.image} 
                alt={mainStory.headline}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
              />
            )}
          </div>
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-red-700 uppercase">{mainStory.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight group-hover:text-gray-700 transition-colors">
              {mainStory.headline}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {mainStory.summary}
            </p>
            <div className="flex items-center text-xs text-gray-500 font-semibold uppercase tracking-wider space-x-4 pt-4 border-t border-gray-100 mt-4">
              <span>By {mainStory.author}</span>
              <span>&bull;</span>
              <span>{mainStory.time}</span>
            </div>
          </div>
        </Link>
      </article>

      {/* Side Stories (Takes up 4 columns) */}
      <div className="lg:col-span-4 flex flex-col space-y-8">
        {sideStories.map((story) => (
          <article key={story.id} className="group cursor-pointer border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
            <Link href={`/article/${story.id}`}>
              {story.image && (
                <div className="overflow-hidden mb-3 relative aspect-video bg-gray-100">
                  <img 
                    src={story.image} 
                    alt={story.headline}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              )}
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-red-700 uppercase">{story.category}</span>
                <h2 className="text-2xl font-bold font-serif leading-snug group-hover:text-gray-700 transition-colors">
                  {story.headline}
                </h2>
                <p className="text-sm text-gray-600">
                  {story.summary}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Bottom Stories (Full width, divided into columns) */}
      <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
        {bottomStories.map((story) => (
          <article key={story.id} className="group cursor-pointer">
            <Link href={`/article/${story.id}`}>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-red-700 uppercase">{story.category}</span>
                <h3 className="text-xl font-bold font-serif leading-snug group-hover:text-gray-700 transition-colors">
                  {story.headline}
                </h3>
                <p className="text-sm text-gray-600">
                  {story.summary}
                </p>
                <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider pt-2">
                  {story.time}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
