import type { Metadata } from 'next';
import './globals.css';
import { Navbar, Footer } from '@/components/Shell';

export const metadata: Metadata = {
  title: 'Muhammad Usman | Portfolio',
  description: 'Developer, AI creator, and digital creative portfolio.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}
