"use client";
import { useEffect } from 'react';
import '../../health-articles.css';

export default function HealthArticle7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Inequality in the Womb: Maternal Health Dispar-<br />ities in Odisha
      </h1>
      <p className="para">
        The state's Maternal Mortality Ratio (MMR) stands at 119, higher than the national average of 97 
        (SRS and MMR bulletins, 2020). This high MMR highlights severe maternal health challenges, 
        especially among socio-economically disadvantaged groups like Scheduled Tribes (STs). ST women 
        face higher maternal morbidity, exacerbated by poor nutrition and closely spaced births. Early age 
        at cohabitation and childbearing among tribals increases the duration of reproductive risk. 
        Additionally, access to maternal healthcare is unequal, with one-fifth of all deliveries in the 
        state not meeting the recommended four antenatal care (ANC) visits. In districts like Mayurbhanj, 
        which has a high tribal population, half of the deliveries fall short of the ANC standard, and a 
        significant proportion occur outside medical institutions. ST women are disproportionately affected,
        with only 69.8% receiving four or more ANC visits compared to 82% for other social categories. 
        Furthermore, institutional deliveries are lower among STs (83%) compared to other groups (98%), 
        contributing to ongoing maternal health disparities in the state. These issues underline the need 
        for more targeted maternal health interventions and improved healthcare access, particularly for 
        vulnerable tribal populations (NFHS-5). <br /><br />
        The landscape of teenage pregnancy in Odisha is intricately linked to the broader 
        demographic transition, reflecting shifts in population dynamics, age structure, and reproductive 
        behaviour. As the state progresses through this transition, marked by declining fertility rates and 
        increasing educational attainment, the prevalence of teenage pregnancies remains a critical concern.
        Currently, 7.5% of women aged 15-19 have begun childbearing, with 4.5% having had a live birth and 
        3.1% pregnant with their first child. Notably, the impact of education is profound; 23.5% of girls 
        with no schooling have begun childbearing, contrasting sharply with only 4.6% among those who have 
        completed 12 or more years of education. This discrepancy underscores the need for targeted 
        interventions to enhance educational opportunities, particularly for girls in rural areas, where 
        the childbearing rate is higher at 7.8% compared to 6.1% in urban settings. Furthermore, the 
        demographic transition highlights the importance of understanding the reproductive health challenges
        faced by marginalized groups, as evidenced by the 9.7% of Scheduled Tribe girls and 7.9% of 
        Scheduled Caste girls who are mothers or pregnant. Addressing these issues is crucial not only for 
        improving maternal and child health outcomes but also for supporting the state's transition towards 
        a more educated, empowered population.
      </p>
    </main>
  );
}
