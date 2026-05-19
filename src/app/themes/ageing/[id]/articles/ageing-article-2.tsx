"use client";
import '../../ageing-articles.css';
import dynamic from 'next/dynamic';

import FlourishEmbedSingle from './FlourishEmbedSingle';

export default function AgeingArticle2() {
  return (
    <main className="themes-content">
      <div className="ageing-article-content">
        <h1 className="page-title animate-fade-in" style={{ alignItems: 'center', textAlign: 'left', fontSize: '2.1rem', marginLeft: '24%' }}>
          From Growth to Grey: Odisha’s Shifting Demog-<br />raphic Landscape
        </h1>
        <p className="para">
          The fertility rate and the population growth rate in the state have been declining since 1971 and are expected to 
          decrease further by 2036. It is estimated that the Total Fertility Rate (TFR), which was 1.82 according to NFHS-5,
          will drop to approximately 1.46 by 2036. Similarly, the population growth rate is anticipated to fall from a Compound 
          Annual Growth Rate (CAGR) of 1.40% in 2011-21 to 0.55% in 2031-36 (Population Projection for Odisha, 2021-36, using 
          Bayesian Approach). Additionally, the share of the elderly in the state is projected to rise from 11.0% in 2021 to 
          15.9% in 2036.
        </p>
        <h5 className="chart-title" style={{ textAlign: 'left', fontSize: '1.1rem', marginLeft: '24%', marginBottom: '1%' }}>
          Trends in the Share of Elderly Population in Odisha 2001-2036
        </h5>
        <FlourishEmbedSingle src="visualisation/23949570" />
        <p style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#555', marginBottom: '1%' }}>
          Source: Census 1991-2011, Population Projection for Odisha, 2021-36, using Bayesian Approach
        </p>
        <p className="para">
          The population trend in Odisha varies significantly across districts, with a higher concentration of elderly persons 
          projected in districts like Baleshwar, Khordha, Cuttack and Ganjam. In each of these districts, the elderly population 
          is expected to exceed 4.5 lakh. Projections indicate an increase in the elderly population size of 109% in Baleshwar, 
          128% in Khordha, 94.33% in Cuttack, and 99% in Ganjam between 2011 and 2036.
          <br />
          Concurrently, the sex ratio for the overall population is expected to increase marginally from 988 females in 2021 to 
          1004 females in 2036, driven by higher life expectancy (Figure 2). Similarly, the sex ratio among the older age group, 
          already at 1033 females per 1000 males in 2021, is projected to rise to 1065 by 2036. This trend of ‘feminization’ in 
          the ageing population is also linked to a growing elderly dependency ratio, which is expected to climb from around 17 in 
          2021 to approximately 25 by 2036 in Odisha (Population Projection for Odisha, 2021-36, using Bayesian Approach).
        </p>
        <h5 className="chart-title" style={{ textAlign: 'left', fontSize: '1.1rem', marginLeft: '24%', marginBottom: '1%' }}>
          Sex Ratio of the General and Elderly Population
        </h5>
        <FlourishEmbedSingle src="visualisation/23950857" />
        <p style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#555', marginBottom: '1%' }}>
          Source: Census 1991-2011, Population Projection for Odisha, 2021-36, using Bayesian Approach
        </p>
      </div>
    </main>
  );
}
