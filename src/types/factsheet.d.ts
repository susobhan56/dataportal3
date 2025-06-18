export interface Factsheet {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  file: string;
  lastUpdated: string;
}

export interface FactsheetsData {
  factsheets: Factsheet[];
}

declare module '@/data/factsheets.json' {
  const value: FactsheetsData;
  export = value;
}
