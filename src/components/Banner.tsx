'use client';

import Image from 'next/image';
import SmartChatbot from './NewSmartChatbot';

export default function Banner() {
  return (
    <div className="w-full flex items-center justify-center min-h-[300px] bg-transparent relative">
      <Image
        src="/images/diu.gif"
        alt="Odisha Data Portal Banner"
        width={900}
        height={280}
        className="object-contain"
        priority
      />
      <SmartChatbot />
    </div>
  );
}
