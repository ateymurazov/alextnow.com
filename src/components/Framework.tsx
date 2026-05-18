import React from 'react';
import { Wand2, Target, Activity, Brain } from 'lucide-react';
import frameworkImg from '@/assets/atqi-framework.png';

const pillars = [
  {
    icon: Wand2,
    title: 'Adaptive Test Generation',
    body: 'AI-assisted synthesis of unit, integration, and contract tests from code diffs, telemetry, and incident history — closing coverage gaps where risk actually lives.',
  },
  {
    icon: Target,
    title: 'Risk-Based Execution',
    body: 'CI selects, orders, and parallelizes tests based on change blast-radius, historical failure data, and production usage — not by running everything, every time.',
  },
  {
    icon: Activity,
    title: 'Quality Observability',
    body: 'Pipeline, test, and release telemetry unified into a single signal layer: flakiness, drift, escape rate, and lead time as first-class metrics with ownership.',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Failure Analysis',
    body: 'Automated triage clusters failures, ranks probable causes, and routes to the right team — collapsing mean-time-to-diagnose from hours to minutes.',
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
  return (
    <section id="framework" className="section-container">
      <div className="section-eyebrow">04 — Framework</div>
      <h2 className="section-title">
        AT Quality Intelligence<br />Framework<sup className="text-xl text-accent">™</sup>
      </h2>

      <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-12">
        A systems-based operating model for embedding AI-driven quality into enterprise-scale
        engineering — built on observability, adaptive execution, and delivery intelligence.
      </p>

      <div className="card-elevated p-4 md:p-6 mb-12 overflow-hidden">
        <img
          src={frameworkImg}
          alt="AT Quality Intelligence Framework diagram showing six interconnected capabilities: GenAI Engineering, Predictive Intelligence, LLM Validation & Red Teaming, Continuous Evaluation & Feedback, AI Quality Observability, and Governance & Compliance"
          className="w-full h-auto rounded-md"
          loading="lazy"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {pillars.map((p, i) => {
          const Icon = p.icon;
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
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
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
