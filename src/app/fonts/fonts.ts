// src/app/fonts/fonts.ts
import { Rubik } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});