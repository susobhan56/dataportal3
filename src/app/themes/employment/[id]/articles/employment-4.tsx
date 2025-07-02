"use client";
import { useEffect } from 'react';
import '../../employment-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EmploymentArticle4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        The Youth (Age 15-29) Employment Paradox: High <br />Aspirations, Higher Unemployment in Odisha
      </h1>
      <p className="para">
        While the WFPR decreased by 15 percent between 1993–94 and 2022-23 (from 56.6 percent to 41.5 percent), 
        unemployment is around three times higher (14.2 percent) among youth compared to the working-age group (4.2 percent).
        <br />
        The data from 2022-23 shows a persistent issue of high unemployment rates among the youth, with male unemployment at 
        17.1% and female unemployment at 9.1%, significantly higher than the national averages. This trend is particularly evident 
        in urban areas, where female unemployment in Odisha reached 24.5%, further highlighting the difficulties faced by young
        women in accessing formal employment. These challenges are exacerbated by a mismatch between the skills acquired by the 
        youth and the demands of the labour market, leading to underemployment, especially in urban regions where opportunities in 
        agriculture and informal sectors are limited compared to rural areas. 
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Share of Youth (age-15-29) WFPR & UR in Odisha (in %)
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23915712" />
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
        The coastal regions of Odisha, where development and income levels are higher, show particularly high 
        unemployment rates, with youth unemployment reaching 28.8% in 2022-23, compared to 9.3% in the northern 
        regions. This reflects a growing preference for quality employment in developed areas, while underdeveloped 
        regions like the southern part of the state continue to rely on low-skill, agriculture-based employment. 
        These disparities point to the need for targeted regional interventions, especially in education and skill 
        development, to address the challenges posed by the evolving population structure. If left unaddressed, 
        high unemployment rates, particularly among the youth, could lead to long-term underemployment and economic 
        stagnation in the state, undermining the potential benefits of a large working-age population.<br />
        It is important to note that there is a significant incidence of skill mismatch in Odisha, 
        particularly affecting the employability of its youth. Despite improvements in education levels, 
        the unemployment rate among educated individuals remains high, especially among females. This 
        suggests that the skills acquired through formal education often do not align with the demands of the labour market. 
        The shortage of skilled manpower and technical know-how, particularly in modern industries and services, exacerbates 
        the issue. While vocational education and training (VET) have been shown to increase labour force participation and 
        reduce unemployment, the reach and effectiveness of these programs remain limited. Those with vocational education 
        exhibit lower unemployment rates and higher labour force participation, but overall, the lack of adequate vocational 
        training opportunities leaves a large proportion of youth unprepared for the job market. This gap between educational 
        attainment and marketable skills reflects a critical need for the state to expand and improve VET programs, ensuring 
        they are accessible, relevant, and aligned with current and future labour market demands.
      </p>
      <table style={{ marginLeft: '24%', width: '52.1%', borderCollapse: 'collapse', alignItems: 'center' }}>
        <caption style={{ captionSide: 'top', fontWeight: 'bold', padding: 12, background: '#005a9e', color: '#fff', borderRadius: '8px 8px 0 0' }}>
          LFPR and Unemployment Rate among the Youth in Odisha
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
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>1993-94</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>76.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>42.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>79.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>46.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>63.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>20.0</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2011-12</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>74.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>27.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>76.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>30.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>66.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.7</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2017-18</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>62.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>64.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>55.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>15.2</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2022-23</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>61.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>35.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>64.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>38.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>53.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>21.9</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold', backgroundColor: '#cae6fc', textAlign: 'center' }} colSpan={7}>Unemployment Rate</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>1993-94</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>4.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>1.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>15.9</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2011-12</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>5.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>5.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>10.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>4.9</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2017-18</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>24.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>19.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>25.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>21.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>35.3</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb', fontWeight: 'bold' }}>2022-23</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>17.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>9.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>7.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>20.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>24.5</td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Computed from unit-level datasets of different NSSO-EUS (1993-94 & 2011-12) & PLFS (2017-18, 2019-20 & 2022-23)
      </p>
    </main>
  );
}
