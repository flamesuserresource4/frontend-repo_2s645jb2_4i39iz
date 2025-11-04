import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#060a10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.h2
          className="mb-10 text-center font-heading text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none ring-0 focus:border-cyan-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none ring-0 focus:border-cyan-400/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm text-slate-300">Service</label>
              <select className="w-full appearance-none rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400/50">
                <option>Complete Wash</option>
                <option>Interior Detailing</option>
                <option>Machine Polishing</option>
                <option>Ceramic Coating</option>
                <option>PPF</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-sm text-slate-300">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none focus:border-cyan-400/50"
                placeholder="Tell us about your car and goals..."
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">We respond within 1 business hour.</p>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34,211,238,.35)' }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(0,200,255,.25)]"
              >
                Send Message
              </motion.button>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-2xl" />
          </motion.form>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-slate-200">Contact Details</div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Phone size={16} className="text-cyan-300"/> +92 300 1234567</div>
                <div className="flex items-center gap-3"><Mail size={16} className="text-cyan-300"/> hello@luxdetailing.pk</div>
                <div className="flex items-center gap-3"><MapPin size={16} className="text-cyan-300"/> DHA Phase 6, Lahore, Pakistan</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 text-slate-300">
              <div className="mb-2 text-slate-100">Business Hours</div>
              <div className="text-sm">Mon–Sun: 10:00 AM – 8:00 PM</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
