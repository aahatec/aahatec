import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Percent, Check, MessageSquare } from 'lucide-react';

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  isOfferButton?: boolean;
}

interface NegotiatorChatProps {
  selectedProducts: { [id: string]: number };
  subtotal: number;
  baseTotal: number;
  discountPercent: number;
  setDiscountPercent: (val: number) => void;
  negotiationStep: number;
  setNegotiationStep: (val: number) => void;
  chatMessages: ChatMessage[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  getWhatsAppLink: () => string;
}

export default function NegotiatorChat({
  selectedProducts,
  subtotal,
  baseTotal,
  discountPercent,
  setDiscountPercent,
  negotiationStep,
  setNegotiationStep,
  chatMessages,
  setChatMessages,
  getWhatsAppLink
}: NegotiatorChatProps) {
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || chatInput.trim();
    if (!messageText) return;

    if (!textToSend) {
      setChatMessages(prev => [...prev, {
        sender: 'user',
        text: messageText,
        timestamp: new Date()
      }]);
      setChatInput('');
    }

    // Process reply
    setTimeout(() => {
      const lower = messageText.toLowerCase();
      const totalQty = Object.values(selectedProducts).reduce((sum, qty) => sum + qty, 0);

      // Bot logic based on cart and input
      if (subtotal === 0) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: "I noticed your project cost estimator is currently empty. Please add some products in our Cost Estimator section first so I can calculate a custom bulk discount package based on your real hardware needs!",
          timestamp: new Date()
        }]);
        return;
      }

      if (lower.includes('discount') || lower.includes('negotiate') || lower.includes('deal') || lower.includes('offer') || lower.includes('cheap') || lower.includes('price') || lower.includes('save') || lower.includes('code')) {
        if (negotiationStep === 0) {
          // Offer initial discount
          const calculatedDiscount = totalQty >= 10 ? 15 : totalQty >= 5 ? 12 : 8;
          setDiscountPercent(calculatedDiscount);
          setNegotiationStep(1);
          setChatMessages(prev => [...prev, {
            sender: 'bot',
            text: `Perfect! Based on your selected hardware and services (totaling ${totalQty} items, with a base cost of ₹${baseTotal.toLocaleString('en-IN')}), I'm authorized to apply an AI-negotiated ${calculatedDiscount}% bundle discount on your hardware items! This will save you ₹${Number((subtotal * (calculatedDiscount / 100)).toFixed(0)).toLocaleString('en-IN')} and bring your total estimate down to ₹${(baseTotal - subtotal * (calculatedDiscount / 100)).toLocaleString('en-IN')}. Does this sound like a fair deal to you?`,
            timestamp: new Date(),
            isOfferButton: true
          }]);
        } else if (negotiationStep === 1) {
          // User wants more discount
          const higherDiscount = totalQty >= 10 ? 18 : totalQty >= 5 ? 15 : 10;
          setDiscountPercent(higherDiscount);
          setNegotiationStep(2);
          setChatMessages(prev => [...prev, {
            sender: 'bot',
            text: `I understand you're looking for the absolute best value. Because vehicle safety and RFID logistics are long-term operational investments, we build extremely robust, industrial-grade hardware. I can push our system limits to a final ${higherDiscount}% hardware discount for you. This brings your new total to ₹${(baseTotal - subtotal * (higherDiscount / 100)).toLocaleString('en-IN')}! Let's lock this in before the system resets. Shall we proceed?`,
            timestamp: new Date(),
            isOfferButton: true
          }]);
        } else {
          // Maximum reached
          setChatMessages(prev => [...prev, {
            sender: 'bot',
            text: `We have reached our maximum online AI discount limit. However, for large enterprise fleets or custom integration packages, our regional sales directors can authorize customized pricing. Please click the 'Finalize & Negotiate on WhatsApp' button to transfer this exact quote to our WhatsApp desk. They can assist with contract pricing!`,
            timestamp: new Date()
          }]);
        }
      } else if (lower.includes('yes') || lower.includes('agree') || lower.includes('ok') || lower.includes('deal') || lower.includes('accept') || lower.includes('sure') || lower.includes('lock')) {
        setNegotiationStep(3);
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: `Fantastic choice! The discount has been successfully applied to your estimator summary. You can see the updated total below. To finalize delivery schedules and hardware allocation, click the 'Finalize & Negotiate on WhatsApp' button. It will open WhatsApp with your quote pre-filled!`,
          timestamp: new Date()
        }]);
      } else if (lower.includes('school') || lower.includes('bus') || lower.includes('video') || lower.includes('camera')) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: "Our School Bus safety suite is one of our flagship products. It includes live dual-camera video feeds, real-time student RFID door boarding logs, and a mobile app for parents. Would you like to add the School Bus Video Streamer and RFID Reader to your estimator so I can price the package?",
          timestamp: new Date()
        }]);
      } else if (lower.includes('adas') || lower.includes('collision') || lower.includes('sensor')) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: "Our ADAS (Advanced Driver Assistance System) features lane departure warning (LDW) and forward collision warning (FCW). It integrates perfectly with our GPS Fleet Tracker to log driver behavior reports. Adding it to the estimator takes just one click!",
          timestamp: new Date()
        }]);
      } else if (lower.includes('rfid') || lower.includes('tat') || lower.includes('parking') || lower.includes('truck')) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: "RFID automation is our core engineering division. For Parking Systems, we use long-range UHF readers to control boom barriers. For Truck TAT tracking, our system automatically timestamps arrival, loading, and departure, showing bottlenecks instantly. Let me know if you would like custom software adaptations!",
          timestamp: new Date()
        }]);
      } else {
        // Generic response
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: "Understood. AAHA GPS & Automation specializes in customized apps, live school bus video, ADAS safety, and RFID TAT systems. Let me know if you want to negotiate our current quote, or ask about specific installation options!",
          timestamp: new Date()
        }]);
      }
    }, 800);
  };

  const handleApplyOffer = (percent: number) => {
    setDiscountPercent(percent);
    setNegotiationStep(3);
    setChatMessages(prev => [...prev, {
      sender: 'user',
      text: `I accept the ${percent}% discount offer.`,
      timestamp: new Date()
    }, {
      sender: 'bot',
      text: `Excellent choice! The ${percent}% hardware discount has been locked into your Cost Estimator. Please review the pricing summary below. You can now tap 'Finalize & Negotiate on WhatsApp' to launch a secure chat with our deployment coordinator.`,
      timestamp: new Date()
    }]);
  };

  return (
    <div id="chatbot" className="bg-white rounded-[40px] p-6 md:p-8 shadow-[0_24px_48px_rgba(0,0,0,0.03)] border border-ink-black/[0.02] flex flex-col justify-between min-h-[500px] h-full">
      
      {/* Chat Header */}
      <div className="flex items-center justify-between pb-4 border-b border-canvas-cream">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-ink-black flex items-center gap-1.5">
              AAHA Negotiator Bot
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            </h4>
            <p className="text-xs text-slate-gray">Authorized discount assistant</p>
          </div>
        </div>
        
        {discountPercent > 0 && (
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Percent size={12} /> {discountPercent}% Saved
          </span>
        )}
      </div>

      {/* Messages Body */}
      <div className="flex-grow my-4 overflow-y-auto space-y-4 pr-1 max-h-[380px] min-h-[300px] text-left">
        {chatMessages.map((msg, index) => (
          <div 
            key={index}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-[20px] px-4 py-3 text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-ink-black text-canvas-cream rounded-tr-none' 
                  : 'bg-canvas-cream text-ink-black rounded-tl-none border border-ink-black/[0.03]'
              }`}
            >
              {msg.text}
            </div>

            {/* Interactive Buttons for applied deals */}
            {msg.isOfferButton && msg.sender === 'bot' && negotiationStep < 3 && (
              <div className="flex gap-2 mt-2 ml-4">
                <button
                  onClick={() => handleApplyOffer(discountPercent)}
                  className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-green-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Check size={12} /> Accept & Lock Offer
                </button>
                <button
                  onClick={() => handleSendMessage("Can I get a slightly higher discount?")}
                  className="bg-white text-ink-black border border-ink-black/20 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-canvas-cream transition-colors cursor-pointer"
                >
                  Negotiate Further
                </button>
              </div>
            )}
            
            <span className="text-[10px] text-neutral-400 mt-1 mx-2 font-mono">
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Quick suggestions chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        <button 
          onClick={() => handleSendMessage("Are there any active discount offers on my cart?")}
          className="bg-canvas-cream/70 hover:bg-canvas-cream border border-ink-black/5 px-3 py-1.5 rounded-full text-xs font-medium text-ink-black transition-colors cursor-pointer"
        >
          🏷️ Request Discount
        </button>
        <button 
          onClick={() => handleSendMessage("What does installation cover?")}
          className="bg-canvas-cream/70 hover:bg-canvas-cream border border-ink-black/5 px-3 py-1.5 rounded-full text-xs font-medium text-ink-black transition-colors cursor-pointer"
        >
          🔧 Installation Cover?
        </button>
        <button 
          onClick={() => handleSendMessage("Do you support custom RFID TAT software integrations?")}
          className="bg-canvas-cream/70 hover:bg-canvas-cream border border-ink-black/5 px-3 py-1.5 rounded-full text-xs font-medium text-ink-black transition-colors cursor-pointer"
        >
          ⚙️ Custom Integrations
        </button>
      </div>

      {/* Message input field */}
      <div className="flex gap-2 items-center">
        <input 
          type="text" 
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type message to negotiate..."
          className="flex-grow bg-canvas-cream rounded-full px-5 py-3 text-sm border border-ink-black/5 focus:outline-none focus:border-signal-orange"
        />
        <button 
          onClick={() => handleSendMessage()}
          className="w-12 h-12 rounded-full bg-ink-black text-canvas-cream flex items-center justify-center hover:opacity-90 transition-opacity border border-ink-black cursor-pointer"
        >
          <Send size={16} />
        </button>
      </div>

      {/* WhatsApp final checkout CTA */}
      <div className="mt-4 pt-4 border-t border-canvas-cream">
        <a 
          href={getWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#25D366] text-white py-3.5 rounded-[20px] font-semibold text-sm hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 shadow-md"
        >
          <MessageSquare size={18} />
          Finalize & Negotiate on WhatsApp
        </a>
        <span className="text-[11px] text-slate-gray mt-2 block text-center font-normal">
          This launches WhatsApp Web/App pre-filled with your customized estimator selections.
        </span>
      </div>

    </div>
  );
}
