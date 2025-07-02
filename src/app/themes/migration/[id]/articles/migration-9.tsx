"use client";
import { useEffect } from 'react';
import '../../migration-articles.css';
import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import("./flourish-1"), { ssr: false });

export default function MigrationArticle9() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="themes-content">
      <h1 className="page-title animate-fade-in" style={{ alignItems: "center", textAlign: "left", fontSize: "2.1rem", marginLeft: "24%" }}>
        Urbanisation in Odisha: Slow Growth, Uneven <br /> Development, and Emerging Challenges
      </h1>
      <p className="para">
        Historically, Odisha has been one of the least urbanised states in the country, after the 
        neighbouring state of Bihar. The level of urbanisation in the state increased from merely 
        4.1% to 16.7% between 1951 and 2011. The 2011 figure for the state is almost half the 
        national figure of 31.1%. Further, the Ministry of Health and Family Welfare (MoHFW) 
        2019 projected population indicates that Odisha will be 21.5% urban by 2036, still much lower 
        than the national average of 39.6%. Besides its low level of urbanisation, the pace of 
        urbanisation in the state, measured in terms of URGD, has been the same since 2001 and 
        is projected to be the same till 2036. It is also observed that it will be lower than the 
        national average between 2021 and 2036, which indicates a slower pace of urbanisation in 
        the state in the coming decades.
      </p>
      <h5 className="chart-title" style={{ textAlign: "left", fontSize: "1.1rem", marginLeft: "24%", marginBottom: "1%" }}>
        Trends and Patterns of Urbanisation in Odisha and India, 1961-2011
      </h5>
      <FlourishEmbed src="visualisation/23894105" />
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "#555", marginBottom: "1%" }}>
        Source: Census Data, Various Years, Projection by MoHFW 2020
      </p>
      <h4 className="para">
        <i>Components of urban growth in Odisha</i>
      </h4>
      <p className="para">
        For Odisha, still, natural growth plays a major role, followed by rural-urban transformation. 
        However, 85 new Census Towns (CTs) have been added to Odisha in 2011 as per Census 2011, constituting 
        37.9% of decadal urban growth during 2001-11. It is seen that the majority of the cities/Urban 
        Agglomerations have grown at a very slow pace, indicating their exclusive nature. Moreover, the 
        limited number of statutory towns and the lack of notification of any new statutory towns have been 
        major contributing factors in Odisha’s low pace of urbanisation. <br />
        Census data from 1991, 2001, and 2011 show a declining role of rural-urban migration in Odisha's 
        urbanization. From 1991-2001, it contributed 35.4% to urban growth, but dropped to 31% in 2001-11. 
        This decline reflects urban areas' inability to absorb surplus rural labour, with low intra-state 
        migration and Urban-Rural Growth Differential (URGD) below 0.5 in many districts. Additionally, 
        increased in-migration to rural areas and stagnant rural-urban migration further slow urbanization, 
        hindered by a limited number of urban centers, especially small and medium towns, to absorb the 
        rural workforce.
      </p>
      <h4 className="para">
        <i>Regional Pattern of Urbanisation, Migration and Uneven Development </i>
      </h4>
      <p className="para">
        Despite progress in reducing regional disparities, southern and western Odisha continue to lag in development. 
        Census 2011 shows higher urbanization in districts like Khordha (48.2%), Jharsuguda (39.9%), Sundargarh (35.3%), 
        Sambalpur (29.6%), and Cuttack (28.0%). However, districts like Baudh (4.6%), Nuapada (5.6%), and 
        Nabarangapur (7.2%) remain significantly under-urbanized. Baudh and Nuapada, with negative urban growth
        rates, are particularly prone to migration, driven by rainfed agriculture. Districts like Khordha, Ganjam, 
        Cuttack, and Sundargarh received the largest share of male intra-state migrants, with high urbanization and 
        low poverty levels. <br />
        Given the ongoing challenges in Odisha's urbanisation patterns, it is recommended that the state 
        notify new statutory towns, especially in distress-prone regions, and promote small and medium-scale 
        industries to reduce distress-driven out-migration. Urban development policies should focus on strengthening 
        the economy and infrastructure of smaller towns to absorb rural migrants more effectively. Additionally, major 
        cities like Bhubaneswar and Cuttack, which attract a large number of rural migrants for manual labour, need to 
        adopt more inclusive policies to ensure better integration and support for these workers. 
      </p>
    </main>
  );
}
