import { Metadata } from 'next';
import { BdayForm } from '@/components/bdayForm';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: "Wish Craft - Create a Birthday Card",
  description: "Start creating your personalized birthday card in just a few steps.",
};

const Page = () => {
  return (
    <div>
      <div
        className="relative min-h-screen w-full overflow-hidden 
      bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 
      flex justify-center items-center px-4"
      >

        <Image
          src="/1.png"
          fill
          alt="bg"
          className="object-cover opacity-10 pointer-events-none"
        />

        <Image
          src="/c11.png"
          width={180}
          height={180}
          alt="decor"
          className="
          block md:hidden
          absolute top-0 left-1/2 -translate-x-1/2
          opacity-70
        "
        />

        <Image
          src="/c33.png"
          width={160}
          height={160}
          alt="decor"
          className="
          block md:hidden
          absolute bottom-0 right-0
          opacity-70
        "
        />

        <div className="relative w-full max-w-md z-10">
          <BdayForm />
        </div>


        <Image
          src="/2.png"
          width={260}
          height={600}
          alt="decor"
          className="hidden md:block absolute top-32  "
        />

        <Image
          src="/c11.png"
          width={560}
          height={600}
          alt="decor"
          className="hidden md:block absolute top-10 left-0"
        />

        <Image
          src="/c11.png"
          width={560}
          height={600}
          alt="decor"
          className="hidden md:block absolute top-10 right-0 scale-x-[-1]"
        />

        <Image
          src="/c33.png"
          width={260}
          height={600}
          alt="decor"
          className="hidden md:block absolute bottom-0 right-24"
        />

        <Image
          src="/c44.png"
          width={260}
          height={600}
          alt="decor"
          className="hidden md:block absolute bottom-0 left-24"
        />
      </div>
    </div>
  );
}

export default Page;
