import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';

export const metadata = { title: 'About — Carlos Mendoza' };

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="A bit about me." subtitle={profile.bioShort} />

      {/* Bio + photo */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src={profile.about} alt={profile.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm uppercase tracking-wide text-gray-400">— {profile.role}</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Designing &amp; building with intention.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-gray-400">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href={profile.resumeUrl} className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-300">
              <Download size={16} /> Download CV
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-gray-800 bg-gray-900 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Skills &amp; Tools.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-gray-800 bg-gray-800/50 p-6">
                  <h3 className="mb-4 font-semibold text-yellow-400">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => <li key={it} className="rounded-full bg-gray-900 px-3 py-1.5 text-sm text-gray-300">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-gray-800 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Experience.</h2></Reveal>
          <div className="mt-10 space-y-px">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-2 border-t border-gray-800 py-7 md:grid-cols-[180px_1fr]">
                  <span className="font-mono text-sm text-yellow-400">{e.period}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{e.role} <span className="text-gray-500">· {e.company}</span></h3>
                    <p className="mt-2 max-w-2xl text-gray-400">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education */}
          <Reveal className="mt-14"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Education.</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-800 bg-gray-800/50 p-6">
                  <span className="font-mono text-xs text-yellow-400">{e.period}</span>
                  <h3 className="mt-2 text-lg font-semibold">{e.degree}</h3>
                  <p className="text-sm text-gray-400">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
