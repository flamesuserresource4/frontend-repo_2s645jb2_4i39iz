import React, { useState } from 'react';
import { Send, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Backend is optional; for now simulate success
      await new Promise((r) => setTimeout(r, 800));
      alert('Thanks! Your request has been received. We will contact you shortly.');
      e.currentTarget.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Get a Quick Quote</h2>
        <p className="mt-3 text-white/60">Tell us about your vehicle and desired services. We respond fast.</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
          <div className="grid gap-4">
            <input required name="name" placeholder="Your Name" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400" />
            <input required type="tel" name="phone" placeholder="Phone Number" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400" />
            <select name="service" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-400">
              <option value="Foam Wash">Foam Wash</option>
              <option value="Paint Correction">Paint Correction</option>
              <option value="Ceramic Coating">Ceramic Coating</option>
              <option value="Interior Deep Clean">Interior Deep Clean</option>
            </select>
            <textarea name="notes" placeholder="Notes (vehicle model, issues, etc.)" rows={4} className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400" />
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
              <Send className="h-4 w-4" /> {loading ? 'Sending...' : 'Request Quote'}
            </button>
          </div>
        </form>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-400" />
              <span>+1 (555) 012-3456</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>Downtown Auto District, Your City</span>
            </div>
            <p className="text-white/60">
              Open daily 9am–7pm. Mobile detailing available by appointment.
            </p>
            <div className="mt-6 rounded-lg border border-white/10 p-4 text-white/70">
              Pro tip: Booking a ceramic coating together with paint correction saves up to 15%.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
