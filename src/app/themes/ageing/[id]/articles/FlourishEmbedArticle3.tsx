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

export default function FlourishEmbedArticle3({ src }: { src: string }) {
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
  return <div ref={ref} className="flourish-embed flourish-chart" data-src={src}></div>;
}
