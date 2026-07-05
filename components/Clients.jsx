// components/Clients.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const clients = ['ibm', 'ibmwatson', 'economist', 'longreads', 'bbcamerica', 'medium', 'apmg', 'tumblr'];

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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-aos="fade-up">Clients.</h2>
        <p className="mb-12 mt-3 max-w-xl leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="100">
          I&apos;ve had the pleasure of working with some amazing companies around the world.
        </p>

        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4" data-aos="fade-up" data-aos-delay="200">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="relative h-10 w-32 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image src={`/images/${client}.png`} alt={client} fill className="object-contain invert" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
