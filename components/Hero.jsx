// Hero.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    import('aos').then((aos) => {
      aos.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 px-6 text-white md:px-12"
      data-aos="fade-up"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 py-20 md:grid-cols-2 md:gap-16">
      {/* Kolom Kiri - Teks */}
      <div className="space-y-6 max-w-xl" data-aos="fade-right">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Carlos <br /> Mendoza<span className="text-yellow-400">.</span>
        </h1>

        <hr className="w-12 h-1 bg-yellow-400 my-4" />

        <p className="text-sm uppercase tracking-wider text-gray-400">
          — Product Designer & Developer
        </p>

        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
          Based in California. Creating meaningful and impactful products for people.
        </p>

        <p className="text-sm text-gray-400 leading-relaxed mt-2">
          I believe the best products are designed for humans. I like to create things with deep meaning, both visually and experientially.
        </p>

        <Link href="#about" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline mt-4">
          My story
          <span className="translate-y-[1px]">↗</span>
        </Link>

        <div className="flex gap-4 mt-6">
          <a href="https://instagram.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Kolom Kanan - Gambar */}
      <div
        className="relative w-full h-80 md:h-[440px] rounded-lg overflow-hidden shadow-2xl border-4 border-transparent group"
        data-aos="zoom-in"
      >
        <Image
          src="/images/profile3.jpg"
          alt="Carlos Mendoza"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>
      </div>
    </section>
  );
}