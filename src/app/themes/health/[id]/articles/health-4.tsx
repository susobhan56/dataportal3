"use client";
import { useEffect } from 'react';
import '../../health-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function HealthArticle4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        One-Third of Odisha’s Children Battling Mal-<br />nutrition: A Dual Burden of Deficiency and Excess
      </h1>
      <p className="para">
        As per the fifth round of NFHS, there have been reductions in stunting (31%), wasting (18%), 
        severe wasting (6%), and underweight (30%) among children under 5 compared to previous rounds 
        (NFHS-3 and NFHS-4) in Odisha. However, the prevalence of anaemia (64%) and overweight (4%) among 
        children has increased. While rates of wasting, severe wasting, and underweight are below national 
        levels, the prevalence of overweight is slightly higher than the national average. <br />
        There are significant variations in the nutritional metrics among the different districts of the state. 
        Districts like Malkangiri, Nabarangpur, and Rayagada have displayed a high level of stunting 
        (more than 44%) among the children, while Jagatsingpur, Puri, and Khurda have shown significantly lower 
        levels. This nutritional difference among districts is also mirrored in the share of underweight 
        children in the above districts. More than a quarter of the children Mayurbhanj, Subarnapur, Debagarh, 
        Kandhamal, and Balangir have been observed to be wasted, with Debagarh, Kandhamal, and Balangir having 
        the most share of severely wasted children. As mentioned above, the share of overweight children in the 
        state has increased between the last two rounds of
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        <b>Nutritional Status of Children in Odisha & India (in %)</b>
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23855834" />
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
      <p style={{ textAlign: "left", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%",  }}>
        Source: NFHS-4,5
      </p>
      <p className="para">
        NFHS. Dhenkanal had the largest increase, from 1.6% during NFHS-4 to 6.8% during NFHS-5. 
        The highest incidence of overweight children was in Jagatsinghpur at 8.3%, which had increased from 
        the earlier 5.5%. The prevalence of Anaemia has increased significantly in most of the districts of 
        Odisha. The highest recorded prevalence of anaemia was in Malkangiri, Sundargarh, and Anugul 
        (more than 70%), while the lowest prevalence was in Baleshwar, Nayagarh, and Puri. However, districts 
        like Khurda and Cuttack had the highest growth of anaemic incidence between the last two rounds of 
        NFHS, and districts like Bargarh and Sambalpur observed a significant decline in the prevalence of 
        anaemia.<br />
        The nutritional and health disparities in Odisha, as highlighted by the NFHS-5 data, indicate a complex 
        future for the state's health outcomes. While progress has been made in reducing stunting, wasting, and 
        underweight rates, the rising prevalence of anaemia and overweight children points to emerging health 
        challenges. District-level variations in child malnutrition could widen health inequities across the 
        state, especially with stunting remaining high in some tribal and rural districts like Malkangiri and 
        Rayagada. The increasing incidence of anaemia and overweight children, particularly in districts such 
        as Jagatsinghpur and Dhenkanal, suggests a shift toward a dual burden of malnutrition—undernutrition 
        coexisting with overnutrition. This trend, if not addressed, may strain healthcare resources, increase 
        non-communicable diseases, and hinder the long-term economic and social development of Odisha.
      </p>
    </main>
  );
}
