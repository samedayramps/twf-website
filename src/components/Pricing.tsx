interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}

const PackageTier = ({ title, options, typePlan, checked = false }: PackageTierProps) => {
  const textColor = checked ? 'text-white' : 'text-purple-600 dark:text-purple-500';
  const bgColor = checked ? 'bg-purple-400' : 'bg-gray-300';

  return (
    <div className={`p-6 flex flex-col md:flex-row items-center justify-between ${bgColor} rounded-lg shadow-md`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="list-none text-left">
        {options.map((option) => (
          <li key={option.id} className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{option.desc}</span>
          </li>
        ))}
      </ul>
      <h4 className="text-xl font-bold">{typePlan}</h4>
      <button className={`mt-4 md:mt-0 px-4 py-2 rounded ${textColor} ${bgColor} hover:bg-purple-500 transition`}>
        Get Started
      </button>
    </div>
  );
};

export function Pricing() {
  const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
  ];

  return (
    <div className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            The Right Plan for <span className="text-purple-400">Your Business</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed officiis commodi labore odit.
          </p>
        </div>
        <div className="space-y-8">
          <PackageTier title="Starter" typePlan="Free" options={options} />
          <PackageTier title="Lorem Plus" checked typePlan="$32.00" options={options} />
          <PackageTier title="Lorem Pro" typePlan="$50.00" options={options} />
        </div>
      </div>
    </div>
  );
}
