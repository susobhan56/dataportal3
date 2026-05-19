"use client";
import { useEffect } from 'react';
import '../../employment-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EmploymentArticle5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Shifting Gears: Odisha’s Journey from Farm to<br /> Factory and Beyond
      </h1>
      <p className="para">
        Odisha’s economy has undergone significant sectoral shifts over the past three decades, reflecting broader trends 
        in its employment structure. The state's Gross State Value Added (GSVA) has increasingly shifted away from agriculture 
        toward the industrial and service sectors. While agriculture contributed 36.10% to the state's GVA in 1993-94, it 
        employed a disproportionate 73.84% of the workforce, highlighting the mismatch between output and employment. Over 
        time, this gap narrowed as agriculture’s share of employment declined to 46.18% in 2022-23, though its GSVA contribution 
        dropped to just 15.23%. This shift illustrates the state's gradual transition from an agrarian-based economy to one 
        increasingly reliant on non-farm sectors. The growth of Agro-based industries has been modest, which limits 
        agriculture's capacity to absorb labour, pushing workers toward other sectors like construction and mining, 
        which have emerged as key employment generators in the non-farm sector. 
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Employment and GSVA Share across major Industries in Odisha (in %)
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23916929" />
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
        The industrial sector, particularly manufacturing and mining, has played an outsized role in Odisha’s GSVA, 
        contributing 48.68% of it by 2022-23. However, the employment share of this sector, at 25.98%, reveals that 
        while industries are driving economic growth, they are not generating jobs at a comparable rate. The 
        manufacturing sector, despite a relatively sluggish GSVA share of 25.8%, employs only 8.19% of the workforce, 
        indicating the capital-intensive nature of many industries, which rely more on automation and technology than 
        on labour. This points to a broader structural transformation, where employment is shifting from agriculture 
        toward more capital-intensive sectors like manufacturing and mining, even though these sectors are not absorbing 
        labour as effectively. This slow-paced shift is compounded by the demographic transition, as Odisha's aging 
        population and the decline in young workers limit the availability of a skilled, productive workforce to meet the 
        growing demands of these industries. Without adequate policies to upskill older workers or attract younger talent, 
        the state risks a labour shortage in its core industries.<br />
        The service sector, while modest compared to national averages, has shown remarkable potential for employment 
        generation in recent years, growing at an impressive 8.14% between 2017-18 and 2022-23. Despite accounting for 
        36.09% of the GSVA in 2022-23, the sector employed a notable 27.84% of the workforce. The rise in service sector 
        employment, particularly in finance, real estate, and public administration, highlights a shift toward more 
        knowledge-intensive jobs, which is crucial as Odisha's demographic transition continues. With fewer young 
        workers entering the labour market, sectors that traditionally rely on youth, such as construction, may 
        struggle, while the aging population presents an opportunity for growth in health services and public administration. 
        However, the state’s demographic transition could create a mismatch in labour supply and demand if policies do not 
        support the upskilling of workers, especially in the service sector, which requires higher education and specialized 
        training.  
      </p>
    </main>
  );
}
