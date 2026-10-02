// Konten terpusat portfolio Carlos Mendoza (dark + yellow).
// Persona fiktif. Proyek = situs demo yang live; tidak ada klien, testimoni, atau logo merek sungguhan.

export const profile = {
  "name": "Carlos Mendoza",
  "role": "Product Designer & Full Stack Developer",
  "location": "Remote",
  "email": "hi@carlos.example",
  "avatar": "/images/hero.webp",
  "about": "/images/about.webp",
  "intro": "Product designer who also ships the code. Booking, pricing, and marketplace products.",
  "bioShort": "I design products and build them end to end — the form, the calculation behind it, and the edge case nobody drew.",
  "bio": [
    "I’m Carlos, a product designer and full-stack developer. My favourite problems sit where a design decision and a data model meet: pricing, availability, schedules.",
    "The projects on this site are live demos. Each one has a small, honest engine underneath — a cost calculator, a per-night availability check, a programme that cannot overlap."
  ],
  "socials": []
};

export const nav = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "About",
    "href": "/about"
  },
  {
    "label": "Work",
    "href": "/work"
  },
  {
    "label": "Blog",
    "href": "/blog"
  },
  {
    "label": "Contact",
    "href": "/contact"
  }
];

export const stats = [
  {
    "value": "6",
    "label": "Live projects"
  },
  {
    "value": "11",
    "label": "Years practising"
  },
  {
    "value": "3",
    "label": "Services"
  },
  {
    "value": "3",
    "label": "Articles"
  }
];

export const services = [
  {
    "title": "Product Designer.",
    "projects": "3 live projects",
    "icon": "PenTool",
    "isActive": true,
    "desc": "Research, flows, and UI for booking and marketplace products."
  },
  {
    "title": "Pricing & Booking Logic.",
    "projects": "4 live projects",
    "icon": "Calculator",
    "isActive": false,
    "desc": "Calculators, availability rules, and schedules modelled before they are drawn."
  },
  {
    "title": "Full Stack Developer.",
    "projects": "6 live projects",
    "icon": "Laptop",
    "isActive": false,
    "desc": "Accessible front-ends with React and Next.js, deployed and maintained."
  }
];

export const skills = [
  {
    "group": "Design",
    "items": [
      "Product Design",
      "Figma",
      "Prototyping",
      "Design Systems",
      "User Research"
    ]
  },
  {
    "group": "Development",
    "items": [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Tailwind CSS"
    ]
  },
  {
    "group": "Tools & More",
    "items": [
      "Framer Motion",
      "Git",
      "Vercel",
      "Accessibility",
      "SEO"
    ]
  }
];

export const experience = [
  {
    "role": "Product Designer & Developer",
    "company": "Independent",
    "period": "2021 — Present",
    "desc": "Designing and building booking, pricing, and marketplace products — the six projects on this site."
  },
  {
    "role": "Frontend Engineer",
    "company": "Product studio",
    "period": "2018 — 2021",
    "desc": "Built marketing sites and design-system components for client launches."
  },
  {
    "role": "UI Designer",
    "company": "Freelance",
    "period": "2015 — 2018",
    "desc": "Interfaces and small sites for local businesses."
  }
];

export const education = [
  {
    "degree": "Interaction Design",
    "school": "Self-directed study & mentorship",
    "period": "2013 — 2015"
  }
];

export const projects = [
  {
    "slug": "propertia",
    "url": "https://properti-propertia.vercel.app",
    "title": "Propertia",
    "client": "A curated property marketplace",
    "category": "Product",
    "role": "Product design & front-end",
    "year": "2026",
    "image": "/images/work/propertia.webp",
    "summary": "A marketplace where the price is not the last number you see.",
    "challenge": "Buyers plan around the listing price and are surprised by taxes and fees at signing.",
    "work": [
      "A cost calculator for the down payment, transfer tax, VAT on new homes, notary fees, and mortgage costs.",
      "Survey scheduling in local time instead of a phone number.",
      "Maps at district level, with the full address shared after a confirmed visit."
    ],
    "outcome": "Every listing can show the cash a buyer actually needs on signing day.",
    "desc": "A marketplace where the price is not the last number you see.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "futsal",
    "url": "https://reservasi-futsal.vercel.app",
    "title": "Gelanggang Petang",
    "client": "Futsal court booking",
    "category": "Product",
    "role": "Product design & full-stack",
    "year": "2026",
    "image": "/images/work/futsal.webp",
    "summary": "A booking grid where the price sits inside every cell.",
    "challenge": "Peak-hour and weekend pricing was hidden on a separate page.",
    "work": [
      "An hour × court grid showing the price of each slot, up to four hours per booking.",
      "Afternoon, peak, and late-night rates with weekend pricing.",
      "A sparring board for teams looking for opponents."
    ],
    "outcome": "Players see availability and price in one glance.",
    "desc": "A booking grid where the price sits inside every cell.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "hotel",
    "url": "https://reservasi-hotel-kappa.vercel.app",
    "title": "Tanjung Lengkung",
    "client": "Room booking for a small hotel",
    "category": "Product",
    "role": "Product design & front-end",
    "year": "2026",
    "image": "/images/work/hotel.webp",
    "summary": "Availability counted per night, not per stay.",
    "challenge": "A room can be free tonight and full on Saturday; most small-hotel widgets miss that.",
    "work": [
      "Remaining rooms equal the fullest night in the range, with the reason shown when a room cannot be booked.",
      "Friday and Saturday nights at weekend rates, itemised with tax and service.",
      "A \"my bookings\" page with the free-cancellation deadline."
    ],
    "outcome": "Guests understand why a room is unavailable instead of guessing.",
    "desc": "Availability counted per night, not per stay.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "bioskop",
    "url": "https://reservasi-bioskop.vercel.app",
    "title": "Bioskop Kelir",
    "client": "Seat booking for a one-screen cinema",
    "category": "Product",
    "role": "Interaction design & front-end",
    "year": "2026",
    "image": "/images/work/bioskop.webp",
    "summary": "A single screen, so the daily program can never overlap.",
    "challenge": "One auditorium means one film at a time — the schedule itself is the product.",
    "work": [
      "A daily program built from film lengths so showtimes never collide.",
      "A seat map with an eight-seat cap and weekday or weekend pricing.",
      "Film pages with synopsis, runtime, and age rating, plus an e-ticket list."
    ],
    "outcome": "The program reads like a poster, and the seat map stays usable on a phone.",
    "desc": "A single screen, so the daily program can never overlap.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "nimbus",
    "url": "https://landing-nimbus.vercel.app",
    "title": "Nimbus",
    "client": "Cloud servers with an open status page",
    "category": "Web",
    "role": "Design & front-end",
    "year": "2026",
    "image": "/images/work/nimbus.webp",
    "summary": "A hosting landing page where uptime is calculated, not claimed.",
    "challenge": "Hosting pages quote uptime without showing the incidents behind the number.",
    "work": [
      "Ninety-day uptime computed from a public incident log.",
      "An incident page for every outage, with what happened and what changed.",
      "An hourly pricing calculator for servers and storage."
    ],
    "outcome": "The status page doubles as the strongest sales argument.",
    "desc": "A hosting landing page where uptime is calculated, not claimed.",
    "tags": [
      "Web",
      "Live"
    ]
  },
  {
    "slug": "skywings",
    "url": "https://landing-skywings.vercel.app",
    "title": "SkyWings",
    "client": "An intercity airline website",
    "category": "Web",
    "role": "Design & front-end",
    "year": "2026",
    "image": "/images/work/skywings.webp",
    "summary": "Schedules in local time for every airport.",
    "challenge": "Flights between time zones are confusing when every time is shown in Jakarta time.",
    "work": [
      "Departure and arrival times shown in each airport’s local time.",
      "A filterable schedule and a simple flight search.",
      "Route and service pages rendered on the server for fast loading."
    ],
    "outcome": "Passengers read arrival times without doing time-zone maths.",
    "desc": "Schedules in local time for every airport.",
    "tags": [
      "Web",
      "Live"
    ]
  }
];

export const posts = [
  {
    "slug": "the-price-is-not-the-last-number",
    "date": "Sep 12, 2026",
    "title": "The price is not the last number",
    "category": "Product",
    "read": "6 min",
    "excerpt": "Building a cost calculator into a property marketplace, and why it became the main feature.",
    "body": [
      "Buyers plan around the listing price. Then signing day arrives with a transfer tax, notary fees, mortgage costs, and sometimes VAT on a new home — often seven to ten percent on top.",
      "For Propertia we put a calculator next to every listing. It estimates the down payment, the transfer tax on the price above the regional exemption, VAT for new homes, notary and registration fees, and mortgage costs, then shows the cash needed on the day.",
      "Every assumption is written next to the number and can be edited. A calculator that hides its assumptions is just a nicer way to be wrong.",
      "Engineering-wise it is a pure function and a form. Product-wise it changed the conversation from \"how much is the house\" to \"can we actually do this\"."
    ]
  },
  {
    "slug": "pricing-inside-the-grid",
    "date": "Aug 20, 2026",
    "title": "Pricing inside the grid",
    "category": "Design",
    "read": "4 min",
    "excerpt": "Why Gelanggang Petang shows the price inside every booking cell.",
    "body": [
      "Futsal courts are priced by the hour, and the hour matters: afternoons are cheap, evenings are not, weekends cost more. The old pattern hid that on a pricing page.",
      "The booking grid now shows the price of each slot directly in the cell — 110k, 160k, 130k — with a small flame icon for peak hours. Taken slots read \"booked\", past slots fade out in local time.",
      "Players pick up to four hours across courts and see the total update as they go. No surprises at the counter.",
      "Putting data where the decision happens beats any explanation page."
    ]
  },
  {
    "slug": "availability-per-night",
    "date": "Jul 30, 2026",
    "title": "Availability is per night, not per stay",
    "category": "Engineering",
    "read": "5 min",
    "excerpt": "A small hotel booking bug that taught me to model the problem properly.",
    "body": [
      "A room can be free on Thursday, full on Friday, and free again on Saturday. If you check availability for the whole stay at once, you will promise a room you do not have.",
      "For Tanjung Lengkung, the remaining rooms for a stay equal the fullest night in the range. When a room cannot be booked, the page says why: too many guests, too many nights, or one night already full.",
      "Pricing followed the same model. Friday and Saturday nights use weekend rates, and the summary lists how many of each you are paying for before tax.",
      "Model the unit your customer actually buys. Here it was a night."
    ]
  }
];

export const testimonial = null;

export const testimonials = [];

export const clients = [
  "Propertia",
  "Gelanggang Petang",
  "Tanjung Lengkung",
  "Bioskop Kelir",
  "Nimbus",
  "SkyWings"
];

export const process = [
  {
    "step": "01",
    "title": "Listen",
    "desc": "What do people already do, and where does it break?"
  },
  {
    "step": "02",
    "title": "Model",
    "desc": "Write down the rules — time, money, capacity — before drawing screens."
  },
  {
    "step": "03",
    "title": "Design & build",
    "desc": "Prototype in code, test on a phone, check both themes."
  },
  {
    "step": "04",
    "title": "Ship & look again",
    "desc": "Launch, watch real use, fix the edge cases."
  }
];

export const faqs = [
  {
    "q": "Are these real client projects?",
    "a": "They are live demo projects built for this portfolio template. Every one of them can be opened and used."
  },
  {
    "q": "What do you work on?",
    "a": "I design products and build them end to end — the form, the calculation behind it, and the edge case nobody drew."
  },
  {
    "q": "How do I start?",
    "a": "Send a short note through the contact page: what you are making, who it is for, and when you need it."
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const getPost = (slug) => posts.find((p) => p.slug === slug);
