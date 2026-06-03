import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Insight from '@/components/Insight';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

const Insights = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Engineering Insights — Aleksandr Teymurazov',
    url: 'https://alextnow.com/insights',
    description:
      'Perspectives on quality engineering, M&A technical integration, and AI in engineering, with long-form essays published at atqi.dev.',
    author: {
      '@type': 'Person',
      name: 'Aleksandr Teymurazov',
      url: 'https://alextnow.com/',
      sameAs: ['https://atqi.dev'],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Engineering Insights | Aleksandr Teymurazov</title>
        <meta
          name="description"
          content="Perspectives on quality engineering, M&A technical integration, and AI in engineering — with long-form essays published at atqi.dev."
        />
        <link rel="canonical" href="https://alextnow.com/insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alextnow.com/insights" />
        <meta property="og:title" content="Engineering Insights | Aleksandr Teymurazov" />
        <meta
          property="og:description"
          content="Perspectives on quality engineering, M&A technical integration, and AI in engineering — with essays at atqi.dev."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 lg:pt-20 pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to portfolio
        </Link>

        <Insight />

        <Footer />
      </main>
    </div>
  );
};

export default Insights;
