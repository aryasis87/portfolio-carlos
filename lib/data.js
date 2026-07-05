// Konten terpusat portfolio Carlos Mendoza.
export const profile = {
  name: 'Carlos Mendoza',
  role: 'Product Designer & Full Stack Developer',
  location: 'California, USA',
  email: 'hi@carlos.com',
  phone: '+1 (555) 018-2245',
  avatar: '/images/profile3.jpg',
  about: '/images/profile2.jpg',
  resumeUrl: '#',
  intro: 'Based in California. Creating meaningful and impactful products for people.',
  bioShort:
    'I believe the best products are designed for humans. I like to create things with deep meaning — both visually and experientially.',
  bio: [
    'I’m Carlos, a product designer and full-stack developer with over a decade of experience turning complex problems into clean, human-centered products. I work across the whole stack — from the first sketch to shipped, scalable code.',
    'My approach blends visual craft with technical depth: thoughtful interfaces backed by performant, maintainable engineering. I’ve partnered with startups and global brands to launch products used by millions.',
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: '14', label: 'Years of Experience' },
  { value: '187', label: 'Satisfied Clients' },
  { value: '240+', label: 'Projects Completed' },
  { value: '32', label: 'Awards Won' },
];

export const services = [
  { title: 'Product Designer.', projects: '124 Projects', icon: 'PenTool', isActive: true, desc: 'End-to-end product design — research, flows, prototypes, and polished UI for web & mobile.' },
  { title: 'Branding Designer.', projects: '37 Projects', icon: 'Palette', isActive: false, desc: 'Visual identities, design systems, and brand guidelines that scale across every touchpoint.' },
  { title: 'Full Stack Developer.', projects: '62 Projects', icon: 'Laptop', isActive: false, desc: 'Robust, accessible front-ends and clean APIs with React, Next.js, and Node.' },
];

export const skills = [
  { group: 'Design', items: ['UI/UX Design', 'Figma', 'Prototyping', 'Design Systems', 'User Research'] },
  { group: 'Development', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'] },
  { group: 'Tools & More', items: ['Framer Motion', 'Git', 'Vercel', 'Accessibility', 'SEO'] },
];

export const experience = [
  { role: 'Lead Product Designer', company: 'Northwind Studio', period: '2021 — Present', desc: 'Leading design for a suite of B2B products; built the design system used by 30+ engineers.' },
  { role: 'Senior Frontend Engineer', company: 'Lumen Labs', period: '2018 — 2021', desc: 'Shipped a design-to-code workflow and high-performance marketing sites for global launches.' },
  { role: 'Product Designer', company: 'Freelance', period: '2014 — 2018', desc: 'Partnered with startups to design and build MVPs from idea to first paying customers.' },
];

export const education = [
  { degree: 'B.Sc. Interaction Design', school: 'California Institute of the Arts', period: '2010 — 2014' },
  { degree: 'Frontend Engineering Certificate', school: 'Google Career Certificates', period: '2017' },
];

export const projects = [
  { title: 'BeServer.', category: 'Branding', image: '/images/p1.jpg', year: '2024', desc: 'Brand identity & marketing site for a developer-tools company.', tags: ['Branding', 'Web'] },
  { title: 'Seone.', category: 'Product', image: '/images/p2.jpg', year: '2024', desc: 'A focus-first productivity app, from concept to shipped product.', tags: ['Product', 'Mobile'] },
  { title: 'Energetic Tumbler.', category: 'Product', image: '/images/p3.jpg', year: '2023', desc: 'E-commerce product page with a bold, energetic visual language.', tags: ['Product', 'Web'] },
  { title: 'Atlas Fintech.', category: 'Development', image: 'https://placehold.co/800x600/111827/FACC15.png?text=Atlas', year: '2023', desc: 'A calm, data-dense dashboard for a next-gen investment platform.', tags: ['Dev', 'Dashboard'] },
  { title: 'Vanguard Estate.', category: 'Branding', image: 'https://placehold.co/800x600/111827/FACC15.png?text=Vanguard', year: '2022', desc: 'Digital luxury for an exclusive real-estate brand.', tags: ['Branding', 'Web'] },
  { title: 'Pulse Health.', category: 'Development', image: 'https://placehold.co/800x600/111827/FACC15.png?text=Pulse', year: '2022', desc: 'Patient booking & telehealth platform built with Next.js.', tags: ['Dev', 'Health'] },
];

export const posts = [
  { date: 'Feb 28, 2025', title: 'Let this be a lesson to you', excerpt: 'What years of shipping products taught me about saying no and protecting the core idea.', category: 'Design', read: '5 min' },
  { date: 'Feb 14, 2025', title: 'How do you use time tracking for projects?', excerpt: 'A practical system for estimating, tracking, and respecting your creative hours.', category: 'Process', read: '4 min' },
  { date: 'Feb 7, 2025', title: 'Ego and empathy in design', excerpt: 'Designing for humans means leaving your ego at the door — here is how I try.', category: 'Design', read: '6 min' },
  { date: 'Jan 22, 2025', title: 'Clean code is editorial', excerpt: 'Treating code like writing: clarity, rhythm, and editing ruthlessly.', category: 'Development', read: '7 min' },
  { date: 'Jan 9, 2025', title: 'Why depth matters', excerpt: 'Tonal layering, shadow, and motion — the small details that make UI feel alive.', category: 'Design', read: '5 min' },
];

export const testimonial = {
  quote:
    'Amazing! Carlos understands both the soul of a brand and the technical mastery to bring it to life in the browser without compromise.',
  name: 'Jared Warner',
  role: 'CEO at Company',
  avatar: '/images/profile4.jpg',
};
