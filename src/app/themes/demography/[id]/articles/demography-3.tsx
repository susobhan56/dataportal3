"use client";
import { useEffect } from 'react';
import '../../demography-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function DemographyArticle3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Falling Fertility, Rising Questions: Odisha at a <br /> Demographic Tipping Point
      </h1>
      <p className="para">
        Fertility is a key driver of demographic change and plays a crucial role in shaping a society’s future.
        It affects the size and structure of the population, influences the balance between age groups, and has
        long-term implications for education, employment, healthcare, and economic growth. Lower fertility often
        signals progress in health and education, especially for women, but it can also lead to challenges 
        like an ageing population and a shrinking workforce if it drops too far.<br />
        In Odisha, fertility has declined significantly over the last five decades. 
        According to the Sample Registration System (SRS), the Crude Birth Rate (CBR) fell sharply from 34.6 
        births per 1,000 people in 1971 to 17.4 in 2021. The Total Fertility Rate (TFR)- the average number 
        of children a woman is expected to have- dropped from 4.7 to 1.8 during the same period, remaining 
        consistently below the national average. Remarkably, Odisha achieved the replacement-level TFR of 2.1 
        as early as 2013, seven years ahead of India overall. Today, urban areas in Odisha have a TFR of 
        just 1.2—comparable to countries like Japan and South Korea—while rural areas report a TFR of 1.9. 
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Total Fertility Rate Projections in Odisha
      </h5>
      <FlourishEmbed src="visualisation/23841643" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source:  2015,2020- Computed from NFHS-4 & 5 district level data;  
        2021-36 - Projected figures using Bayesian Approach
      </p>
      <p className="para">
        Odisha is witnessing a consistent decline in fertility rates across all districts, reflecting a 
        broader demographic transition from high to low fertility. In 2015, the state's Total Fertility Rate
        (TFR) stood at 2.16, ranging from a high of 2.83 in Malkangiri to a low of 1.56 in Jharsuguda. 
        As of the latest data, this variation continues—with Nabarangpur recording the highest TFR at 2.6 
        and Jharsuguda remaining the lowest at 1.3. Between NFHS-4 and NFHS-5, all districts saw a decline 
        in TFR except for undivided Koraput and Kandhamal, with the sharpest drop observed in Cuttack. <br />
        Projections indicate that by 2036, this trend will intensify. TFRs across districts will largely 
        converge, with 20 districts expected to fall below 1.2, while only two—Rayagada and Nabarangpur—will 
        remain above the replacement level of 2.1. <br />
        This transition presents region-specific implications. In industrialized districts like Jharsuguda, 
        very low fertility could lead to a shrinking local workforce, increasing dependency on migrant labour,
        even for non-specialized jobs. Conversely, the tribal-dominated southern districts, which still report 
        higher fertility rates, have the potential to become key labour supply regions for the state, 
        provided there is timely investment in early healthcare, education, and skill development. 
        These evolving patterns highlight the importance of localized planning and policy responses to 
        address both demographic challenges and opportunities.
      </p>
    </main>
  );
}
