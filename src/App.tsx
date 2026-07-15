import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import Estimator from './components/Estimator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { PRODUCTS } from './constants/products';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [selectedProducts, setSelectedProducts] = useState<{ [id: string]: number }>({});
  const [installationEnabled, setInstallationEnabled] = useState(true);
  const [cloudStorageYears, setCloudStorageYears] = useState(1);
  const [apiIntegrationEnabled, setApiIntegrationEnabled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleAddProduct = (id: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleRemoveProduct = (id: string) => {
    setSelectedProducts(prev => {
      const copy = { ...prev };
      if (copy[id] <= 1) {
        delete copy[id];
      } else {
        copy[id] -= 1;
      }
      return copy;
    });
  };

  // Pricing math
  const getSubtotal = () => {
    return Object.entries(selectedProducts).reduce((sum, [id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      return sum + (product ? product.price * qty : 0);
    }, 0);
  };

  const getAddonsTotal = () => {
    let sum = 0;
    const totalQty = Object.values(selectedProducts).reduce((sum, qty) => sum + qty, 0);
    if (totalQty === 0) return 0;
    
    if (installationEnabled) {
      sum += totalQty * 2000; // ₹2,000 installation per hardware unit
    }
    if (cloudStorageYears > 0 && cloudStorageYears !== 999) {
      sum += totalQty * (1600 * cloudStorageYears); // ₹1,600/yr cloud storage per unit
    }
    if (apiIntegrationEnabled) {
      sum += 40000; // flat enterprise API setup fee
    }
    return sum;
  };

  const getBaseTotal = () => {
    return getSubtotal() + getAddonsTotal();
  };

  const getWhatsAppLink = () => {
    const finalTotal = getBaseTotal();
    
    let message = `Hello AAHATEC Team! I have built a custom quote on your website and would like to finalize/negotiate the deployment: \n\n`;
    
    Object.entries(selectedProducts).forEach(([id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        message += `• ${product.name} (Qty: ${qty}) - ₹${(product.price * qty).toLocaleString('en-IN')}\n`;
      }
    });

    message += `\nAdd-ons:\n`;
    if (installationEnabled) message += `- Professional Installation (₹2,000/unit included)\n`;
    if (cloudStorageYears > 0) {
      if (cloudStorageYears === 999) {
        message += `- GPS Cloud Storage: Large Deployment (Contact Required)\n`;
      } else {
        message += `- ${cloudStorageYears} Year(s) GPS Cloud Subscription (₹1,600/unit/yr)\n`;
      }
    }
    if (apiIntegrationEnabled) message += `- Custom ERP/API Integration (₹40,000 flat)\n`;
    
    message += `\nEstimated Project Total: ₹${finalTotal.toLocaleString('en-IN')}\n`;
    message += `Chat ID: AAHA-EST-${Math.floor(Math.random() * 90000 + 10000)}\n`;
    message += `Please advise on hardware lead times and shipping. Thank you!`;

    return `https://wa.me/919427596900?text=${encodeURIComponent(message)}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (view: 'home' | 'privacy' | 'terms', sectionId?: string) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <div className="bg-canvas-cream text-ink-black min-h-screen font-mark flex flex-col antialiased selection:bg-light-signal-orange selection:text-white">
      {/* 1. Navbar */}
      <Navbar onNavigate={handleNavigate} />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* 2. Hero */}
            <Hero 
              onExploreProducts={() => scrollToSection('products')}
              onEstimateCost={() => scrollToSection('estimator')}
            />

            {/* 3. Core Services (Constellation) */}
            <Services 
              onExploreProducts={() => scrollToSection('products')}
              onEstimatorScroll={() => scrollToSection('estimator')}
            />

            {/* 4. Products Grid */}
            <ProductShowcase 
              selectedProducts={selectedProducts}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />

            {/* 5. Cost Estimator */}
            <section id="estimator" className="py-24 bg-[#EBE7E3] border-t border-ink-black/5">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 mb-4 bg-white/50 px-4 py-1.5 rounded-full border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-gray">INTERACTIVE QUOTATION</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-ink-black mb-4">
                    Calculate Your Custom Project Cost
                  </h2>
                  <p className="text-base text-slate-gray font-normal">
                    Assemble your tracking devices, RFID scanners, and app customization tags. Once you review the pricing, click submit to connect directly with our sales team on WhatsApp.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <Estimator 
                    selectedProducts={selectedProducts}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    installationEnabled={installationEnabled}
                    setInstallationEnabled={setInstallationEnabled}
                    cloudStorageYears={cloudStorageYears}
                    setCloudStorageYears={setCloudStorageYears}
                    apiIntegrationEnabled={apiIntegrationEnabled}
                    setApiIntegrationEnabled={setApiIntegrationEnabled}
                    subtotal={getSubtotal()}
                    addonsTotal={getAddonsTotal()}
                    finalTotal={getBaseTotal()}
                    getWhatsAppLink={getWhatsAppLink}
                  />
                </div>

              </div>
            </section>

            {/* 6. Location & Contact Details */}
            <Contact />
          </>
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy onGoHome={() => handleNavigate('home')} />
        )}

        {currentView === 'terms' && (
          <TermsOfService onGoHome={() => handleNavigate('home')} />
        )}
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Floating WhatsApp Connect Button with Instant Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 group flex items-center">
        {/* Instant Tooltip (visible on hover) */}
        <span className="mr-3 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 origin-right transition-all duration-75 ease-out bg-ink-black text-white text-xs font-semibold px-4.5 py-2.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] pointer-events-none whitespace-nowrap border border-white/10 select-none">
          Connect on WhatsApp
        </span>
        
        <a
          href="https://wa.me/919427596900?text=Hi%20AAHATEC!%20I%20found%20you%20on%20your%20website%20and%20would%20like%20to%20discuss%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.22)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer relative"
          title="Chat with AAHATEC on WhatsApp"
          aria-label="Chat with AAHATEC on WhatsApp"
        >
          {/* Pulsing indicator ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:hidden"></span>
          
          {/* SVG WhatsApp Logo */}
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 2c-5.514 0-9.989 4.478-9.989 9.99 0 1.763.459 3.486 1.332 5.006L2 22l5.163-1.353a9.907 9.907 0 0 0 4.868 1.272c5.513 0 9.989-4.478 9.989-9.99S17.544 2 12.031 2zm0 18.06c-1.616 0-3.2-.432-4.582-1.25L4.4 19.645l.848-3.08c-.896-1.428-1.37-3.08-1.37-4.786 0-4.94 4.02-8.96 8.96-8.96 4.939 0 8.96 4.02 8.96 8.96 0 4.94-4.022 8.96-8.96 8.96zm4.915-6.733c-.27-.136-1.597-.79-1.843-.88-.246-.089-.427-.135-.607.135-.18.27-.697.88-.854 1.06-.158.18-.315.2-.586.065-.27-.135-1.14-.42-2.172-1.34-.803-.717-1.345-1.603-1.502-1.874-.158-.27-.017-.417.118-.552.122-.12.27-.315.405-.472.136-.157.18-.27.27-.45.09-.18.046-.337-.023-.473-.068-.136-.607-1.464-.83-2.005-.218-.527-.459-.455-.63-.464-.162-.008-.348-.01-.534-.01-.186 0-.49.07-.746.347-.256.277-.98.958-.98 2.338 0 1.38 1.002 2.71 1.144 2.898.143.188 1.97 3.01 4.773 4.22.666.288 1.186.46 1.592.59.67.213 1.28.183 1.761.11.536-.08 1.598-.654 1.823-1.253.226-.6.226-1.114.158-1.224-.068-.11-.248-.198-.518-.334z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
