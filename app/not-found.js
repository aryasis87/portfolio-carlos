import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main>
      <PageHeader kicker="Error 404" title="No such route." subtitle="This page doesn’t exist, or it has moved. The work and the notes are still where they were." />
      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-yellow-400 px-7 py-3.5 font-semibold text-gray-900 transition hover:bg-yellow-300">
            Back home
          </Link>
          <Link href="/work" className="rounded-full border border-gray-700 px-7 py-3.5 font-semibold text-white transition hover:border-yellow-400/50">
            See the work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
