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
              <div className="absolute inset-0 bg-[#141413] flex flex-col justify-between p-8 text-canvas-cream">
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider">AAHA GPS CLOUD CONNECT</span>
                  </div>
                  <span className="text-xs text-canvas-cream/70 font-mono">LAT: 19.0760° N | LON: 72.8777° E</span>
                </div>

                {/* Big Dashboard Visuals */}
                <div className="my-auto flex flex-col items-center">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Orbital Trajectory Lines (Rotated CSS) */}
                    <svg className="absolute w-full h-full animate-orbit" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#F37338" strokeWidth="1" strokeDasharray="5, 3" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#F37338" strokeWidth="1.5" />
                      <circle cx="85" cy="50" r="4" fill="#CF4500" />
                      <circle cx="50" cy="15" r="3" fill="#FCFBFA" />
                    </svg>
                    
                    {/* Inner Circular Fleet Display with Rich Bus Icon */}
                    {/* Inner Circular Fleet Display with Vibrating Bus and Moving Road */}
                    <div className="w-28 h-28 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center shadow-inner relative overflow-hidden select-none">
                      
                      {/* Vibrating Bus Wrapper */}
                      <div className="animate-bus-vibrate flex flex-col items-center justify-center">
                        {/* Side Profile Bus SVG with gradients and rotating wheels */}
                        <svg className="w-16 h-8 mx-auto drop-shadow-[0_4px_12px_rgba(207,69,0,0.4)]" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Bus Body */}
                          <path d="M2 10V4.5C2 3.67 2.67 3 3.5 3h24C28.33 3 29 3.67 29 4.5V10c0 .83-.67 1.5-1.5 1.5H3.5A1.5 1.5 0 0 1 2 10z" fill="url(#busSideBodyGrad)" />
                          {/* Hood at front right */}
                          <path d="M29 7v3.5c0 .83-.67 1.5-1.5 1.5h-2.5V7h4z" fill="url(#busSideBodyGrad)" />
                          <path d="M25 7h4L27.5 4H25v3z" fill="#0F172A" /> {/* Front windshield */}
                          
                          {/* Passenger Windows */}
                          <rect x="4.5" y="4.5" width="3" height="3" rx="0.5" fill="#1E293B" />
                          <rect x="9" y="4.5" width="3" height="3" rx="0.5" fill="#1E293B" />
                          <rect x="13.5" y="4.5" width="3" height="3" rx="0.5" fill="#1E293B" />
                          <rect x="18" y="4.5" width="3" height="3" rx="0.5" fill="#1E293B" />
                          
                          {/* Door */}
                          <rect x="22.5" y="4.5" width="2" height="7" rx="0.5" fill="#0F172A" />
                          
                          {/* Wheel Left Group */}
                          <g className="wheel-left">
                            <circle cx="8" cy="12.5" r="2.5" fill="#0F172A" />
                            <circle cx="8" cy="12.5" r="1" fill="#94A3B8" />
                            {/* Spokes/detailing inside wheel */}
                            <line x1="8" y1="10.5" x2="8" y2="14.5" stroke="#0F172A" strokeWidth="0.5" />
                            <line x1="6" y1="12.5" x2="10" y2="12.5" stroke="#0F172A" strokeWidth="0.5" />
                          </g>
                          
                          {/* Wheel Right Group */}
                          <g className="wheel-right">
                            <circle cx="22" cy="12.5" r="2.5" fill="#0F172A" />
                            <circle cx="22" cy="12.5" r="1" fill="#94A3B8" />
                            {/* Spokes/detailing inside wheel */}
                            <line x1="22" y1="10.5" x2="22" y2="14.5" stroke="#0F172A" strokeWidth="0.5" />
                            <line x1="20" y1="12.5" x2="24" y2="12.5" stroke="#0F172A" strokeWidth="0.5" />
                          </g>

                          <defs>
                            <linearGradient id="busSideBodyGrad" x1="15.5" y1="3" x2="15.5" y2="11.5" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FF7A45" />
                              <stop stopColor="#D94600" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Moving Road Dashes underneath */}
                      <div className="w-12 h-1 overflow-hidden relative mt-1 pointer-events-none">
                        <div className="absolute inset-y-0 left-0 flex gap-1.5 animate-road-move w-[200%]">
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                          <span className="w-2.5 h-[2px] bg-white/40 rounded-full flex-shrink-0"></span>
                        </div>
                      </div>
                      
                      <span className="text-xl font-bold tracking-tight mt-0.5">88<span className="text-xs text-neutral-400 font-normal">km/h</span></span>
                    </div>
                  </div>
                  
                  {/* ADAS Alert overlay mockup */}
                  <div className="mt-4 bg-signal-orange/20 border border-signal-orange text-signal-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                    <Cpu size={14} /> ADAS: Distance Warning - 3.2m
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
