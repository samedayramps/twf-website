// src/app/components/contact-form.tsx
import { Button } from '@/components/ui/button';

export function ContactForm() {
  return (
    <section id="contact" className="bg-background py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Get in Touch</h2>
        <p className="text-lg text-foreground mb-12">
          Ready to capture every moment of your special day? Contact us to discuss your wedding film.
        </p>
        <form action="#" method="POST" className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
