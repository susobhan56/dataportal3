'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full flex items-center justify-center py-8 md:py-12 bg-transparent relative overflow-hidden">
      <div className="relative w-full max-w-4xl px-4 aspect-[900/280]">
        <Image
          src="/images/diu.gif"
          alt="Odisha Data Portal Banner"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
