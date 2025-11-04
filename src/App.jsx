import React from 'react';
import { motion } from 'framer-motion';
import { Car, Phone, ShieldCheck } from 'lucide-react';

import Hero3D from './components/Hero3D';
import Services from './components/Services';
import AboutGallery from './components/AboutGallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#05070b] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 p-2 text-cyan-300 shadow-[0_0_18px_rgba(0,220,255,0.25)]">
              <Car size={18} />
            </div>
            <span className="font-heading text-sm font-semibold tracking-wide text-slate-100 md:text-base">Lux Detail Studio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-300">Home</a>
            <a href="#services" className="transition hover:text-cyan-300">Services</a>
            <a href="#about" className="transition hover:text-cyan-300">Gallery</a>
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-medium text-white shadow-[0_0_18px_rgba(0,200,255,.25)] md:flex">
            <Phone size={14} /> Book Now
          </a>
        </div>
      </header>

      <main className="relative">
        <Hero3D />
        <Services />
        <AboutGallery />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck size={16} className="text-cyan-300" />
            Elite Detailing • Lahore, Pakistan
          </div>
          <div>© {new Date().getFullYear()} Lux Detail Studio. All rights reserved.</div>
        </div>
      </footer>

      {/* Smooth section transitions */}
      <motion.div
        className="pointer-events-none fixed inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
