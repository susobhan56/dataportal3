"use client";
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Flourish?: {
      embeds?: {
        scan?: () => void;
      };
    };
  }
}

export default function FlourishEmbedSingle({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function scanFlourish() {
      window.Flourish?.embeds?.scan?.();
    }
    const scriptSrc = "https://public.flourish.studio/resources/embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (script) {
      script.addEventListener("load", scanFlourish);
      scanFlourish();
      return () => {
        if (script) script.removeEventListener("load", scanFlourish);
      };
    } else {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = scanFlourish;
      document.body.appendChild(script);
    }
  }, [src]);
  return <div 
  style={{ width: '100%', maxWidth: '800px', margin: '20px auto', borderRadius: '12px', background: '#fff', boxShadow: '0 4px 24px rgba(0,90,158,0.2)' }}
    ref={ref} 
    className="flourish-embed flourish-chart" 
    data-src={src}></div>;
}
