"use client";
import { useEffect } from 'react';
import '../../health-articles.css';

export default function HealthArticle6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Odisha’s Double Burden of Malnutrition: <br />Nutritional Challenges Across the Life Course
      </h1>
      <p className="para">
        India is currently experiencing a significant rise in various forms of malnutrition, 
        including undernutrition (underweight adults and stunted, wasted, severely wasted, and underweight 
        children), overweight/obesity, and micronutrient deficiencies. This phenomenon, known as the double 
        burden of malnutrition (DBM), is a major public health concern, particularly in low- and 
        middle-income countries like India. While Odisha has shown some improvements in nutritional metrics, 
        it still mirrors national trends. The prevalence of underweight has decreased among both men (21%) 
        and women (19%) aged 15-49, but anaemia has risen alarmingly, affecting 64% of women and 28.5% of 
        men (NFHS-5). Additionally, the incidence of overweight and obesity in the same age group has 
        increased, now affecting 23% of women and 22% of men.            
      </p>
      <h4 className="para">
        <i>
          <b>Nutritional Status among Adults</b>
        </i>
      </h4>
      <p className="para">
        The nutritional status of adults in Odisha shows a significant variation by age group, particularly
        in BMI levels. Among women aged 15-19, 36.0% are underweight (BMI &lt; 18.5), while 6.4% are overweight
        or obese (BMI ≥ 25.0). The prevalence of underweight women decreases with age, reaching 16.7% in the 
        40-49 age group, while overweight and obesity rise to 28.8%. Similarly, for men, 32.9% aged 15-19 
        are underweight, decreasing to 10.8% in the 40-49 age group, with overweight/obesity increasing from 
        8.5% to 27.6% over the same age range. This shift in nutritional status mirrors Odisha’s demographic 
        transition, with a shrinking population of children and youth, which may contribute to increased 
        focus on adult health challenges, such as managing rising obesity and addressing malnutrition in 
        aging populations. <br /><br />
        The increasing prevalence of anaemia, particularly the significant gap between women (64.9%) and men 
        (28.5%) aged 15 to 49, as highlighted in the NFHS-5, adds a crucial dimension to Odisha's demographic 
        transition. As Odisha undergoes demographic changes marked by declining fertility rates and an aging 
        population, the health of the reproductive-age population becomes increasingly important for sustaining 
        social and economic development. The high incidence of anaemia, especially among women, indicates 
        persistent gender-based health disparities that could impede women's productivity and well-being. This 
        is particularly concerning in a state where the youth population is shrinking, as a smaller working-age 
        population with health challenges may further strain public health systems and hinder economic growth. 
        Addressing anaemia is thus vital not only for improving individual health outcomes but also for ensuring 
        a healthy, productive population that can support Odisha’s demographic transition. 
      </p>
      <h4 className="para">
        <i>
          <b>Nutritional Status among Elderly</b>
        </i>
      </h4>
      <p className="para">
        While malnutrition is harmful at any age, it significantly impacts older adults, making them more 
        vulnerable to falls, slower recovery, hospitalizations, and even death. Contributing factors include 
        loss of appetite, difficulty in chewing and swallowing, increased use of prescription medication, 
        depression, dementia, chronic diseases, and limited access to nutritious food. Older adults, 
        especially those with chronic conditions like diabetes, cancer, or Alzheimer’s disease, face higher 
        risks due to altered metabolism and dietary restrictions. Additionally, frequent hospitalizations and 
        stays in long-term care facilities further increase their risk.<br /><br />
        Diet and lifestyle, along with maintaining a healthy body weight, are essential for good health at 
        all age groups, but are particularly crucial for healthy ageing (Leslie and Hankey, 2015). In India, 
        more than 21% of individuals above age 45 are underweight, 21% are overweight and 7% are obese. In 
        rural areas, about 26% are underweight, whereas in urban areas, 32% are overweight, and 15% are obese 
        in the same age group (LASI Wave-1, 2017-18). In Odisha, 30% of the elderly aged 45 and above are 
        underweight, the second highest in the country, while 18% are either overweight or obese, which is 
        below the national average. This situation, among several other factors, indicates that the early age 
        groups with inadequate nutrition have transitioned into elderly age groups with similar conditions. 
      </p>
    </main>
  );
}
