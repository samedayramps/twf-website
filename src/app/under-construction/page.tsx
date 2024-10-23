import React from 'react';
import Image from 'next/image';
import twfLogo from '/public/twf-logo.svg';
import heroImage from '/public/harlie-and-garret-wedding-video.jpg';

export default function UnderConstructionPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Wedding"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-lg mt-6 z-10">
        <Image src={twfLogo} alt="Ty Walls Films Logo" width={150} height={50} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Philosophy</h2>
        <p className="text-lg text-gray-700 mb-6">
          A wedding film isn’t just about remembering the day—it’s about reliving the emotions and preserving your love story for future generations.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          We are updating our website to better convey this philosophy to our future clients.
        </p>
        <p className="text-lg text-gray-700">
          For inquiries about wedding videography, please contact us at:
        </p>
        <a
          href="mailto:contact@tywallsfilms.com"
          className="text-blue-600 hover:text-blue-800 hover:underline mt-2 block"
        >
          contact@tywallsfilms.com
        </a>
      </div>
    </div>
  );
}
