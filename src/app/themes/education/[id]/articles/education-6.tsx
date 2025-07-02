"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Why Odisha’s Children Drop Out: NFHS-5 Reveals <br />Gendered Trends in School Non-Attendance
      </h1>
      <p className="para">
        Odisha’s education system continues to grapple with serious barriers to retention and 
        participation, as reflected in recent data highlighting the reasons students aged 6–17 
        discontinue their education. A particularly concerning factor is the high share of students
        citing repeated academic failure or disinterest in studies, accounting for 34.8% of all cases. 
        This issue is far more pronounced among boys, with 44.4% identifying it as the main reason for 
        dropping out, compared to 26.6% of girls. Such findings point to a persistent learning crisis 
        in the state, where despite access to schooling, many students are unable to acquire 
        foundational skills and remain meaningfully engaged. The sharp drop in learning outcomes as 
        students move to higher grades, as seen in the National Achievement Survey, reinforces this 
        concern. The data calls for a renewed focus on improving the quality of classroom instruction, 
        introducing remedial education programmes, and making learning more contextual, relevant, and 
        engaging—especially for those at risk of early disengagement.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Reasons for Not Pursuing Education in Odisha
      </h5>
      <FlourishEmbed src="visualisation/23861242" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: NFHS-5
      </p>
      <p className="para">
        Economic factors also play a significant role in educational discontinuation, 
        with 26.8% of students reporting that education costs are prohibitive. Despite 
        the Right to Education (RTE) Act mandating free education at the elementary level, 
        families continue to bear substantial out-of-pocket expenses for private tuition, uniforms, 
        transport, and study materials. This burden is disproportionately felt by girls, 
        with 31.1% of female students citing cost as a reason for leaving school, compared to 
        21.8% of male students. This gender disparity points to entrenched biases in household 
        investment patterns, where education for boys is often prioritised, particularly as costs 
        rise in higher classes. The widening gap in per capita expenditure between boys and girls, 
        as also seen in national surveys, indicates a systemic disadvantage that must be addressed. 
        Providing targeted scholarships, expanding conditional cash transfers, and strengthening 
        community mobilisation around the value of girls’ education are critical policy levers to 
        counteract this imbalance.<br />
        Beyond academic and financial barriers, a combination of socio-cultural and supply-side 
        factors continue to exclude a significant number of children from the education system. 
        Among boys, 14.5% left school because they were required to work and support their families, 
        reflecting the intersection of poverty and early labour force participation. For girls, 7% 
        dropped out due to marriage—an issue virtually non-existent among boys. These figures 
        underscore the persistent hold of early marriage and gender norms that limit girls’ educational 
        trajectories. Furthermore, inadequate schooling infrastructure, poor connectivity, and lack of 
        safety disproportionately affect girls, with 11.3% citing such supply-side issues as a barrier 
        to continued education, compared to 5.9% of boys. In remote and tribal areas, these challenges 
        are even more acute. Addressing them will require a multi-pronged strategy: improving school 
        access and safety, especially for girls; integrating life skills and vocational training into 
        the curriculum; and engaging families and communities to shift harmful social norms. 
        A gender-responsive, context-specific approach to educational planning is essential for Odisha 
        to achieve inclusive and equitable education outcomes in the coming years.
      </p>
    </main>
  );
}
