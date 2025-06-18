export type ContentType = 'chart' | 'report' | 'dataset';

export interface Content {
  id: string;
  title: string;
  theme: string;
  abstract: string;
  thumbnail: string;
  type: ContentType;
  lastUpdated: string;
  images?: string[];
  graphs?: string[];
  article?: string;
  chartData?: Array<{ name: string; value: number }>;

}

export interface ContentsData {
  recentContent: Content[];
}

declare module '@/data/contents.json' {
  const value: ContentsData;
  export const recentContent: Content[];
  export default value;
}
