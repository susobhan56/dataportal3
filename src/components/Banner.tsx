'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full flex items-center justify-center min-h-[300px] bg-transparent">
      <Image
        src="/images/banner.gif"
        alt="Odisha Data Portal Banner"
        width={900}
        height={280}
        className="object-contain"
        priority
      />
    </div>
  );
}
