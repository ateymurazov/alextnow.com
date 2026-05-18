import React, { useState } from 'react';
import { Wand2, Target, Activity, Brain, Plus, Minus } from 'lucide-react';
import frameworkImg from '@/assets/atqi-framework.png';

const pillars = [
  {
    icon: Wand2,
    title: 'Adaptive Test Generation',
    summary: 'AI synthesizes tests from PR diffs and incident history, coverage scales with change, not headcount.',
    example:
      'On a multi-brand commerce checkout, meaningful coverage on changed code moved from ~55% to 90%+ without growing the QE org.',
  },
  {
    icon: Target,
    title: 'Risk-Based Execution',
    summary: 'Every commit is scored by blast-radius and historical failure rate, CI runs only what matters.',
    example:
      'A 9,000-test enterprise SaaS suite: PR feedback cut from 48 minutes to under 9, with escape rate held flat.',
  },
  {
    icon: Activity,
    title: 'Quality Observability',
    summary: 'Pipeline, test, and release telemetry unified into one signal layer with clear ownership.',
    example:
      'Across 120+ engineers and 5 product lines, production defect escape dropped 60% quarter-over-quarter.',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Failure Analysis',
    summary: 'Failures clustered, ranked by probable root cause, and auto-routed to the owning service team.',
    example:
      'On a regulated payments platform, mean-time-to-diagnose collapsed from ~4 hours to under 20 minutes.',
  },
];

const outcomes = [
  { metric: '-90%', label: 'Regression cycle reduction' },
  { metric: '+35%', label: 'Release cadence acceleration' },
  { metric: 'Predictive', label: 'Flaky-test detection' },
  { metric: 'Adaptive', label: 'CI execution & test selection' },
  { metric: 'Telemetry', label: 'Driven release validation' },
];

const Framework = () => {
  const [openPillar, setOpenPillar] = useState<number | null>(null);
  const [diagramOpen, setDiagramOpen] = useState(false);

  return (
    <section id="framework" className="section-container">
      <div className="section-eyebrow">04 / Framework</div>
      <h2 className="section-title">
        AT Quality Intelligence<br />Framework<sup className="text-xl text-accent">™</sup>
      </h2>

      <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-10">
        A systems-based operating model for embedding AI-driven quality into enterprise-scale
        engineering, built on observability, adaptive execution, and delivery intelligence.
      </p>

      <div className="mb-12">
        <button
          type="button"
          onClick={() => setDiagramOpen(!diagramOpen)}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors mb-4"
          aria-expanded={diagramOpen}
        >
          {diagramOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          {diagramOpen ? 'Hide framework diagram' : 'View framework diagram'}
        </button>
        {diagramOpen && (
          <div className="card-elevated p-4 md:p-6 overflow-hidden">
            <img
              src={frameworkImg}
              alt="AT Quality Intelligence Framework diagram showing six interconnected capabilities: GenAI Engineering, Predictive Intelligence, LLM Validation & Red Teaming, Continuous Evaluation & Feedback, AI Quality Observability, and Governance & Compliance"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          const isOpen = openPillar === i;
          return (
            <article key={i} className="card-elevated p-7 hover-lift flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Pillar {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed mb-4">{p.summary}</p>

              {isOpen && (
                <div className="pt-4 mb-4 border-t border-border">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                    Enterprise Example
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.example}</p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setOpenPillar(isOpen ? null : i)}
                className="mt-auto inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                aria-expanded={isOpen}
              >
                {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                {isOpen ? 'Collapse' : 'See enterprise example'}
              </button>
            </article>
          );
        })}
      </div>

      <div>
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Operational Outcomes
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="card-elevated p-5 flex flex-col gap-2 hover-lift"
            >
              <div className="text-2xl font-semibold text-accent leading-none">
                {o.metric}
              </div>
              <div className="text-xs text-muted-foreground leading-snug">{o.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground/70 italic">
          Deeper write-up of the framework coming soon.
        </p>
      </div>
    </section>
  );
};

export default Framework;
