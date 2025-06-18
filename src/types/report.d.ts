export interface Report {
  id: string;
  name: string;
  theme: string;
  description: string;
  thumbnail: string;
  file: string;
  lastUpdated: string;
}

export interface ReportsData {
  reports: Report[];
}

declare module '@/data/reports.json' {
  const value: ReportsData;
  export = value;
}
