"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Educational Demand and Supply: <br />Balancing Access and Efficiency
      </h1>
      <p className="para">
        Educational demand and supply in Odisha are increasingly influenced by demographic changes, 
        particularly the decline in the child population aged 5-14 years. The decrease in the child 
        population has led to a significant reduction in school enrolment, resulting in a rise in the 
        number of "small schools," defined by very low enrolment, particularly those with fewer than 20 
        students. The ongoing establishment of larger schools and the concentration of students in 
        these institutions further exacerbate the problem, creating a disparity in resource allocation 
        and leading to potential school closures. <br /><br />
        The data from UDISE+ (2021-22) shows that 6% of all government schools in Odisha have fewer 
        than 20 students. The presence of such small government schools is particularly high in 
        districts like Kandhamal, Koraput, Gajapati, Rayagada, Puri, and Subarnapur. Notably the tribal 
        population exceeds 50% in all these districts, except for Puri and Subarnapur. As Odisha's 
        population declines due to demographic changes, these schools will face challenges in enrolling 
        enough students in the future. However, many of these schools, particularly those in remote 
        areas, serve as the primary source of education and represent the last mile of government 
        presence. Therefore, it is crucial to strike a balance between maintaining access to education 
        and considering local socio-economic, demographic, and geographical conditions.
      </p>
    </main>
  );
}
