// src/data/factsheets.ts
export interface Factsheet {
  id: string;
  title: string;
  abstract: string;
  thumbnail: string;
  pdf: string;
  lastUpdated: string;
}

export const factsheets: Factsheet[] = [
  {
    id: "population-ageing-odisha",
    title: "Population Ageing in Odisha",
    abstract: "Key facts and figures on population ageing in Odisha.",
    thumbnail: "/images/popagefactsheet.png",
    pdf: "/factsheets/Population Ageing in Odisha.pdf",
    lastUpdated: "2025-06-01",
  },
  {
    id: "demographic-trends-odisha",
    title: "Demographic Trends and Transition in Odisha",
    abstract: "A report on demographic changes and transitions in Odisha.",
    thumbnail: "/images/Demographic Trends and Transition in Odisha, Sibabrata Das.jpg",
    pdf: "/reports/Demographic Trends and Transition in Odisha, Sibabrata Das.pdf",
    lastUpdated: "2025-06-01",
  },
];
