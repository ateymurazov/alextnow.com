import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    id: "1",
    company: "Shutterfly",
    period: "December 2020 - Present",
    website: "http://shutterfly.com",
    roles: [
      {
        position: "Director, Quality Engineering and Automation",
        period: "December 2020 - Present",
        description: "When I joined Shutterfly in December 2020, I inherited five independent Quality teams—SnapFish, Lifetouch, Spoonflower, Shutterfly Business, and Shutterfly Consumer, each operating with its own processes, tools, and priorities. I immediately set out to transform those silos into a single, high-performance machine. Over several months, I personally designed and executed a unified Quality Engineering organization: I restructured product-aligned teams under a central Quality function and created a brand new Core Automation team that focused on delivering common frameworks, metrics, and tooling across every brand.",
        details: "With the new structure in place, 120 quality and automation engineers strong, and three direct managers reporting into me, I turned my attention to building a rolling capacity-planning model in close collaboration with Product, Engineering, and Finance. I translated strategic objectives into headcount forecasts, budget allocations, and release timelines. Each quarter, I scoped initiatives, mapped dependencies, and locked in budgets to guarantee every feature release and client onboarding hit its target. Next, I revamped our CI/CD pipeline by embedding modern test automation—unit, integration, and performance—into every stage. That initiative slashed manual testing time by 90% and accelerated deployments by 35%. Throughout, I maintained direct channels with Customer Success and Product teams, gathering real-world feedback to refine our tools, resolve pain points, and elevate the end-user experience. I then hunted down operational inefficiencies. One process in particular, I automated the monthly capital-expense close, replacing a tedious manual process of data pulls and reconciliations with a one-click suite of SQL scripts and Excel macros, cutting effort by 80% and saving over 20 hours per month for finance and operations. In just eighteen months under my leadership, the reorganized QE org did more than survive rapid growth and platform upgrades. It delivered $500K in annual cost savings, increased test execution capacity by 40%, and, most importantly, forged a culture of shared ownership."
      }
    ]
  },
  {
    id: "2",
    company: "Deluxe Corp.",
    period: "July 2013 - October 2020",
    website: "http://deluxe.com",
    roles: [
      {
        position: "Executive Director of Engineering, SBS",
        period: "February 2018 - October 2020",
        description: "Upon my promotion to Executive Director of Engineering at Deluxe, I balanced hands-on innovation with strategic leadership—and plenty of air miles. I pitched and launched an internal incubator focused on distributed data processing, hand-selecting a two-engineer team to architect a scalable Data Management Platform that handled billions of records and generated over $15 million in new revenue in under three years.",
        details: "Simultaneously, I unified our engineering landscape by consolidating multiple product teams onto the \"One Deluxe\" platform—standardizing development practices and rolling out a shared CI/CD workflow that cut release friction and boosted collaboration. By renegotiating tool and license agreements across the merged organizations, I drove over $350,000 in annual cost savings, freeing budget to reinvest in innovation. On the M&A front, I served on Deluxe's corporate leadership team, leading technical due diligence for the MyCorporation acquisition—deep-diving into IP, infrastructure, application architecture, and development processes to assess scalability, security, and integration risk. My insights empowered executives to complete the deal smoothly and integrate the business without disruption. This role also required 30–40% travel. I frequently flew to Toronto for Product-Engineering offsites with the Hostopia team and annual Executive Strategy sessions for Deluxe Small Business. I also visited our WebBuilder engineering hub in Sofia, Bulgaria, to align on roadmap priorities and ensure our global teams stayed in sync."
      },
      {
        position: "Director Software Engineering",
        period: "August 2015 - February 2018",
        description: "Upon being promoted to Director of Engineering, I took the helm of four distinct product teams—VerticalResponse, Hostopia, Website Builder, and LogoMix—and set out to unify their workflows and drive measurable impact. My first priority was slashing our time-to-production: by introducing automated deployment pipelines and embedding agile best practices, I cut release cycles by 40%, allowing new features to reach customers faster and with greater confidence.",
        details: "Simultaneously, I tackled a nagging finance headache: manual capital-expense reporting. I architected an end-to-end automation solution that extracted data from our financial systems, validated it through scripted checks, and generated compliant reports in minutes—eliminating error-prone spreadsheets and freeing analysts to focus on strategic planning. To ensure all teams moved in lockstep, I standardized our SDLC processes, tooling, and frameworks—rolling out a shared suite of CI/CD templates, code-quality gates, and backlog-management guidelines. That consistency boosted development velocity by 20% and drove down production incidents. Finally, I negotiated enterprise-wide licensing agreements for GitHub and Atlassian tools, consolidating contracts across teams and saving 20% in OPEX. Through these initiatives, I not only scaled engineering output across multiple product lines but also embedded a culture of efficiency, transparency, and continuous improvement."
      },
      {
        position: "Software Engineering Manager",
        period: "July 2013 - August 2015",
        description: "When Deluxe Corp acquired VerticalResponse, I stepped into the newly created role of Software Engineering Manager—charged with transforming the legacy \"VR Classic\" platform into the next-generation VR2. With Ruby on Rails gaining momentum, I architected and led a full rewrite under razor-tight deadlines: my team rebuilt core functionality, integrated PCI compliance requirements for credit-card processing, and secured HIPAA readiness—all while racing to meet our merger timetable.",
        details: "I assembled and mentored a cross-functional squad of full-stack, QA, automation, and DevOps engineers, defining microservices boundaries and guiding them through agile sprints. As we rolled out VR2's distributed architecture, I also designed a data-analysis framework that stress-tested pipelines against billions of records—ensuring reliability at scale. By launch, VR2 delivered a 50% boost in platform scalability and email-delivery performance, and passed all PCI audits on the first submission. Stepping up from QA Manager into this engineering leadership position, I proved that even under acquisition pressure, clear vision and relentless execution can turn monumental challenges into lasting success."
      }
    ]
  },
  {
    id: "3",
    company: "VerticalResponse",
    period: "January 2009 - July 2013",
    website: "http://verticalresponse.com",
    roles: [
      {
        position: "QA / Test Automation Manager",
        period: "August 2010 - July 2013",
        description: "At VerticalResponse, I quickly moved from Senior QA Engineer into the QA Manager seat—entrusted with shaping quality strategy across the entire company. Early on, I championed Test-Driven Development, personally authoring an end-to-end automated test suite that unlocked deployments two to three times per week. To keep pace, I built a parallelized Continuous Integration workflow: what once took 4½ hours of sequential tests now ran in just 30 minutes, multiplying our test capacity fivefold.",
        details: "I set a team goal of 90% coverage for our mission-critical components and designed the test framework to reach it, catching bugs before they ever hit production. Finally, I architected a GitHub branching strategy that let multiple feature streams progress in parallel—eliminating merge nightmares and boosting developer productivity company-wide. Together, these efforts transformed VerticalResponse's release cadence and laid a foundation for scalable, reliable software delivery."
      },
      {
        position: "Senior QA Engineer",
        period: "August 2009 - August 2010",
        description: "Joining VerticalResponse was my first role landed entirely on my own—no network referrals or professor introductions to lean on—so I walked in with zero internal contacts and a determination to prove myself. I dove headfirst into the Quality Assurance team, writing test cases by day and learning the product's every edge by night.",
        details: "Within weeks, I saw an opportunity to raise the bar: I architected the company's very first automated testing framework from scratch, laying the groundwork for a repeatable, scalable QA process. As that framework took shape, I designed comprehensive regression suites that drove a 60% drop in production defects—feedback loops that saved wasted hours and shored up customer confidence. My close partnership with developers smoothed release handoffs, and I became the go-to person for tough bug hunts and process improvements. In just eight months, that momentum carried me from hands-on tester to QA Manager, where I continued shaping our quality culture and mentoring the next wave of QA engineers."
      }
    ]
  },
  {
    id: "4",
    company: "DeepDyve",
    period: "October 2007 - August 2009",
    website: "https://www.deepdyve.com",
    roles: []
  },
  {
    id: "5",
    company: "iPass",
    period: "August 2002 - September 2007",
    website: "http://ipass.com",
    roles: []
  },
  {
    id: "6",
    company: "Onepage",
    period: "October 2000 - April 2002",
    website: "http://onepage.com",
    roles: []
  },
  {
    id: "7",
    company: "Saba Software",
    period: "July 1999 - October 2000",
    website: "http://sabasoftware.com",
    roles: []
  },
  {
    id: "8",
    company: "Oracle",
    period: "March 1998 - July 1999",
    website: "http://oracle.com",
    roles: []
  },
  {
    id: "9",
    company: "C-ATS Software Inc.",
    period: "June 1997 - March 1998",
    website: "http://www.cats.com",
    roles: []
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="section-eyebrow">02 — Career</div>
      <h2 className="section-title">A timeline of building<br />and scaling teams.</h2>

      <div className="relative pl-8 md:pl-12 border-l border-border">
        <Accordion type="multiple" className="w-full space-y-6">
          {experiences.map((exp, i) => {
            const hasRoles = exp.roles.length > 0;
            const header = (
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2 text-left">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                </div>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-accent transition-colors font-mono"
                  onClick={(e) => e.stopPropagation()}
                >
                  {exp.website.replace(/^https?:\/\//, '')} ↗
                </a>
              </div>
            );

            return (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="relative border-none"
              >
                <span className="timeline-dot -left-[34px] md:-left-[50px] top-8" />
                <div className="card-elevated overflow-hidden">
                  {hasRoles ? (
                    <>
                      <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline group">
                        {header}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 md:px-8 pb-8">
                        <div className="space-y-8 pt-2">
                          {exp.roles.map((role, index) => (
                            <div
                              key={index}
                              className={index > 0 ? 'pt-8 border-t border-border' : ''}
                            >
                              <div className="mb-5">
                                <p className="text-lg font-semibold text-foreground mb-1">
                                  {role.position}
                                </p>
                                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                                  {role.period}
                                </p>
                              </div>
                              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                                <p>{role.description}</p>
                                <p>{role.details}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </>
                  ) : (
                    <div className="px-6 md:px-8 py-6">{header}</div>
                  )}
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;
