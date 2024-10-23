// components/Header.tsx
"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="text-2xl font-bold">
          <Link href="/">
            Your Company Name
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={`fixed left-0 top-16 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex md:items-center md:space-x-6 transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <li className="border-b md:border-none">
            <Link href="#philosophy" className="block px-4 py-2 md:p-0 hover:text-gray-600">
              Philosophy
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link href="#approach" className="block px-4 py-2 md:p-0 hover:text-gray-600">
              Approach
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link href="#services" className="block px-4 py-2 md:p-0 hover:text-gray-600">
              Services
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link href="#packages" className="block px-4 py-2 md:p-0 hover:text-gray-600">
              Packages
            </Link>
          </li>
          <li>
            <Link href="#contact" className="block px-4 py-2 md:p-0 hover:text-gray-600">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/style-guide" className="block px-4 py-2 md:p-0 hover:text-gray-600">
              Style Guide
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
