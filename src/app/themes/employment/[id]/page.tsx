import Layout from '@/components/Layout';
import { notFound } from 'next/navigation';

export default function EmploymentArticlePage({ params }: { params: { id: string } }) {
  let ArticleComponent;
  try {
    ArticleComponent = require(`./articles/${params.id}`).default;
  } catch {
    notFound();
  }

  return (
    <Layout>
      <ArticleComponent />
    </Layout>
  );
}
