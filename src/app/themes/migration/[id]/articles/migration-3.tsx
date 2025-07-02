"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Changing Trends and Regional Patterns of Inter-<br />State In-Migration to Odisha
      </h1>
      <p className="para">
        The migration pattern of interstate in-migration to the state noted a significant change 
        between 2007-08 and 2020-21. In 2007-08, 33% and 26.7% of interstate in-migration were 
        urban-urban and rural-urban streams, respectively. PLFS 2020-21 estimates reveal a sharp 
        increase in urban-rural stream, which is mostly because of an increase in return migration to 
        rural areas of the state during this period. In 2020-21, 57.9% of the interstate migration to 
        the state belonged to the urban-rural and more than 80% of the stream was composed of return 
        migrants, whose usual place of residence was Odisha at one point in time in the past. A further 
        disaggregation indicates that this urban-rural stream is solely male-dominated, indicating a 
        reverse labour migration. Such reverse migration to rural areas of the state is worrisome as 
        it may increase pressure on the state’s already labour-surplus rural economy.
      </p>
      <h4 className="para">
        <i>Regional Patterns</i>
      </h4>
      <p className="para">
        PLFS 2020-21 estimates show that migration rates, particularly among men, were higher in 
        Odisha's Coastal and Southern regions. Notably, the Southern region, which includes 
        out-migration-prone KBK districts (Kandhamal, Baudh, Subarnapur, Balangir, Nuapada, Kalahandi, 
        Rayagada, Nabarangapur, Koraput, and Malkangiri), had the lowest migration rate in 2007-08. 
        However, by 2020-21, migration in this region saw a significant rise, accounting for half of 
        the state's inter-state migration, largely due to return migration. Overall, the majority of 
        the inter-state migrants to Odisha originated in three southern states, i.e., Kerala, Tamil 
        Nadu and Andhra Pradesh and a considerable share of these in-migrants were return migrants. 
        This suggests a shift toward long-term circular migration, where migrants return home after 
        completing their work cycle, as these states deny these migrants long-term opportunities.  
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Distribution of Inter-state In-migrants by Reason for Migration (in %)
      </h5>
      <FlourishEmbed src="visualisation/23872501" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Estimated from PLFS 2020-21
      </p>
      <h4 className="para">
        <i>Reasons for Migration</i>
      </h4>
      <p className="para">
        PLFS 2020-21 reveals that only 30.8% of male inter-state migrants in Odisha moved for 
        employment reasons, much lower than the national average of 52.5%. Employment-related migration 
        has declined in both rural and urban areas since 2007-08, suggesting the state's limited 
        ability to attract labour from outside. Additionally, 18% of male migrants cited "loss of 
        employment" as the reason for migration. This is particularly evident among rural migrants 
        (21.4%) and return migrants (22%), indicating growing difficulty in securing employment in 
        other states. ‘Employment-related’ reasons seem to be still important for in-migration to 
        urban areas. However, the figure for employment-related migration among males in the urban 
        areas has declined from 82.1% to 59.4% between 2007-08 and 2020-21. This is an indication that 
        the urban areas of the state are unable to create new opportunities to attract migrants from 
        other states. ‘Marriage’ and ‘migration of parents/earning members’ are the two major reasons 
        for inter-state female migration in Odisha, particularly when the destination is urban.  
      </p>
      <h4 className="para">
        <i>Characteristics of In-migrants</i>
      </h4>
      <p className="para">
        PLFS 2020-21 shows that Odisha's inter-state in-migrants are primarily young males, 
        with 36.5% aged 15-29 and 39.6% aged 30-44, surpassing national figures. The share of young 
        male migrants (15-29) has increased significantly since 2007-08. Female in-migrants tend to be 
        older, with 25% aged 45-59. Odisha mainly attracts less-educated migrants, particularly in 
        rural areas, with 67.3% of inter-state in-migrants having education only up to middle school, 
        much higher than the national average. Only 11.7% of migrants to Odisha had higher education, 
        though this share is higher in urban areas (24.4%) and among female migrants (18.1%).  
      </p>
    </main>
  );
}
