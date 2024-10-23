// src/app/style-guide/page.tsx
import Head from 'next/head';
import StyleGuide from '@/components/StyleGuide';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StyleGuidePage() {
  return (
    <>
      <Head>
        <title>Style Guide - Your Company Name</title>
        <meta name="description" content="A comprehensive style guide for consistent design and development." />
      </Head>
      <Header />
      <main className="mt-16">
        <StyleGuide />
      </main>
      <Footer />
    </>
  );
}
