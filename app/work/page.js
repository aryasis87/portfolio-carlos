'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

const CATS = ['All', 'Branding', 'Product', 'Development'];

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <section className="border-b border-gray-800 bg-gray-900 px-6 pb-12 pt-16 text-white md:px-12 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">— Work</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Selected projects.</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">A selection of work across branding, product design, and development.</p>

          {/* Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? 'bg-yellow-400 text-gray-900' : 'border border-gray-700 text-gray-300 hover:border-yellow-400/50 hover:text-white'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 md:py-20">
        <motion.div layout className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.a
                key={p.title}
                href="#"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group block"
              >
                <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-white/5 transition group-hover:ring-yellow-400/30">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized={p.image.startsWith('http')} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-yellow-400 backdrop-blur">{p.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-yellow-400">{p.title}</h3>
                  <span className="font-mono text-xs text-gray-500">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{p.desc}</p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
