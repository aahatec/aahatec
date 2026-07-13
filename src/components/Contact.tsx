import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 max-w-7xl mx-auto px-6 md:px-12 text-left">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Contact details */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-signal-orange"></span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-gray">• REACH OUT</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-ink-black mb-6">
              Visit Our Headquarters
            </h2>
            
            <p className="text-base md:text-lg text-slate-gray leading-relaxed mb-10 font-normal">
              Our telematics hardware labs, application design team, and RFID coordination center operate out of our headquarters in Anand. Drop by to see live mockups of our ADAS units, school bus camera networks, and custom RFID plant setups.
            </p>

            {/* Contact cards */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white border border-ink-black/5 flex items-center justify-center text-signal-orange shadow-sm flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-ink-black">Office Address</h4>
                  <p className="text-base text-slate-gray mt-1 leading-relaxed font-normal">
                    Aahatec Office,<br />
                    102, Sharnam Status, Near APC,<br />
                    Anand - Vidyanagar Road, Anand, Gujarat, 388001
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/2zu1BjRUvqSgKx3R7" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm font-bold text-signal-orange hover:text-light-signal-orange transition-colors mt-2.5 inline-block"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white border border-ink-black/5 flex items-center justify-center text-signal-orange shadow-sm flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-ink-black">Phone Details</h4>
                  <p className="text-base text-slate-gray mt-1 font-mono font-normal">
                    +91 94275 96900 (Sales & Support)<br />
                    +91 26 9223 0110 (Office Direct)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white border border-ink-black/5 flex items-center justify-center text-signal-orange shadow-sm flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-ink-black">Email & Help Desk</h4>
                  <p className="text-base text-slate-gray mt-1 font-mono font-normal">
                    sales@aahatec.com (Enterprise Quotes)<br />
                    support@aahatec.com (Technical Support)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notice pill */}
          <div className="mt-12 bg-white rounded-[24px] p-6 border border-ink-black/5 shadow-sm text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-orange inline-block mr-2"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-ink-black">DEPLOYMENT NOTE</span>
            <p className="text-sm text-slate-gray mt-2.5 leading-relaxed font-normal">
              Typical hardware production and delivery leads average 7 to 10 business days. Custom app dashboard integration setup requires a standard 14-day staging window.
            </p>
          </div>
        </div>

        {/* Google Map Frame (Stadium Rounded) */}
        <div className="lg:col-span-7 w-full h-full">
          <div className="rounded-[40px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.06)] border border-white/50 aspect-video lg:aspect-square w-full min-h-[400px]">
            {/* Embed Google Map representing Aahatec Anand location */}
            <iframe
              title="AAHATEC Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7214777598813!2d72.96670731495914!3d22.551957285192275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e585073b887f7%3A0x9dcbb90a77b63a28!2sAahatec!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
