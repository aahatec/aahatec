import { ArrowRight } from 'lucide-react';
import rfidAutomation from '../assets/rfid_automation.jpg';
import vehicleTracking from '../assets/vehicle_tracking.jpg';
import customApps from '../assets/custom_apps.jpg';

interface ServicesProps {
  onEstimatorScroll: () => void;
  onExploreProducts: () => void;
}

export default function Services({ onEstimatorScroll, onExploreProducts }: ServicesProps) {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-lifted-cream">
      
      {/* Ghost Watermark Text Block (editorial style layered behind) */}
      <div className="absolute top-10 left-10 md:left-24 font-bold text-7xl md:text-[120px] text-[#E3DDD3] select-none opacity-[0.05] uppercase tracking-tighter leading-none -z-10">
        INTELLIGENT<br/>CONNECTIVITY
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-signal-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-gray">
                • CORE COMPETENCIES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-ink-black max-w-xl">
              Automation engineered to track, secure, & optimize operations.
            </h2>
          </div>
          <p className="text-base text-slate-gray leading-relaxed max-w-md font-normal text-left">
            Whether deploying active RFID checkpoints inside manufacturing plants, implementing Live Bus Camera safety systems, or architecting custom software panels, we provide turn-key enterprise grade solutions.
          </p>
        </div>

        {/* Asymmetric Staggered Placement representing Mastercard "Constellation" */}
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          
          {/* Connective SVG Arcs (Visible on Desktop only) */}
          <div className="hidden md:block absolute top-[150px] left-[15%] right-[15%] h-[100px] pointer-events-none -z-10">
            <svg className="w-full h-full" viewBox="0 0 800 100" fill="none">
              {/* Left to center arc */}
              <path d="M 120 50 Q 250 -30 380 50" stroke="#F37338" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
              {/* Center to right arc */}
              <path d="M 420 50 Q 550 130 680 50" stroke="#F37338" strokeWidth="1.5" opacity="0.7"/>
            </svg>
          </div>

          {/* Service Card 1: RFID Automation (TAT) */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] mb-8">
              {/* Perfect circle service portrait */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-[0_24px_48px_rgba(0,0,0,0.08)] bg-canvas-cream transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={rfidAutomation} 
                  alt="RFID truck tracking loading yard" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Satellite circular CTA docked bottom-right */}
              <button 
                onClick={onEstimatorScroll}
                className="absolute bottom-2 right-2 w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100 text-ink-black hover:bg-ink-black hover:text-white transition-colors group cursor-pointer"
                aria-label="Explore RFID Automation"
              >
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-slate-gray">RFID AUTOMATION</span>
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-ink-black mb-3">
              Truck TAT & Loading Systems
            </h3>
            <p className="text-sm text-slate-gray leading-relaxed max-w-xs font-normal">
              Optimize loading dock turnaround times. Automated UHF RFID sensors log truck check-in to checkout, linking directly with <strong>aahagps</strong> telemetry.
            </p>
          </div>

          {/* Service Card 2: Vehicle Tracking (Core Business) */}
          <div className="flex flex-col items-center text-center group md:translate-y-12">
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] mb-8">
              {/* Perfect circle service portrait */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-[0_24px_48px_rgba(0,0,0,0.08)] bg-canvas-cream transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={vehicleTracking} 
                  alt="Modern school bus dashboard and ADAS safety system" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Satellite circular CTA docked bottom-right */}
              <button 
                onClick={onEstimatorScroll}
                className="absolute bottom-2 right-2 w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100 text-ink-black hover:bg-ink-black hover:text-white transition-colors group cursor-pointer"
                aria-label="Explore Fleet Safety"
              >
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-slate-gray">CORE BUSINESS</span>
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-ink-black mb-3">
              School Bus Video & ADAS
            </h3>
            <p className="text-sm text-slate-gray leading-relaxed max-w-xs font-normal">
              Live streaming interior/exterior cameras for transport managers and parents. Advanced ADAS radars prevent collisions, lane drifts, and emergency risks.
            </p>
          </div>

          {/* Service Card 3: Custom Mobile Apps */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] mb-8">
              {/* Perfect circle service portrait */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-[0_24px_48px_rgba(0,0,0,0.08)] bg-canvas-cream transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={customApps} 
                  alt="Custom mobile app tracking screen mockup" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Satellite circular CTA docked bottom-right */}
              <button 
                onClick={onEstimatorScroll}
                className="absolute bottom-2 right-2 w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100 text-ink-black hover:bg-ink-black hover:text-white transition-colors group cursor-pointer"
                aria-label="Explore App Customization"
              >
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-slate-gray">EXPERTISE</span>
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-ink-black mb-3">
              Bespoke Enterprise Apps
            </h3>
            <p className="text-sm text-slate-gray leading-relaxed max-w-xs font-normal">
              Every business operates differently. We design customized mobile applications, client portals, and ERP plugins to integrate your field telematics effortlessly.
            </p>
          </div>

        </div>

        {/* Extra highlight banner: Parking Management System */}
        <div className="mt-32 max-w-5xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-[0_24px_48px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-ink-black/[0.02]">
          <div className="md:col-span-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-signal-orange"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-gray">HIGHLIGHT SOLUTION</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-ink-black mb-4">
              Fully Gated RFID Parking Management Systems
            </h3>
            <p className="text-base text-slate-gray max-w-2xl font-normal leading-relaxed">
              Ditch paper tickets and manual card taps. Our long-range UHF RFID antennas read active windshield tags up to 12 meters away. It triggers parking boom barriers instantly, schedules billing ledger updates, and manages open-occupancy lot mapping on live panels.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button 
              onClick={onExploreProducts}
              className="bg-ink-black text-canvas-cream px-8 py-3.5 rounded-[20px] font-medium text-base hover:opacity-90 transition-opacity border border-ink-black inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              Configure Hardware
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
