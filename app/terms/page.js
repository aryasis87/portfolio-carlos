import Link from 'next/link';

export const metadata = { title: 'Terms of Service', description: 'Terms of service for Carlos Mendoza portfolio.' };

const sections = [
  { h: 'Acceptance', p: 'By using this website you agree to these terms. If you disagree, please do not use the site.' },
  { h: 'Content & Intellectual Property', p: 'All work, images, and text on this site belong to Carlos Mendoza and may not be reused without written permission.' },
  { h: 'Use of the Site', p: 'You agree to use this website lawfully and not to attempt to disrupt or gain unauthorized access to it.' },
  { h: 'Limitation of Liability', p: 'This site is provided "as is". I am not liable for any damages arising from its use, to the extent permitted by law.' },
];

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-neutral-800">
      <Link href="/" className="text-sm font-semibold text-yellow-600 hover:underline">← Back home</Link>
      <h1 className="mt-6 text-4xl font-bold text-neutral-900">Terms of Service</h1>
      <p className="mt-3 text-neutral-500">Last updated: 6 July 2026</p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-semibold text-neutral-900">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-neutral-600">{s.p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
