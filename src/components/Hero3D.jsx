import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Brush, SprayCan, Droplet, Wand2, Play } from 'lucide-react';

export default function Hero3D() {
  const [activeTool, setActiveTool] = useState('Foam');
  const splineRef = useRef(null);

  const tools = [
    { key: 'Foam', icon: SprayCan, color: 'from-cyan-400 to-blue-500' },
    { key: 'Rinse', icon: Droplet, color: 'from-blue-400 to-indigo-500' },
    { key: 'Polish', icon: Brush, color: 'from-amber-400 to-rose-500' },
    { key: 'Detail', icon: Wand2, color: 'from-emerald-400 to-teal-500' },
  ];

  const handleTool = (tool) => {
    setActiveTool(tool);
    // Optional: could trigger Spline events if named nodes exist
    // if (splineRef.current) { /* interact with scene */ }
  };

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlay should not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

      {/* Headline */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-white/80">Premium Auto Detailing · 3D Live Preview</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Make Your Car Look Showroom New
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Experience real-time 3D and precision detailing tools. Foam, rinse, polish, and detail — see the shine come alive.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:shadow-cyan-500/20" onClick={(e)=>{e.preventDefault();document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>Explore Services</a>
          <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10" onClick={(e)=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}>Get a Quote</a>
        </div>
      </div>

      {/* Tools Dock */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex w-full justify-center">
        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-md">
          {tools.map(({ key, icon: Icon, color }) => (
            <button
              key={key}
              onClick={() => handleTool(key)}
              className={`group relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition focus:outline-none ${
                activeTool === key
                  ? 'bg-white text-black'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-pressed={activeTool === key}
            >
              <Icon className={`h-4 w-4 ${activeTool === key ? 'text-black' : 'text-white'}`} />
              <span>{key}</span>
              {activeTool === key && (
                <span className={`pointer-events-none absolute inset-0 -z-0 rounded-xl bg-gradient-to-r ${color} opacity-20`} />
              )}
            </button>
          ))}
          <div className="mx-1 h-6 w-px bg-white/10" />
          <button
            onClick={() => {
              // a small visual feedback to user
              const el = document.getElementById('shine-pulse');
              if (el) {
                el.animate([
                  { opacity: 0 },
                  { opacity: 1 },
                  { opacity: 0 },
                ], { duration: 1000 });
              }
            }}
            className="flex items-center gap-2 rounded-xl bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-cyan-400"
          >
            <Play className="h-4 w-4" />
            Simulate
          </button>
        </div>
      </div>

      {/* subtle pulse highlight */}
      <div id="shine-pulse" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)] opacity-0" />
    </section>
  );
}
