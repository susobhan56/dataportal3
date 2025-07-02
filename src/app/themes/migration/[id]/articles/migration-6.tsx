"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Changing Patterns of Interstate Out-Migration <br /> from Odisha
      </h1>
      <p className="para">
        Since the pre-independence era, Odisha has been a significant source of labour migration, 
        particularly to Assam’s tea plantations and Bengal’s Hugly industrial belt (Daniel, 2014). 
        Census 2011 recorded 1.27 million out-migrants from Odisha, nearly double the 0.62 million in 
        1991. However, estimates from the NSS 64th round and PLFS show a decrease in inter-state 
        out-migration, dropping from 1.18 million in 2007-08 to 0.96 million in 2020-21. In 2011, 
        3% of Odisha’s population migrated to other states, but NSS and PLFS reported a decline from 
        2.9% to 2.2% during the same period. This decline is attributed to COVID-induced reverse 
        migration and an evolving migration pattern, with rural-origin migration decreasing while 
        urban-origin migration becomes more selective and long-term. PLFS data shows that 0.68 million 
        out of 0.96 million out-migrants in 2020-21 were from rural areas, but the absolute number of 
        rural out-migrants has decreased significantly. However, rural migration is often under-reported 
        due to its short-term and circulatory nature, which Census, NSS, and PLFS struggle to capture. 
        Micro-studies suggest that 2.5 million people left Odisha annually between 2011 and 2016, with 
        0.9 million workers residing in Surat alone.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Interstate Outmigrants from Odisha, 1991-2021 (in %)
      </h5>
      <FlourishEmbed src="visualisation/23892128" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Census 1991-2011, PLFS 2020-21
      </p>
      <p className="para">
        Close to half of the out-migration from the state is rural-urban movement, mostly owing to 
        employment-related reasons. The share of the urban-urban stream has increased from 16.6% to 
        24.1% between 2007-08 and 2020-21. Data indicates that interstate out-migration from the state 
        is becoming more selective and dominated by men from higher socio-economic strata. Regional 
        Pattern The majority of the inter-state migrants move to Chhattisgarh (23.4%), West Bengal 
        (15.4%), Karnataka (9.3%), Andhra Pradesh (8.4%), Gujarat (7.6%), Jharkhand (8.7%), Maharashtra 
        (6.6%), Telangana (3.6%), Uttar Pradesh (4.3%), Delhi (3.6%) and Kerala (2.4%). <br />
        Due to the paucity of disaggregated data at the regional level out-migration patterns, 
        this section relies on literature to find out out-migration-prone regions of the state. 
        Koraput, Balangir and Kalahandi (KBK districts) are the major sending regions of inter-state 
        migrants (CMIL, 2014; National Law University Odisha, 2020). The out-migrants from the KBK 
        region move to Chhattisgarh, Gujarat, Maharashtra and Uttar Pradesh. Also, these districts are 
        a major source of seasonal migrants to the brick kilns of Andhra Pradesh, Telangana and Tamil 
        Nadu (CMIL, 2014). These regions are experiencing major changes in migration patterns, which 
        need to be addressed for balanced regional development. A study by Ajeevika Bureau (CMIL, 2014) 
        further indicated that out-migrants from coastal districts have also increased, mainly moving 
        to Gujarat, Kerala, and Jammu & Kashmir. Reasons The inter-state male out-migration from Odisha 
        is predominantly ‘employment related’ as more than 70% stated the same. In 2020-21, only 6.7% 
        of the male out-migrants stated ‘loss of employment’ as their reason for migration. Moreover, 
        ‘movement of parents/earning member’ is the second important reason among male out-migrants; 
        however, its share has declined between 2007-08 and 2020-21.
      </p>
      <table style={{ marginLeft: '15%', width: '70%', borderCollapse: 'collapse', alignItems: 'center', background: '#fafdff', boxShadow: '0 2px 12px rgba(0,90,158,0.07)' }}>
        <caption style={{ captionSide: 'top', fontWeight: 'bold', padding: 12, background: '#005a9e', color: '#fff', borderRadius: '8px 8px 0 0', fontSize: '1rem', letterSpacing: '0.5px' }}>
          Reasons for out-migration from Odisha, 2007-08 to 2020-21
        </caption>
        <thead>
          <tr style={{ background: '#e6f0fa' }}>
            <th rowSpan={2} style={{ padding: 12, border: '1px solid #b3c6e0', textAlign: 'left', minWidth: 180 }}>Reasons</th>
            <th colSpan={2} style={{ padding: 12, border: '1px solid #b3c6e0', textAlign: 'center' }}>2007-08</th>
            <th colSpan={2} style={{ padding: 12, border: '1px solid #b3c6e0', textAlign: 'center' }}>2020-21</th>
          </tr>
          <tr style={{ background: '#f6fafd' }}>
            <th style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'center', minWidth: 80 }}>Male</th>
            <th style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'center', minWidth: 80 }}>Female</th>
            <th style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'center', minWidth: 80 }}>Male</th>
            <th style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'center', minWidth: 80 }}>Female</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#fff' }}>
            <td style={{ padding: 10, border: '1px solid #b3c6e0', fontWeight: 500 }}>Employment related</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>77.9</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>7.4</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>73</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>5.3</td>
          </tr>
          <tr style={{ background: '#f6fafd' }}>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Loss of Employment*</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>-</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>-</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>6.7</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>0.4</td>
          </tr>
          <tr style={{ background: '#fff' }}>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Studies</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>3.3</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>0.9</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>1.2</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>0.9</td>
          </tr>
          <tr style={{ background: '#f6fafd' }}>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Marriage</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>0.3</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>70.6</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>1.2</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>61.7</td>
          </tr>
          <tr style={{ background: '#fff' }}>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Movement of parents/earning members</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>13.2</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>19.1</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>10.9</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>30</td>
          </tr>
          <tr style={{ background: '#f6fafd' }}>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Others</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>5.4</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>2.1</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>7</td>
            <td className="tab-element" style={{ textAlign: 'center' }}>1.7</td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        <i>Source: Estimated from NSS 64<sup>th</sup> round (2007-08) and PLFS 2020-21</i>
      </p>
      <p className="para">
        Inter-state out-migration from rural Odisha is largely driven by employment, with a high work 
        participation rate (WPR) among both male and female migrants. In 2020-21, 70.9% of male 
        outmigrants were engaged in regular salaried work, up from 56.4% in 2007-08, with nearly 40% 
        employed in manufacturing and a quarter in the service sector (Table 4). For female migrants, 
        71.3% were concentrated in self-employment, a significant rise from 29.9% in 2007-08, with over 
        80% working in agriculture in 2020-21. 
      </p>
    </main>
  );
}
