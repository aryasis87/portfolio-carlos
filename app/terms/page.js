import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Terms',
  description: 'Terms for using this portfolio template and the demo projects it links to.',
  alternates: { canonical: '/terms' },
};

const sections = [
  { h: 'A fictional persona', p: 'Carlos Mendoza, the bio, and the work history on this site are fictional. They exist to show how a portfolio like this one can be put together.' },
  { h: 'The demo projects', p: 'Every project links to a live demo site from the same collection. The businesses, prices, schedules, and listings inside those demos are examples, not real offers.' },
  { h: 'Photos', p: 'The photos are CC0 images from StockSnap; the project images are screenshots of the demo sites. Credits are listed in the project’s README.' },
  { h: 'No warranty', p: 'The site is provided as is, as a template and example. Nothing here is professional, financial, or legal advice.' },
];

export default function TermsPage() {
  return (
    <main>
      <PageHeader kicker="Terms" title="Terms." subtitle="What this site is, and what it is not. Last updated 2 October 2026." />
      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold text-white">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-gray-400">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
