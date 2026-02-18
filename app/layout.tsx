import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/ui/Cursor';

export const metadata: Metadata = {
  title: 'Trusted Market — Result-Driven Digital Marketing Agency',
  description: 'We help brands scale with Shopify, SEO, Social Media, and Full-Stack solutions. 150+ projects delivered.',
  icons: {
    icon: '/Logo/OnlyLogo.svg',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
