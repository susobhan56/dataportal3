"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Demographic Shifts and the Future <br />of Small Schools in Odisha
      </h1>
      <p className="para">
        The UDISE+ (2021–22) data reveals that 6% of all government schools in Odisha have fewer than 
        20 students enrolled. The prevalence of such small schools is notably higher in districts such 
        as Kandhamal, Koraput, Gajapati, Rayagada, Puri, and Subarnapur. It is important to note that 
        the tribal population exceeds 50% in all of these districts except for Puri and Subarnapur.
        This concentration of small schools in predominantly tribal and remote areas reflects deeper 
        demographic and socio-economic patterns.<br />
        As Odisha experiences a demographic transition marked by a declining child population, 
        these small schools will increasingly struggle to maintain adequate student enrolments. 
        This trend raises concerns about the viability of operating schools with very low enrolment 
        and the associated implications for resource efficiency and quality of education. However, 
        it is equally important to recognize that many of these small schools, particularly those 
        located in remote or underserved regions, serve as the sole point of educational access for 
        children. In many cases, they also represent the last visible presence of the government in 
        these communities, playing a broader role in promoting social inclusion and equity.<br />
        Therefore, policy decisions regarding the rationalization or consolidation of schools must 
        be approached with caution. It is critical to strike a careful balance between improving the 
        efficiency and quality of the education system and safeguarding equitable access, especially 
        for marginalized and geographically isolated populations. Local socio-economic, demographic, 
        and geographic conditions must be central to any strategy aimed at addressing the issue of 
        small schools in Odisha.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Distribution of Government Schools by Enrolment Size (in %)
      </h5>
      <FlourishEmbed src="visualisation/23859652" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: UDISE+ (2021-22)
      </p>
    </main>
  );
}
