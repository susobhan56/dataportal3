"use client";
import { useEffect } from 'react';
import '../../demography-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function DemographyArticle2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Shifting Balance: The Changing Sex Ratio in <br /> Odisha
      </h1>
      <p className="para">
        The sex ratio, defined as the number of females per 1,000 males, is a vital demographic indicator
        that reflects gender equity and the overall social health of a population. It influences marriage 
        patterns, labour force participation, fertility rates, and the demographic dividend. Sex ratio is 
        a key measure for guiding gender-sensitive policies and promoting inclusive and sustainable 
        development.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Trends in Sex Ratio in Odisha
      </h5>
      <FlourishEmbed src="visualisation/23840967" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Census of India 2011, Population Projection for Odisha using Bayesian approach, 
        DIU, 2021-36
      </p>
      <p className="para">
        Odisha was among the few states in India that consistently recorded a higher sex ratio up to 
        the 1961 Census, reflecting a relative female advantage. This trend was influenced by cultural 
        and traditional norms, a predominantly rural population, high male out-migration, and elevated 
        birth and death rates. However, the sex ratio has shown a declining trend over the decades, 
        from 1,086 females per 1,000 males in 1921 to 971 in the 1991 Census, indicating a gradual 
        shift towards a less favourable demographic balance for women. The sex ratio has been improving 
        since then, reaching 979 by the 2011 census, and by 2036, it is projected to exceed 1000, 
        indicating a positive shift toward gender balance. <br />
        The improvement in the sex ratio is driven by enhanced healthcare, maternal and child health programs,
        and gender-focused policies, which have reduced gender disparities. Efforts to promote female literacy,
        curb sex-selective practices, and improve women's life expectancy have further contributed to this 
        trend.
      </p>
    </main>
  );
}
