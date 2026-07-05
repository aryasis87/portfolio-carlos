'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    // TODO: hubungkan ke backend/email service
    setSent(true);
  };

  const field = 'w-full rounded-xl border border-gray-700 bg-gray-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-400';

  return (
    <main>
      <section className="border-b border-gray-800 bg-gray-900 px-6 pb-12 pt-16 text-white md:px-12 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">— Contact</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s work together.</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
            I&apos;m open for freelance opportunities and collaboration. Tell me about your project and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-6">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-5">
              <span className="flex items-center gap-2 text-sm font-semibold text-yellow-400">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-400" /> Available for new projects
              </span>
              <p className="mt-2 text-sm text-gray-400">Currently booking projects for the next quarter.</p>
            </div>
            <div className="flex gap-5 pt-2">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 transition hover:text-yellow-400">{s.label}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="rounded-2xl border border-gray-800 bg-gray-800/50 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-gray-900"><Check size={28} /></div>
                <h2 className="mt-4 text-2xl font-bold">Message sent!</h2>
                <p className="mt-1 text-gray-400">Thanks, {form.name}. I&apos;ll reply to {form.email} soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 rounded-full border border-gray-700 px-6 py-2.5 text-sm font-semibold text-gray-200 transition hover:bg-gray-800">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 rounded-2xl border border-gray-800 bg-gray-800/40 p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Your email" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project…" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="w-full rounded-xl bg-yellow-400 py-3.5 font-semibold text-gray-900 transition hover:bg-yellow-300">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-800 bg-gray-800/40 p-5 transition hover:border-yellow-400/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400"><Icon size={20} /></span>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="mt-0.5 font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
