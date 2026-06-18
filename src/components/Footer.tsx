import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-16 pb-8 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">The sweet corner</h3>
            <p className="text-brand-cream/70 leading-relaxed max-w-xs">
              Freshly Baked Happiness Every Day. Premium cakes, exquisite pastries, and artisanal coffee in Zagazig.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-gold">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:01097949137" className="flex items-center gap-2 text-brand-cream/80 hover:text-brand-gold transition-colors">
                  <Phone size={16} /> 01097949137
                </a>
              </li>
              <li>
                <a href="https://wa.me/201097949137" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-cream/80 hover:text-[#25D366] transition-colors">
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-cream/80 mt-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Tolba Awaida St, Shaibet an Nakareyah,<br /> Zagazig, Al-Sharqia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-gold">Hours</h4>
            <ul className="space-y-2 text-brand-cream/80">
              <li className="flex justify-between">
                <span>Every Day</span>
                <span>10:00 AM - 4:00 AM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/50">
          <p>&copy; {new Date().getFullYear()} The sweet corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
