import React, { useState } from 'react';
import { Layers, GitBranch, Activity, Sparkles, Gauge, Workflow, Plus, Minus } from 'lucide-react';

const principles = [
  {
    icon: Layers,
    title: 'Quality is a systems problem.',
    body: "Most defects aren't really QA failures. They're a tell that something upstream, in design, ownership, or process, has drifted. Fixing the symptom keeps you busy; fixing the system is what actually moves the numbers.",
  },
  {
    icon: GitBranch,
    title: 'Every change produces automated validation.',
    body: "Every code change must be accompanied by its own automated test, otherwise pipe is incomplete. No exceptions, no manual gates.",
  },
  {
    icon: Workflow,
    title: 'CI/CD is the organizational nervous system.',
    body: "Most AI testing initiatives fail because the underlying CI telemetry is already unreliable. AI amplifies signal quality, it doesn't create it.",
  },
  {
    icon: Sparkles,
    title: 'AI augments engineering judgment.',
    body: "AI is genuinely good at test generation, triage, and risk scoring. It's not good at owning the call. I use it to give engineers leverage, not to take the decision out of their hands.",
  },
  {
    icon: Activity,
    title: 'Observability beats raw test volume.',
    body: "A million tests with no signal is just noise dressed up as coverage. The interesting investment is in telemetry and impact analysis, so the system can tell you what to actually run and what to actually trust.",
  },
  {
    icon: Gauge,
    title: 'Fast feedback outperforms large QA teams.',
    body: "Minutes-to-feedback is probably the single most leveraged metric in engineering. Shrink it and a lot of things you thought were headcount problems quietly stop being headcount problems.",
  },
];

const Principles = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="principles" className="section-container">
      <div className="section-eyebrow">03 / Operating Principles</div>
      <h2 className="section-title">How I run<br />engineering orgs.</h2>

      <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-10">
        Six convictions that shape how I architect teams, pipelines, and quality systems at scale.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((p, i) => {
          const Icon = p.icon;
          const isOpen = open === i;
          return (
            <article key={i} className="card-elevated p-7 hover-lift flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug">
                {p.title}
              </h3>

              {isOpen && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 pt-4 border-t border-border">
                  {p.body}
                </p>
              )}

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="mt-auto inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                aria-expanded={isOpen}
              >
                {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                {isOpen ? 'Collapse' : 'Why it matters'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Principles;
