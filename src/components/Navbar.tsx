import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logoSquare from '../assets/logo_square.png';

interface NavbarProps {
  onEstimatorScroll: () => void;
}

export default function Navbar({ onEstimatorScroll }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 px-4 md:px-6 pt-6">
      <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.04)] max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between border border-ink-black/[0.03]">
        
        {/* Logo with actual AAHA GPS logo */}
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <img src={logoSquare} className="w-9 h-9 object-contain" alt="AAHATEC Logo" />
          <span className="font-bold text-lg tracking-tight font-mark text-ink-black">
            AAHA<span className="text-signal-orange font-normal">TEC</span>
          </span>
        </a>

        {/* Desktop Nav Links (Hidden if search is expanded) */}
        {!isSearchExpanded ? (
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors">Solutions</a>
            <a href="#products" className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors">Products</a>
            <a href="#estimator" className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors">Cost Estimator</a>
            <a href="#contact" className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors">Contact</a>
          </div>
        ) : (
          <div className="hidden md:flex flex-grow max-w-md mx-8 animate-in fade-in slide-in-from-right-4 duration-200">
            <input 
              type="text" 
              placeholder="Search solutions, products, telemetry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-canvas-cream border border-ink-black/20 rounded-full px-5 py-1.5 text-sm focus:outline-none focus:border-signal-orange"
              autoFocus
            />
          </div>
        )}

        {/* Action triggers: Search, CTA & Mobile Burger */}
        <div className="flex items-center gap-4">
          
          {/* Search Toggle Button */}
          <button 
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            className="p-2 rounded-full hover:bg-canvas-cream/50 transition-colors cursor-pointer text-ink-black"
            aria-label="Toggle search"
          >
            {isSearchExpanded ? <X size={20} /> : <Search size={20} />}
          </button>

          <button 
            onClick={onEstimatorScroll}
            className="hidden sm:inline-flex bg-ink-black text-canvas-cream px-6 py-2 rounded-[20px] font-medium text-sm hover:opacity-90 transition-opacity border border-ink-black cursor-pointer"
          >
            Get Quote
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 rounded-full hover:bg-canvas-cream/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown inside a matching pill */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white rounded-[24px] shadow-lg p-6 border border-ink-black/5 animate-in fade-in slide-in-from-top-4 duration-200">
          
          {/* Mobile search */}
          <div className="mb-4 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Search..."
              className="w-full bg-canvas-cream border border-ink-black/15 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-signal-orange"
            />
            <button className="p-2 bg-canvas-cream rounded-full">
              <Search size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href="#services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-canvas-cream text-ink-black hover:text-signal-orange"
            >
              Solutions
            </a>
            <a 
              href="#products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-canvas-cream text-ink-black hover:text-signal-orange"
            >
              Products
            </a>
            <a 
              href="#estimator" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-canvas-cream text-ink-black hover:text-signal-orange"
            >
              Cost Estimator
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium py-2 text-ink-black hover:text-signal-orange"
            >
              Contact
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onEstimatorScroll();
              }}
              className="bg-ink-black text-canvas-cream text-center py-3 rounded-[20px] font-medium mt-2 cursor-pointer w-full"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
