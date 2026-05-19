"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        A Shift Towards Return Migration
      </h1>
      <p className="para">
        The rise in the return flow in the interstate stream is a major reason behind the rise in 
        interstate in-migration in the state in 2020-21. NSS and PLFS defined return migrants as those 
        persons whose present place of enumeration has been the usual place of residence 
        (where the person stayed for more than six months) at any point in time in the past.<br /> 
        66.5% of the interstate in-migrants in the state in 2020-21 were return migrants. As 2020-21 
        was a period for COVID-19 induced mass reverse migration, a separate estimation has been done 
        for the period before 2020, which was 60.1%, the highest in the country. Compared to other 
        states, Odisha has a significantly higher share of return migrants in inter-state in-migration, 
        rising sharply from 16.3% to 51.2% between 2007-08 and 2020-21. This suggests that Odisha's 
        out-migrants face challenges in securing stable livelihoods in other states, leading many to 
        return to their place of origin. A 2014 study by CMLS and Ajeevika Bureau, covering coastal and 
        western Odisha, found a rise in distress-driven migration to Kerala, Surat, Tamil Nadu, and 
        Jammu & Kashmir, with cycles lasting six months to two years. This longer-term circular 
        migration explains the sharp increase in return migrants to the state.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Share of Return Migrants to the Inter-state In-migrants (in %)
      </h5>
      <FlourishEmbed src="visualisation/23872709" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Estimated from NSS 64th round (2007-08) and PLFS 2020-21
      </p>
    </main>
  );
}
