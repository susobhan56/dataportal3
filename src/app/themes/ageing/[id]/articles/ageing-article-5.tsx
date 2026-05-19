"use client";
import '../../ageing-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import('./FlourishEmbedArticle5'), { ssr: false });

export default function AgeingArticle5() {
  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: 'center', textAlign: 'left', fontSize: '2.1rem', marginLeft: '24%' }}>
        Alone in the Crowd: The Social Isolation of Odisha’s<br /> Elderly
      </h1>
      <p className="para">
        With increasing longevity, decreasing family size, and changes in family values due to 
        globalisation and urbanism, the living arrangements of the elderly are gradually shifting 
        from joint families to living alone.  Regarding marital status, among elderly females, 
        31% are currently married, while 61% are widows. In contrast, among elderly males, 92% 
        are married and only 7% are widowers (LASI, 2017-18). This highlights the serious 
        vulnerability of widowed women, who are often largely dependent on other family members. 
      </p>
      <h5 className="chart-title" style={{ textAlign: 'left', fontSize: '1.1rem', marginLeft: '24%', marginBottom: '1%' }}>
        Living Arrangements of the Elderly in Odisha (in %)
      </h5>
      {/* Flourish Visualization */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlourishEmbed src="visualisation/23983645" />
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#555', marginBottom: '1%' }}>
        Source: LASI Wave-1
      </p>
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
      <p className="para">
        About 6% of the elderly in Odisha live alone, while over 20% live only with their spouses (LASI- 2017-18). This implies 
        that nearly one-third of the elderly population lacks any family care and support. This situation has significant 
        implications for their physical and mental health, financial status, access to services, and overall safety and security.
        <br />
        According to the report titled <i>Elder Abuse in India- Changing Cultural Ethos and Impact of Technology 2018</i>, 87% of the elderly 
        in Bhubaneswar, the capital city of Odisha, acknowledged that abuse of the elderly is prevalent in society, and about 23% 
        confirmed that they had experienced such abuse. The study also investigates the causes of elder abuse. Loneliness and the 
        lack of socially and economically productive engagement among senior citizens are major factors leading to deterioration 
        in both their physical and mental well-being.  Additionally, the study noted that 70% of the elderly reported feeling 
        lonely and abused at home because their children and grandchildren were often preoccupied with their electronic devices.
        <br />
        The lack of social support in urban communities is a major concern. Unfortunately, rural areas are also facing a similar 
        issue due to the large-scale out-migration of young people for education and employment. The elderly who are left behind 
        are the worst victims in this process. A more focused study and a mitigation strategy are urgently needed to develop 
        effective solutions for these challenges. 
        <br />
      </p>
    </main>
  );
}
