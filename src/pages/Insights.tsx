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
    name: 'ATQI Insights — Aleksandr Teymurazov',
    url: 'https://alextnow.com/insights',
    description:
      'ATQI Insights — engineering articles from Aleksandr Teymurazov, Director of Quality Engineering and Quality Intelligence Leader, on quality, CI/CD, and AI-enabled validation at atqi.dev.',
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
        <title>ATQI Insights | Aleksandr Teymurazov</title>
        <meta
          name="description"
          content="ATQI Insights — engineering articles from Aleksandr Teymurazov, Director of Quality Engineering and Quality Intelligence Leader, on quality, CI/CD, and AI-enabled validation at atqi.dev."
        />
        <link rel="canonical" href="https://alextnow.com/insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alextnow.com/insights" />
        <meta property="og:title" content="ATQI Insights | Aleksandr Teymurazov" />
        <meta
          property="og:description"
          content="ATQI Insights — engineering articles from Aleksandr Teymurazov, Director of Quality Engineering and Quality Intelligence Leader, on quality, CI/CD, and AI-enabled validation at atqi.dev."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Sidebar />

      <main className="content-with-sidebar">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 lg:pt-20 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to portfolio
          </Link>

          <Insight />

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Insights;
