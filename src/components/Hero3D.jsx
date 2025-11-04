import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { SprayCan, Brush, Sparkles, Droplets, Shield } from 'lucide-react';

const FloatingTool = ({ icon: Icon, delay = 0, size = 28, className = '' }) => (
  <motion.div
    className={`absolute rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,200,255,0.35)] p-3 text-cyan-300 ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: [1, 1.05, 1],
      y: [0, -10, 0],
      rotate: [0, 8, -6, 0],
    }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    <Icon size={size} className="drop-shadow-[0_0_12px_rgba(0,220,255,0.6)]" />
  </motion.div>
);

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden bg-gradient-to-b from-[#05070b] via-[#060b12] to-[#070b12] text-white">
      {/* Cinematic glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-700/10 blur-3xl" />
      </div>

      {/* Spline 3D Scene */}
      <div className="relative mx-auto h-[70vh] w-full max-w-7xl">
        <motion.div
          className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Spline
            scene="https://prod.spline.design/J6k1u2Wk8tqW0Q6R/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Light flares overlay */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,200,255,0.15),transparent_40%)]" />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(600px_200px_at_70%_60%, rgba(0,180,255,0.15), transparent)',
                  'radial-gradient(600px_200px_at_30%_40%, rgba(0,180,255,0.10), transparent)',
                  'radial-gradient(600px_200px_at_50%_50%, rgba(0,180,255,0.18), transparent)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Floating cleaning tools around the car */}
          <FloatingTool icon={SprayCan} delay={0.2} className="-top-6 left-10" />
          <FloatingTool icon={Brush} delay={0.6} className="top-6 -right-4" />
          <FloatingTool icon={Droplets} delay={1.1} className="bottom-10 left-0" />
          <FloatingTool icon={Shield} delay={1.6} className="bottom-2 right-8" />
          <FloatingTool icon={Sparkles} delay={2.0} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Headline overlay */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-6 flex flex-col items-center gap-4 px-6 text-center md:-bottom-10">
          <motion.h1
            className="font-heading text-3xl font-semibold tracking-tight text-slate-100 drop-shadow md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Premium Car Detailing & Protection
          </motion.h1>
          <motion.p
            className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Realistic 3D showcase with cinematic lighting. Experience high-end washing, waxing, polishing, interior deep clean, and premium PPF.
          </motion.p>
        </div>
      </div>

      {/* Subtle scroll cue */}
      <div className="mt-20 flex items-center justify-center pb-8 md:pb-16">
        <motion.div
          className="h-10 w-[2px] rounded-full bg-gradient-to-b from-cyan-400/70 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
