import React from 'react';
import { Brain, GitMerge, Sparkles } from 'lucide-react';

const insights = [
  {
    icon: Sparkles,
    tag: 'Quality',
    title: 'The Evolution of Quality Engineering',
    body:
      "The traditional QA role is rapidly evolving. Today's quality engineers must be strategic partners, not just testers. They need to understand the business impact of quality decisions, implement AI-driven testing strategies, and lead cross-functional initiatives that prevent defects rather than just finding them. The future belongs to quality leaders who can bridge technical execution with business outcomes.",
  },
  {
    icon: GitMerge,
    tag: 'M&A',
    title: 'M&A Integration: The Hidden Technology Challenge',
    body:
      "Most M&A deals focus on financial synergies but underestimate technology integration complexity. Having led multiple post-acquisition technology unifications, I've learned that success requires immediate cultural alignment, standardized toolchains, and clear migration roadmaps. The companies that move fast on technical integration realize value faster and avoid the productivity losses that can derail deal economics.",
  },
  {
    icon: Brain,
    tag: 'AI',
    title: 'AI in Engineering: Beyond the Hype',
    body:
      "Most organizations applying AI to testing are optimizing the wrong layer. Generating more tests is meaningless if your CI pipeline, ownership model, and telemetry systems cannot identify which signals actually matter. AI only becomes valuable when paired with disciplined engineering systems.",
  },
];

const Insight = () => {
  return (
    <section id="insight" className="section-container">
      <div className="section-eyebrow">04 — Perspective</div>
      <h2 className="section-title">Thoughts on building<br />better engineering orgs.</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((item, i) => {
          const Icon = item.icon;
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
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Insight;
