// app/layout.tsx
"use client";

import { usePathname } from 'next/navigation';
import { rubik } from './fonts/fonts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUnderConstruction = pathname === '/';

  return (
    <html lang="en" className={`${rubik.variable} font-sans`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        {!isUnderConstruction && <Header />}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
