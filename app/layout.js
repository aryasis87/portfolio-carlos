import './globals.css';
import { Inter, Sora } from 'next/font/google';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['600', '700', '800'], display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Carlos Mendoza — Product Designer & Developer","description":"Portfolio template for Carlos Mendoza, a fictional product designer and full-stack developer: dark case studies that link to six live demo sites (a property marketplace, booking tools, and landing pages), plus notes on prices, schedules, and availability.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-carlos-eosin.vercel.app"),
  title: { default: "Carlos Mendoza — Product Designer & Developer", template: "%s — Carlos Mendoza" },
  description: "Portfolio template for Carlos Mendoza, a fictional product designer and full-stack developer: dark case studies that link to six live demo sites (a property marketplace, booking tools, and landing pages), plus notes on prices, schedules, and availability.",
  applicationName: "Carlos Mendoza",
  keywords: ["product designer", "full-stack developer", "portfolio", "UX designer", "booking UX"],
  authors: [{ name: "Carlos Mendoza" }],
  creator: "Carlos Mendoza",
  publisher: "Carlos Mendoza",
  alternates: { canonical: "https://portfolio-carlos-eosin.vercel.app" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-carlos-eosin.vercel.app",
    siteName: "Carlos Mendoza",
    title: "Carlos Mendoza — Product Designer & Developer",
    description: "Portfolio template for Carlos Mendoza, a fictional product designer and full-stack developer: dark case studies that link to six live demo sites (a property marketplace, booking tools, and landing pages), plus notes on prices, schedules, and availability.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Carlos Mendoza — Product Designer & Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Mendoza — Product Designer & Developer",
    description: "Portfolio template for Carlos Mendoza, a fictional product designer and full-stack developer: dark case studies that link to six live demo sites (a property marketplace, booking tools, and landing pages), plus notes on prices, schedules, and availability.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-gray-900 text-white">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
