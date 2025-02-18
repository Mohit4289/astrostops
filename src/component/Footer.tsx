import { Link } from 'react-router-dom';
import { LuTent } from 'react-icons/lu';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <LuTent className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">AstroStops</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Twitter
            </a>
          </div>
        </div>
        <hr className="border-gray-700 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Cancellation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest offers and news</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-blue-600 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm">
          <p>&copy; 2025 AstroStops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
