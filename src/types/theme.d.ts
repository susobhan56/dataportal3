export interface Theme {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface ThemesData {
  themes: Theme[];
}

declare module '@/data/themes.json' {
  const value: ThemesData;
  export = value;
}
