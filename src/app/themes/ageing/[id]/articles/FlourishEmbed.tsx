'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    Flourish?: {
      embeds?: {
        scan?: () => void;
      };
    };
  }
}

export default function FlourishEmbed({ src }: { src: string }) {
  useEffect(() => {
    const scriptSrc = 'https://public.flourish.studio/resources/embed.js';

    const scanFlourish = () => {
      if (window.Flourish?.embeds?.scan) {
        window.Flourish.embeds.scan();
      }
    };

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.onload = scanFlourish;
      document.body.appendChild(script);
    } else {
      // Already loaded? Run scan directly
      scanFlourish();
    }
  }, []);

  return (
    <div
      className="flourish-embed flourish-chart"
      data-src={src}
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '20px auto',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 4px 24px rgba(0,90,158,0.2)',
      }}
    />
  );
}
