import React from 'react';

const cars = [
  {
    name: 'Honda City',
    url: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Toyota Corolla',
    url: 'https://images.unsplash.com/photo-1619767886558-efdc259e1e3f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Toyota Land Cruiser Prado',
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e6a94ce?q=80&w=1600&auto=format&fit=crop',
  },
];

function BeforeAfter({ before, after, label = 'Detailing' }) {
  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
      <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0">
        <img
          src={after}
          alt="After"
          className="h-full w-full object-cover transition-all duration-500 ease-out"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-black/50 px-3 py-1 text-xs text-white/90 backdrop-blur">
          Hover to reveal: {label}
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <img
          src={after}
          alt="After"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Showcase Gallery</h2>
        <p className="mt-3 text-white/60">Recent details including Honda City, Toyota Corolla, and Prado.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((c) => (
          <figure key={c.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow hover:shadow-cyan-500/10">
            <img src={c.url} alt={c.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-medium">{c.name}</span>
              <button
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 transition hover:bg-white hover:text-black"
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book similar
              </button>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <BeforeAfter
          label="Exterior deep clean"
          before="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop"
          after="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop"
        />
        <BeforeAfter
          label="Paint correction + ceramic"
          before="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop"
          after="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </section>
  );
}
