import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoSquare from '../assets/logo_square.png';

interface NavbarProps {
  onNavigate: (view: 'home' | 'privacy' | 'terms', sectionId?: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 md:px-6 pt-6">
      <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.04)] max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between border border-ink-black/[0.03]">
        
        {/* Logo with actual AAHA GPS logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 group flex-shrink-0 cursor-pointer focus:outline-none"
        >
          <img src={logoSquare} className="w-9 h-9 object-contain" alt="AAHATEC Logo" />
          <span className="font-bold text-lg tracking-tight font-mark text-ink-black">
            AAHA<span className="text-signal-orange font-normal">TEC</span>
          </span>
        </button>

        {/* Desktop Nav Links (Rendered Unconditionally) */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => onNavigate('home', 'services')} 
            className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors cursor-pointer focus:outline-none bg-transparent border-0"
          >
            Solutions
          </button>
          <button 
            onClick={() => onNavigate('home', 'products')} 
            className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors cursor-pointer focus:outline-none bg-transparent border-0"
          >
            Products
          </button>
          <button 
            onClick={() => onNavigate('home', 'estimator')} 
            className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors cursor-pointer focus:outline-none bg-transparent border-0"
          >
            Cost Estimator
          </button>
          <button 
            onClick={() => onNavigate('home', 'contact')} 
            className="text-base font-medium text-ink-black hover:text-signal-orange transition-colors cursor-pointer focus:outline-none bg-transparent border-0"
          >
            Contact
          </button>
        </div>

        {/* Action triggers: CTA & Mobile Burger */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home', 'estimator')}
            className="hidden sm:inline-flex bg-ink-black text-canvas-cream px-6 py-2 rounded-[20px] font-medium text-sm hover:opacity-90 transition-opacity border border-ink-black cursor-pointer"
          >
            Get Quote
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 rounded-full hover:bg-canvas-cream/50 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown inside a matching pill */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white rounded-[24px] shadow-lg p-6 border border-ink-black/5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home', 'services');
              }}
              className="text-lg font-medium py-2 border-b border-canvas-cream text-ink-black hover:text-signal-orange text-left w-full cursor-pointer focus:outline-none bg-transparent border-0"
            >
              Solutions
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home', 'products');
              }}
              className="text-lg font-medium py-2 border-b border-canvas-cream text-ink-black hover:text-signal-orange text-left w-full cursor-pointer focus:outline-none bg-transparent border-0"
            >
              Products
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home', 'estimator');
              }}
              className="text-lg font-medium py-2 border-b border-canvas-cream text-ink-black hover:text-signal-orange text-left w-full cursor-pointer focus:outline-none bg-transparent border-0"
            >
              Cost Estimator
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home', 'contact');
              }}
              className="text-lg font-medium py-2 text-ink-black hover:text-signal-orange text-left w-full cursor-pointer focus:outline-none bg-transparent border-0"
            >
              Contact
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home', 'estimator');
              }}
              className="bg-ink-black text-canvas-cream text-center py-3 rounded-[20px] font-medium mt-2 cursor-pointer w-full border-0"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
