"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle8() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Turning Demographic Decline into an Educational<br /> Opportunity
      </h1>
      <p className="para">
        Odisha is undergoing a pronounced demographic transition, marked by a reduction in the 
        population of children and young adults (aged 0-24 years) and a concurrent rise in the 
        proportion of the elderly. This demographic shift is projected to have significant implications 
        for the state's educational landscape. The population across all age cohorts under 24 is 
        expected to contract substantially by 2036. This contraction will directly impact the student 
        population across all educational tiers, from primary to tertiary levels.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Projections of Student-Age Population in Odisha
      </h5>
      <FlourishEmbed src="visualisation/23858316" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Census 2011, Population Projection using the Bayesian Method
      </p>
      <p className="para">
        Addressing the ramifications of this demographic shift is imperative to mitigate potential 
        adverse effects on the state's educational attainment. A shrinking student population presents 
        challenges, such as the underutilization of educational infrastructure and diminished demand 
        for educational institutions. However, it also offers the possibility of reallocating resources 
        toward enhancing the quality of education. Odisha must develop a strategic framework to manage 
        the demographic transition, ensuring that falling student numbers do not lead to declining 
        educational standards. Instead, the focus should be on leveraging this shift to improve access 
        to high quality education, invest in skill development, and modernize the curriculum to align 
        with emerging technological advancements. This approach will allow the state to navigate the 
        demographic changes while maintaining, and potentially enhancing, its educational outcomes.
      </p>
    </main>
  );
}
