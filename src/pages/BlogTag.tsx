import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getTag, allTags } from '@/content/posts';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const BlogTag = () => {
  const { tag: tagSlug } = useParams<{ tag: string }>();
  const entry = tagSlug ? getTag(tagSlug) : undefined;

  if (!entry) return <NotFound />;

  const url = `https://alextnow.com/blog/tag/${entry.slug}`;
  const title = `${entry.tag} — Engineering Quality Journal`;
  const description = `Articles tagged ${entry.tag}: essays on ${entry.tag} from the AT Quality Intelligence Framework and modern software quality engineering.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    url,
    description,
    isPartOf: { '@type': 'Blog', name: 'Engineering Quality Journal', url: 'https://alextnow.com/blog' },
    hasPart: entry.posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://alextnow.com/blog/${p.slug}`,
      datePublished: p.date,
      description: p.description,
    })),
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alextnow.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://alextnow.com/blog' },
      { '@type': 'ListItem', position: 3, name: entry.tag, item: url },
    ],
  };

  const otherTags = allTags.filter((t) => t.slug !== entry.slug);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Aleksandr Teymurazov</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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

        <header className="mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Tag · {entry.posts.length} {entry.posts.length === 1 ? 'post' : 'posts'}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            {entry.tag}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Essays from the Engineering Quality Journal tagged{' '}
            <span className="text-foreground">{entry.tag}</span> — expanding on
            the AT Quality Intelligence Framework
            <sup className="text-accent">™</sup> and adjacent software quality
            engineering topics.
          </p>
        </header>

        <ul className="divide-y divide-border border-y border-border">
          {entry.posts.map((post) => (
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
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-accent">
                  Read
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {otherTags.length > 0 && (
          <section className="mt-16 pt-10 border-t border-border">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Browse other tags
            </div>
            <div className="flex flex-wrap gap-2">
              {otherTags.map((t) => (
                <Link
                  key={t.slug}
                  to={`/blog/tag/${t.slug}`}
                  className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-md bg-secondary hover:text-accent transition-colors"
                >
                  {t.tag}
                </Link>
              ))}
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default BlogTag;
