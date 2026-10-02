import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Privacy',
  description: 'What this portfolio template does and does not collect.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  { h: 'This is a template', p: 'Carlos Mendoza is a fictional persona and this site is a portfolio template. There is no business behind it collecting data.' },
  { h: 'The contact form', p: 'The form on the contact page does not send or store anything. When you press send, it only shows a message saying so.' },
  { h: 'Your theme choice', p: 'If you switch between light and dark mode, that choice is saved in your own browser (localStorage) so the next visit opens the same way. It never leaves your device.' },
  { h: 'Cookies and tracking', p: 'This site sets no cookies and loads no analytics or advertising scripts.' },
  { h: 'Hosting', p: 'The site is hosted on Vercel. Like any web host, Vercel may keep standard server logs such as IP addresses and request times; see Vercel’s own privacy policy for details.' },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader kicker="Privacy" title="Privacy." subtitle="Short version: nothing you type here is collected. Last updated 2 October 2026." />
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
