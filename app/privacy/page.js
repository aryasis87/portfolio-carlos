import Link from 'next/link';

export const metadata = { title: 'Privacy Policy', description: 'Privacy policy for Carlos Mendoza portfolio.' };

const sections = [
  { h: 'Information We Collect', p: 'This site only collects the information you choose to share via the contact form, such as your name, email, and message.' },
  { h: 'How We Use It', p: 'Your information is used solely to respond to your inquiries. It is never sold or shared with third parties.' },
  { h: 'Cookies', p: 'Basic analytics cookies may be used to understand traffic. You can disable cookies in your browser settings.' },
  { h: 'Your Rights', p: 'You may request access to or deletion of any personal data you have shared by contacting me directly.' },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-neutral-800">
      <Link href="/" className="text-sm font-semibold text-yellow-600 hover:underline">← Back home</Link>
      <h1 className="mt-6 text-4xl font-bold text-neutral-900">Privacy Policy</h1>
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
