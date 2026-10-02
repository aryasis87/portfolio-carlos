// components/IntroStats.jsx
'use client';

import React, { useEffect } from 'react';
import { profile, stats } from '@/lib/data';

export default function IntroStats() {
  useEffect(() => {
    const initializeAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 800, once: true });
    };

    initializeAOS();
  }, []);

  return (
    <section
      className="bg-gray-900 text-white px-6 md:px-12 py-20 md:py-24 border-t border-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Kolom Kiri - Kontak */}
        <div data-aos="fade-right">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">— Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Let&apos;s bring your idea to life.
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Open for freelance work and collaboration — especially products with a calculation, a schedule, or a rule at their core.
          </p>
          <a href={`mailto:${profile.email}`} className="text-yellow-400 font-semibold text-lg hover:underline">
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Kolom Kanan - Prinsip & angka */}
        <div data-aos="fade-left">
          <p className="italic text-gray-300 text-base md:text-lg mb-8 leading-relaxed border-l-2 border-gray-700 pl-4">
            “Most bugs are rules nobody wrote down. I write them down first.”
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-bold text-yellow-400">{s.value}</p>
                <p className="text-sm text-gray-400 mt-2">{s.label}.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
