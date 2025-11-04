import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import AboutGallery from './components/AboutGallery';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">NeonCorolla</a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NeonCorolla. All rights reserved.</p>
        <div className="text-slate-400 text-sm">Crafted with precision detailing vibes.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero3D />
        <Services />
        <AboutGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
