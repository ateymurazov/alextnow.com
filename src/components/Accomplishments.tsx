import React, { useState } from 'react';
import { Zap, Code, Users, TrendingUp, Shield, Rocket, Plus, Minus } from 'lucide-react';

const highlights = [
  { icon: Shield, metric: "90 - 95%", label: "Automated Coverage" },
  { icon: Zap, metric: "7d → 4h", label: "Regression Cycle Compression" },
  { icon: TrendingUp, metric: "100K+", label: "Automated Validations / Day" },
  { icon: Rocket, metric: "35%", label: "Faster Deployment Velocity" },
  { icon: Users, metric: "120+", label: "Global QE Org Led" },
];

const transformations = [
  {
    icon: Zap,
    title: "Agile Transformation & TDD Rollout",
    chips: ["200+ Developers", "TDD as standard", "CI/CD Quality Gates"],
    body: (
      <div className="space-y-4">
        <p>
          Rebuilt operating cadence around Scrum, introduced mandatory TDD practices, and implemented fully automated CI/CD pipelines with quality gates spanning Git pull request validation through production deployment.
        </p>
        <p>
          <span className="text-foreground font-medium">Reduced manual regression effort by 90%, compressed release validation cycles from 7 days to ~4 hours,</span> and enabled reliable same-day software delivery.
        </p>
      </div>
    ),
  },
  {
    icon: Rocket,
    title: "Dual Application Rewrites with Zero Downtime",
    chips: ["Zero Downtime", "Billions of Records"],
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
    chips: ["5 Teams Unified", "AI-Powered Automation"],
    body: (
      <div className="space-y-4">
        <p>At Deluxe, consolidated five acquired engineering orgs, VerticalResponse, Hostopia, WebBuilder, LogoMix, MyCorporation, into a single "One Deluxe" Engineering organization with shared standards and toolchain. <span className="text-foreground font-medium">Consolidated tools, licenses and optimized QA infra, reducing operational costs by over $500K annually.</span></p>
        <p>At Shutterfly, unified five siloed QA teams into a "Quality Intelligence" org powered by an adaptive AI test generator and impact-analysis engine. <span className="text-foreground font-medium">Manual testing collapsed 90%, release cycles compressed 35%, validated story throughput rose 50% per sprint.</span></p>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "AI-Enabled Quality Intelligence",
    chips: ["ML-Powered", "Predictive Testing"],
    body: (
      <div className="space-y-4">
        <p>
          Built an AI test-generation engine that scans code, authors targeted cases, and flags the riskiest paths pre-commit. <span className="text-foreground font-medium">Coverage climbed 30% in 90 days</span>, freeing QA for exploratory and edge-case work.
        </p>
        <p>
          Paired it with a Random Forest classifier that detects flaky tests, <span className="text-foreground font-medium">cutting false positives 90%+</span> and restoring engineering trust in automated validation.
        </p>
      </div>
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
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

    </section>
  );
};

export default Accomplishments;
