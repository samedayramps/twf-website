// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Begin Your Wedding Film Journey
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Together, we&apos;ll create a timeless record of your love story—a treasure you&apos;ll cherish forever.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
