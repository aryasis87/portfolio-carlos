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

export const metadata = {
  title: 'Carlos Mendoza — Product Designer & Developer',
  description: 'Portfolio of Carlos Mendoza: product designer & full-stack developer based in California.',
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
      </body>
    </html>
  );
}
