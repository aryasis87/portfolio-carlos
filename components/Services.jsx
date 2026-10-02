// components/Services.jsx
'use client';

import React, { useEffect } from 'react';
import { PenTool, Calculator, Laptop } from 'lucide-react';
import { services } from '@/lib/data';

const IKON = { PenTool, Calculator, Laptop };

export default function Services() {
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
        {/* Judul Section */}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-aos="fade-up">My Services.</h2>
        <p className="mb-12 mt-3 max-w-xl leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="100">
          Design and code from the same desk, so the rule behind a screen and the screen itself never drift apart.
        </p>

        {/* Grid Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = IKON[service.icon] || PenTool;
            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={`${idx * 150}`}
                className={`flex h-full flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  service.isActive
                    ? 'bg-yellow-400 text-black shadow-xl shadow-yellow-400/10 md:-translate-y-2'
                    : 'border border-gray-800 bg-gray-800/60 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-gray-800'
                }`}
              >
                <div className={`mb-16 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.isActive ? 'bg-black/10 text-black' : 'bg-yellow-400/10 text-yellow-400'}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`mb-1 text-xl font-semibold ${service.isActive ? 'text-black' : 'text-white'}`}>{service.title}</h3>
                  <p className={`mb-3 text-sm leading-relaxed ${service.isActive ? 'text-black/80' : 'text-gray-300'}`}>{service.desc}</p>
                  <p className={`text-sm font-semibold ${service.isActive ? 'text-black/80' : 'text-gray-400'}`}>{service.projects}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
