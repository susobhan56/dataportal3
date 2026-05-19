"use client";
import { useEffect } from 'react';
import '../../employment-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EmploymentArticle2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Labour in Transition: Navigating Odisha’s Chang-<br />ing Demographic Landscape
      </h1>
      <p className="para">
        Odisha is undergoing a demographic transition marked by a declining proportion of children (0-15 years) and a growing 
        share of the elderly population. Although the working-age group (15-59 years) currently constitutes the majority—over 
        60%—this segment is projected to shrink gradually after 2026, signalling future challenges for the state's labour force 
        and economic support systems.
        <br />
        Odisha’s rising working-age population (15–59 years) in recent decades has created a window of demographic dividend, 
        offering the potential for economic growth if effectively harnessed. However, with declining fertility and a steadily 
        increasing elderly population (60+), the state faces an impending shrinkage in new labour market entrants, risking 
        slower economic momentum. This demographic shift poses challenges, particularly in labour-intensive sectors like 
        agriculture and construction, compounded by a predominantly informal workforce and low rural female participation. 
        As the population ages, younger workers may bear a dual burden of caring for both children and the elderly, while 
        demand for healthcare and social protection is expected to grow, straining public resources. 
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Trends in Share of Working Age Population (Age 15-59) in Total Population, Odisha
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23930160" />
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
        Source: Census of India (2011); Population Projection for Odisha using Bayesian Approach, DIU, 2012-36
      </p>
      <h4 className="para">
        Impact of a Youthful Demographic on Job Creation and Economic Growth
      </h4>
      <p className="para">
        Odisha’s youthful demographic has historically played a pivotal role in driving economic growth, particularly 
        by providing labour to agriculture and small-scale industries. However, with a demographic shift leading to a 
        gradual decline in the 15–29 age group, the state faces the challenge of sustaining its growth momentum. A 
        shrinking youth cohort may slow expansion in labour-intensive sectors, but it also presents an opportunity to 
        boost productivity by transitioning towards knowledge- and capital-intensive industries.
        <br />
        Emerging sectors like the digital economy, green jobs, and healthcare offer significant employment potential. 
        The digital sector can absorb youth in areas such as software development, data analytics, and e-commerce, while the 
        growing focus on environmental sustainability is opening up new roles in renewable energy and eco-friendly infrastructure. 
        Simultaneously, Odisha's ageing population will increase the demand for skilled healthcare professionals, making health 
        and caregiving sectors vital for future employment.
        <br />
        To harness these opportunities, Odisha must realign its employment strategy by investing in education, skilling, and 
        modern sectors less reliant on a large young workforce. A forward-looking approach will ensure an adaptable and 
        resilient labour market that supports both economic growth and social well-being.
      </p>
      <h4 className="para">
        Implications of an Aging Population on Labour Markets
      </h4>
      <p className="para">
        Odisha’s ageing population poses growing challenges for its labour market, especially with a declining share of young 
        workers (15–29 years). This shift could lead to labour shortages, higher wage pressures, and increased costs for businesses. 
        As the workforce ages, skill mismatches may widen, making it crucial to invest in continuous education and re-skilling to 
        keep older workers aligned with evolving industry needs, particularly in sectors like technology, manufacturing, and healthcare.
        <br />
        However, this demographic shift also presents an opportunity to tap into the "Silver Dividend." Experienced older workers 
        can contribute significantly to roles that require institutional knowledge and specialized skills. By promoting flexible work 
        options, phased retirement, and workplace wellness, Odisha can extend productive workforce participation. At the same time, 
        adopting labour-saving technologies and fostering innovation will help maintain productivity. With the right strategies, 
        Odisha can turn the challenges of ageing into a foundation for resilient and inclusive growth.
      </p>
    </main>
  );
}
