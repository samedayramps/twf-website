// src/app/components/faqs.tsx
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Why choose a longform wedding film?',
    answer:
      'A longform wedding film captures all the moments of your special day, ensuring no memory is forgotten. It tells the complete story of your wedding.',
  },
  {
    id: 2,
    question: 'Do you offer shorter highlight videos?',
    answer:
      'Yes, while our specialty is longform films, we can also provide shorter highlight videos upon request.',
  },
  // Add more FAQs as needed
];

export function FAQs() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto text-left">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}