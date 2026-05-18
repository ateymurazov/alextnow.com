import React from 'react';
import { Zap, Code, Users, TrendingUp, Shield, Rocket } from 'lucide-react';

const Accomplishments = () => {
  const highlights = [
    { icon: TrendingUp, metric: "100K+", label: "Automated Tests / Day" },
    { icon: Rocket, metric: "40%", label: "Release Cycle Acceleration" },
    { icon: Shield, metric: "90%", label: "Manual Testing Reduction" },
    { icon: Users, metric: "200+", label: "Engineers Led" },
  ];

  return (
    <section id="accomplishments" className="section-container animate-fade-in">
      <div className="section-eyebrow">01 — Impact</div>
      <h2 className="section-title">Numbers that define<br />the work.</h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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

      <div className="prose prose-lg max-w-none text-foreground">
        <div className="card-elevated p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2 text-primary" />
            Leadership Journey
          </h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Fifteen years progressing from QA Manager to Director of Quality Engineering — with stops as Development Manager, Director of Engineering, and Executive Director in between. I've led both development and quality organizations, so I move fluently between C-suite strategy and hands-on execution: debugging production, authoring CI/CD, and shaping the operating model in the same week.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <div className="card-elevated p-8 hover-lift">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Agile Transformation & TDD Rollout</h3>
                <div className="flex space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-secondary px-2 py-1 rounded">200+ Developers</span>
                  <span className="bg-secondary px-2 py-1 rounded">50% Defect Reduction</span>
                  <span className="bg-secondary px-2 py-1 rounded">40% Faster Releases</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Inherited 200+ developers running two-week sprints in name only. Rebuilt the operating cadence around Scrum and embedded TDD as a non-negotiable engineering standard. <span className="text-foreground font-medium">Defect rates dropped 50% and release cadence accelerated 40% within six months.</span>
            </p>
          </div>

          <div className="card-elevated p-8 hover-lift">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dual Application Rewrites with Zero Downtime</h3>
                <div className="flex space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-secondary px-2 py-1 rounded">Zero Downtime</span>
                  <span className="bg-secondary px-2 py-1 rounded">20% Performance Boost</span>
                  <span className="bg-secondary px-2 py-1 rounded">Billions of Records</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Led back-to-back rewrites of two flagship SaaS platforms processing billions of records daily — including VerticalResponse's monolithic email marketing engine — without losing a single user-facing feature.
              </p>
              <p>
                <span className="text-foreground font-medium">Cutover executed with zero downtime.</span> Customers landed on the new stack with 20% faster list uploads and segmentation, and a streamlined creation workflow, with no migration interruption.
              </p>
            </div>
          </div>

          <div className="card-elevated p-8 hover-lift">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Post M&A Unifications: Deluxe & Shutterfly</h3>
                <div className="flex space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-secondary px-2 py-1 rounded">5 Teams Unified</span>
                  <span className="bg-secondary px-2 py-1 rounded">90% Manual Testing Reduction</span>
                  <span className="bg-secondary px-2 py-1 rounded">AI-Powered Automation</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Deluxe, consolidated five acquired engineering orgs — VerticalResponse, Hostopia, WebBuilder, LogoMix, MyCorporation — into a single "One Deluxe" Engineering organization with shared standards and toolchain.
              </p>
              <p>
                At Shutterfly, unified five siloed QA teams into a "Quality Intelligence" org powered by an adaptive AI test generator and impact-analysis engine. <span className="text-foreground font-medium">Manual testing collapsed 90%, release cycles compressed 35%, validated story throughput rose 50% per sprint.</span>
              </p>
            </div>
          </div>

          <div className="card-elevated p-8 hover-lift">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pioneering AI-Driven Quality Automation</h3>
                <div className="flex space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-secondary px-2 py-1 rounded">30% Coverage Increase</span>
                  <span className="bg-secondary px-2 py-1 rounded">ML-Powered</span>
                  <span className="bg-secondary px-2 py-1 rounded">Predictive Testing</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Built an AI test-generation system that scans the codebase, authors targeted cases, and classifies results with ML models — flagging the riskiest code paths before commit. <span className="text-foreground font-medium">Test coverage climbed 30% in 90 days</span>, and QA engineers reclaimed hundreds of hours per sprint for exploratory and edge-case work.
            </p>
          </div>
        </div>

        <div className="card-elevated p-8 mt-12 bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20">
          <p className="text-lg leading-relaxed font-medium text-foreground">
            If you're looking for a seasoned technology leader to elevate your engineering organization's performance and drive innovation at scale, I'd welcome the opportunity to discuss how my blend of hands-on execution, strategic vision, and AI-driven processes can help your teams ship faster, smarter, and with greater confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;