"use client";
import { useEffect } from 'react';
import '../../health-articles.css';

export default function HealthArticle5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Addiction & Abuse: Undermining Odisha’s <br /> Human Capital
      </h1>
      <p className="para">
        Despite the Odisha government's 2013 ban on the sale and manufacture of tobacco, the latest family 
        health survey reveals that half of the state's men and a quarter of its women still consume it. 
        About 51.6% of men aged 15 and older in the state use tobacco, compared to the national average of 
        38%. Among women, 26% in Odisha use tobacco, significantly higher than the national average of 8.9%. 
        Rural areas show even higher consumption rates. While tobacco use among men has declined from 55.9% 
        in 2015-2016 to 51.6% in 2019-2021, it has increased among women from 17.3% to 26% during the same 
        period. Medical research consistently links tobacco consumption to higher morbidity and mortality 
        rates. With a substantial portion of the population using tobacco, oral cancer has become a major 
        health crisis in the state, claiming over 10,000 lives annually. <br /><br />
        Excessive substance abuse in Odisha has far-reaching consequences, including domestic violence, 
        crime, and reduced engagement in productive activities, all of which deteriorate the quality of 
        human capital and hinder efforts to harness the state's demographic dividend. According to NFHS-5, 
        about 31% of women aged 18-49 in Odisha are victims of domestic abuse, with nearly 32% experiencing 
        either sexual or physical abuse and approximately 4% experiencing both. Contributing factors 
        include the wife being the family's breadwinner, the husband's alcohol abuse, and his illiteracy. 
        The prevalence of domestic abuse has severe economic implications, as it discourages women from 
        joining the workforce, leading to underutilized labour and slowing overall development. Addressing 
        these issues is crucial for improving human capital quality and ensuring the state can fully 
        leverage its demographic resources.
      </p>
    </main>
  );
}
