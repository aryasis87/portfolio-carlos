import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog — Carlos Mendoza' };

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Blog" title="Thoughts & writing." subtitle="Notes on design process, product thinking, and building great experiences." />

      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <a href="#" className="group flex flex-col justify-between gap-4 rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition hover:border-yellow-400/40 hover:bg-gray-800 sm:flex-row sm:items-center md:p-8">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
                    <span className="rounded-full bg-gray-900 px-2.5 py-1 font-semibold text-yellow-400">{p.category}</span>
                    <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                  </div>
                  <h2 className="text-xl font-bold transition-colors group-hover:text-yellow-400 md:text-2xl">{p.title}</h2>
                  <p className="mt-2 text-gray-400">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden shrink-0 text-gray-500 transition group-hover:text-yellow-400 sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
