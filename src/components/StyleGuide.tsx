// components/StyleGuide.tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TypographySection } from './TypographySection';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

function H1({ children, className = '' }: TypographyProps) {
  return <h1 className={`text-4xl mb-8 ${className}`}>{children}</h1>;
}

export default function StyleGuide() {
  return (
    <section className="container mx-auto px-4 py-8">
      <H1>Style Guide</H1>

      <TypographySection />

      <div className="mb-8">
        <h2 className="text-3xl mb-4">Buttons</h2>
        <Button className="mr-4">Primary Button</Button>
        <Button variant="outline">Secondary Button</Button>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl mb-4">Cards</h2>
        <Card className="p-4 mb-4">
          <p>This is a card component.</p>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl mb-4">Inputs</h2>
        <Input placeholder="Enter text here" className="mb-4" />
      </div>
    </section>
  );
}
