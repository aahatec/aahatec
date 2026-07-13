import { useState } from 'react';
import { Mail, Phone, Clock, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import logoSquare from '../assets/logo_square.png';

interface FooterProps {
  onNavigate: (view: 'home' | 'privacy' | 'terms', sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    rfid: false,
    tracking: false,
    custom: false,
    help: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-ink-black text-white pt-24 pb-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start text-left">
          {/* Conversational H2 on the left */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-6 max-w-md">
              We're always here when you need us. Let's trace.
            </h2>
            <p className="text-base md:text-lg text-neutral-400 font-normal leading-relaxed max-w-sm mb-8">
              Ready to secure your transport fleets, automate manufacturing TAT logs, or draft custom API plugins? Our system is online.
            </p>
            
            {/* WhatsApp direct block */}
            <a 
              href="https://wa.me/919427596900?text=Hi%20AAHATEC!%20I%20found%20you%20on%20your%20website%20and%20would%20like%20to%20discuss%20your%20products." 
              target="_blank"
              rel="noreferrer"
              className="bg-white text-ink-black hover:bg-canvas-cream font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              Start Instant Negotiation <ArrowRight size={16} />
            </a>
          </div>

          {/* 4 columns link grid with mobile accordion functionality */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            
            {/* Column 1: RFID AUTOMATION */}
            <div className="border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
              <button 
                onClick={() => toggleSection('rfid')}
                className="w-full flex justify-between items-center md:block text-left cursor-pointer md:cursor-default py-2 md:py-0"
              >
                <h5 className="text-xs md:text-sm font-bold uppercase tracking-[0.08em] text-neutral-400">
                  RFID AUTOMATION
                </h5>
                <span className="md:hidden">
                  {expandedSections.rfid ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              <ul className={`space-y-4 text-base font-normal text-white/80 mt-4 md:mt-6 transition-all duration-300 ${
                expandedSections.rfid ? 'block' : 'hidden md:block'
              }`}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">Plant TAT Monitor</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">Windshield Scanning</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">Boom Gate Controls</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">Occupancy Dashboard</a></li>
              </ul>
            </div>

            {/* Column 2: VEHICLE TRACKING */}
            <div className="border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
              <button 
                onClick={() => toggleSection('tracking')}
                className="w-full flex justify-between items-center md:block text-left cursor-pointer md:cursor-default py-2 md:py-0"
              >
                <h5 className="text-xs md:text-sm font-bold uppercase tracking-[0.08em] text-neutral-400">
                  VEHICLE TRACKING
                </h5>
                <span className="md:hidden">
                  {expandedSections.tracking ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              <ul className={`space-y-4 text-base font-normal text-white/80 mt-4 md:mt-6 transition-all duration-300 ${
                expandedSections.tracking ? 'block' : 'hidden md:block'
              }`}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">4G GPS Telemetry</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">School Bus Live Video</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">ADAS Forward Radar</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">Fuel Sentry Logs</a></li>
              </ul>
            </div>

            {/* Column 3: CUSTOM SOLUTIONS */}
            <div className="border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
              <button 
                onClick={() => toggleSection('custom')}
                className="w-full flex justify-between items-center md:block text-left cursor-pointer md:cursor-default py-2 md:py-0"
              >
                <h5 className="text-xs md:text-sm font-bold uppercase tracking-[0.08em] text-neutral-400">
                  CUSTOM SOLUTIONS
                </h5>
                <span className="md:hidden">
                  {expandedSections.custom ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              <ul className={`space-y-4 text-base font-normal text-white/80 mt-4 md:mt-6 transition-all duration-300 ${
                expandedSections.custom ? 'block' : 'hidden md:block'
              }`}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">Bespoke Mobile Apps</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">ERP Integrations (SAP)</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">API Developer Access</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }} className="hover:text-light-signal-orange transition-colors">White-label portals</a></li>
              </ul>
            </div>

            {/* Column 4: NEED HELP? */}
            <div className="pb-4 md:pb-0">
              <button 
                onClick={() => toggleSection('help')}
                className="w-full flex justify-between items-center md:block text-left cursor-pointer md:cursor-default py-2 md:py-0"
              >
                <h5 className="text-xs md:text-sm font-bold uppercase tracking-[0.08em] text-neutral-400">
                  NEED HELP?
                </h5>
                <span className="md:hidden">
                  {expandedSections.help ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              <ul className={`space-y-4 text-base font-normal text-white/80 mt-4 md:mt-6 transition-all duration-300 ${
                expandedSections.help ? 'block' : 'hidden md:block'
              }`}>
                <li className="flex items-center gap-2"><Phone size={14} className="text-signal-orange" /><a href="tel:+919427596900" className="hover:text-light-signal-orange transition-colors">Call Helpdesk ↗</a></li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-signal-orange" /><a href="mailto:support@aahatec.com" className="hover:text-light-signal-orange transition-colors">Write Email ↗</a></li>
                <li className="flex items-center gap-2"><Clock size={14} className="text-signal-orange" /><span>24/7 Monitoring</span></li>
                <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-signal-orange" /><span>ISO 27001 Certified</span></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom row (copyright + privacy info) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 text-left">
          <div className="flex items-start gap-4">
            <img src={logoSquare} className="w-10 h-10 object-contain brightness-0 invert opacity-75 mt-0.5" alt="AAHATEC Logo" />
            <div>
              <p className="font-normal text-sm">&copy; {new Date().getFullYear()} AAHATEC & Automation Services Private Limited. All rights reserved.</p>
              <p className="mt-2 text-xs font-normal leading-relaxed text-neutral-500 max-w-xl">
                All tracking statistics, estimated prices, and calculations simulated above represent default estimates. Final hardware configurations are drafted upon formal site survey clearances. Deployed in collaboration with our enterprise transport partners like Tata Motors across 20 Indian states with 50,000+ active tracking units.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} 
              className="hover:text-white transition-colors cursor-pointer text-sm font-normal text-neutral-400"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} 
              className="hover:text-white transition-colors cursor-pointer text-sm font-normal text-neutral-400"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
