"use client";
import { useEffect } from 'react';
import '../../demography-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function DemographyArticle1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Odisha’s Slowing Population Growth: A Quiet <br /> Transition
      </h1>
      <p className="para">
        As per the 2011 census, with a total population of 4.19 Cr, Odisha accounts for 3.7% of India’s
        total population. From 1951, with a population of 1.46 crore, Odisha's population grew at an
        average annual rate close to 2% till 1991, and then started declining, reaching 1.4% in the
        2001-2011 period. This declining population growth rate reflects the ongoing demographic
        transition, characterized by reductions in both birth and death rates. There has been a
        consistent decline in the natural growth of the population (Crude Birth Rate minus Crude Death
        Rate) during the 1970s and 1980s, followed by a more rapid decline after the 1990s,
        primarily due to the faster decline in the birth rate.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: 0 }}>
        Population Growth Trends of Odisha
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/24003580" />
      </div>
      <style>{`
        .flourish-embed-container {
          box-shadow: 0 4px 24px rgba(0,90,158,0.2);
          background: #f8fafc;
          padding: 0;
          overflow: hidden;
        }
        .flourish-embed {
          width: 100% !important;
          height: 100% !important;
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(0,90,158,0.2);
          background: #fff;
          border-radius: 12px;
          border: none;
          display: block;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Census of India 2011, Population Projection for Odisha using Bayesian approach, 
        DIU, 2021-36
      </p>
      <p className="para">
        As projected, Odisha's population will reach 5.15 crore by 2036, with an annual growth rate of below 1%
        from 2011 to 2036 (Population Projection for Odisha using Bayesian approach, DIU, 2021-36). 
        Although the growth rate has steadily declined, an additional 9.7 million people will be added during 
        this period, primarily due to increased life expectancy rather than a high birth rate as seen in the past. 
        The population will continue to grow further due to population momentum as a large share of the young 
        population has yet to have children, which will sustain growth for some time before stabilizing or 
        declining.
      </p>
    </main>
  );
}
