import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import OperatingScope from './OperatingScope';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


type Snapshot = {
  scope: string;
  orgSize: string;
  highlights: string[];
  technologies?: string[];
};

type Role = {
  position: string;
  period: string;
  snapshot?: Snapshot;
  impact: string[];
};

type Experience = {
  id: string;
  company: string;
  period: string;
  website: string;
  roles: Role[];
};

const experiences: Experience[] = [
  {
    id: "1",
    company: "Shutterfly",
    period: "December 2020 - Present",
    website: "http://shutterfly.com",
    roles: [
      {
        position: "Director, Quality Engineering and Automation",
        period: "December 2020 - Present",
        snapshot: {
          scope: "Enterprise QE across 5 brands (SnapFish, Lifetouch, Spoonflower, SFLY Business, SFLY Consumer)",
          orgSize: "120+ engineers · 3 direct manager reports",
          highlights: [
            "Unified 5 siloed QE organizations into a single product-aligned function with a central Core Automation team",
            "Built an AI-assisted Quality Intelligence framework for adaptive test generation and risk-based execution",
            "Reduced manual regression effort by 90% and accelerated release cadence by 35%",
            "Embedded automated unit, integration, and performance tests across every CI/CD stage",
            "Delivered $500K annual cost savings and 40% increase in test execution capacity in 18 months",
            "Stood up a rolling capacity-planning model with Product, Engineering, and Finance",
          ],
          technologies: ["Playwright", "Docker", "Jenkins", "GitHub Actions", "Splunk", "AWS", "Python", "SeleniumGrid"],
        },
        impact: [
          "Scope: Inherited 5 siloed QE teams across SnapFish, Lifetouch, Spoonflower, SFLY Business, and SFLY Consumer — 120 engineers, 3 manager reports.",
          "Action: Designed a unified QE org — product-aligned teams under a central Quality function plus a new Core Automation team owning shared frameworks, metrics, and tooling.",
          "Action: Rebuilt CI/CD to embed unit, integration, and performance automation at every stage; layered in an AI-assisted Quality Intelligence framework for adaptive test generation and risk-based execution.",
          "Action: Stood up a rolling capacity-planning model with Product, Engineering, and Finance to translate strategy into headcount, budget, and release timelines.",
          "Results: -90% manual regression, +35% release cadence, +40% test execution capacity, and $500K annual savings within 18 months.",
        ],
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
        snapshot: {
          scope: "Engineering leadership across consolidated Small Business Services portfolio + M&A diligence",
          orgSize: "Multi-team engineering org across US, Canada (Toronto), and Bulgaria (Sofia)",
          highlights: [
            "Stood up an internal incubator for distributed data processing — 2-engineer team delivered a Data Management Platform processing billions of records",
            "Generated $15M+ in new revenue in under 3 years from the DMP",
            "Consolidated multiple product teams onto the unified 'One Deluxe' platform with shared CI/CD",
            "Drove $350K+ annual savings by renegotiating tool/license contracts across merged orgs",
            "Led technical due diligence for the MyCorporation acquisition (IP, infra, architecture, security)",
            "Served on Deluxe's corporate leadership team representing engineering",
          ],
          technologies: ["Java", "Distributed Systems", "AWS", "GitHub", "Atlassian", "Jenkins"],
        },
        impact: [
          "Scope: Engineering leadership across the consolidated Small Business Services portfolio spanning US, Toronto (Hostopia), and Sofia (WebBuilder); 30–40% travel.",
          "Action: Pitched and launched an internal incubator for distributed data processing — hand-picked a 2-engineer team that architected a scalable Data Management Platform.",
          "Action: Consolidated multiple product teams onto the unified 'One Deluxe' platform with standardized practices and shared CI/CD; renegotiated tool and license contracts across merged orgs.",
          "Action: Led technical due diligence for the MyCorporation acquisition — IP, infrastructure, architecture, security, and integration risk — and represented engineering on Deluxe's corporate leadership team.",
          "Results: $15M+ new revenue from the DMP in under 3 years (processing billions of records) and $350K+ annual savings reinvested into innovation.",
        ],
      },
      {
        position: "Director Software Engineering",
        period: "August 2015 - February 2018",
        snapshot: {
          scope: "4 product orgs: VerticalResponse, Hostopia, Website Builder, LogoMix",
          orgSize: "Multi-team engineering org across acquired companies",
          highlights: [
            "Cut release cycles by 40% via automated deployment pipelines and agile rollout",
            "Standardized SDLC, tooling, and CI/CD templates across 4 acquired products",
            "Boosted development velocity by 20% and reduced production incidents",
            "Built end-to-end automation for capital-expense reporting, replacing manual workflows",
            "Negotiated enterprise-wide GitHub + Atlassian agreements — 20% OPEX reduction",
          ],
          technologies: ["Ruby on Rails", "Java", "GitHub", "Jenkins", "Atlassian"],
        },
        impact: [
          "Scope: Promoted to Director of Engineering over 4 acquired product orgs — VerticalResponse, Hostopia, Website Builder, and LogoMix.",
          "Action: Standardized SDLC, tooling, and CI/CD templates across all four products — code-quality gates, shared backlog guidelines, and consistent release mechanics.",
          "Action: Architected end-to-end automation for capital-expense reporting, replacing error-prone spreadsheets with audit-ready outputs in minutes.",
          "Action: Negotiated enterprise-wide GitHub and Atlassian agreements, consolidating contracts across the portfolio.",
          "Results: -40% time-to-production, +20% development velocity, fewer production incidents, and 20% OPEX reduction on tooling.",
        ],
      },
      {
        position: "Software Engineering Manager",
        period: "July 2013 - August 2015",
        snapshot: {
          scope: "Ground-up rewrite of VerticalResponse 'VR Classic' → VR2 post-acquisition",
          orgSize: "Cross-functional squad: full-stack, QA, automation, DevOps",
          highlights: [
            "Architected and led full Ruby on Rails rewrite under merger-driven deadlines",
            "Delivered zero-downtime cutover with 50% scalability and email-delivery gains",
            "Achieved PCI compliance on first audit submission; secured HIPAA readiness",
            "Designed data-analysis framework stress-testing pipelines against billions of records",
            "Defined microservices boundaries and agile sprint cadence for distributed architecture",
          ],
          technologies: ["Ruby on Rails", "Microservices", "PCI/HIPAA", "AWS"],
        },
        impact: [
          "Scope: New role created post-Deluxe acquisition of VerticalResponse — own the 'VR Classic' → VR2 platform rewrite under a hard merger deadline.",
          "Action: Architected and led the full Ruby on Rails rewrite, defining microservices boundaries and agile sprint cadence for the distributed architecture.",
          "Action: Assembled and mentored a cross-functional squad of full-stack, QA, automation, and DevOps engineers; embedded PCI and HIPAA requirements into the build.",
          "Action: Designed a data-analysis framework that stress-tested pipelines against billions of records to validate reliability at scale.",
          "Results: +50% platform scalability and email-delivery performance, zero-downtime cutover, and passed PCI audit on first submission with HIPAA readiness secured.",
        ],
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
        snapshot: {
          scope: "Company-wide quality strategy and automation infrastructure",
          orgSize: "QA team supporting full engineering org",
          highlights: [
            "Championed TDD and authored end-to-end automated suite — unlocked 2–3 deployments/week",
            "Built parallelized CI workflow: 4.5 hours sequential → 30 minutes (5x capacity)",
            "Drove test framework to 90% coverage on mission-critical components",
            "Designed GitHub branching strategy supporting parallel feature streams",
          ],
          technologies: ["Ruby", "RSpec", "Selenium", "Jenkins", "GitHub"],
        },
        impact: [
          "Scope: Promoted from Senior QA into QA Manager — own company-wide quality strategy and automation infrastructure.",
          "Action: Championed TDD and authored an end-to-end automated test suite covering mission-critical components.",
          "Action: Built a parallelized Continuous Integration workflow and a GitHub branching strategy supporting multiple parallel feature streams.",
          "Results: CI runtime cut from 4.5 hours to 30 minutes (5x capacity), 90% coverage on critical paths, and release cadence lifted to 2–3 deployments per week.",
        ],
      },
      {
        position: "Senior QA Engineer",
        period: "August 2009 - August 2010",
        snapshot: {
          scope: "Foundational QA build-out for SaaS email marketing platform",
          orgSize: "Individual contributor → QA Manager in 8 months",
          highlights: [
            "Architected the company's first automated testing framework from scratch",
            "Designed regression suites that drove a 60% drop in production defects",
            "Established repeatable, scalable QA process and developer-QA handoff model",
          ],
          technologies: ["Ruby", "Selenium", "Capybara"],
        },
        impact: [
          "Scope: First QA hire on the SaaS email marketing platform — no internal network, no existing framework.",
          "Action: Architected the company's first automated testing framework from scratch and designed comprehensive regression suites.",
          "Action: Established the developer-QA handoff model and a repeatable, scalable QA process adopted across engineering.",
          "Results: -60% production defects and promoted from IC to QA Manager in 8 months.",
        ],
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

const SnapshotBlock: React.FC<{ snapshot: Snapshot }> = ({ snapshot }) => (
  <div className="mb-6 rounded-xl border border-border bg-secondary/40 p-5 sm:p-6">
    <div className="grid sm:grid-cols-2 gap-4 mb-5 pb-5 border-b border-border">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
          Scope
        </div>
        <div className="text-sm text-foreground leading-snug">{snapshot.scope}</div>
      </div>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
          Org Size
        </div>
        <div className="text-sm text-foreground leading-snug">{snapshot.orgSize}</div>
      </div>
    </div>

    <div className="mb-5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
        Leadership Highlights
      </div>
      <ul className="space-y-2">
        {snapshot.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>

    {snapshot.technologies && snapshot.technologies.length > 0 && (
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
          Notable Technologies
        </div>
        <div className="flex flex-wrap gap-2">
          {snapshot.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const ImpactBullet: React.FC<{ text: string }> = ({ text }) => {
  const match = text.match(/^(Scope|Action|Results):\s*(.*)$/);
  const label = match?.[1];
  const body = match?.[2] ?? text;
  const labelColor =
    label === 'Results'
      ? 'text-accent'
      : label === 'Scope'
        ? 'text-foreground'
        : 'text-foreground/80';
  return (
    <li className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
      <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
      <span>
        {label && (
          <span className={`font-mono text-[10px] uppercase tracking-widest mr-2 ${labelColor}`}>
            {label}
          </span>
        )}
        {body}
      </span>
    </li>
  );
};

const RoleNarrative: React.FC<{ impact: string[] }> = ({ impact }) => {
  const [open, setOpen] = useState(false);
  const resultsBullet = impact.find((b) => /^Results:/.test(b));
  const otherBullets = impact.filter((b) => !/^Results:/.test(b));

  return (
    <div>
      {resultsBullet && (
        <ul className="space-y-3 mb-4">
          <ImpactBullet text={resultsBullet} />
        </ul>
      )}

      {open && otherBullets.length > 0 && (
        <ul className="space-y-3 mb-4 pt-4 border-t border-border">
          {otherBullets.map((b, i) => (
            <ImpactBullet key={i} text={b} />
          ))}
        </ul>
      )}

      {otherBullets.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
          aria-expanded={open}
        >
          {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          {open ? 'Hide operating detail' : 'Show operating detail'}
        </button>
      )}
    </div>
  );
};


const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="section-eyebrow">02 — Career</div>
      <h2 className="section-title">A timeline of building<br />and scaling teams.</h2>

      <OperatingScope />

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
                              {role.snapshot && <SnapshotBlock snapshot={role.snapshot} />}
                              <RoleNarrative impact={role.impact} />

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
