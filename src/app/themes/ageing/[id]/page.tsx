import Layout from '@/components/Layout';
import { themes } from '@/data/themes.json';
import { recentContent } from '@/data/contents.json';
import { notFound } from 'next/navigation';

export default function AgeingArticlePage({ params }: { params: { id: string } }) {
  const theme = themes.find((t) => t.slug === 'ageing');
  const article = recentContent.find((c) => c.id === params.id && c.theme === 'ageing');

  if (!theme || !article) notFound();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-primary-700 mb-2">{theme.name}</h1>
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-4">{article.article ? <span dangerouslySetInnerHTML={{ __html: article.article }} /> : article.abstract}</p>
          {/* Flourish graph if present */}
          {/* If you want to add a Flourish graph, add it to the article HTML in the data. */}
        </div>
      </section>
    </Layout>
  );
}
