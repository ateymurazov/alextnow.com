import React from 'react';
import { Layers, GitBranch, Activity, Sparkles, Gauge, Workflow } from 'lucide-react';

const principles = [
  {
    icon: Layers,
    title: 'Quality is a systems problem.',
    body: 'Defects aren\'t QA failures — they\'re signals that the engineering system is misaligned. Fix the system, not the symptom.',
  },
  {
    icon: GitBranch,
    title: 'Every change produces automated validation.',
    body: 'If a code change can ship without its own automated proof, the pipeline is incomplete. No exceptions, no manual gates.',
  },
  {
    icon: Workflow,
    title: 'CI/CD is the organizational nervous system.',
    body: 'Pipeline health is org health. Latency, flakiness, and ownership gaps in CI/CD are leading indicators of delivery risk.',
  },
  {
    icon: Sparkles,
    title: 'AI augments engineering judgment.',
    body: 'AI accelerates test generation, triage, and risk scoring — but engineering judgment owns the decision. Augment, never replace.',
  },
  {
    icon: Activity,
    title: 'Observability beats raw test volume.',
    body: 'A million tests with no signal is noise. Invest in telemetry and impact analysis so the system tells you what to run and what to trust.',
  },
  {
    icon: Gauge,
    title: 'Fast feedback outperforms large QA teams.',
    body: 'Minutes-to-feedback is the single most leveraged metric in engineering. Shrink it relentlessly; headcount follows.',
  },
];

const Principles = () => {
  return (
    <section id="principles" className="section-container">
      <div className="section-eyebrow">03 — Operating Principles</div>
      <h2 className="section-title">How I run<br />engineering orgs.</h2>

      <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-12">
        Six convictions that shape how I architect teams, pipelines, and quality systems at scale.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((p, i) => {
          const Icon = p.icon;
          return (
            <article
              key={i}
              className="card-elevated p-7 hover-lift flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
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
    </section>
  );
};

export default Principles;
