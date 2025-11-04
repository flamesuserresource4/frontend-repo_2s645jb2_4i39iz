import React from 'react';
import { motion } from 'framer-motion';

export default function AboutGallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">About Our Finish</h2>
            <p className="mt-4 text-slate-300/80 leading-relaxed">
              We obsess over the details so you don’t have to. From swirl-free paint correction to ceramic protection,
              every step is performed with precision and care. Our passion for craft shows in the reflections.
            </p>
            <p className="mt-3 text-slate-300/80">
              Explore some before/after results below — hover to reveal the transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Before/After card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1549921296-3b4a6b4f7c37?q=80&w=1200&auto=format&fit=crop"
                alt="Before detail"
                className="h-56 w-full object-cover scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1b?q=80&w=1200&auto=format&fit=crop"
                alt="After detail"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/50 text-white text-xs">Hover to reveal</div>
            </div>

            {/* Before/After card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1530047715425-c8aa3c73652d?q=80&w=1200&auto=format&fit=crop"
                alt="Before interior"
                className="h-56 w-full object-cover scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1619767885836-c7cd3e76eb1d?q=80&w=1200&auto=format&fit=crop"
                alt="After interior"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/50 text-white text-xs">Hover to reveal</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
