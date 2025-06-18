import Layout from '@/components/Layout';
import { themes } from '@/data/themes.json';
import { recentContent } from '@/data/contents.json';
import { notFound } from 'next/navigation';
import ContentDetail from '@/components/ContentDetail';
import type { Content } from '@/types/content';

interface ContentPageProps {
  params: {
    slug: string;
    contentId: string;
  };
}

export function generateStaticParams() {
  return recentContent.map((content) => ({
    slug: content.theme,
    contentId: content.id,
  }));
}

export default function ContentPage({ params }: ContentPageProps) {
  const content = recentContent.find(
    (c) => c.theme === params.slug && c.id === params.contentId
  ) as Content;

  const theme = themes.find((t) => t.slug === params.slug);

  if (!content || !theme) {
    notFound();
  }

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <ContentDetail content={content} themeName={theme.name} />
      </section>
    </Layout>
  );
}
