// components/Blog.jsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const posts = [
  { date: 'Feb 28', title: 'Let this be a lesson to you' },
  { date: 'Feb 14', title: 'How do you use time tracking for projects?' },
  { date: 'Feb 7', title: 'Ego and empathy in design' },
];

export default function Blog() {
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
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm uppercase tracking-wide text-gray-400" data-aos="fade-up">— Blog</p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl" data-aos="fade-up" data-aos-delay="100">
            What&apos;s new? <br /> My blog and news.
          </h2>
          <p className="mb-2 mt-4 leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="200">
            I write about design process, product thinking, and how to build great experiences.
          </p>
        </div>

        {/* Posts */}
        <div data-aos="fade-up" data-aos-delay="300">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="#blog"
              className="group flex items-center justify-between border-b border-gray-800 py-5 transition-all hover:pl-3"
            >
              <div>
                <p className="mb-1 text-xs text-gray-500">{post.date} — Blog</p>
                <h3 className="text-base font-medium text-white transition-colors group-hover:text-yellow-400 md:text-lg">
                  {post.title}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-yellow-400 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
        <Link href="/blog" className="mt-8 inline-block text-sm font-semibold text-yellow-400 hover:underline" data-aos="fade-up">
          View all posts ↗
        </Link>
      </div>
    </section>
  );
}
