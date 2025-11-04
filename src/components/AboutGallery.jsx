import React from 'react';
import { motion } from 'framer-motion';

const beforeAfter = [
  {
    before: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function AboutGallery() {
  return (
    <section id="about" className="relative w-full bg-[#070b12] py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 font-heading text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
              About Our Studio
            </h2>
            <p className="mb-4 text-slate-300">
              We are a high-end car care brand focused on precision, protection, and presentation. Our studio uses studio-grade lighting, advanced chemicals, and meticulous technique to deliver a flawless finish.
            </p>
            <p className="text-slate-300">
              From daily drivers to collectible exotics, our workflow is tailored to your vehicle. Expect luxury hospitality, transparent recommendations, and results that glow under any spotlight.
            </p>
          </motion.div>

          <motion.div
            id="gallery"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=""
          >
            <h3 className="mb-4 text-lg font-medium text-slate-200">Before / After Gallery</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {beforeAfter.map((item, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={item.before}
                    alt="Before"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />
                  <img
                    src={item.after}
                    alt="After"
                    className="absolute inset-0 h-full w-full origin-center scale-105 object-cover opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-xs text-white/90">
                    <span className="rounded bg-black/40 px-2 py-1 backdrop-blur">
                      Hover to reveal
                    </span>
                    <span className="rounded bg-cyan-500/30 px-2 py-1 text-cyan-50 backdrop-blur">
                      After
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
