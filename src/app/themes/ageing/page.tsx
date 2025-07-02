import Layout from '@/components/Layout';
import { themes } from '@/data/themes.json';
import { recentContent } from '@/data/contents.json';
import { notFound } from 'next/navigation';
import ContentCard from '@/components/ContentCard';

export default function AgeingThemePage() {
  const theme = themes.find((t) => t.slug === 'ageing');
  const themeContent = recentContent.filter((content) => content.theme === 'ageing');

  if (!theme) notFound();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{theme.name}</h1>
          <p className="text-lg text-gray-600 mb-8">{theme.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themeContent.map((item) => (
            <ContentCard
              key={item.id}
              id={item.id}
              title={item.title}
              theme={item.theme}
              abstract={item.abstract}
              thumbnail={item.thumbnail}
              type={['chart', 'report', 'dataset'].includes(item.type) ? item.type as 'chart' | 'report' | 'dataset' : 'chart'}
              lastUpdated={item.lastUpdated}
              images={item.images}
              graphs={item.graphs}
            />
          ))}
          {themeContent.length === 0 && (
            <p className="col-span-full text-center text-gray-600 py-12">No articles available for this theme yet.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
