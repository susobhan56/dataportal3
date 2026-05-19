"use client";
import { useEffect } from 'react';
import '../../education-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EducationArticle4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Infrastructural Gaps Undermine Quality <br />Education in Odisha
      </h1>
      <p className="para">
        The availability of quality infrastructure is crucial for creating a conducive teaching and 
        learning environment in schools. The Right of Children for Free and Compulsory Education (RTE) 
        Act, 2009, has recommended improving infrastructural provisions in elementary schools. These 
        provisions include: 1) functional boys' toilet, 2) functional girls' toilet, 3) pucca boundary 
        walls (including intact walls, pucca but broken walls, and barbed wire fencing), 4) a library, 
        5) a playground, 6) a ramp, 7) functional drinking water facilities, 8) a teacher-classroom 
        ratio ( number of teachers divided by number of classrooms used for instruction) of 1 or 
        more, 9) a pupil-teacher ratio (students divided by teachers) of 30 or less, and 
        10) a student-classroom ratio (students divided by classrooms) of 30 or less. 
        The schools are, thus, classified based on the availability of these essential facilities.<br />
        It was found that, only 11% of all elementary schools in India meet the 10 provisions listed 
        above. In Odisha, the figure is even lower, at just 5.4%, and about 50% of schools have 
        fewer than seven of these facilities. 
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Percentage of Schools at Elementary Level with No. of Infrastructure Facilities Available <br />in 2021-22
      </h5>
      <FlourishEmbed src="visualisation/23860926" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: UDISE+ (2021-22)
      </p>
    </main>
  );
}
