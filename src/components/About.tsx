export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 border border-brand-gold/50 hidden md:block z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80" 
              alt="Artisanal pastry preparation" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-3">Our Story</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown mb-6 font-bold leading-tight">
            More Than Just <br /> A Bakery
          </h2>
          
          <p className="text-lg text-brand-brown-light mb-6 leading-relaxed">
            Welcome to The Sweet Corner. Located in the heart of Zagazig at Tolba Awaida St, we have dedicated ourselves to bringing premium, freshly baked happiness to our community every single day.
          </p>
          <p className="text-lg text-brand-brown-light mb-8 leading-relaxed">
            Whether you are picking up your morning coffee and croissant, or trusting us to design the perfect custom cake for your life's biggest celebrations, we craft every item with uncompromising quality, attention to detail, and love.
          </p>
          
          <div className="flex gap-4">
             <a href="https://maps.app.goo.gl/GeqWWC8XVKqm6BoG6" target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand-brown text-brand-cream hover:bg-brand-brown-light transition-colors rounded-sm uppercase tracking-wider text-sm font-bold">
               Get Directions
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
