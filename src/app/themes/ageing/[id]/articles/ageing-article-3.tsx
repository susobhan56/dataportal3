"use client";
import '../../ageing-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbedArticle3 = dynamic(() => import('./FlourishEmbedArticle3'), { ssr: true });

export default function AgeingArticle3() {
  return (
    <main className="themes-content">
      <div className="ageing-article-content">
        <h1 className="page-title animate-fade-in" style={{ alignItems: 'center', textAlign: 'left', fontSize: '2.1rem', marginLeft: '24%' }}>
          Ageing Without Security: Economic Struggles of <br />Odisha’s Elderly
        </h1>
        <p className="para">
          With increasing age, those engaged in the organised sector must leave the labour force due to mandatory
          retirement policies. In the unorganised sector, this often results in a loss of income and social security.
          For the 60+ population, opportunities for a second livelihood, reskilling, and new scopes of work remain a distant dream.
          This increases their dependency on others for survival, leading to lower self-esteem and a decline in both physical
          and mental well-being. Lack of financial resources further makes their lives more vulnerable to abuse and neglect.
          <br />
          According to the Longitudinal Ageing Study of India (LASI) Wave I report, 37.3% of the elderly in Odisha are
          currently working, which is slightly above the national average of 35.7%. However, only 5.5% of older persons
          in the state are covered by any work-related social insurance scheme, one of the lowest rates in the country.
          Additionally, 46% of the elderly in Odisha have had no schooling, and while only 23.7% have completed
          secondary schooling or above. Among elderly women, 82% are economically dependent, either fully or partially,
          on others, compared to 54% of men. Moreover, 72% of the elderly work in agriculture and allied activities in
          the informal sector, which provides no old age security (LASI, Wave 1, 2017-18). Furthermore, as per the Bridge 
          the Gap report, 2022, by Help Age India, 46% of respondents in India expressed a willingness to continue working 
          beyond the age of 60. Additionally, nearly half the elderly respondents and their caregivers favoured opportunities 
          for older workers to work from home. Approximately 30% supported the introduction of new courses to help individuals 
          over 60 maintain employment. Furthermore, 38% were already engaged in voluntary work, and 19% expressed a desire to 
          participate in such activities. These findings indicate a strong interest among the elderly in pursuing economically 
          gainful activities that also contribute to their mental, physical and social well-being.
        </p>
        <h5 className="chart-title" style={{ textAlign: 'left', fontSize: '1.1rem', marginLeft: '24%', marginBottom: '1%' }}>
          Working Status of the Elderly in Odisha
        </h5>
        <FlourishEmbedArticle3 src="visualisation/23953972" />
        <p style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#555', marginBottom: '1%' }}>
          Source: LASI Wave-1
        </p>
        <p className="para">
          The labour participation rate among the elderly in the state is relatively high, with many continuing to work out of
          financial necessity. However, most of their work occurs in informal sectors and low-paying jobs, making it difficult for
          them to meet basic needs. This economic scenario, characterized by low wages and insecure employment, significantly
          contributes to the perpetuation of poverty levels among the elderly in Odisha. The link between low wages, unstable job
          security, and poverty translates into heightened economic and social burdens.
          <br />
          The majority of the elderly in the state come from the informal sector, yet only 35.7% of them have access to the IGNOAP
          (Indira Gandhi National Old Age Pension) social security scheme of the government, and 38.4% have access to widow pension,
          as per the LASI report. The annual report 2021-22 of the Department of Social Security and Empowerment of Persons with
          Disabilities (SSEPD), Government of Odisha, indicates that a total of 16.82 lakh elderly individuals were covered under
          the MBPY (Madhu Babu Pension Yojana). Additionally, the same revealed that 14.18 Lakh elderly beneficiaries were enrolled
          in the NSAP (National Social Assistance Programme) scheme.
          <br />
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ flex: '1 1 380px', minWidth: 380, maxWidth: 380, height: 'fit-content' }}>
            <h5 className="chart-title" style={{ textAlign: 'left', fontSize: '1.1rem', marginBottom: '1rem' }}>
              Types of Main Job among the Working Elderly in Odisha
            </h5>
            <FlourishEmbedArticle3 src="visualisation/23954163" />
            <p style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#555', marginBottom: 0 }}>
              Source: LASI Wave-1
            </p>
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 380, maxWidth: 380, height: 408 }}>
            <h5 className="chart-title" style={{ textAlign: 'left', fontSize: '1.1rem', marginBottom: '1rem' }}>
              Benefit Received of Social Security Schemes by Elderly
            </h5>
            <FlourishEmbedArticle3 src="visualisation/23954481" />
            <p style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#555', marginBottom: 0 }}>
              Source: LASI Wave-1
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
