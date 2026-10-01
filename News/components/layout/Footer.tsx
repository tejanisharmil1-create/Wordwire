import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-4 py-12 mt-16 bg-black text-white md:px-8 border-t-4 border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1">
          <Link href="/" className="text-4xl font-black tracking-tighter uppercase font-serif mb-4 block">
            VANTOR
          </Link>
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Global News. Clearly Told.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold uppercase text-xs tracking-wider text-gray-500">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-2">Get the latest briefs directly to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-3 py-2 text-black bg-white focus:outline-none"
              />
              <button className="px-4 py-2 font-bold text-white bg-gray-800 hover:bg-gray-700 transition-colors uppercase text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Links: About & Legal */}
        <div className="col-span-1">
          <h4 className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">Organization</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white transition-colors">About Vantor</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/editorial-standards" className="hover:text-white transition-colors">Editorial Standards</Link></li>
            <li><Link href="/corrections" className="hover:text-white transition-colors">Corrections Policy</Link></li>
            <li><Link href="/ai-policy" className="hover:text-white transition-colors">AI Policy</Link></li>
          </ul>
        </div>

        {/* Links: Legal & Support */}
        <div className="col-span-1">
          <h4 className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">Legal & Support</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
            <li><Link href="/advertising" className="hover:text-white transition-colors">Advertising</Link></li>
          </ul>
        </div>

        {/* Links: Countries */}
        <div className="col-span-1">
          <h4 className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">Editions</h4>
          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
            <li><Link href="/world" className="hover:text-white transition-colors">World</Link></li>
            <li><Link href="/france" className="hover:text-white transition-colors">France</Link></li>
            <li><Link href="/usa" className="hover:text-white transition-colors">USA</Link></li>
            <li><Link href="/canada" className="hover:text-white transition-colors">Canada</Link></li>
            <li><Link href="/germany" className="hover:text-white transition-colors">Germany</Link></li>
            <li><Link href="/uk" className="hover:text-white transition-colors">UK</Link></li>
            <li><Link href="/spain" className="hover:text-white transition-colors">Spain</Link></li>
            <li><Link href="/australia" className="hover:text-white transition-colors">Australia</Link></li>
            <li><Link href="/india" className="hover:text-white transition-colors">India</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} VANTOR. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">X</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
