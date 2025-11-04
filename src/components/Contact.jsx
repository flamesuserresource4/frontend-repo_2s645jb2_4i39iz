import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-2xl font-semibold text-white">Get a Free Quote</h3>
            <p className="mt-2 text-slate-300/80">Tell us about your vehicle and goals — we’ll recommend the perfect package.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Full name" />
              <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Email" />
              <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Phone" />
              <textarea rows={4} className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="What can we help with?" />
              <button type="button" className="col-span-1 sm:col-span-2 mt-2 inline-flex justify-center px-5 py-3 rounded-xl bg-emerald-400 text-slate-900 font-medium hover:bg-emerald-300 transition">
                Send Request
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
          >
            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-emerald-300" />
                <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-emerald-300" />
                <a href="mailto:hello@neoncorolla.com" className="hover:text-white transition">hello@neoncorolla.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-300" />
                <span>123 Detail Ave, Shine City</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-medium">Business Hours</h4>
              <ul className="mt-3 text-slate-300/80 text-sm space-y-1">
                <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                <li>Sat: 10:00 AM – 4:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
