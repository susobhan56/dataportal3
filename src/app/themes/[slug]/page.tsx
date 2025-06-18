import Layout from '@/components/Layout';
import { themes } from '@/data/themes.json';
import { recentContent } from '@/data/contents.json';
import { notFound } from 'next/navigation';
import ThemeContent from '@/components/ThemeContent';
import type { Theme } from '@/types/theme';
import type { Content, ContentType } from '@/types/content';

interface ThemePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return themes.map((theme) => ({
    slug: theme.slug,
  }));
}

export default function ThemePage({ params }: ThemePageProps) {
  const theme = themes.find((t) => t.slug === params.slug);
  const themeContent = recentContent
    .filter((content) => content.theme === params.slug)
    .map(content => ({
      ...content,
      type: content.type as ContentType
    }));
  
  if (!theme) {
    notFound();
  }

  return (
    <Layout>
      <ThemeContent theme={theme} content={themeContent} />
    </Layout>
  );
}
