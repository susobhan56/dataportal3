import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';

export default async function EducationArticlePage({ params }: { params: { id: string } }) {
  let ArticleComponent;
  try {
    ArticleComponent = (await import(`./articles/${params.id}`)).default;
  } catch {
    notFound();
  }

  return (
    <Layout>
      <ArticleComponent />
    </Layout>
  );
}