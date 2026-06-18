import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-brand-cream-light/90 backdrop-blur-md border-b border-brand-brown/10 uppercase tracking-widest text-xs font-semibold">
      {/* Top Bar - Contact Quick Links */}
      <div className="bg-brand-brown text-brand-cream py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="https://maps.app.goo.gl/GeqWWC8XVKqm6BoG6" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <MapPin size={14} />
              <span>Zagazig, Al-Sharqia</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:01097949137" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Phone size={14} />
              <span>010-9794-9137</span>
            </a>
            <a href="https://wa.me/201097949137" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl lg:text-3xl text-brand-brown font-bold tracking-normal normal-case">
          The sweet corner
        </a>
        <nav className="hidden md:flex gap-8 items-center text-brand-brown">
          <a href="#services" className="hover:text-brand-gold transition-colors">Menu & Services</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">Our Story</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Visit Us</a>
          <a href="tel:01097949137" className="bg-brand-brown text-brand-cream px-5 py-2.5 rounded-sm hover:bg-brand-gold hover:text-brand-brown transition-all">
            Order Now
          </a>
        </nav>
        
        {/* Mobile quick actions */}
        <div className="flex md:hidden items-center gap-4 text-brand-brown">
          <a href="https://wa.me/201097949137" className="p-2 bg-brand-cream rounded-full hover:bg-brand-gold hover:text-brand-cream transition-colors">
             <MessageCircle size={18} />
          </a>
          <a href="tel:01097949137" className="p-2 bg-brand-brown text-brand-cream rounded-full transition-colors">
             <Phone size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
