// app/components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function NavBar() {
  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="no-underline hover:no-underline">
            <Image
              src="/twf-logo.svg"
              alt="Ty Walls Films"
              width={100}
              height={57}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="inline-flex items-center px-1 pt-1 border-b-0 text-sm font-medium text-foreground hover:border-b-2 hover:border-primary no-underline hover:no-underline">
              Home
            </Link>
            <Link href="/portfolio" className="inline-flex items-center px-1 pt-1 border-b-0 text-sm font-medium text-foreground hover:border-b-2 hover:border-primary no-underline hover:no-underline">
              Portfolio
            </Link>
            <Link href="/contact" className="inline-flex items-center px-1 pt-1 border-b-0 text-sm font-medium text-foreground hover:border-b-2 hover:border-primary no-underline hover:no-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex">
          <Button asChild size="sm" variant="outline">
            <Link href="#contact" className="no-underline hover:no-underline">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
