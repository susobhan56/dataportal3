'use client';

import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    question: 'How can I access the raw datasets?',
    answer: 'Raw datasets are available in the Repository section. You can filter by "raw" data type and download the files in CSV or Excel format.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'We currently support CSV, Excel, and JSON formats. Each dataset specifies its format in the repository listing.',
  },
  {
    question: 'How often is the data updated?',
    answer: 'Data update frequency varies by dataset. Each dataset shows its last update date in its details page.',
  },
  {
    question: 'Can I use the data for research purposes?',
    answer: 'Yes, the data is available for research purposes under our open data policy. Please cite the Odisha Data Portal as your source.',
  },
  {
    question: 'How do I report an error in the data?',
    answer: 'Please use the contact form on this page to report any errors. Include the dataset name and description of the error.',
  },
];

const RESOURCES = [
  {
    title: 'Data Documentation',
    description: 'Access comprehensive documentation about our datasets and methodologies.',
    link: '/docs',
  },
  {
    title: 'API Reference',
    description: 'Learn how to programmatically access our data through our REST API.',
    link: '/api-docs',
  },
  {
    title: 'Open Data Policy',
    description: 'Read about our commitment to open data and usage guidelines.',
    link: '/policy',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our data? Need help with access? We're here to help.
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:contact@odishadata.gov.in" className="text-primary-600 hover:text-primary-700">
                        contact@odishadata.gov.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 (674) 2391234</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Odisha Data Portal Office<br />
                        Secretariat Building<br />
                        Bhubaneswar, Odisha 751001
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Helpful Resources
                </h3>
                <div className="space-y-4">
                  {RESOURCES.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{resource.title}</h4>
                          <p className="text-sm text-gray-600">{resource.description}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{ backgroundColor: openFaq === index ? 'rgb(249, 250, 251)' : 'white' }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 pt-0 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
