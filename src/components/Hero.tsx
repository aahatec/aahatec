import { ArrowRight, Cpu } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onEstimateCost: () => void;
}

export default function Hero({ onExploreProducts, onEstimateCost }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-104px)] flex items-center overflow-hidden py-12 md:py-16">
      
      {/* Background radial soft light for depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-signal-orange/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-light-signal-orange/5 blur-[100px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow Label with tiny accent dot + uppercase bold tracking */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-signal-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-gray">
                • LEADING AUTOMATION & TELEMATICS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-ink-black mb-8">
              Smarter Fleet Safety & RFID Logistics
            </h1>
            
            <p className="text-lg text-slate-gray leading-relaxed font-normal max-w-xl mb-10">
              AAHA GPS specializes in high-fidelity vehicle tracking, active school bus live camera feeds, and ADAS collision warnings. Our customized RFID integrations streamline truck turnaround times (TAT) and parking networks.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={onExploreProducts}
                className="bg-ink-black text-canvas-cream hover:bg-neutral-800 font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                Explore Products <ArrowRight size={16} />
              </button>
              
              <button 
                onClick={onEstimateCost}
                className="bg-white text-ink-black border border-ink-black/10 hover:border-ink-black/25 font-semibold text-sm px-8 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                Estimate Cost
              </button>
            </div>
          </div>

          {/* Right Dashboard Visuals Container */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[40px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.06)] border border-white/50">
              
              {/* Simulated Vehicle Dashboard / Map Background - Solid Ink-Black for High Contrast */}
              <div className="absolute inset-0 bg-[#141413] flex flex-col justify-between p-5 md:p-6 text-canvas-cream">
                
                 {/* Dashboard Header */}
                <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2 gap-3 overflow-hidden">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
                    <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap truncate">AAHA GPS CLOUD CONNECT</span>
                  </div>
                  <span className="text-[9px] sm:text-xs text-canvas-cream/70 font-mono whitespace-nowrap flex-shrink-0">LAT: 19.0760° N | LON: 72.8777° E</span>
                </div>

                {/* Big Dashboard Visuals - Live Route Map Tracker */}
                <div className="my-auto w-full flex flex-col items-center py-1">
                  <div className="relative w-full max-w-[380px] h-[150px] bg-neutral-950 border border-white/10 rounded-[28px] overflow-hidden p-4 shadow-inner">
                    {/* Map Grid Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                    
                    {/* Route Path Graphic */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 150">
                      {/* Glow Filter for Active Route */}
                      <defs>
                        <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        
                        {/* Map point marker gradient */}
                        <radialGradient id="pointGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FF7A45" />
                          <stop offset="100%" stopColor="#D94600" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      
                      {/* Abstract Map Background Roads / Topography (gives it a real map feel) */}
                      <path d="M 0 50 Q 120 70 200 20 T 340 90" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                      <path d="M 100 0 Q 120 120 80 150" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="4" />
                      <path d="M 240 0 Q 200 90 280 150" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="4" />
                      
                      {/* Abstract landmass / park outline */}
                      <path d="M 50 20 Q 90 10 110 50 T 60 70 Z" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />
                      <path d="M 220 100 Q 270 110 250 140 T 200 135 Z" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />

                      {/* Static Route Guideline */}
                      <path 
                        d="M 40 110 C 90 30 150 140 210 50 C 240 10 280 60 300 80" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.08)" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                      />
                      
                      {/* Animated Glowing Active Track Line (Draws behind wheels) */}
                      <path 
                        d="M 40 110 C 90 30 150 140 210 50 C 240 10 280 60 300 80" 
                        fill="none" 
                        stroke="#F37338" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        filter="url(#routeGlow)"
                        strokeDasharray="300"
                        strokeDashoffset="300"
                        className="animate-route-draw"
                      />
                      
                      {/* Source Node (Start Point A - Fully Connected) */}
                      <circle cx="40" cy="110" r="5" fill="#F37338" />
                      <circle cx="40" cy="110" r="12" fill="url(#pointGrad)" className="animate-ping opacity-45" />
                      
                      {/* Destination Node (End Point B - Fully Connected) */}
                      <circle cx="300" cy="80" r="5" fill="#25D366" />
                      <circle cx="300" cy="80" r="12" fill="url(#pointGrad)" className="animate-ping opacity-45" />

                      {/* Dynamic Traveling School Bus (Mathematically connected to the active path) */}
                      <g>
                        <animateMotion 
                          dur="8s" 
                          repeatCount="indefinite" 
                          rotate="auto"
                          path="M 40 110 C 90 30 150 140 210 50 C 240 10 280 60 300 80"
                        />
                        {/* Highly Realistic School Bus Vector */}
                        <g transform="translate(-20, -13)">
                          {/* Rear Bumper */}
                          <rect x="0" y="10" width="1.5" height="4" rx="0.5" fill="#334155" />
                          {/* Front Bumper */}
                          <rect x="38.5" y="11" width="1.5" height="3" rx="0.5" fill="#334155" />
                          
                          {/* Wheel Wells (Fender cutouts) */}
                          <circle cx="9" cy="13" r="4.5" fill="#141413" />
                          <circle cx="29" cy="13" r="4.5" fill="#141413" />
                          
                          {/* Main Yellow Bus Body */}
                          <path d="M 1.5 3 L 30 3 L 30 7 L 38 7 C 38.5 7 39 7.5 39 8 L 39 12 C 39 12.5 38.5 13 38 13 L 1.5 13 C 0.8 13 0.2 12.4 0.2 11.7 L 0.2 4.3 C 0.2 3.6 0.8 3 1.5 3 Z" fill="url(#busSideBodyGradMap)" />
                          
                          {/* Black rub rails */}
                          <rect x="1" y="9.5" width="37" height="0.75" fill="#0F172A" />
                          <rect x="1" y="11.5" width="37" height="0.5" fill="#0F172A" />
                          
                          {/* Windshield */}
                          <path d="M 30.5 4.5 L 35.5 4.5 L 34.5 7.5 L 30.5 7.5 Z" fill="#0F172A" />
                          
                          {/* Passenger Windows */}
                          <rect x="2" y="4.5" width="3.5" height="3" fill="#1E293B" stroke="#475569" strokeWidth="0.5" />
                          <rect x="6.5" y="4.5" width="3.5" height="3" fill="#1E293B" stroke="#475569" strokeWidth="0.5" />
                          <rect x="11" y="4.5" width="3.5" height="3" fill="#1E293B" stroke="#475569" strokeWidth="0.5" />
                          <rect x="15.5" y="4.5" width="3.5" height="3" fill="#1E293B" stroke="#475569" strokeWidth="0.5" />
                          <rect x="20" y="4.5" width="3.5" height="3" fill="#1E293B" stroke="#475569" strokeWidth="0.5" />
                          
                          {/* Folding Entry Door */}
                          <rect x="24.5" y="4.5" width="4" height="8.5" fill="#0F172A" stroke="#475569" strokeWidth="0.5" />
                          <line x1="26.5" y1="4.5" x2="26.5" y2="13" stroke="#475569" strokeWidth="0.5" />
                          
                          {/* Left Spinning Wheel */}
                          <g className="wheel-left-map">
                            <circle cx="9" cy="13" r="3.5" fill="#0F172A" />
                            <circle cx="9" cy="13" r="1.5" fill="#94A3B8" />
                            <line x1="9" y1="10" x2="9" y2="16" stroke="#0F172A" strokeWidth="0.5" />
                            <line x1="6" y1="13" x2="12" y2="13" stroke="#0F172A" strokeWidth="0.5" />
                          </g>
                          
                          {/* Right Spinning Wheel */}
                          <g className="wheel-right-map">
                            <circle cx="29" cy="13" r="3.5" fill="#0F172A" />
                            <circle cx="29" cy="13" r="1.5" fill="#94A3B8" />
                            <line x1="29" y1="10" x2="29" y2="16" stroke="#0F172A" strokeWidth="0.5" />
                            <line x1="26" y1="13" x2="32" y2="13" stroke="#0F172A" strokeWidth="0.5" />
                          </g>
                          
                          {/* Flashing safety beacon lights */}
                          <circle cx="1.5" cy="4" r="0.75" fill="#EF4444" />
                          <circle cx="29" cy="4" r="0.75" fill="#F59E0B" />
                        </g>

                        <defs>
                          <linearGradient id="busSideBodyGradMap" x1="15.5" y1="3" x2="15.5" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF7A45" />
                            <stop stopColor="#D94600" />
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>

                    {/* Map Labels */}
                    <div className="absolute top-2.5 left-4 bg-black/60 backdrop-blur-sm rounded-md px-2 py-0.5 border border-white/5 select-none pointer-events-none">
                      <span className="text-[9px] font-bold text-neutral-400">DEPOT: School Start</span>
                    </div>
                    <div className="absolute bottom-2.5 right-4 bg-black/60 backdrop-blur-sm rounded-md px-2 py-0.5 border border-white/5 select-none pointer-events-none">
                      <span className="text-[9px] font-bold text-[#25D366]">Anand HQ Hub</span>
                    </div>
                    
                    {/* Live Status indicator */}
                    <div className="absolute bottom-2.5 left-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full px-3 py-0.5 flex items-center gap-1 select-none pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                      <span className="text-[9px] font-bold text-[#25D366] uppercase">Active Transit</span>
                    </div>
                  </div>

                  {/* ADAS Alert overlay mockup */}
                  <div className="mt-3.5 bg-signal-orange/20 border border-signal-orange text-signal-orange px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                    <Cpu size={12} /> ADAS: Distance Warning - 3.2m
                  </div>
                </div>

                {/* Dashboard Bottom Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center text-xs">
                  <div>
                    <p className="text-neutral-400 mb-1">Truck RFID TAT</p>
                    <p className="font-semibold text-sm">18.4 mins avg</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">Live School Buses</p>
                    <p className="font-semibold text-sm">48 Active</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">ADAS Alerts Logs</p>
                    <p className="font-semibold text-sm text-green-400">0 critical</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
