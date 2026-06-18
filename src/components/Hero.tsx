import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558961363-a0c84cadc15a?auto=format&fit=crop&q=80" 
          alt="Freshly baked luxury desserts" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-brown/70 mix-blend-multiply"></div>
        {/* Gradient fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-brown/40 backdrop-blur-sm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-6">
          <MapPin size={14} />
          <span>Zagazig • Al-Sharqia</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-cream font-bold mb-6 drop-shadow-lg leading-tight">
          Freshly Baked Happiness <br className="hidden md:block"/>
          <span className="text-brand-gold italic font-normal">Every Day</span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-cream/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          The Sweet Corner is your local destination for premium custom cakes, exquisite pastries, and artisanal coffee, crafted daily with passion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://maps.app.goo.gl/GeqWWC8XVKqm6BoG6" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-brown hover:bg-brand-cream font-semibold tracking-wide uppercase text-sm transition-colors duration-300 rounded-sm shadow-xl"
          >
            Visit Us Today
          </a>
          <a 
            href="tel:01097949137" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-cream/30 text-brand-cream hover:bg-brand-cream/10 font-semibold tracking-wide uppercase text-sm transition-colors duration-300 rounded-sm"
          >
            Call to Order
          </a>
        </div>
      </div>
    </section>
  );
}
