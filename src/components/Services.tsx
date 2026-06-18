import { Cake, Croissant, Cookie, Coffee, PartyPopper } from 'lucide-react';

const services = [
  {
    title: "Cakes & Custom Cakes",
    description: "Beautifully designed custom cakes for your special moments, crafted to your exact taste and style preferences.",
    icon: Cake,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80"
  },
  {
    title: "Desserts & Pastries",
    description: "A daily selection of premium elegant pastries and rich desserts, baked fresh every morning.",
    icon: Croissant,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80"
  },
  {
    title: "Coffee & Hot Drinks",
    description: "The perfect pairing for our treats. We serve rich, freshly brewed coffee and comforting hot beverages.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-cream-light text-brand-brown">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-3">Our Menu</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown mb-6 font-bold">Artisan Baked Goods</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex items-center gap-3 mb-3 text-brand-brown">
                <service.icon size={24} className="text-brand-gold" />
                <h3 className="font-serif text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-brand-brown-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-brand-brown/10 text-center">
          <p className="font-serif text-xl md:text-2xl italic text-brand-brown-light mb-6">
            We also specialize in:
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
            <div className="flex items-center gap-2">
              <Cookie className="text-brand-gold" />
              <span>Cookies & Donuts</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <PartyPopper className="text-brand-gold" />
              <span>Birthday & Celebration Orders</span>
            </div>
          </div>
          <div className="mt-10">
             <a href="tel:01097949137" className="inline-flex items-center gap-2 font-semibold text-brand-brown border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">
               Inquire about a custom order
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
