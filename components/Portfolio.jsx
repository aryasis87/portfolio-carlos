// components/Portfolio.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { title: 'BeServer.', category: 'Branding, Product', image: '/images/p1.jpg', heightClass: 'h-[280px] md:h-[360px]', objectPosition: 'object-center' },
  { title: 'Seone.', category: 'Product, Development', image: '/images/p2.jpg', heightClass: 'h-[360px] md:h-[480px]', objectPosition: 'object-top' },
  { title: 'Energetic Tumbler.', category: 'Product, Development', image: '/images/p3.jpg', heightClass: 'h-[240px] md:h-[320px]', objectPosition: 'object-center' },
];

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
            All Creative Works, <br /> Selected Projects.
          </h2>
          <p className="mb-6 mt-4 leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="200">
            I choose selected projects to show based on idea, visual, and execution.
          </p>
          <Link href="/work" className="text-sm font-semibold text-yellow-400 hover:underline" data-aos="fade-up" data-aos-delay="300">
            Explore more ↗
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="400">
          {projects.map((project, idx) => (
            <Link href="#portfolio" key={idx} className="group block" data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
              <div className={`relative w-full ${project.heightClass} mb-4 overflow-hidden rounded-xl shadow-xl ring-1 ring-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-yellow-400/30`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover ${project.objectPosition} transform transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-yellow-400">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
