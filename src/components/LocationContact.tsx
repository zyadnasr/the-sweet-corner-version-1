import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-cream-light flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-3">Visit Us</h4>
              <h2 className="text-4xl font-serif text-brand-brown mb-6 font-bold">We'd Love To See You</h2>
              <p className="text-brand-brown-light text-lg">
                Stop by The Sweet Corner for your daily treat, or contact us to discuss your custom cake requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-brown text-lg">Location</h5>
                  <p className="text-brand-brown-light mt-1">
                    Tolba Awaida St, Shaibet an Nakareyah,<br />
                    Zagazig, Al-Sharqia Governorate 7105920
                  </p>
                  <a href="https://maps.app.goo.gl/GeqWWC8XVKqm6BoG6" target="_blank" rel="noreferrer" className="inline-block mt-2 text-brand-brown font-semibold hover:text-brand-gold underline decoration-brand-gold/30 underline-offset-4 transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-brown text-lg">Opening Hours</h5>
                  <p className="text-brand-brown-light mt-1">
                    Every day (Mon - Sun)<br />
                    10:00 AM – 4:00 AM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-brand-brown/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <a href="tel:01097949137" className="flex items-center justify-center gap-3 bg-brand-brown text-brand-cream px-6 py-4 rounded-sm hover:bg-brand-brown-light transition-colors group">
                    <Phone className="text-brand-gold group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-semibold tracking-wide">Call Us</span>
                  </a>
                  <a href="https://wa.me/201097949137" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-4 rounded-sm transition-all group">
                    <MessageCircle className="group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-semibold tracking-wide">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image / Map Placeholder */}
          <div className="w-full h-[500px] bg-brand-cream relative border border-brand-brown/10 rounded-sm overflow-hidden shadow-lg">
             {/* Instead of an interactive map widget, providing a beautiful storefront/map abstraction since we only have the URL, not an API key */}
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
              alt="Cafe Atmosphere" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-brown/40 flex items-center justify-center">
               <div className="bg-brand-cream p-8 text-center max-w-sm m-4 rounded-sm shadow-xl">
                 <MapPin className="text-brand-gold mx-auto mb-4" size={32} />
                 <h3 className="font-serif text-2xl text-brand-brown font-bold mb-2">The Sweet Corner</h3>
                 <p className="text-brand-brown-light mb-6 text-sm">Tolba Awaida St, Zagazig</p>
                 <a href="https://maps.app.goo.gl/GeqWWC8XVKqm6BoG6" target="_blank" rel="noreferrer" className="inline-block w-full bg-brand-gold text-brand-brown px-4 py-3 font-semibold uppercase tracking-wider text-xs">
                   View on Google Maps
                 </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
