"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle8() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Odisha’s Migration Turnaround: From Outflow to <br />Inflow
      </h1>
      <p className="para">
        Census 2011 reveals that there were 492 and 277 outmigrants per 100 in-migrants in Bihar and 
        Uttar Pradesh, respectively, compared to merely 136 for Odisha. However, the estimates using 
        PLFS 2020-21 provide an otherwise trend. In 2020-21, Odisha had a positive net in-migration 
        rate (0.74%) and noted a significant increase from -1.6% in 2007-08. Overall, the state has 
        become an in-migrating state from an out-migrating state. For a labour-surplus state like 
        Odisha, such a shift may lead to additional pressure on the labour market and resources.<br />
        The inter-state migration to and from Odisha is characterised by an increased rate of 
        inter-state in-migration to rural areas on one hand and selective long-term and permanent 
        out-migration from urban areas on the other. While a majority of the inter-state in-migrants 
        to the state, particularly in rural areas, belonged to disadvantaged educational and 
        socio-economic backgrounds, urban areas continue to receive selective migrants. On the 
        contrary, out-migration from the state is characterised by two distinct streams. While the 
        long-term permanent migration from the state is becoming more selective and from urban origin, 
        the poorest of the poor from rural areas migrate on a seasonal basis. 
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Share of Return Migrants to the Inter-state In-migrants (in %)
      </h5>
      <FlourishEmbed src="visualisation/23893511" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Estimated from NSS 64th round (2007-08) and PLFS 2020-21
      </p>
    </main>
  );
}
