"use client";
import { useEffect } from 'react';
import '../../health-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function HealthArticle1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Changing Populations, Unchanged Rights?<br /> SRHR  in Odisha Today
      </h1>
      <p className="para">
        Sexual rights involve the freedom to make decisions about one's sexual life, including access to 
        sexual health care, education, and the right to express sexual orientation without coercion or 
        violence, while reproductive rights focus on decisions related to reproduction, such as access to 
        contraception, safe abortion, and maternal health care. These rights, though often blurred in policy 
        discourse, play a crucial role in shaping key demographic outcomes like fertility rates, population 
        growth, and family planning. Access to reproductive health services influences decisions about the 
        number, timing, and spacing of children, while sexual rights impact maternal health, adolescent 
        fertility, and the incidence of sexually transmitted infections. <br />
        <FlourishEmbed src="visualisation/23856199" />
        <p style={{ textAlign: "right", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%", marginLeft: "24%" }}>
          Source: NFHS-4,5
        </p>
        Understanding reproductive rights involves access to information about reproductive health, 
        enabling informed decisions regarding contraception, pregnancy, childbirth, and maternal health. 
        In Odisha, knowledge of reproductive rights rose from 19% in 2005-06 to 30% in 2019-21, with variations 
        across socioeconomic groups. Approximately 95% of women report autonomy in reproductive choices, though 
        higher-educated women and those from certain social categories exhibit lower autonomy compared to 
        their less educated or marginalized counterparts. While agency, or the capacity to act on reproductive 
        choices, is present in about 84% of women, the practice of reproductive rights increased from 42% in 
        2005-06 to 62% in 2019-21, with significant gaps remaining based on education and wealth. Women with 
        fewer children show lower levels of practice, likely due to younger age. Overall, despite progress in 
        Odisha, challenges persist in ensuring equitable access and empowerment across different demographic 
        groups.<br />
        As per the population projections, Odisha is expected to witness a shrinkage in the youth population 
        (aged 15-29) post 2021. As mentioned previously, this is a consequence of the declining TFR in the 
        state. A shrinking youth population impacts SRHR by shifting priorities away from youth-focused 
        programs, potentially leaving young people underserved in critical areas like contraception, safe sex 
        practices, and comprehensive sex education. Reduced attention to youth SRHR could lead to long-term 
        health issues, making it essential to maintain strong, responsive services for this changing 
        demographic.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Contraceptive Usage among Men and Married Women in Odisha
      </h5>
      
     
      <p className="para">
        Odisha's demographic transition, marked by declining fertility rates (TFR) and aging populations, is 
        intricately linked to the usage of contraception, although the relationship is not as straightforward 
        as one might expect. While contraceptive knowledge is nearly universal (over 99%) among both men and 
        women, and modern contraceptive usage has seen a significant rise from 57% in NFHS-4 to over 74% in the 
        latest NFHS-5 (2019-21), the decrease in TFR does not seem directly correlated with contraception usage 
        alone. Additionally, while modern contraceptives like sterilization, IUDs, condoms, and pills are being 
        more widely used by married women (aged 15-49), a considerable section of the population still remains 
        outside the fold of contraceptive use. The interplay between declining fertility and these social and 
        behavioural factors highlights the complex dynamics of Odisha's demographic shift, where increasing 
        contraception use contributes but is not the sole driver of demographic changes.<br />
        It is observed from the above figures that, the usage of contraceptives among the married women aged 
        15-49 far exceeds that of men. More than half of the men in the state do not use any form of 
        contraceptives rendering them to be highly susceptible to STDs. While a significant portion of the 
        women use modern contraceptives, more than a quarter of the total women in Odisha do not use them. 
        This is an alarming issue because despite a high level of knowledge on the benefits of contraceptives 
        in Odisha, the actual usage is significantly small. This is especially true among men, where more than 
        51% do not use any contraceptive.
      </p>
    </main>
  );
}
