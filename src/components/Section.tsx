// components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
          {title}
        </h2>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}