import { Clock, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-20 bg-brand-brown text-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose The Sweet Corner?</h2>
          <p className="text-brand-cream/80 max-w-2xl mx-auto">We are committed to providing an exceptional experience, from the first bite to our welcoming atmosphere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-sm border border-brand-cream/10 hover:border-brand-gold/50 transition-colors bg-brand-brown-light/30">
            <div className="inline-flex p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Premium Quality</h3>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              We use only the finest ingredients to ensure every cake and pastry meets our luxury standards.
            </p>
          </div>

          <div className="text-center p-6 rounded-sm border border-brand-cream/10 hover:border-brand-gold/50 transition-colors bg-brand-brown-light/30">
            <div className="inline-flex p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Extended Hours</h3>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              Open daily from 10 AM to 4 AM. We are here to satisfy your sweet cravings almost around the clock.
            </p>
          </div>

          <div className="text-center p-6 rounded-sm border border-brand-cream/10 hover:border-brand-gold/50 transition-colors bg-brand-brown-light/30">
            <div className="inline-flex p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Freshly Baked</h3>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              Freshness is our promise. Our items are baked fresh every single day for the perfect taste.
            </p>
          </div>

          <div className="text-center p-6 rounded-sm border border-brand-cream/10 hover:border-brand-gold/50 transition-colors bg-brand-brown-light/30">
            <div className="inline-flex p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Customized For You</h3>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              Celebrations require a personal touch. We craft custom orders precisely to your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
