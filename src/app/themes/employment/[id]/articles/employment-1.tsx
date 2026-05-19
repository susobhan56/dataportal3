"use client";
import { useEffect } from 'react';
import '../../employment-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EmploymentArticle1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Bridging the Gap: Reclaiming Women’s Role in <br />Odisha’s Workforce
      </h1>
      <p className="para">
        The labour force participation rate (LFPR) for women in Odisha reflects a critical gender imbalance in the productive 
        workforce, particularly as the state experiences shifts in its population structure. The data shows a marked decline 
        in the participation of young women (aged 15-29) over the years, from 42.5% in 1993-94 to 35.3% in 2022-23, 
        with the most substantial drops occurring in rural areas. This decline in female participation is largely due to 
        persistent gender norms, limited access to quality jobs, and the low absorption capacity of urban labour markets 
        for women. Rural areas, in contrast, see higher labour force participation among women, driven by the reliance 
        on agriculture and informal, low-skilled work, which tends to absorb more labour regardless of skill level. 
        Despite the decline, the period from 2019-20 to 2022-23 has witnessed a notable recovery, with female LFPR in 
        Odisha increasing by 10 percentage points, suggesting that recent policies or shifts in the economic environment 
        may have encouraged more women to enter the labour market.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Structure of Workforce across Genders (Working age-15-64 years) in Odisha (in %)
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23915070" />
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
        Source: Computed from unit-level datasets of different NSSO-EUS (1993-94 & 2011-12) & PLFS (2017-18, 2019-20 & 2022-23)
      </p>
      <p className="para">
        The gender gap in labour market participation remains significant, with women's participation still trailing behind 
        men’s. While 83.1% of men in the working-age group were part of the labour force in 2022-23, only 47.4% of women were 
        engaged, highlighting enduring gender disparities. In urban areas, these disparities are more pronounced, as urban 
        jobs often require higher skills and formal qualifications, which women may lack due to limited access to education 
        and vocational training. However, rural areas present a contrasting picture, with women’s LFPR surpassing urban levels, 
        driven by agricultural and informal sector jobs that offer greater flexibility. The demographic transition, characterized 
        by a shrinking younger population, may further challenge gender dynamics, especially as women’s participation becomes 
        increasingly vital to maintaining the labour supply. Expanding opportunities for women in higher-skilled urban jobs 
        and addressing gendered barriers in education and employment will be essential for Odisha to fully harness its labour 
        potential amid these demographic shifts.
      </p>
    </main>
  );
}
