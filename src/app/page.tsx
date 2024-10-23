// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import UnderConstructionPage from './under-construction/page';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ty Walls Films - Under Construction</title>
        <meta name="description" content="Capturing your special moments with cinematic excellence." />
      </Head>
      <UnderConstructionPage />
    </>
  );
}
