import Reveal from './ui/Reveal';

// Header halaman yang konsisten untuk semua sub-halaman.
export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="border-b border-gray-800 bg-gray-900 px-6 pb-12 pt-16 text-white md:px-12 md:pb-16 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          {kicker && <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">— {kicker}</p>}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
