// components/Footer.jsx
import Link from 'next/link';
import { profile, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-gray-800 pb-14 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400">— Let&apos;s talk</p>
            <h2 className="mt-2 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
          </div>
          <Link href="/contact" className="shrink-0 rounded-full bg-yellow-400 px-7 py-3.5 font-semibold text-gray-900 transition hover:bg-yellow-300">
            Start a project ↗
          </Link>
        </div>

        {/* Columns */}
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Carlos Mendoza<span className="text-yellow-400">.</span></h3>
            <p className="mt-3 max-w-xs text-sm text-gray-400">{profile.role} based in {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-4 inline-block font-semibold text-yellow-400 hover:underline">{profile.email} ↗</a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">Navigation</p>
            <ul className="mt-3 space-y-2">
              {nav.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-gray-400 transition hover:text-yellow-400">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">Find me on</p>
            <ul className="mt-3 space-y-2">
              {profile.socials.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition hover:text-yellow-400">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Carlos Mendoza. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-yellow-400">Privacy</Link>
            <Link href="/terms" className="transition hover:text-yellow-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
