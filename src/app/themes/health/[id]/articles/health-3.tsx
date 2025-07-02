"use client";
import { useEffect } from 'react';
import '../../health-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function HealthArticle3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Hypertension and Diabetes on the Rise: Odisha’s <br /> Cross-Generational Health Crisis
      </h1>
      <p className="para">
        The evolving disease landscape, coupled with shifting demographics—especially the growing 
        proportion of elderly individuals—presents substantial challenges. Non-communicable diseases (NCDs)
        such as hypertension and diabetes are widespread among millions of elderly citizens, who require 
        long-term management and face an increased risk of complications. Alarmingly, these diseases are also 
        affecting younger age groups, further increasing their burden across the population. Using age-specific
        prevalence data sourced from the National Family Health Survey (NFHS-5, 2019-21) for 
        the age group 15-49 years and the Longitudinal Aging Study in India (LASI Wave-1, 2018) for 
        individuals aged 50 and above, projections have been made to estimate the total hypertensive and 
        diabetic populations across various years <br />
        In 2021, approximately 8.67 million people aged 15 and above were afflicted with hypertension, a 
        number estimated to rise to 10.8 million in the year 2036. Among those aged 50 and above, females
        are anticipated to outnumber males in hypertension prevalence. Similarly, in 2021, 3.97 million people 
        aged 15 to 49 had diabetes, with this number projected to increase to 4.10 million by 2036. 
        Non-communicable diseases (NCDs), such as hypertension and diabetes, are lifelong conditions that 
        negatively impact quality of life. As Odisha continues to struggle with child malnutrition and anaemia, 
        the increasing prevalence of NCDs will further increase the economic burden on the state. 
        Strengthening the health system and designing interventions, especially in primary care setting, 
        are essential to address the increasing prevalence of NCD challenge in Odisha. Furthermore, the 
        gradual decline in the share of the 0 to 4-year population in the total population will free up 
        resources and manpower previously used to combat childhood illness and deaths. This can now be 
        redirected to support the elderly population.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        No. of Hypertension and Diabetes Patients in Odisha by 2036 (in millions)
      </h5>
      <FlourishEmbed src="visualisation/23842439" />
      <p style={{ textAlign: "left", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%", marginLeft: "24%" }}>
        Source: The prevalence rate in the past surveys (for people aged 15-49 years- NFHS-5 & for 
        people aged above 49 years- LASI wave-1) has<br /> been multiplied by the projected population 
        figure of the DIU, CYSD to get the size of healthcare requirements.<br />
        * It has been assumed that the prevalence of Hypertension & Diabetes will remain the same 
        over the period.
      </p>
      <p className="para">
        The elderly population in Odisha faces a significant burden of non-communicable diseases (NCDs), 
        similar to trends seen globally and across India. The most prevalent health issue among Odisha’s 
        elderly is hypertension, with a substantial proportion of them showing pre-hypertension (41.6%) 
        compared to the national average (39.3%). While the prevalence of high blood pressure (30.8%) is 
        lower than the national figure (36.1%), a sizable percentage of Odisha’s elderly also suffer from 
        cardiovascular diseases (CVDs), which rise with age. Gastrointestinal and skin disorders are also 
        more common in Odisha’s elderly population than the national average, indicating gaps in medical care 
        and access. Chronic bone and joint disorders, such as arthritis (16.7%), rheumatism (1.8%), and 
        osteoporosis (0.3%), also significantly impact the elderly in the state, though the overall prevalence
        is slightly lower than the national average.
      </p>
    </main>
  );
}
