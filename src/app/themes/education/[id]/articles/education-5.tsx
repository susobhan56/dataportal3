"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Odisha’s Learning Crisis Deepens with Age: NAS<br /> 2021 Highlights Alarming Decline in Proficiency
      </h1>
      <p className="para">
        Odisha’s education system faces critical challenges in improving learning outcomes, 
        particularly in the context of the state's ongoing demographic transition. While access to 
        schooling has expanded, there is a persistent "learning crisis" as many students advance 
        through grades without achieving basic proficiency in key subjects. According to the National 
        Achievement Survey (NAS, 2021), only 43% of Grade III students in Odisha reached a 'proficient 
        and advanced' level in language skills. Although this performance surpasses that of neighbouring
        states like Bihar, Chhattisgarh, and Jharkhand, the percentage of students achieving proficiency 
        drops sharply as they move to higher grades. By Grade VIII, just 35% of students demonstrate 
        proficiency in language, and by Grade X, this figure plummets to a mere 4%. This declining 
        trend reflects the challenges in sustaining educational quality as students advance through 
        the system, which could hinder Odisha's ability to fully harness the potential of its younger 
        population during the demographic transition.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Student Performance Levels in Language and Mathematics (Class 5 and Class 8), Odisha
      </h5>
      <FlourishEmbed src="visualisation/23862074" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: National Achievement Survey (NAS) 2021
      </p>
    </main>
  );
}
