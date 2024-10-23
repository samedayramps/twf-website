// components/Services.tsx
import Section from './Section';

export default function Services() {
  return (
    <Section id="services" title="Our Services">
      <p className="mt-4">
        Explore our services designed to capture your love story in its most authentic and beautiful form.
      </p>
      <div className="space-y-12 mt-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">
            The Wedding Film
          </h3>
          <p className="mt-4">
            We transform your wedding day into a cinematic masterpiece, artfully capturing both grand moments and intimate details. This isn’t just a video; it’s a time capsule of emotions, vows, and celebrations—a treasure you’ll revisit for a lifetime.
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">
            Story Session
          </h3>
          <p className="mt-4">
            Our Story Sessions, available independently or as part of our packages, capture the essence of your love beyond the wedding day. Be it a cozy afternoon at home or an exciting adventure, we focus on the everyday magic that defines your relationship, creating a beautiful complement to your wedding film.
          </p>
        </div>
      </div>
    </Section>
  );
}