import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { Car, Images, Wrench, PhoneCall } from 'lucide-react';

export default function App() {
  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-cyan-400" />
            <span className="font-semibold">Prime Shine Detailing</span>
          </div>
          <nav className="hidden items-center gap-4 md:flex">
            <button className="rounded-full px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white" onClick={() => navTo('home')}>Home</button>
            <button className="rounded-full px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white" onClick={() => navTo('services')}>Services</button>
            <button className="rounded-full px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white" onClick={() => navTo('gallery')}>Gallery</button>
            <button className="rounded-full px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white" onClick={() => navTo('contact')}>Contact</button>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 md:hidden" onClick={() => navTo('contact')}>
            <PhoneCall className="h-4 w-4" /> Book now
          </button>
        </div>
      </header>

      <main>
        <Hero3D />
        <Services />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span>Precision crafted detailing • Est. 2025</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full px-3 py-1 hover:bg-white/10" onClick={() => navTo('services')}>
              Services
            </button>
            <button className="rounded-full px-3 py-1 hover:bg-white/10" onClick={() => navTo('gallery')}>
              <Images className="mr-1 inline-block h-3 w-3" /> Gallery
            </button>
            <button className="rounded-full bg-white px-3 py-1 font-semibold text-black hover:opacity-90" onClick={() => navTo('contact')}>
              Book a slot
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
