// components/CallToAction.tsx
import { Button } from '@/components/ui/button';

// Verify that the Button component exists at the specified path

export default function CallToAction() {
  return (
    <section id="contact" className="bg-gradient-to-r from-purple-600 to-pink-500 py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">Start Your Journey</h2>
        <p className="text-lg md:text-xl mb-8">
          Begin your wedding film journey with us today. Together, we&apos;ll create a timeless record of your love story—a treasure you&apos;ll cherish forever.
        </p>
        <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-sm md:text-base font-medium">
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </section>
  );
}
