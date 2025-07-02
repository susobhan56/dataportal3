"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Cost of Schooling and Gender Gaps in Odisha: <br />NSS 75th Round Reveals Stark Inequalities
      </h1>
      <p className="para">
        According to the latest National Sample Survey (75th round, 2017-18) on social consumption in 
        education, the average household spent Rs. 4,762per student on school education (class I – XII) 
        in 2017-18. This expenditure increases with higher levels of education. While the annual 
        per-student expenditure was Rs 3,726 at the elementary level, it rose to Rs 11,305 per student 
        in higher secondary education. Although 'free education' is guaranteed at the elementary level 
        in government-run or sponsored schools, households still incur expenses for various education-
        related components, such as for private tuition and learning materials. There is also gender 
        discrimination in expenditure for education. Households spent Rs. 5,254 per boy, which was 
        about Rs 1000 higher than the Rs 4712 spent per girl. This gender-based gap in spending widens 
        as children progress from elementary to higher secondary education.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Average Household Expenditure (Rs.) per Student by Gender on School Education in Odisha, <br />2017-18
      </h5>
      <FlourishEmbed src="visualisation/23862220" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: NSS 75th Round on Social Consumption of Education, 2017-18
      </p>
    </main>
  );
}
