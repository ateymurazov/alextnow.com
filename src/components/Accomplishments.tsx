import React from 'react';

const Accomplishments = () => {
  return (
    <section id="accomplishments" className="section-container">
      <h2 className="section-title">Career Accomplishments</h2>
      
      <div className="prose prose-lg max-w-none text-foreground">
        <p className="mb-8 text-lg leading-relaxed">
          My journey began wearing every hat in the engineering org, from hands-on coding and DevOps scripting to architecting test automation frameworks, long before leadership became my focus. Over the past 15 years, I've steadily climbed the ladder from QA Manager to Development Manager, Director of Engineering, Executive Director of Engineering, and now Director of Quality Engineering. That unique arc, leading both development and quality teams, means I can still roll up my sleeves to debug production issues, author CI/CD pipelines, or design test automation, then switch roles seamlessly to mentor managers, shape strategy, and align C-suite vision with day-to-day execution.
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Agile Transformation & TDD Rollout</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I led a division with over 200 developers spread across disparate teams, their two-week sprints were more like wishful thinking. I championed a shift to Scrum, coaching Product Owners, training Scrum Masters, and embedding ceremonies that drove accountability. Simultaneously, I introduced Test-Driven Development: the first few red–green–refactor cycles were awkward, but as engineers saw their code pass tests on every commit, morale and quality soared. Within six months, defect rates plummeted by 50% and release cadence sped up by 40% -- proof that cultural change, when paired with technical rigor, can transform delivery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Dual Application Rewrites with Zero Downtime</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Rewriting two flagship systems back-to-back taught me that high-stakes migrations can be engines of innovation, if you plan meticulously and never lose sight of the user.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              At VerticalResponse, I faced a monolithic SaaS behemoth: the "VR Classic" email-marketing platform with every imaginable marketing feature, co-branding and white-label options baked in, and it processed multi-million-contact lists and billions of email messages each day. When I took charge of the ground-up rewrite to VR2, the stakes couldn't have been higher. My challenge was twofold: deliver full feature parity (and often enhancements) and match or exceed the legacy system's blistering performance.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When D-Day arrived, we flipped the switch with zero downtime. Users enjoyed the same rich feature set, plus improvements like 20% faster list uploads and segmentation and a streamlined email-creation workflow, without ever noticing a hiccup. That success wasn't just technical it was proof that, even under merger pressure and data-volume extremes, strategic planning, phased rollouts, and relentless performance tuning can turn a rewrite from a risk into a competitive leap forward.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Post M&A Unifications: Deluxe & Shutterfly</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Deluxe, I took the merger of VerticalResponse, Hostopia, WebBuilder, LogoMix, and MyCorporation and turned five engineering silos into one "One Deluxe" Engineering organization. I drafted a unified SDLC playbook, built a shared CI/CD pipeline, and standardized code review policies, resulting in a 20% lift in feature throughput within months. Later at Shutterfly, I faced five QA teams operating in isolation across Shutterfly Consumer, Business, Lifetouch, SnapFish, and Spoonflower. I created a "Quality Intelligence" organization, deploying an AI-powered test-case generator that adapted to code changes and an impact-analysis engine that recommended which tests to run. Manual testing hours collapsed by 90%, release cycles shrank by 35%, and the unified QE team delivered 50% more validated stories each sprint.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Pioneering AI-Driven Quality Automation</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Anticipating the limits of manual script-writing, I spearheaded an AI test-generation program that scanned our codebase, produced targeted test cases, and classified results with machine-learned models. Within three months, overall test coverage jumped by 30% and the system flagged the riskiest code areas before developers even committed code changes. QA engineers reclaimed hundreds of hours otherwise spent on repetitive tasks, focusing instead on exploratory testing and UX edge cases—raising product confidence and accelerating our delivery pipeline.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Technical Due Diligence for Strategic M&A</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When Deluxe Corp eyed the acquisition of MyCorporation, I stepped in as the lead technical advisor—tasked with dissecting their entire technology landscape. I conducted hands-on reviews of their IP portfolio, infrastructure topology, and application architecture, uncovering scalability limits in their monolithic services and security gaps in their data-processing pipelines. I ran targeted compliance audits, verifying HIPAA readiness and PCI controls and mapped integration touch points against our "One Deluxe" platform. My executive summary distilled these deep findings into a clear risk matrix, outlining necessary refactoring efforts, migration paths, and tight timelines.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mt-12 font-medium">
          If you're looking for a seasoned technology leader to elevate your engineering organization's performance and drive innovation at scale, I'd welcome the opportunity to discuss how my blend of hands-on execution, strategic vision, and AI-driven processes can help your teams ship faster, smarter, and with greater confidence. Let's connect.
        </p>
      </div>
    </section>
  );
};

export default Accomplishments;