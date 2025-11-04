import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, Sparkles, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Exterior Detailing',
    desc: 'Deep-clean wash, decontamination, and gloss enhancement with safe two-bucket method.',
    accent: 'from-emerald-400/30 to-emerald-300/10',
  },
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    desc: 'Long-lasting hydrophobic protection for paint, glass, and wheels with brilliant shine.',
    accent: 'from-sky-400/30 to-sky-300/10',
  },
  {
    icon: ShieldCheck,
    title: 'Paint Protection',
    desc: 'Protect high-impact areas with durable protection. Add years of resilience and clarity.',
    accent: 'from-fuchsia-400/30 to-fuchsia-300/10',
  },
  {
    icon: Wand2,
    title: 'Interior Refresh',
    desc: 'Steam clean, leather conditioning, and odor neutralization for a like-new cabin.',
    accent: 'from-amber-400/30 to-amber-300/10',
  },
];

function ServiceCard({ icon: Icon, title, desc, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden"
    >
      <div className={`pointer-events-none absolute -inset-8 bg-gradient-to-br ${accent} blur-3xl opacity-20`} />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-white">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Services</h2>
          <p className="mt-3 text-slate-300/80">Premium care packages crafted for protection, clarity, and that neon-clean finish.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} accent={s.accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
