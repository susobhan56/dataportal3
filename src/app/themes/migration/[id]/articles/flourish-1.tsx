"use client";
import { useEffect, useRef } from 'react';

export interface FlourishEmbedArticle5Props {
  src: string;
}

const FLOURISH_SCRIPT_URL = 'https://public.flourish.studio/resources/embed.js';

export default function FlourishEmbedArticle5({ src }: FlourishEmbedArticle5Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject the script if it doesn't already exist
    if (!document.querySelector(`script[src='${FLOURISH_SCRIPT_URL}']`)) {
      const script = document.createElement('script');
      script.src = FLOURISH_SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, manually trigger Flourish render
      if ((window as any).Flourish) {
        (window as any).Flourish.render();
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flourish-embed flourish-chart"
      data-src={src}
      style={{ width: '100%', maxWidth: 800, margin: '0 auto', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,90,158,0.2)', background: '#fff' }}
    >
      <noscript>
        <img
          src={`https://public.flourish.studio/${src}/thumbnail`}
          width="100%"
          alt="chart visualization"
        />
      </noscript>
    </div>
  );
}
