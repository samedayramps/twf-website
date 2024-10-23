import Image from 'next/image';

export function Testimonials() {
  return (
    <div className="bg-secondary dark:bg-gray-800 py-16 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-foreground dark:text-gray-100">
          We had an incredible experience working with Ty Walls Films and were impressed
          they made such a big difference in only three weeks. Our team is so grateful for
          the wonderful improvements they made and their ability to get familiar with the
          product concept so quickly.
        </p>
        <div className="mt-8">
          <Image
            className="mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            alt="Jenny Wilson"
            width={64}
            height={64}
          />
          <div className="mt-4">
            <p className="text-lg font-semibold text-foreground dark:text-gray-100">Jenny Wilson</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Vice President</p>
          </div>
        </div>
      </div>
    </div>
  );
}
