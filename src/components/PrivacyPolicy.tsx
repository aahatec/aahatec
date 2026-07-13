import { ArrowLeft, ShieldCheck, Lock, Eye } from 'lucide-react';

interface PrivacyPolicyProps {
  onGoHome: () => void;
}

export default function PrivacyPolicy({ onGoHome }: PrivacyPolicyProps) {
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
              • LEGAL & TRANSPARENCY
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-ink-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-slate-gray font-mono">
            Last Updated: July 14, 2026
          </p>
        </div>

        {/* Highlights Banner */}
        <div className="mb-12 bg-white rounded-[32px] p-6 md:p-8 border border-ink-black/[0.04] shadow-[0_16px_32px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange mb-3">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-bold text-sm text-ink-black mb-1">Data Safety</h4>
            <p className="text-xs text-slate-gray leading-relaxed font-normal">
              Telemetry parameters are securely logged under enterprise-grade database encryption protocols.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange mb-3">
              <Lock size={20} />
            </div>
            <h4 className="font-bold text-sm text-ink-black mb-1">Zero Sharing</h4>
            <p className="text-xs text-slate-gray leading-relaxed font-normal">
              Your logistic fleet routes, driver ADAS video streams, and RFID scans are never sold or shared.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange mb-3">
              <Eye size={20} />
            </div>
            <h4 className="font-bold text-sm text-ink-black mb-1">User Control</h4>
            <p className="text-xs text-slate-gray leading-relaxed font-normal">
              Clients retain full control over data archival periods, history storage logs, and system access.
            </p>
          </div>
        </div>

        {/* Content Clauses */}
        <div className="space-y-10 text-base md:text-lg text-slate-gray font-normal leading-relaxed">
          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">1. Data We Collect</h3>
            <p className="mb-4">
              To operate our fleet telemetry and RFID automation hardware safely, we collect diagnostic logs transmitted by your active units. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li><strong>Real-time Telemetry:</strong> Precise GPS coordinates, velocity parameters, ignition schedules, and fuel rod capacitive levels.</li>
              <li><strong>Video Stream Logs:</strong> Secure, encrypted H.265 video footage captured by interior/exterior school bus cameras and ADAS radar diagnostics.</li>
              <li><strong>RFID Checkpoints:</strong> Windshield card timestamps, turn-around-time (TAT) logs at loading docks, and student boarding logs.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">2. How We Use Data</h3>
            <p className="mb-4">
              We process operational logs exclusively to deliver active SaaS monitoring solutions, parent-facing mobile application alerts, and plant yard turnaround reports:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>To map live transit trajectories and trigger ADAS collision prevention warnings.</li>
              <li>To synchronize turn-around-time statistics and loading bay queues with client ERP plugins.</li>
              <li>To debug hardware configurations and optimize battery SLAs.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">3. Cloud History Retention</h3>
            <p>
              By default, standard tracking parameters are stored in secure servers for 1 year, unless customized under your subscription (e.g., 2 Years, 3 Years, or Enterprise custom parameters). Video stream caching follows a strict rolling 30-day window, after which raw streams are automatically deleted.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">4. Security Measures</h3>
            <p>
              AAHATEC services align with ISO 27001 standards. All telemetry streams are routed over SSL/TLS endpoints, and remote database partitions utilize encrypted AES-256 protocols. Physical access controls restrict laboratory hardware setups to authorized personnel.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-4">5. Contact Legal Desk</h3>
            <p>
              For legal inquiries, data extraction requests, or modifications regarding your tracking telemetry logs, please reach out to our legal coordinator at <a href="mailto:support@aahatec.com" className="text-signal-orange hover:text-light-signal-orange underline underline-offset-2">support@aahatec.com</a>.
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
