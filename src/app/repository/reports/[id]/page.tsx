import { notFound } from 'next/navigation';
import { reports } from '@/data/reports.json';
import Layout from '@/components/Layout';
import FileViewer from '@/components/FileViewer';
import Image from 'next/image';

export default function ReportPreviewPage({ params }: { params: { id: string } }) {
  const report = reports.find(r => r.id === params.id);
  if (!report) return notFound();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <Image
                src={report.thumbnail}
                alt={report.name}
                width={320}
                height={420}
                className="rounded-lg object-cover border"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-primary-700 mb-2">{report.name}</h1>
              <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full mb-2">
                {report.theme}
              </span>
              <p className="text-gray-700 mb-4">{report.description}</p>
              <p className="text-sm text-gray-400 mb-6">Updated {new Date(report.lastUpdated).toLocaleDateString()}</p>
              <div className="flex gap-4">
                <a
                  href={report.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <FileViewer url={report.file} type="pdf" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
