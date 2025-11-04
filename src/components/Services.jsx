import React from 'react';
import { Sparkles, Shield, Droplets, Brush } from 'lucide-react';

const services = [
  {
    title: 'Foam Wash',
    icon: Droplets,
    desc: 'Thick snow foam pre-wash to safely lift dirt without scratching the paint.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Paint Correction',
    icon: Brush,
    desc: 'Single to multi-stage machine polish to remove swirls and restore gloss.',
    accent: 'from-amber-400 to-rose-500',
  },
  {
    title: 'Ceramic Coating',
    icon: Shield,
    desc: 'Up to 5 years protection. Extreme hydrophobics, UV resistance, and gloss.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Interior Deep Clean',
    icon: Sparkles,
    desc: 'Steam sanitation, leather treatment, and fabric extraction for a fresh cabin.',
    accent: 'from-fuchsia-400 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Signature Detailing Services</h2>
        <p className="mt-3 text-white/60">Performance-grade care, tailored to bring out the best in your car.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, icon: Icon, desc, accent }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-cyan-500/10">
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl transition group-hover:opacity-30`} />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <button
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white transition hover:bg-white hover:text-black"
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get this service
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
