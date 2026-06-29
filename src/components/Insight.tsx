import React, { useEffect, useState } from 'react';
import { Brain, GitMerge, Sparkles, Plus, Minus, ArrowUpRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const INSIGHTS_URL = 'https://atqi.dev';

const insights = [
  {
    icon: Sparkles,
    tag: 'Quality',
    title: 'The Evolution of Quality Engineering',
    summary:
      "QA is no longer a downstream checkpoint. It sets how fast and how safely an org can ship.",
    body:
      "Quality engineers should own prevention, not detection. That means shaping CI signals, ownership models, and release gates, not writing more tests after the fact. The leaders worth hiring tie quality decisions directly to delivery speed and revenue risk.",
  },
  {
    icon: GitMerge,
    tag: 'M&A',
    title: 'Most M&A strategies underestimate the cost of technical integration.',
    summary:
      "The real success metric isn't the synergy model in the deck, it's how quickly engineering systems converge after the acquisition closes.",
    body:
      "CI/CD pipelines, ownership boundaries, tooling, on-call structures, and delivery workflows need alignment early or engineering velocity drops fast. When integration stalls, productivity erodes and projected synergies rarely materialize.",
  },
  {
    icon: Brain,
    tag: 'AI',
    title: 'AI in Engineering: Beyond the Hype',
    summary:
      "More AI-generated tests don't fix quality. Better signal, ownership, and telemetry do.",
    body:
      "Generating more tests on top of a noisy pipeline just produces noisier noise. AI is a multiplier on signal quality, not a substitute for it. Fix ownership and telemetry first, then let AI compound the gains.",
  },
];

type Post = {
  url: string;
  slug: string;
  title: string;
  description: string;
  lastmod?: string;
};

const Insight = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase.functions
      .invoke('atqi-posts')
      .then(({ data }) => {
        if (cancelled) return;
        const list = (data as { posts?: Post[] } | null)?.posts ?? [];
        setPosts(list.slice(0, 5));
      })
      .catch(() => !cancelled && setPosts([]));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="insight" className="section-container">
      <div className="section-eyebrow">05 / Perspective</div>
      <h2 className="section-title">Thoughts on building<br />better engineering orgs.</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {insights.map((item, i) => {
          const Icon = item.icon;
          const isOpen = open === i;
          return (
            <article
              key={i}
              className="card-elevated p-8 hover-lift flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-foreground/90 mb-4">
                {item.summary}
              </p>

              {isOpen && (
                <p className="text-sm leading-relaxed text-muted-foreground mb-4 pt-4 border-t border-border">
                  {item.body}
                </p>
              )}

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="mt-auto inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                aria-expanded={isOpen}
              >
                {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                {isOpen ? 'Collapse' : 'Read full perspective'}
              </button>
            </article>
          );
        })}
      </div>

      <div className="card-elevated p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
              Insights / atqi.dev
            </div>
            <h3 className="text-2xl font-semibold text-foreground tracking-tight">
              Latest from ATQI Insights
            </h3>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Long-form articles on the AT Quality Intelligence Framework™,
              AI-driven validation, and CI/CD trust, published at{' '}
              <a href={INSIGHTS_URL} className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                atqi.dev
              </a>.
            </p>
          </div>
          <a
            href={INSIGHTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors whitespace-nowrap"
          >
            Visit atqi.dev
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {posts === null ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground py-8">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading latest from ATQI Insights…
          </div>
        ) : posts.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8">
            Couldn't load posts. Visit{' '}
            <a href={INSIGHTS_URL} className="text-accent underline">
              atqi.dev
            </a>{' '}
            directly.
          </p>
        ) : (
          <ul className="divide-y divide-border border-t border-border">
            {posts.map((t) => (
              <li key={t.url}>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-5 hover:bg-secondary/40 -mx-3 px-3 rounded-lg transition-colors"
                >
                  <h4 className="text-base md:text-lg font-semibold text-foreground leading-snug mb-1 group-hover:text-accent transition-colors">
                    {t.title}
                  </h4>
                  {t.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {t.description}
                    </p>
                  )}
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-accent">
                    Read on atqi.dev
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Insight;
