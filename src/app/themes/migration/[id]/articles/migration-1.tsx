"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Characteristics of Out-Migrants from Odisha: <br /> Ageing, Urbanizing and Unequal
      </h1>
      <p className="para">
        In addition to permanent migration, Odisha experiences cyclical out-migration for both shorter 
        (less than six months) and longer durations (More than 6 Months). Short-term migration typically 
        occurs seasonally without changing the usual place of residence. At the same time, long-term 
        circular migrants maintain close ties with their families at home, yet maintain a place of 
        residence at the job location. <br />
        Although Odisha has always been an out-migrating state, the ratio of out-migrants to in-migrants
        has been much lower than the neighbouring states of Bihar and UP. However, micro-studies have 
        shown that outmigration from parts of the state has increased over the period 
        (CMIL, 2014; Rana, Johnson & Manjary, 2022). Therefore, this section attempts to understand the 
        characteristics of the out-migration, separately for long-term and short-term seasonal movement. 
        The NSS 64th round and the India Human Development Survey (IHDS) provide data on these migrants. 
        For consistency, this study uses the NSS 64th round to estimate the volume and nature of these 
        migrations. <br />
        The out-migration from the state is becoming more urban-origin over the years with a decline in 
        the share from rural areas, which indicates more selective migration from urban areas. PLFS 
        2020-21 estimates indicate a decline in the share of male out-migrants belonging to the age 
        group of 15-29 years to 33.4% from 37.3%, while the share of the age group of 40-59 years 
        increased to 18.3% from 12.5% between 2007-08 and 2020-21. The increasing average age among 
        interstate male out-migrants indicates that more educated and experienced people are migrating 
        out.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "1%" }}>
        Age Profile of Inter-state Out-migrants from Odisha, 2020-21 (in %)
      </h5>
      <FlourishEmbed src="visualisation/23892427" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Estimated from PLFS 2020-21
      </p>
      <p className="para">
        The out-migration is still dominated by less-educated migrants, to take up manual jobs. 
        However, the share of out-migrants from urban areas with an education level of graduation 
        and above increased significantly, from 25.9% to 40.3%, between 2007-08 and 2020-21. On the 
        contrary, 77.6% of inter-state out-migrants from rural areas had an education level up to 
        middle school level. While the majority of the female out-migrants from the state were mostly 
        less-educated, it is seen that 25% of male out-migrants had higher education. <br />
        Estimates show, 59.3% of out-migrants from urban areas in 2020-21 belonged to the general 
        category. However, the share of the ST category increased in outmigration between 2007-08 and 
        2020-21, mostly related to agrarian distress. Almost a third of the interstate out-migrants 
        were from the highest MPCE quintile, while only a fifth belonged to the lowest MPCE quintile. 
      </p>
      <table style={{ marginLeft: '15%', width: '70%', borderCollapse: 'collapse', alignItems: 'center' }}>
        <caption style={{ captionSide: 'top', fontWeight: 'bold', padding: 12, background: '#005a9e', color: '#fff', borderRadius: '8px 8px 0 0' }}>
          Socio-economic Characteristics of Inter-state Out-migrants from Odisha, 2020-21 (in %)
        </caption>
        <thead>
          <tr style={{ background: '#e6f0fa' }}>
            <th style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'left' }}></th>
            <th style={{ padding: 10, border: '1px solid #b3c6e0' }}>Odisha Total</th>
            <th style={{ padding: 10, border: '1px solid #b3c6e0' }}>Rural-origin</th>
            <th style={{ padding: 10, border: '1px solid #b3c6e0' }}>Urban-origin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={4} style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'left', background: '#f6fafd' }}>Social Groups</th>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Scheduled Tribe</td>
            <td className="tab-element">19.2</td>
            <td className="tab-element">22.4</td>
            <td className="tab-element">11.4</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Scheduled Caste</td>
            <td className="tab-element">11.6</td>
            <td className="tab-element">13.9</td>
            <td className="tab-element">6.0</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Other Backward Class</td>
            <td className="tab-element">31.9</td>
            <td className="tab-element">35.4</td>
            <td className="tab-element">23.4</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>Others</td>
            <td className="tab-element">37.4</td>
            <td className="tab-element">28.3</td>
            <td className="tab-element">59.3</td>
          </tr>
          <tr>
            <th colSpan={4} style={{ padding: 10, border: '1px solid #b3c6e0', textAlign: 'left', background: '#f6fafd' }}>MPCE Quintiles</th>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>1</td>
            <td className="tab-element">22.3</td>
            <td className="tab-element">26.0</td>
            <td className="tab-element">13.5</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>2</td>
            <td className="tab-element">16.7</td>
            <td className="tab-element">19.1</td>
            <td className="tab-element">11.1</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>3</td>
            <td className="tab-element">8.9</td>
            <td className="tab-element">9.5</td>
            <td className="tab-element">7.5</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>4</td>
            <td className="tab-element">18.2</td>
            <td className="tab-element">20.2</td>
            <td className="tab-element">13.3</td>
          </tr>
          <tr>
            <td style={{ padding: 10, border: '1px solid #b3c6e0' }}>5</td>
            <td className="tab-element">33.9</td>
            <td className="tab-element">25.2</td>
            <td className="tab-element">54.6</td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        <i>Source: Estimated from PLFS 2020-21</i>
      </p>
      <p className="para">
        As the inter-state outmigration from rural areas is mostly driven by employment-related 
        reasons, the work participation rate (WPR) is very high (89% of males), even among female
        migrants (45%). 70.9% of the male out-migrants were engaged in regular salaried work in 
        2020-21. Close to 40% of the male out-migrants were employed in the manufacturing sector, 
        and a quarter were employed in the service sector. On the other hand, 71.3% of the female 
        workers were concentrated in self-employment. It is seen that more than 80% of the female 
        workers were employed in agriculture.
      </p>
    </main>
  );
}
