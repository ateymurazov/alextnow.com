import React, { useState } from 'react';
import { Brain, GitMerge, Sparkles, Plus, Minus } from 'lucide-react';

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

const Insight = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="insight" className="section-container">
      <div className="section-eyebrow">04 / Perspective</div>
      <h2 className="section-title">Thoughts on building<br />better engineering orgs.</h2>

      <div className="grid md:grid-cols-3 gap-6">
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
    </section>
  );
};

export default Insight;
