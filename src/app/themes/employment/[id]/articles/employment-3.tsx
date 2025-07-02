"use client";
import { useEffect } from 'react';
import '../../employment-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EmploymentArticle3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Workforce Participation and Unemployment in <br />Odisha’s Working-Age Population
      </h1>
      <p className="para">
        Compared to previous years, the WFPR has been constantly increasing in Odisha, yet it is less than that 
        of 1993- 94, probably due to a shift from the agricultural sector to industry and service-based economy 
        and more young people are opting for higher education instead of early entry to job markets. The WFPR 
        of the working-age group between 1993-94 and 2022-23 indicates that, despite an increase in the number 
        of working-age individuals, most are unable to find gainful employment. <br />
        Unemployment rates (URs) in Odisha are higher as compared to the all-India average. The state’s 
        unemployment rate hit a record low of 2.1 percent in 1993–94, reached an unprecedented high of 7.4 percent 
        in 2017-18, and then fell to 4.2 percent in 2022-23. This high unemployment rate in 2017-18 fuelled concerns 
        about "jobless growth", but while these concerns were apprehension dispelled by noting the non-comparability 
        of this data with those of the other rounds.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Share of Working Age (age-15-64) WFPR & UR in Odisha (in %)
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23915492" />
      </div>
      <style>{`
        .flourish-embed-container {
          box-shadow: 0 4px 24px rgba(0,90,158,0.2);
          background: #f8fafc;
          padding: 0;
          overflow: hidden;
        }
        .flourish-embed {
          width: 100% !important;
          height: 100% !important;
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(0,90,158,0.2);
          background: #fff;
          border-radius: 12px;
          border: none;
          display: block;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Computed from unit-level datasets of different NSSO-EUS (1993-94 & 2011-12) & PLFS (2017-18, 2019-20 & 2022-23)
      </p>
      <p className="para">
        The unemployment rates among the working-age group declined significantly in both rural and urban areas in the state. 
        Overall, men are more likely to be unemployed than women. For instance, the male unemployment rate in Odisha in 
        2022-23 was 5.1 percent, but the female unemployment rate was 2.6 percent. “Research has shown, however, 
        that unemployed men and women do not exhibit perfect interindustry and labour force mobility” 
        (DeBoer, et.al., 1984). Furthermore, male unemployment rates increase relative to female rates 
        during recessions and fall during recoveries (Nilsen, 1984). The estimates also show that female involvement in 
        the labour market in urban areas remains limited.
      </p>
      <table style={{ marginLeft: '24%', width: '52.1%', borderCollapse: 'collapse', alignItems: 'center' }}>
        <caption style={{ captionSide: 'top', fontWeight: 'bold', padding: 12, background: '#005a9e', color: '#fff', borderRadius: '8px 8px 0 0' }}>
          LFPR and Unemployment Rate among the Working Age in Odisha
        </caption>
        <thead>
          <tr>
            <th rowSpan={2} className="tab-element" style={{ border: '1px solid #bbb' }}></th>
            <th colSpan={2} className="tab-element" style={{ border: '1px solid #bbb' }}>Total</th>
            <th colSpan={2} className="tab-element" style={{ border: '1px solid #bbb' }}>Rural</th>
            <th colSpan={2} className="tab-element" style={{ border: '1px solid #bbb' }}>Urban</th>
          </tr>
          <tr>
            <th className="tab-element" style={{ border: '1px solid #bbb' }}>Male</th>
            <th className="tab-element" style={{ border: '1px solid #bbb' }}>Female</th>
            <th className="tab-element" style={{ border: '1px solid #bbb' }}>Male</th>
            <th className="tab-element" style={{ border: '1px solid #bbb' }}>Female</th>
            <th className="tab-element" style={{ border: '1px solid #bbb' }}>Male</th>
            <th className="tab-element" style={{ border: '1px solid #bbb' }}>Female</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold', backgroundColor: '#cae6fc', textAlign: 'center' }} colSpan={7}>LFPR</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>1993-1994</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>87.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>45.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>89.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>48.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>79.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>23.9</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2011-2012</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>88.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>34.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>89.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>36.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>84.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>21.2</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2017-2018</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>83.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>20.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>83.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>21.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>79.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>18.1</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2022-2023</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>83.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>47.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>84.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>51.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>78.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>29.6</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold', backgroundColor: '#cae6fc', textAlign: 'center' }} colSpan={7}>Unemployment Rate</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>1993-1994</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>1.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>1.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>0.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.3</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2011-2012</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>3.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>1.9</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2017-2018</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>7.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>7.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>5.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>7.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>13.1</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2022-2023</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>5.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>4.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.9</td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Computed from unit-level datasets of different NSSO-EUS (1993-94 & 2011-12) & PLFS (2017-18, 2019-20 & 2022-23)
      </p>
    </main>
  );
}
