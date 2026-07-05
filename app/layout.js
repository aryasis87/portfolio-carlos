import './globals.css';
import { Inter, Sora } from 'next/font/google';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Message from '@/components/Message';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['600', '700', '800'], display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Carlos Mendoza","jobTitle":"Product Designer & Developer","url":"https://carlos.pintuweb.com","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://carlos.pintuweb.com"),
  title: "Carlos Mendoza — Product Designer & Developer",
  description: "Portfolio of Carlos Mendoza: product designer & full-stack developer based in California, building thoughtful digital products.",
  applicationName: "Carlos Mendoza",
  keywords: ["product designer", "full-stack developer", "portfolio", "UX designer", "California developer"],
  authors: [{ name: "Carlos Mendoza" }],
  creator: "Carlos Mendoza",
  publisher: "Carlos Mendoza",
  alternates: { canonical: "https://carlos.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carlos.pintuweb.com",
    siteName: "Carlos Mendoza",
    title: "Carlos Mendoza — Product Designer & Developer",
    description: "Portfolio of Carlos Mendoza: product designer & full-stack developer based in California, building thoughtful digital products.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Carlos Mendoza — Product Designer & Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Mendoza — Product Designer & Developer",
    description: "Portfolio of Carlos Mendoza: product designer & full-stack developer based in California, building thoughtful digital products.",
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
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased bg-gray-900 text-white`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Message />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
