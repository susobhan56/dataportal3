"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Bridging the Literacy Gap: Odisha’s Adult<br /> Education Challenge Amid Demographic Transition
      </h1>
      <p className="para">
        Odisha has made significant strides in improving literacy rates among children and adolescents, 
        largely due to successful educational initiatives that have nearly universalized primary education.
        However, the state faces challenges with low educational attainment among individuals aged 18 and above. 
        In the 24-30 age group, 11.4% remain illiterate, and only about one-third have completed upper primary 
        education or higher. The situation is more concerning among those aged 30 and above, where one-third of 
        the population is still illiterate. As Odisha undergoes its demographic transition, the proportion of 
        older, less-educated individuals is expected to grow, underscoring the urgent need for targeted 
        literacy programs for adults.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Age-Wise Distribution of Population by Completed Level of Education in Odisha
      </h5>
      <FlourishEmbed src="visualisation/23861483" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: NFHS-5
      </p>
    </main>
  );
}
