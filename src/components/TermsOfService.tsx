import { ArrowLeft, ShieldCheck, Scale, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onGoHome: () => void;
}

export default function TermsOfService({ onGoHome }: TermsOfServiceProps) {
  return (
    <div className="py-16 md:py-24 bg-canvas-cream text-ink-black min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Navigation Back */}
        <button 
          onClick={onGoHome}
          className="mb-12 bg-white text-ink-black border border-ink-black/10 hover:border-ink-black/25 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-canvas-cream transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Homepage
        </button>

        {/* Header Block */}
        <div className="mb-12 pb-8 border-b border-ink-black/10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-signal-orange"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-gray">
              • LEGAL AGREEMENTS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-ink-black mb-4">
            Terms of Service
          </h1>
          <p className="text-sm md:text-base text-slate-gray font-mono">
            Last Updated: July 14, 2026
          </p>
        </div>

        {/* Highlights Banner */}
        <div className="mb-12 bg-white rounded-[32px] p-6 md:p-8 border border-ink-black/[0.04] shadow-[0_16px_32px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange mb-3">
              <Scale size={20} />
            </div>
            <h4 className="font-bold text-sm text-ink-black mb-1">Service SLA</h4>
            <p className="text-xs text-slate-gray leading-relaxed font-normal">
              Active telemetry operations carry a 99.9% uptime SLA for system dashboards.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange mb-3">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-bold text-sm text-ink-black mb-1">Hardware Warranty</h4>
            <p className="text-xs text-slate-gray leading-relaxed font-normal">
              All physical trackers, RFID tags, and ADAS cameras carry a 12-month parts replacement warranty.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange mb-3">
              <FileText size={20} />
            </div>
            <h4 className="font-bold text-sm text-ink-black mb-1">Clear Contracts</h4>
            <p className="text-xs text-slate-gray leading-relaxed font-normal">
              Pricing details generated online represent commercial quotes subject to final shipping parameters.
            </p>
          </div>
        </div>

        {/* Content Clauses */}
        <div className="space-y-10 text-base md:text-lg text-slate-gray font-normal leading-relaxed">
          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">1. Scope of Services</h3>
            <p>
              AAHATEC & Automation Services Private Limited offers specialized GPS vehicle tracking hardware, active RFID Turn-Around-Time (TAT) controllers, school bus live cameras, and customized enterprise mobile applications. The services are provided "as configured" in client contracts and online quotation requests.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">2. Hardware Installation & Maintenance</h3>
            <p>
              Optional installation services (₹2,000 per hardware unit) cover standard vehicle calibration, windshield tag mounting, and interface testing. Maintenance, firmware updates, and calibration resets are scheduled periodically. Tampering with internal SIM slots or hardware tags voids the 12-month replacement warranty.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">3. Custom API & ERP Integrations</h3>
            <p>
              Bespoke applications and ERP plugins (e.g., custom synchronization modules for SAP, Oracle, or proprietary TMS systems) are subject to separate software license agreements. Customized code remains the intellectual property of AAHATEC, licensed exclusively to the client for their operational fleet duration.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">4. Network Connectivity & SLA</h3>
            <p>
              Since GPS and camera streaming rely on 4G LTE network fallback providers, telemetry latency can vary in remote geographic zones. AAHATEC guarantees a 99.9% uptime SLA on our server endpoints and cloud dashboards, excluding standard scheduled monthly maintenance windows (conducted during off-peak hours).
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">5. Revisions and Inquiries</h3>
            <p>
              We reserve the right to amend these Terms of Service as technology updates. For terms clarifications, contract renewals, or SLA documentation requests, contact our accounts desk at <a href="mailto:sales@aahatec.com" className="text-signal-orange hover:text-light-signal-orange underline underline-offset-2">sales@aahatec.com</a>.
            </p>
          </section>
        </div>

        {/* Back Button Footer */}
        <div className="mt-16 pt-8 border-t border-ink-black/10">
          <button 
            onClick={onGoHome}
            className="bg-ink-black text-canvas-cream hover:bg-neutral-800 font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
          >
            Back to Homepage
          </button>
        </div>

      </div>
    </div>
  );
}
