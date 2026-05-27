import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight, Loader2 } from 'lucide-react';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

const BLOG_URL = 'https://atqi.dev';

type Post = {
  url: string;
  slug: string;
  title: string;
  description: string;
  lastmod?: string;
};


const Blog = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase.functions
      .invoke('atqi-posts')
      .then(({ data }) => {
        if (cancelled) return;
        const list = (data as { posts?: Post[] } | null)?.posts ?? [];
        setPosts(list);
      })
      .catch(() => !cancelled && setPosts([]));
    return () => {
      cancelled = true;
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Engineering Quality Journal — now at atqi.dev',
    url: 'https://alextnow.com/blog',
    description:
      'The Engineering Quality Journal has moved to atqi.dev — a dedicated home for essays on the AT Quality Intelligence Framework and modern software quality engineering.',
    author: {
      '@type': 'Person',
      name: 'Aleksandr Teymurazov',
      url: 'https://alextnow.com/',
      sameAs: [BLOG_URL],
    },
    relatedLink: BLOG_URL,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Engineering Insights | Aleksandr Teymurazov</title>
        <meta
          name="description"
          content="The Engineering Quality Journal — essays on the ATQI framework, AI-driven validation, and CI/CD trust — now lives at atqi.dev."
        />
        <link rel="canonical" href="https://alextnow.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alextnow.com/blog" />
        <meta property="og:title" content="Engineering Quality Journal → atqi.dev" />
        <meta
          property="og:description"
          content="The Engineering Quality Journal now lives at atqi.dev."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 lg:pt-24 pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to portfolio
        </Link>

        <header className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Journal / Engineering Quality
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            The Engineering Quality Journal now lives at{' '}
            <a
              href={BLOG_URL}
              className="text-accent underline decoration-accent/30 underline-offset-[6px] hover:decoration-accent transition-colors"
            >
              atqi.dev
            </a>
            .
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Essays expanding on the AT Quality Intelligence Framework
            <sup className="text-accent">™</sup> and modern software quality
            engineering moved to their own home. New posts, archives, and
            tag-based reading paths are all there.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BLOG_URL}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
            >
              Read the journal at atqi.dev
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`${BLOG_URL}/`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Browse all posts
            </a>
          </div>
        </header>

        <section className="border-t border-border pt-10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Latest essays
          </div>
          {posts === null ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground py-10">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading latest posts from atqi.dev…
            </div>
          ) : posts.length === 0 ? (
            <p className="text-sm text-muted-foreground py-10">
              Couldn't load posts. Visit{' '}
              <a href={BLOG_URL} className="text-accent underline">
                atqi.dev
              </a>{' '}
              directly.
            </p>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {posts.map((t) => (
                <li key={t.url}>
                  <a
                    href={t.url}
                    className="group block py-7 hover:bg-secondary/40 -mx-4 px-4 rounded-xl transition-colors"
                  >
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors">
                      {t.title}
                    </h2>
                    {t.description && (
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {t.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-accent">
                      Read on atqi.dev
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>


        <p className="mt-10 text-sm text-muted-foreground">
          Old links like <code className="font-mono text-xs">/blog/&lt;slug&gt;</code>{' '}
          automatically redirect to the new home at atqi.dev.
        </p>

        <Footer />
      </main>
    </div>
  );
};

export default Blog;
