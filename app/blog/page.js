import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Blog" title="Thoughts & writing." subtitle="Notes on the rules behind the projects: prices, schedules, and availability." />

      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${p.slug}`} className="group flex flex-col justify-between gap-4 rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition hover:border-yellow-400/40 hover:bg-gray-800 sm:flex-row sm:items-center md:p-8">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs text-gray-400">
                    <span className="rounded-full bg-gray-900 px-2.5 py-1 font-semibold text-yellow-400">{p.category}</span>
                    <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                  </div>
                  <h2 className="text-xl font-bold transition-colors group-hover:text-yellow-400 md:text-2xl">{p.title}</h2>
                  <p className="mt-2 text-gray-400">{p.excerpt}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="hidden shrink-0 text-gray-400 transition group-hover:text-yellow-400 sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
