import React from 'react';
import { Zap, Code, Users, TrendingUp, Shield, Rocket } from 'lucide-react';

const Accomplishments = () => {
  const highlights = [
    { icon: TrendingUp, metric: "50%", label: "Defect Rate Reduction" },
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
            My journey began wearing every hat in the engineering org, from hands-on coding and DevOps scripting to architecting test automation frameworks, long before leadership became my focus. Over the past 15 years, I've steadily climbed the ladder from QA Manager to Development Manager, Director of Engineering, Executive Director of Engineering, and now Director of Quality Engineering. That unique arc, leading both development and quality teams, means I can still roll up my sleeves to debug production issues, author CI/CD pipelines, or design test automation, then switch roles seamlessly to mentor managers, shape strategy, and align C-suite vision with day-to-day execution.
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
              When I led a division with over 200 developers spread across disparate teams, their two-week sprints were more like wishful thinking. I championed a shift to Scrum, coaching Product Owners, training Scrum Masters, and embedding ceremonies that drove accountability. Simultaneously, I introduced Test-Driven Development: the first few red–green–refactor cycles were awkward, but as engineers saw their code pass tests on every commit, morale and quality soared. Within six months, defect rates plummeted by 50% and release cadence sped up by 40% -- proof that cultural change, when paired with technical rigor, can transform delivery.
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
                Rewriting two flagship systems back-to-back taught me that high-stakes migrations can be engines of innovation, if you plan meticulously and never lose sight of the user.
              </p>
              <p>
                At VerticalResponse, I faced a monolithic SaaS behemoth: the "VR Classic" email-marketing platform with every imaginable marketing feature, co-branding and white-label options baked in, and it processed multi-million-contact lists and billions of email messages each day. When I took charge of the ground-up rewrite to VR2, the stakes couldn't have been higher.
              </p>
              <p>
                When D-Day arrived, we flipped the switch with zero downtime. Users enjoyed the same rich feature set, plus improvements like 20% faster list uploads and segmentation and a streamlined email-creation workflow, without ever noticing a hiccup.
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
            <p className="text-muted-foreground leading-relaxed">
              At Deluxe, I took the merger of VerticalResponse, Hostopia, WebBuilder, LogoMix, and MyCorporation and turned five engineering silos into one "One Deluxe" Engineering organization. Later at Shutterfly, I faced five QA teams operating in isolation across multiple brands. I created a "Quality Intelligence" organization, deploying an AI-powered test-case generator that adapted to code changes and an impact-analysis engine that recommended which tests to run. Manual testing hours collapsed by 90%, release cycles shrank by 35%, and the unified QE team delivered 50% more validated stories each sprint.
            </p>
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
              Anticipating the limits of manual script-writing, I spearheaded an AI test-generation program that scanned our codebase, produced targeted test cases, and classified results with machine-learned models. Within three months, overall test coverage jumped by 30% and the system flagged the riskiest code areas before developers even committed code changes. QA engineers reclaimed hundreds of hours otherwise spent on repetitive tasks, focusing instead on exploratory testing and UX edge cases.
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