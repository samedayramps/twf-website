// components/Packages.tsx
import Section from './Section';

export default function Packages() {
  return (
    <Section id="packages" title="Packages">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Basic Package */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Basic Package</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The Wedding Film</li>
              <li>Full Video of Ceremony, Speeches, and Special Dances</li>
              <li>Viewing Box</li>
            </ul>
            <p className="mt-4">
              Perfect for couples who want to capture the key moments of their day in beautiful detail.
            </p>
          </div>
        </div>
        {/* All-Inclusive Package */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">All-Inclusive Package</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The Wedding Film</li>
              <li>Full Video of Ceremony, Speeches, and Special Dances</li>
              <li>Story Session</li>
              <li>Super 8mm Footage</li>
              <li>Viewing Box</li>
            </ul>
            <p className="mt-4">
              Our most comprehensive package, designed to capture every facet of your love story. From the intimate moments of your Story Session to the vintage charm of Super 8mm footage, this package ensures no precious detail is missed. This package offers the complete experience, ensuring your love story is captured in all its depth and beauty.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}