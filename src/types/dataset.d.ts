export type DatasetType = 'csv' | 'excel' | 'json' | 'xml';

export interface Dataset {
  id: string;
  name: string;
  description: string;
  type: DatasetType;
  size: string;
  lastUpdated: string;
}

export interface DatasetsData {
  datasets: {
    raw: Dataset[];
    analyzed: Dataset[];
  };
}

declare module '@/data/datasets.json' {
  const value: DatasetsData;
  export = value;
}
