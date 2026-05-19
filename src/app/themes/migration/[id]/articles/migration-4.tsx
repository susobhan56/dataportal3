"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';

export default function MigrationArticle4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Odisha's Internal Migration Puzzle
      </h1>
      <p className="para">
        Over 90% of migration in Odisha is intra-state and mostly female-dominated due to marriage 
        migration. Focusing on male migration, which is employment-driven, Census 2011 reveals the 
        highest migration rates in Khordha, Sambalpur, and Jharsuguda. Khordha alone receives 11% of 
        intra-state male migrants, followed by Ganjam (10%), Cuttack, Sundargarh, and Mayurbhanj. 
        Coastal districts attract migrants for urban jobs, while mineral-rich northern districts see 
        high in-migration due to mining. PLFS 2020-21 shows the southern region has 38.9% of male 
        migrants, mostly rural-rural, driven by agricultural distress. <br /><br />
        The intra-state migration in Odisha, like any other state, is rural-rural dominated. However, 
        NSS and PLFS estimates indicate the share of rural-rural stream and urban-urban stream to total 
        in-migrants has gone down between 2007-08 and 2020-21 and the share of rural-urban migrants 
        remained stagnant. On the other hand, the share of urban-rural stream has increased from 3.5% 
        to 10.7% during the same period. The stagnancy of rural-urban migration within the state and 
        declining urban-urban migration is an indication of the exclusionary nature of urbanisation in 
        the state. Recently released NSSO ‘Household Consumption Expenditure Survey’ reveals urban 
        Monthly Per Capita Expenditure (MPCE) of Odisha in 2022-23 was Rs. 5,187, which was 1.76 times 
        the rural MPCE (Rs. 2,950) of the state (MoSPI, 2022-23). The urban-rural MPCE ratio was higher 
        than the national average, which indicates that a substantial gap prevails between rural and 
        urban areas. The high rural-urban consumption gap, along with stagnancy in rural-urban 
        migration within the state, indicates that the urban centres are exclusionary towards the 
        intra-state migrants.
      </p>
    </main>
  );
}
