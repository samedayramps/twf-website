import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Emily & John',
    thumbnail: '/images/portfolio1.jpg',
    videoUrl: '/videos/emily-john.mp4',
  },
  {
    id: 2,
    title: 'Sarah & Michael',
    thumbnail: '/images/portfolio2.jpg',
    videoUrl: '/videos/sarah-michael.mp4',
  },
  // Add more items as needed
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <Button asChild>
                  <Link href={item.videoUrl}>Watch Film</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}