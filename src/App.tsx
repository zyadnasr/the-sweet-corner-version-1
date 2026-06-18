import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Trust from './components/Trust';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Trust />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}
