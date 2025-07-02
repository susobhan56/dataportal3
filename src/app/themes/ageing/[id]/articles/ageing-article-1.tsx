"use client";
import { useEffect } from 'react';
import '../../ageing-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only
const FlourishEmbed = dynamic(() => import('./FlourishEmbed'), { ssr: true });

declare global {
  interface Window {
    Flourish?: {
      embeds?: {
        scan?: () => void;
      };
    };
  }
}

export default function OdishaAgeShiftArticle() {
  useEffect(() => {
    window.scrollTo(0, 0); // optional if you want to scroll to top on navigation
  }, []);

  return (

    <main className="themes-content">
      <div className="ageing-article-content">
        <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
          Odisha’s Age Shift: Turning Demographic Change <br /> into Opportunity
        </h1>
        <p className="para">
          Age structure plays a vital role in shaping a population's development path. Influenced by fertility, 
          mortality, and migration, it reflects the demographic and socio-economic evolution of a society. 
          As the population ages or becomes younger, it impacts workforce availability, dependency ratios, 
          and public service needs. Shifts in age structure can offer economic opportunities, like a demographic
          dividend, or pose challenges, such as rising old-age dependency. Recognizing this, global agendas like 
          the UN’s 2030 Sustainable Development Goals stress its relevance for planning and inclusive growth. <br />
          The state’s population can be divided into four broad age groups, each with distinct needs and impacts 
          on education, healthcare, and the economy. Children (Aged below 15 years) need strong foundations in 
          education and healthcare. Youth (aged 15-34 years) drive economic growth and social change with 
          research and innovation, requiring access to education, skills, and jobs. The working-age group 
          (aged 15-59 years) sustains the economy and social systems and the elderly (aged 60+ years) create
          rising demands for healthcare, social security, and elder care.
        </p>
        <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
          Age-wise Population Share in Odisha (in %)
        </h5>
        <FlourishEmbed src="visualisation/23838794" />
        <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
          Source: Census of India 2011, Population Projection for Odisha using Bayesian approach, 
          DIU, 2021-36
        </p>
        <p className="para">
          The proportion of the child population in the state is projected to decrease significantly, 
          dropping from 28.9% in 2011 to 20.6% by 2036—a reduction of over 1.4 million children over 25 years, 
          which stresses upon rethink the existing structure and distribution of the education system. 
          Similarly, the youth population is expected to shrink from 34.4% to 28.5%, a decline of 6 percentage 
          points during the same period. In contrast, the working-age population will see a modest increase, 
          rising from 61.5% to 63.1%, which presents a favorable demographic dividend for the state. 
          This demographic will peak at 65% in 2031, after which it is expected to decline, highlighting 
          the urgent need to maximize the potential of this economically productive group. <br />
          Meanwhile, the elderly population is projected to grow substantially, increasing by 105% 
          from 3.9 million in 2011 to 8.2 million by 2036, representing nearly 16% of the total population. 
          Over these 25 years, the state will experience a net population increase of 9.7 million, with 71% 
          of this growth in the working-age group, 43% among the elderly, and a reduction of 14% in the child 
          population. This demographic shift seems favorable for the economic growth of the state, as it lowers
          the overall age dependency ratio among the working-age population from 62.3% to 57.6%. 
          Although the dependency ratio due to ageing is increasing, the sharp decline in young-age 
          dependency helps reduce the overall financial and social burden on working-age individuals who 
          support dependents. This generally allows for greater economic productivity, increased savings, 
          and more resources available for investment in development, healthcare, and social services.
        </p>
      </div>
    </main>
  );
}
