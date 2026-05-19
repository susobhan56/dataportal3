'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full flex items-center justify-center py-2 md:py-6 bg-transparent relative overflow-hidden">
      <div className="relative w-full max-w-7xl aspect-[16/9] md:aspect-[900/280]">
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
