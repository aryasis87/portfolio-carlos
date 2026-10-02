// components/Portfolio.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

// Tinggi bergantian khas grid carlos.
const TINGGI = ['h-[280px] md:h-[360px]', 'h-[360px] md:h-[480px]', 'h-[240px] md:h-[320px]'];

export default function Portfolio() {
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
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="mb-2 text-sm uppercase tracking-wide text-gray-400" data-aos="fade-up">— Portfolio</p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl" data-aos="fade-up" data-aos-delay="100">
            Selected projects, <br /> with the numbers behind them.
          </h2>
          <p className="mb-6 mt-4 leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Three of the six: what the problem was, the rule I modelled, and a link to the live site.
          </p>
          <Link href="/work" className="text-sm font-semibold text-yellow-400 hover:underline" data-aos="fade-up" data-aos-delay="300">
            See all six <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="400">
          {projects.slice(0, 3).map((project, idx) => (
            <Link href={`/work/${project.slug}`} key={project.slug} className="group block" data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
              <div className={`relative w-full ${TINGGI[idx]} mb-4 overflow-hidden rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-yellow-400/30`}>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-yellow-400">{project.title}.</h3>
              <p className="text-sm text-gray-400">{project.category} · {project.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
