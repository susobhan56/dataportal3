"use client";
import { useEffect } from 'react';
import '../../employment-articles.css';
import dynamic from 'next/dynamic';

// Dynamically import FlourishEmbed for client-only rendering
const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function EmploymentArticle6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem",  }}>
        Shifting Sands: The Changing Nature of Employ<br />ment in Odisha
      </h1>
      <p className="para">
        Over the last three decades, the structure of LFPR (total employment) has changed slowly over this period. 
        The size of the labour force in Odisha has increased from 14.41 million in 1993-94 to 21.26 million in 2022-23. 
        In 2022-23, Odisha had 20.41 million persons in the labour force, overall, of which 12.9 million were self-employed, 
        4.65 million were casual workers, 2.86 million had regular jobs, and 0.85 million were unemployed and searching 
        for work. This changing structure of labour force participation is explained in the study of Chand’s 2023 
        study, which states that “underemployment is a more serious problem than unemployment in India.” <br />
        Odisha still lags behind the national average in regular employment. The percentage of regular employment
        in India has risen from 13.7 percent in 1993-94 to 23.39 percent in 2022-23. Like the patterns of LFPRs, the 
        Work Participation Rates (WPRs) broadly follow a similar trend pattern in both Odisha and India. There is an increase 
        in WFPR in Odisha increased from 42.9 percent in 1993-94 to 44.2 percent in 2022-23, after a decline of 33.5 percent 
        in 2017-18. The percentage of the labour force engaged in casual labour has fallen considerably from 37.1 percent 
        to 22.8 percent in 2022-23, although it remains higher than the national average. Between 2017-18 and 2022-23, the 
        share of self-employed people in Odisha increased marginally, by about 5.3 percentage points, while the share of 
        casual labour and regular employees fell by 4.1 percent and 2.3 percentage points, respectively.
      </p>
      <table style={{ marginLeft: '15%', width: '70%', borderCollapse: 'collapse', alignItems: 'center' }}>
        <caption style={{ captionSide: 'top', fontWeight: 'bold', padding: 12, background: '#005a9e', color: '#fff', borderRadius: '8px 8px 0 0' }}>
          Changing contours of labour market structure in Odisha and India, 1993-94 to 2022-23
        </caption>
        <thead>
          <tr style={{ background: '#e6f0fa' }}>
            <th className="tab-element" rowSpan={2} style={{ border: '1px solid #bbb' }}>&nbsp;</th>
            <th className="tab-element" colSpan={2} style={{ border: '1px solid #bbb', textAlign: 'center' }}>In Millions</th>
            <th className="tab-element" colSpan={3} style={{ border: '1px solid #bbb', textAlign: 'center' }}>% to Total Employment</th>
            <th className="tab-element" colSpan={3} style={{ border: '1px solid #bbb', textAlign: 'center' }}>In Percentage</th>
          </tr>
          <tr style={{ background: '#e6f0fa' }}>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>Total Employment</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>Total Labour Force</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>Self Employed</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>Regular Employment</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>Casual Employment</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>LFPR</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>WFPR</th>
            <th className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>Unemployed</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#f6fafd' }}>
            <td className="tab-element" colSpan={9} style={{ fontWeight: 'bold', border: '1px solid #bbb', backgroundColor: '#cae6fc', textAlign: 'center' }}>Odisha</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>(July’93–June’94)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>14.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>14.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>54.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>8.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>37.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>43.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>42.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.0</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>68<sup>th</sup> (July’11–June’12)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>17.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>17.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>60.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>11.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>28.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>42.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>41.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.4</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>(July’17–June’18)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>14.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>15.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>56.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>16.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>26.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>36.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>33.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>7.2</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>(July’22–June’23)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>20.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>21.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>63.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>14.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>22.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>46.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>44.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>4.0</td>
          </tr>
          <tr style={{ background: '#f6fafd' }}>
            <td className="tab-element" colSpan={9} style={{ fontWeight: 'bold', border: '1px solid #bbb', backgroundColor: '#cae6fc', textAlign: 'center' }}>India</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>(July’93–June’94)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>371.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>378.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>54.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>13.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>31.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>42.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>41.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.0</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>68<sup>th</sup> (July’11–June’12)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>469.9</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>480.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>52.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>18.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>29.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>39.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>38.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>2.2</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>(July’17–June’18)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>455.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>485.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>51.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>24.1</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>24.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>36.8</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>34.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>6.2</td>
          </tr>
          <tr>
            <td className="tab-element" style={{ border: '1px solid #bbb' }}>(July’22–June’23)</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>571.4</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>591.5</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>53.6</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>20.3</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>26.0</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>42.7</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>41.2</td>
            <td className="tab-element" style={{ border: '1px solid #bbb', textAlign: 'center' }}>3.4</td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Computed from unit-level datasets of different NSSO-EUS (1993-94 & 2011-12) & PLFS (2017-18, 2019-20 & 2022-23) <br />
        * The Labour Force Participation Rate (LFPR) and Unemployment Rate (UR) may not exactly match the reported estimates<br /> because of the use of a census-adjusted multiplier in the final calculations.
      </p>
    </main>
  );
}
