import React from 'react';
import { Wand2, Target, Activity, Brain } from 'lucide-react';
import frameworkImg from '@/assets/atqi-framework.png';

const pillars = [
  {
    icon: Wand2,
    title: 'Adaptive Test Generation',
    body: 'Example: on a multi-brand commerce checkout, AI synthesizes unit, contract, and edge-case tests from each PR diff plus production incident history — lifting meaningful coverage on changed code from ~55% to 90%+ without growing the QE headcount.',
  },
  {
    icon: Target,
    title: 'Risk-Based Execution',
    body: 'Example: a 9,000-test enterprise SaaS suite is scored per-commit by change blast-radius and historical failure rate; CI runs only the top-risk slice in pre-merge — cutting PR feedback from 48 minutes to under 9 while holding escape rate flat.',
  },
  {
    icon: Activity,
    title: 'Quality Observability',
    body: 'Example: pipeline, test, and release telemetry unified into a single signal layer across 120+ engineers and 5 product lines — surfacing flakiness, drift, and escape rate by owner and driving production defect escape down 60% quarter-over-quarter.',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Failure Analysis',
    body: 'Example: on a regulated payments platform, failed runs are clustered and ranked by probable root cause, then auto-routed to the owning service team — collapsing mean-time-to-diagnose from ~4 hours to under 20 minutes and unblocking release trains same-day.',
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
