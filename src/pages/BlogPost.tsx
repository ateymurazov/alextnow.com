import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { getPost, posts, tagToSlug } from '@/content/posts';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  const { Component, title, description, date, readingMinutes, tags, ogImage } = post;
  const url = `https://alextnow.com/blog/${post.slug}`;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      name: 'Aleksandr Teymurazov',
      url: 'https://alextnow.com/',
    },
    publisher: {
      '@type': 'Person',
      name: 'Aleksandr Teymurazov',
      url: 'https://alextnow.com/',
    },
    keywords: tags.join(', '),
    ...(ogImage ? { image: ogImage } : {}),
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alextnow.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://alextnow.com/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Aleksandr Teymurazov</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="Aleksandr Teymurazov" />
        {tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd)}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 lg:pt-24 pb-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft className="h-3 w-3" />
          All posts
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-5">
              <time dateTime={date}>{formatDate(date)}</time>
              <span aria-hidden>·</span>
              <span>{readingMinutes} min read</span>
              {tags.slice(0, 1).map((tag) => (
                <React.Fragment key={tag}>
                  <span aria-hidden>·</span>
                  <span className="text-accent">{tag}</span>
                </React.Fragment>
              ))}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
              {title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </header>

          <div className="prose-article">
            <Component />
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 rounded-md bg-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-2xl border border-border bg-secondary/40">
            <p className="text-sm font-semibold text-foreground">
              Written by Aleksandr Teymurazov
            </p>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              Engineering Quality & Delivery Leader. Building trusted CI/CD,
              Quality Intelligence, and AI-driven validation for enterprise
              software organizations.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://linkedin.com/in/ateymurazov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Connect on LinkedIn
              </a>
              <Link
                to="/"
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
              >
                View portfolio →
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-border">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Continue reading
            </div>
            <ul className="grid sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/blog/${r.slug}`}
                    className="block p-5 rounded-xl border border-border hover:border-accent/40 hover:bg-secondary/40 transition-colors h-full"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      {formatDate(r.date)}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">
                      {r.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default BlogPost;
