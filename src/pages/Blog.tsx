import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { posts, allTags, tagToSlug } from '@/content/posts';
import Footer from '@/components/Footer';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const Blog = () => {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Aleksandr Teymurazov — Engineering Quality Journal',
    url: 'https://alextnow.com/blog',
    description:
      'Essays on the AT Quality Intelligence Framework, CI/CD trust, AI-assisted validation, and modern software quality engineering.',
    author: {
      '@type': 'Person',
      name: 'Aleksandr Teymurazov',
      url: 'https://alextnow.com/',
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://alextnow.com/blog/${p.slug}`,
      datePublished: p.date,
      description: p.description,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Engineering Quality Journal | Aleksandr Teymurazov</title>
        <meta
          name="description"
          content="Essays on the AT Quality Intelligence Framework, AI-driven validation, CI/CD trust, and scaling software quality engineering."
        />
        <link rel="canonical" href="https://alextnow.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alextnow.com/blog" />
        <meta
          property="og:title"
          content="Engineering Quality Journal | Aleksandr Teymurazov"
        />
        <meta
          property="og:description"
          content="Essays on AI-driven validation, CI/CD trust, and the ATQI framework."
        />
        <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 lg:pt-24 pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to portfolio
        </Link>

        <header className="mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Journal / Engineering Quality
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Notes on quality, delivery, and the systems that earn engineering trust.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Essays expanding on the AT Quality Intelligence Framework
            <sup className="text-accent">™</sup> and modern software quality engineering —
            written from inside enterprise transformations, not from the
            sidelines.
          </p>
        </header>

        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block py-8 hover:bg-secondary/40 -mx-4 px-4 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog/tag/${tagToSlug(tag)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 rounded-md bg-secondary hover:text-accent transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-accent">
                    Read
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Browse by tag
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <Link
                key={t.slug}
                to={`/blog/tag/${t.slug}`}
                className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-md bg-secondary hover:text-accent transition-colors"
              >
                {t.tag} <span className="text-accent/70">· {t.posts.length}</span>
              </Link>
            ))}
          </div>
        </section>


        <Footer />
      </main>
    </div>
  );
};

export default Blog;
