import { useState } from 'react';

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'What is Ty Walls Films?',
      content:
        'Ty Walls Films is a cinematic wedding film company that captures your special moments with excellence.',
    },
    {
      title: 'What services do we offer?',
      content:
        'We offer a range of services including wedding cinematography, event coverage, and personalized video editing.',
    },
    {
      title: 'How to book our services?',
      content:
        'To book our services, you can contact us through our website or email us directly. We will be happy to discuss your requirements and provide a customized package.',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-lg p-4">
        {accordionData.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 dark:text-gray-100 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-md">{item.title}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 dark:text-gray-400">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
