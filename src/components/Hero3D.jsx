import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Car, Sparkles, ShieldCheck, Wand2 } from 'lucide-react';

const FloatingIcon = ({ Icon, delay = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -10, 0], opacity: 1 }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    className="pointer-events-none p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg"
  >
    <Icon className="w-6 h-6 text-white" />
  </motion.div>
);

export default function Hero3D() {
  const sceneUrl = import.meta.env.VITE_SPLINE_SCENE;

  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        {sceneUrl ? (
          <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        )}
      </div>

      {/* Subtle gradient glow overlay (doesn't block scene) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/40" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white/80 text-sm mb-5">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            Premium Auto Detailing & Paint Protection
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Elevate your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-300"> Corolla </span>
            with precision detailing
          </h1>

          <p className="mt-4 text-slate-200/80 max-w-xl">
            From ceramic coatings to showroom finishes — we bring a neon-clean glow to every curve. Explore our services and gallery below.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 text-slate-900 font-medium hover:bg-emerald-300 transition">
              <ShieldCheck className="w-5 h-5" /> View Services
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              <Car className="w-5 h-5" /> See Gallery
            </a>
          </div>
        </motion.div>

        {/* Floating icons cluster */}
        <div className="pointer-events-none absolute right-6 bottom-10 flex gap-3">
          <FloatingIcon Icon={Car} />
          <FloatingIcon Icon={ShieldCheck} delay={0.8} />
          <FloatingIcon Icon={Wand2} delay={1.6} />
        </div>
      </div>
    </section>
  );
}
