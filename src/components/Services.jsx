import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Brush, Shield, SprayCan, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Complete Wash',
    desc: 'Touchless foam pre-soak, deep clean, and spotless rinse with purified water.',
    accent: 'from-cyan-500/20 to-cyan-300/10',
  },
  {
    icon: Sparkles,
    title: 'Premium Detailing',
    desc: 'Exterior and interior detailing with realistic reflections and finish.',
    accent: 'from-blue-500/20 to-blue-300/10',
  },
  {
    icon: Brush,
    title: 'Interior Deep Clean',
    desc: 'Steam clean, leather treatment, and hypoallergenic sanitization.',
    accent: 'from-fuchsia-500/20 to-fuchsia-300/10',
  },
  {
    icon: Wand2,
    title: 'Machine Polishing',
    desc: 'Multi-stage correction for mirror-like gloss and swirl removal.',
    accent: 'from-emerald-500/20 to-emerald-300/10',
  },
  {
    icon: SprayCan,
    title: 'Ceramic Coating',
    desc: 'Hydrophobic nano-coating for deep gloss and long-term protection.',
    accent: 'from-teal-500/20 to-teal-300/10',
  },
  {
    icon: Shield,
    title: 'Paint Protection Film (PPF)',
    desc: 'Self-healing PPF with precision edge wrap for invisible armor.',
    accent: 'from-sky-500/20 to-sky-300/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#060a10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.h2
          className="mb-10 text-center font-heading text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Signature Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:shadow-cyan-500/10`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-2xl`} />
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-300 shadow-[0_0_24px_rgba(0,220,255,0.25)]">
                  <Icon size={24} />
                </div>
                <h3 className="font-medium tracking-tight text-slate-100">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
