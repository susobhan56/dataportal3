import Layout from '@/components/Layout';
import { themes } from '@/data/themes.json';
import { recentContent } from '@/data/contents.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themeContent.map((item) => (
            <Link key={item.id} href={`/themes/ageing/${item.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold text-primary-700 mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.abstract}</p>
                <p className="text-sm text-gray-400">Last updated: {item.lastUpdated}</p>
              </div>
            </Link>
          ))}
          {themeContent.length === 0 && (
            <p className="col-span-full text-center text-gray-600 py-12">No articles available for this theme yet.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
