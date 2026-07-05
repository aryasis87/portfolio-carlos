// components/IntroStats.jsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function IntroStats() {
  useEffect(() => {
    // Dynamically import AOS and initialize it
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

        {/* Kolom Kiri - Contact Info */}
        <div data-aos="fade-right">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">— Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Let's bring your idea to life.
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            I'm open for freelance opportunities or collaboration. Let's create something meaningful together.
          </p>
          <Link href="mailto:hi@carlos.com" className="text-yellow-400 font-semibold text-lg hover:underline">
            hi@carlos.com ↗
          </Link>

          <div className="flex space-x-6 mt-8">
            <a href="https://twitter.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Kolom Kanan - Quote & Stats */}
        <div data-aos="fade-left">
          <p className="italic text-gray-300 text-base md:text-lg mb-8 leading-relaxed border-l-2 border-gray-700 pl-4">
            “You can't use up creativity. The more you use, the more you have.”
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">14</h3>
              <p className="text-sm text-gray-400 mt-2">Years of Experience.</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">187</h3>
              <p className="text-sm text-gray-400 mt-2">Satisfied Clients.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}