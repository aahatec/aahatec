import { Calculator, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../constants/products';

interface EstimatorProps {
  selectedProducts: { [id: string]: number };
  handleAddProduct: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  installationEnabled: boolean;
  setInstallationEnabled: (val: boolean) => void;
  cloudStorageYears: number;
  setCloudStorageYears: (val: number) => void;
  apiIntegrationEnabled: boolean;
  setApiIntegrationEnabled: (val: boolean) => void;
  subtotal: number;
  addonsTotal: number;
  finalTotal: number;
  getWhatsAppLink: () => string;
}

export default function Estimator({
  selectedProducts,
  handleAddProduct,
  handleRemoveProduct,
  installationEnabled,
  setInstallationEnabled,
  cloudStorageYears,
  setCloudStorageYears,
  apiIntegrationEnabled,
  setApiIntegrationEnabled,
  subtotal,
  addonsTotal,
  finalTotal,
  getWhatsAppLink
}: EstimatorProps) {
  return (
    <div className="bg-lifted-cream rounded-[40px] p-6 md:p-10 shadow-[0_24px_48px_rgba(0,0,0,0.03)] border border-ink-black/[0.02] flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl md:text-3xl font-medium text-ink-black mb-6 flex items-center gap-2 text-left">
          <Calculator size={24} className="text-light-signal-orange" />
          Project Cost Estimator
        </h3>
        
        {/* Selected items list */}
        <div className="space-y-4 mb-8 max-h-[380px] overflow-y-auto pr-2">
          {Object.keys(selectedProducts).length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-canvas-cream rounded-[24px] bg-canvas-cream/20">
              <p className="text-slate-gray text-base md:text-lg mb-4 font-normal">Your quote is currently empty.</p>
              <a 
                href="#products"
                className="bg-white text-ink-black border border-ink-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-canvas-cream transition-colors inline-block"
              >
                View Product Catalogue
              </a>
            </div>
          ) : (
            Object.entries(selectedProducts).map(([id, qty]) => {
              const product = PRODUCTS.find(p => p.id === id);
              if (!product) return null;
              return (
                <div key={id} className="flex items-center justify-between gap-4 p-4 bg-canvas-cream/30 rounded-[20px] border border-ink-black/[0.02]">
                  <div className="text-left">
                    <h4 className="font-semibold text-base text-ink-black">{product.name}</h4>
                    <p className="text-sm text-slate-gray mt-0.5 font-mono">₹{product.price.toLocaleString('en-IN')} each</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white rounded-full p-1 border border-ink-black/5">
                      <button 
                        onClick={() => handleRemoveProduct(product.id)}
                        className="w-7 h-7 rounded-full bg-canvas-cream text-ink-black flex items-center justify-center font-bold hover:bg-ink-black hover:text-white transition-colors text-sm cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2.5 font-bold font-mono text-sm">{qty}</span>
                      <button 
                        onClick={() => handleAddProduct(product.id)}
                        className="w-7 h-7 rounded-full bg-canvas-cream text-ink-black flex items-center justify-center font-bold hover:bg-ink-black hover:text-white transition-colors text-sm cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-base font-mono text-ink-black min-w-[70px] text-right">
                      ₹{(product.price * qty).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Add-ons/Services Configuration */}
        <div className="pt-6 border-t border-canvas-cream space-y-5">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-gray text-left mb-2">
            OPTIONAL DEPLOYMENT ADD-ONS
          </h4>
          
          {/* Professional Installation Toggle */}
          <label className="flex items-center justify-between cursor-pointer p-3 rounded-[16px] hover:bg-canvas-cream/30 transition-colors">
            <div className="flex items-center gap-3.5 text-left">
              <input 
                type="checkbox" 
                checked={installationEnabled}
                onChange={(e) => setInstallationEnabled(e.target.checked)}
                className="w-5.5 h-5.5 rounded accent-signal-orange"
              />
              <div>
                <span className="text-base font-semibold text-ink-black">Professional Installation Support</span>
                <p className="text-sm text-slate-gray mt-0.5">On-site setup and vehicle calibration (₹2,000 / unit)</p>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-slate-gray">
              {installationEnabled ? 'Active' : 'Disabled'}
            </span>
          </label>

          {/* GPS Cloud Storage Selector */}
          <div className="flex items-center justify-between p-3 rounded-[16px] hover:bg-canvas-cream/30 transition-colors">
            <div className="text-left pr-4">
              <span className="text-base font-semibold text-ink-black">GPS Cloud History Storage</span>
              <p className="text-sm text-slate-gray mt-0.5">Secure server logs, geo-fences, and active reports</p>
            </div>
            <div className="relative flex-shrink-0 min-w-[175px] select-none">
              <select 
                value={cloudStorageYears} 
                onChange={(e) => setCloudStorageYears(Number(e.target.value))}
                className="w-full bg-white border-2 border-slate-200 rounded-[14px] pl-4 pr-10 py-2.5 text-sm font-bold text-ink-black appearance-none cursor-pointer hover:border-signal-orange hover:shadow-sm transition-all focus:outline-none focus:border-signal-orange focus:ring-1 focus:ring-signal-orange"
              >
                <option value={0}>Disabled</option>
                <option value={1}>1 Year (₹1,600/unit)</option>
                <option value={2}>2 Years (₹3,200/unit)</option>
                <option value={3}>3 Years (₹4,800/unit)</option>
                <option value={999}>Large (Contact Us)</option>
              </select>
              {/* Custom SVG Chevron Down */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-gray">
                <svg className="w-4 h-4 stroke-slate-gray" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enterprise API Integration Toggle */}
          <label className="flex items-center justify-between cursor-pointer p-3 rounded-[16px] hover:bg-canvas-cream/30 transition-colors">
            <div className="flex items-center gap-3.5 text-left">
              <input 
                type="checkbox" 
                checked={apiIntegrationEnabled}
                onChange={(e) => setApiIntegrationEnabled(e.target.checked)}
                className="w-5.5 h-5.5 rounded accent-signal-orange"
              />
              <div>
                <span className="text-base font-semibold text-ink-black">Custom Enterprise API / ERP Plugin</span>
                <p className="text-sm text-slate-gray mt-0.5">Synchronize TAT checkpoints & GPS live logs with ERP</p>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-slate-gray">
              {apiIntegrationEnabled ? '+₹40,000 Flat' : 'Disabled'}
            </span>
          </label>
        </div>
      </div>

      {/* Pricing Summary & Direct WhatsApp checkout */}
      <div className="mt-10 pt-6 border-t-2 border-dashed border-canvas-cream">
        <div className="flex justify-between items-center text-base text-slate-gray mb-2.5 font-normal">
          <span>Base Equipment Subtotal:</span>
          <span className="font-mono font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        
        <div className="flex justify-between items-center text-base text-slate-gray mb-3.5 font-normal">
          <span>Add-ons & Deployment:</span>
          <span className="font-mono font-bold">₹{addonsTotal.toLocaleString('en-IN')}</span>
        </div>

        {cloudStorageYears === 999 && (
          <div className="flex justify-end text-sm text-signal-orange font-bold mb-3 select-none">
            * Cloud History: Large Scale (Contact Us)
          </div>
        )}

        <div className="flex justify-between items-end pt-4 border-t border-canvas-cream">
          <div className="text-left">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-gray block">TENTATIVE TOTAL</span>
            <span className="text-xs md:text-sm text-neutral-400 font-normal italic">*Subject to final shipping rates</span>
          </div>
          <span className="text-3xl md:text-5xl font-bold font-mono text-ink-black">
            ₹{finalTotal.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="mt-8 pt-6 border-t border-canvas-cream text-left">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-4 rounded-[20px] font-bold text-base hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <MessageSquare size={20} />
            Submit Quote & Chat on WhatsApp
          </a>
          <span className="text-xs md:text-sm text-slate-gray mt-2.5 block text-center font-normal">
            This will open WhatsApp pre-filled with your selected hardware items and estimated total.
          </span>
        </div>
      </div>
    </div>
  );
}
