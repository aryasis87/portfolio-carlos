// components/Clients.jsx — dulunya logo merek; kini daftar proyek live (persona fiktif, tanpa klien sungguhan).
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data';

export default function Clients() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 800, once: true });
    };
    initAOS();
  }, []);

  return (
    <section className="border-t border-gray-800 bg-gray-900 px-6 py-20 text-white md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-aos="fade-up">Live projects.</h2>
        <p className="mb-12 mt-3 max-w-xl leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="100">
          No borrowed logos here — just six demo products you can open and use. Each name leads to its case study.
        </p>

        <ul className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="block text-center text-lg font-bold tracking-tight text-gray-300 transition-colors hover:text-yellow-400 md:text-xl">
                {p.title}
                <span className="mt-1 block text-xs font-normal text-gray-400">{p.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
