import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants/products';

interface ProductShowcaseProps {
  selectedProducts: { [id: string]: number };
  handleAddProduct: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
}

const CATEGORIES = ['All', 'Vehicle Tracking', 'RFID Automation', 'Sensors', 'Custom Apps'];

export default function ProductShowcase({ 
  selectedProducts, 
  handleAddProduct, 
  handleRemoveProduct 
}: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on active category selection
  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((prod) => prod.category === activeCategory);

  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-signal-orange"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-gray">
            • HARDWARE & SERVICES CATALOGUE
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-ink-black mb-4">
          Browse Our 9 Core Solutions
        </h2>
        <p className="text-base md:text-lg text-slate-gray leading-relaxed font-normal">
          Select and bundle GPS modules, active RFID card scanners, ADAS cameras, or custom mobile dashboards to calculate a project cost estimate.
        </p>
      </div>

      {/* Category Filter Tab Bar */}
      <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-ink-black/[0.04] select-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer border ${
              activeCategory === cat
                ? 'bg-ink-black text-canvas-cream border-ink-black shadow-sm'
                : 'bg-white text-slate-gray border-ink-black/5 hover:border-ink-black/25 hover:text-ink-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Filtered Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((prod) => {
          const qty = selectedProducts[prod.id] || 0;
          return (
            <div 
              key={prod.id} 
              className="bg-white rounded-[32px] p-8 border border-ink-black/[0.04] hover:shadow-[0_24px_48px_rgba(0,0,0,0.05)] hover:border-ink-black/10 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <span className="bg-canvas-cream text-ink-black px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {prod.category}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-ink-black font-mono">
                    ₹{prod.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-medium text-ink-black mb-3">
                  {prod.name}
                </h3>
                <p className="text-base text-slate-gray leading-relaxed mb-6 font-normal">
                  {prod.description}
                </p>

                {/* Features list */}
                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {prod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-sm md:text-base text-ink-black font-normal">
                      <Check size={16} className="text-signal-orange flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Specifications Box */}
                <div className="mb-8 py-3.5 px-4 bg-canvas-cream/30 rounded-[20px] border border-ink-black/[0.02]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-gray block mb-1">
                    Specifications
                  </span>
                  <span className="text-xs text-ink-black font-mono leading-relaxed block">
                    {prod.specs}
                  </span>
                </div>
              </div>

              {/* Actions footer */}
              <div className="pt-6 border-t border-canvas-cream">
                {qty > 0 ? (
                  <div className="flex items-center justify-between bg-canvas-cream rounded-full p-1.5 border border-ink-black/5 w-full">
                    <button 
                      onClick={() => handleRemoveProduct(prod.id)}
                      className="w-9 h-9 rounded-full bg-white text-ink-black flex items-center justify-center font-bold hover:bg-ink-black hover:text-white transition-colors cursor-pointer text-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 font-bold font-mono text-sm text-ink-black">
                      {qty} in Quote
                    </span>
                    <button 
                      onClick={() => handleAddProduct(prod.id)}
                      className="w-9 h-9 rounded-full bg-white text-ink-black flex items-center justify-center font-bold hover:bg-ink-black hover:text-white transition-colors cursor-pointer text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddProduct(prod.id)}
                    className="w-full bg-ink-black text-canvas-cream py-3.5 rounded-[20px] text-sm font-semibold hover:opacity-90 transition-opacity border border-ink-black flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Add to Quote <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
