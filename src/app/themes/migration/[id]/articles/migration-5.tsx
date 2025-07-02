"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Odisha's Evolving Migration Landscape
      </h1>
      <p className="para">
        According to the 2011 Census figures, Odisha had 15.42 million migrants, 
        representing an increase from 8.43 million in 1991. The corresponding increase was much higher 
        in rural areas, from 6.86 million to 11.94 million. In 2011, 36.7% of Odisha’s total population 
        were migrants, lower than the national average of 37.6%. The migration rate, i.e., the share of 
        migrants in the total population, was higher in urban areas, at 49.7%, compared to the state 
        average and even higher than the national average for urban areas (47.1%). Contrary to the 
        higher increase in the absolute numbers of migrants in rural areas of the state between 1991 
        and 2011, urban areas of the state noted a substantial increase in the migration rate for the 
        same period. <br /> 
        As per PLFS (2020-21), the estimated figure for Odisha was 15.1 million, much lower than the 
        Census figure of 2011. Consequently, only 34.3% population in Odisha were migrants in 2020-21, 
        lower than the Census of 2011 figure of 36.7%. Interestingly, migration rates obtained from NSS 
        and PLFS were higher in Odisha compared to the national average, contrary to the Census figures.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Share of Migrants in Odisha's Population (in %)
      </h5>
      <FlourishEmbed src="visualisation/23871984" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Census of India 1991 - 2011, PLFS 2020-21
      </p>
      <p className="para">
        NSS and PLFS data indicate that the migration rate in urban areas of the state decreased from 
        44.0% to 38.9% between 2007-08 and 2020-21, while the trend is increasing for rural areas, 
        i.e., from 27.6% to 33.2% during the same period. The increase in migration rate in rural areas 
        in the state indicates that migration in the state in the last decade has been rural-directed. 
        On the contrary, the decline in migration rate in urban areas during the same period indicates 
        that urban areas may have either failed to attract migrants or become exclusionary towards poor 
        migrants from rural areas.<br />
        Distance-wise disaggregation indicates that the majority of in-migration in Odisha is from 
        within the state (intra-state), and it is dominated by female migration owing to the practice 
        of exogamous marriage (Srivastava, 2012). As per Census figures, in 2011, 93.9% of the movement 
        was intra-state and only 5.5% of the total in-migrants were from outside the state, much lower 
        than the national average of 11.9%. The share of interstate in-migrants noted a decline from 
        7.0% in 1991 to 5.5% in 2011. This trend is particularly noted for male migrants.
      </p>
    </main>
  );
}
