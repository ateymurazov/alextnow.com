import React, { useState } from 'react';
import { Zap, Code, Users, TrendingUp, Shield, Rocket, Plus, Minus } from 'lucide-react';

const highlights = [
  { icon: TrendingUp, metric: "100K+", label: "Automated Tests / Day" },
  { icon: Rocket, metric: "40%", label: "Release Cycle Acceleration" },
  { icon: Shield, metric: "90%", label: "Manual Testing Reduction" },
  { icon: Users, metric: "200+", label: "Engineers Led" },
];

const transformations = [
  {
    icon: Zap,
    title: "Agile Transformation & TDD Rollout",
    chips: ["200+ Developers", "50% Defect Reduction", "40% Faster Releases"],
    body: (
      <p>
        Inherited 200+ developers running two-week sprints in name only. Rebuilt the operating cadence around Scrum and embedded TDD as a non-negotiable engineering standard. <span className="text-foreground font-medium">Defect rates dropped 50% and release cadence accelerated 40% within six months.</span>
      </p>
    ),
  },
  {
    icon: Rocket,
    title: "Dual Application Rewrites with Zero Downtime",
    chips: ["Zero Downtime", "20% Performance Boost", "Billions of Records"],
    body: (
      <div className="space-y-4">
        <p>Led back-to-back rewrites of two flagship SaaS platforms processing billions of records daily, including VerticalResponse's monolithic email marketing engine, without losing a single user-facing feature.</p>
        <p><span className="text-foreground font-medium">Cutover executed with zero downtime.</span> Customers landed on the new stack with 20% faster list uploads and segmentation, plus a cleaner creation workflow, with no migration interruption.</p>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Post M&A Unifications: Deluxe & Shutterfly",
    chips: ["5 Teams Unified", "90% Manual Testing Reduction", "AI-Powered Automation"],
    body: (
      <div className="space-y-4">
        <p>At Deluxe, consolidated five acquired engineering orgs, VerticalResponse, Hostopia, WebBuilder, LogoMix, MyCorporation, into a single "One Deluxe" Engineering organization with shared standards and toolchain.</p>
        <p>At Shutterfly, unified five siloed QA teams into a "Quality Intelligence" org powered by an adaptive AI test generator and impact-analysis engine. <span className="text-foreground font-medium">Manual testing collapsed 90%, release cycles compressed 35%, validated story throughput rose 50% per sprint.</span></p>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Pioneering AI-Driven Quality Automation",
    chips: ["30% Coverage Increase", "ML-Powered", "Predictive Testing"],
    body: (
      <p>
        Built an AI test-generation system that scans the codebase, authors targeted cases, and classifies results with ML models, flagging the riskiest code paths before commit. <span className="text-foreground font-medium">Test coverage climbed 30% in 90 days</span>, and QA engineers reclaimed hundreds of hours per sprint for exploratory and edge-case work.
      </p>
    ),
  },
];

const Accomplishments = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [journeyOpen, setJourneyOpen] = useState(false);

  return (
    <section id="accomplishments" className="section-container animate-fade-in">
      <div className="section-eyebrow">01 / Impact</div>
      <h2 className="section-title">Numbers that define<br />the work.</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="card-elevated p-6 text-center hover-lift">
              <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{item.metric}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          );
        })}
      </div>

      <div className="card-elevated p-8 mb-10">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Code className="h-5 w-5 mr-2 text-primary" />
          Leadership Journey
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Fifteen years progressing from QA Manager to Director of Quality Engineering, moving fluently between C-suite strategy and hands-on execution.
        </p>
        {journeyOpen && (
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border">
            With stops as Development Manager, Director of Engineering, and Executive Director in between, I've led both development and quality organizations, debugging production, authoring CI/CD, and shaping the operating model in the same week.
          </p>
        )}
        <button
          type="button"
          onClick={() => setJourneyOpen(!journeyOpen)}
          className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
          aria-expanded={journeyOpen}
        >
          {journeyOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          {journeyOpen ? 'Collapse' : 'Read full arc'}
        </button>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-12">
        {transformations.map((t, i) => {
          const Icon = t.icon;
          const isOpen = open === i;
          return (
            <article key={i} className="card-elevated p-8 hover-lift">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {t.chips.map((c) => (
                      <span key={c} className="bg-secondary px-2 py-1 rounded">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              {isOpen && (
                <div className="text-muted-foreground leading-relaxed pt-4 mt-4 border-t border-border">
                  {t.body}
                </div>
              )}

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                aria-expanded={isOpen}
              >
                {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                {isOpen ? 'Collapse' : 'Read transformation'}
              </button>
            </article>
          );
        })}
      </div>

      <div className="card-elevated p-8 bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20">
        <p className="text-lg leading-relaxed font-medium text-foreground">
          Looking for an operating executive who can modernize delivery, unify post-M&A engineering orgs, and embed AI-driven quality at enterprise scale? Let's talk.
        </p>
      </div>
    </section>
  );
};

export default Accomplishments;
