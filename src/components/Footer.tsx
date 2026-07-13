import { useState } from 'react';
import { Mail, Phone, Clock, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import logoSquare from '../assets/logo_square.png';

export default function Footer() {
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
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">Plant TAT Monitor</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">Windshield Scanning</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">Boom Gate Controls</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">Occupancy Dashboard</a></li>
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
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">4G GPS Telemetry</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">School Bus Live Video</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">ADAS Forward Radar</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">Fuel Sentry Logs</a></li>
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
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">Bespoke Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">ERP Integrations (SAP)</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">API Developer Access</a></li>
                <li><a href="#services" className="hover:text-light-signal-orange transition-colors">White-label portals</a></li>
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

        {/* Bottom row (copyright + language dropdown + social icons + privacy info) */}
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
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Social media links using inline SVGs to prevent 404 pathing errors */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/JaiminPatel345/aahatec-website" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center border border-white/10 text-white cursor-pointer" aria-label="GitHub">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center border border-white/10 text-white cursor-pointer" aria-label="X">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center border border-white/10 text-white cursor-pointer" aria-label="Discord">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
              </a>
              <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center border border-white/10 text-white cursor-pointer" aria-label="Bluesky">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10.8c-2.3-4-6.1-6.8-10.2-6.8C.8 4 0 4.8 0 5.8c0 .9.5 1.8 1.4 2.2 1.9.9 4.3 1.8 4.3 5 0 2.2-1.3 2.9-2.9 3.2C1.4 16.5.6 17.5.6 18.6c0 1.2 1.1 2.2 2.7 2.2 4.1 0 7.9-2.8 10.2-6.8 2.3 4 6.1 6.8 10.2 6.8 1.6 0 2.7-1 2.7-2.2 0-1-.8-2.1-2.2-2.4-1.6-.3-2.9-1-2.9-3.2 0-3.2 2.4-4.1 4.3-5 .9-.4 1.4-1.3 1.4-2.2 0-1-.8-1.8-1.8-1.8-4.1 0-7.9 2.8-10.2 6.8z"/>
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              
              {/* Country select dropdown pill */}
              <div className="bg-neutral-900 border border-white/20 rounded-full px-4 py-1.5 text-white flex items-center gap-2 cursor-pointer hover:border-white transition-colors font-mono">
                <span>🌐 English (India)</span>
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
