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
        details: "With the new structure in place, 120 quality and automation engineers strong, and three direct managers reporting into me, I turned my attention to building a rolling capacity-planning model in close collaboration with Product, Engineering, and Finance. Next, I revamped our CI/CD pipeline by embedding modern test automation—unit, integration, and performance—into every stage. That initiative slashed manual testing time by 90% and accelerated deployments by 35%. In just eighteen months under my leadership, the reorganized QE org delivered $500K in annual cost savings, increased test execution capacity by 40%, and forged a culture of shared ownership."
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
        description: "Led the post-acquisition integration of five engineering organizations (VerticalResponse, Hostopia, WebBuilder, LogoMix, MyCorporation) into a unified 'One Deluxe' engineering ecosystem. This role required balancing technical leadership with strategic business objectives during a period of rapid organizational change.",
        details: "I established standardized SDLC practices, consolidated toolchains, and created shared CI/CD pipelines that resulted in a 20% lift in feature throughput within months. The integration work I led generated over $500,000 in annual cost savings through licensing consolidation and process optimization, while maintaining service quality across all acquired platforms."
      },
      {
        position: "Director Software Engineering",
        period: "August 2015 - February 2018",
        description: "Promoted to Director Software Engineering, I expanded my leadership scope beyond VerticalResponse to encompass broader engineering initiatives across Deluxe's growing SaaS portfolio. This role positioned me as a key technical leader driving standardization and operational excellence across multiple product lines.",
        details: "I spearheaded cross-functional engineering initiatives, establishing unified development practices and shared infrastructure components that would later prove essential during the major organizational integration. Through strategic planning and execution, I helped position the engineering organization for the significant expansion that would follow with my promotion to Executive Director."
      },
      {
        position: "Software Engineering Manager",
        period: "July 2013 - August 2015",
        description: "When Deluxe Corp acquired VerticalResponse, I stepped into the newly created role of Software Engineering Manager—charged with transforming the legacy 'VR Classic' platform into the next-generation VR2. With Ruby on Rails gaining momentum, I architected and led a full rewrite under razor-tight deadlines: my team rebuilt core functionality, integrated PCI compliance requirements for credit-card processing, and secured HIPAA readiness—all while racing to meet our merger timetable.",
        details: "I assembled and mentored a cross-functional squad of full-stack, QA, automation, and DevOps engineers, defining microservices boundaries and guiding them through agile sprints. As we rolled out VR2's distributed architecture, I also designed a data-analysis framework that stress-tested pipelines against billions of records—ensuring reliability at scale. By launch, VR2 delivered a 50% boost in platform scalability and email-delivery performance, and passed all PCI audits on the first submission."
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
        description: "At VerticalResponse, I quickly moved from Senior QA Engineer into the QA Manager seat—entrusted with shaping quality strategy across the entire company. Early on, I championed Test-Driven Development, personally authoring an end-to-end automated test suite that unlocked deployments two to three times per week.",
        details: "To keep pace, I built a parallelized Continuous Integration workflow: what once took 4½ hours of sequential tests now ran in just 30 minutes, multiplying our test capacity fivefold. I set a team goal of 90% coverage for our mission-critical components and designed the test framework to reach it, catching bugs before they ever hit production. Finally, I architected a GitHub branching strategy that let multiple feature streams progress in parallel—eliminating merge nightmares and boosting developer productivity company-wide."
      },
      {
        position: "Senior QA Engineer",
        period: "August 2009 - August 2010",
        description: "Joining VerticalResponse was my first role landed entirely on my own—no network referrals or professor introductions to lean on—so I walked in with zero internal contacts and a determination to prove myself. I dove headfirst into the Quality Assurance team, writing test cases by day and learning the product's every edge by night.",
        details: "Within weeks, I saw an opportunity to raise the bar: I architected the company's very first automated testing framework from scratch, laying the groundwork for a repeatable, scalable QA process. As that framework took shape, I designed comprehensive regression suites that drove a 60% drop in production defects—feedback loops that saved wasted hours and shored up customer confidence. In just eight months, that momentum carried me from hands-on tester to QA Manager."
      }
    ]
  },
  {
    id: "4",
    company: "DeepDyve",
    period: "October 2007 - August 2009",
    website: "https://www.deepdyve.com",
    roles: [
      {
        position: "Principal Test Engineer",
        period: "October 2007 - August 2009",
        description: "At Infovell, I took ownership of the end-to-end testing and deployment of the company's WebSearch Engine—an ambitious project that required optimizing both content crawling and indexing to deliver fast, accurate results. I instituted a robust quality-engineering framework, defining processes that flagged reliability risks early and drove efficiency across the team.",
        details: "To further bolster our coverage and performance, I designed and rolled out innovative test-automation strategies—leveraging shell scripting and CI/CD pipelines—to catch edge-case failures before they ever reached production. The result was a search engine that not only scaled with growing data volumes but consistently met stringent uptime and response-time targets."
      }
    ]
  },
  {
    id: "5",
    company: "iPass",
    period: "August 2002 - September 2007",
    website: "http://ipass.com",
    roles: [
      {
        position: "Automation Test Lead",
        period: "August 2002 - September 2007",
        description: "At iPass, I recognized that our manual testing backlog was creating critical bottlenecks, so I designed and implemented a SilkTest-based automation framework that slashed manual QA effort by 70%. I personally owned the end-to-end integration testing process—defining API and backend test suites, orchestrating performance benchmarks, and refining build-deployment scripts to accelerate release cycles.",
        details: "To keep stakeholders informed, I overhauled our reporting pipeline: automating data collection and visualization to deliver real-time dashboards that guided prioritization and decision-making. These initiatives not only boosted our release cadence but also ensured the stability and scalability of our global connectivity platform."
      }
    ]
  },
  {
    id: "6",
    company: "Onepage",
    period: "October 2000 - April 2002",
    website: "https://www.bizjournals.com/eastbay/stories/2002/04/15/daily50.html",
    roles: [
      {
        position: "Software QA Team Lead",
        period: "October 2000 - April 2002",
        description: "At OnePage, I was tasked with transforming our release cycle into a predictable, quality-driven engine. I began by crafting and rolling out a comprehensive QA strategy—defining test plans, coverage goals, and automation roadmaps—that lifted our regression coverage by over 50% and caught more defects earlier in the cycle.",
        details: "To scale that vision, I built and mentored an offshore QA team, establishing daily stand-ups and pairing sessions that blended integration testing with automated suites. Together, we replaced manual handoffs with continuous feedback loops and self-serving dashboards, accelerating releases without sacrificing quality. My hands-on approach—leveraging PHP for backend validation, database sniffers for data integrity, and custom scripts for automation—ensured every product milestone shipped with confidence."
      }
    ]
  },
  {
    id: "7",
    company: "Saba Software",
    period: "July 1999 - October 2000",
    website: "http://sabasoftware.com",
    roles: [
      {
        position: "Sr. SQA Engineer",
        period: "July 1999 - October 2000",
        description: "At Saba Software, I stepped into a pivotal role overseeing integration testing and automation for the company's flagship enterprise applications. From day one, I recognized that our sprawling Learning Management and Talent suite—comprising modules for course delivery, performance management, and analytics—needed a cohesive testing strategy.",
        details: "I partnered with Product and Development leads to map out critical end-to-end workflows, then architected an automated integration test framework using Selenium WebDriver and REST-based API scripts. Building on that foundation, I wove those tests into our continuous integration pipeline, so every code check-in triggered a full regression pass against dozens of user scenarios. What had once taken three days of manual effort now ran overnight, catching edge-case failures early and giving developers fast feedback."
      }
    ]
  },
  {
    id: "8",
    company: "Oracle",
    period: "March 1998 - July 1999",
    website: "http://oracle.com",
    roles: [
      {
        position: "Software Quality Assurance Engineer",
        period: "March 1998 - July 1999",
        description: "At Oracle, I saw an opportunity to elevate our enterprise applications' stability by embedding automation deep into the testing lifecycle. I authored Java-based automated test suites—leveraging JDBC for backend data validation and JSP-driven UI scripts—that executed end-to-end scenarios across complex workflows.",
        details: "By integrating these tests into our nightly builds, I caught critical defects before they reached QA, significantly boosting product reliability and accelerating release confidence. My work laid the groundwork for a culture of continuous quality, where automated checks became an integral part of every development sprint."
      }
    ]
  },
  {
    id: "9",
    company: "C-ATS Software Inc.",
    period: "June 1997 - March 1998",
    website: "http://www.cats.com",
    roles: [
      {
        position: "Software Quality Assurance Engineer",
        period: "June 1997 - March 1998",
        description: "Joining CATS Software straight out of school was my first immersion into the tech world—and it felt like stepping onto a rocket ship. I started as a hands-on tester on their proprietary risk-management platform, diving into requirements documentation and mapping out complex use cases for financial institutions.",
        details: "My days were spent meticulously crafting and executing test cases—manually validating calculation engines, stress-testing data imports, and verifying UI workflows under shifting market conditions. Early on, I noticed that our regression cycles were eating up valuable release time. On my own initiative, I wrote simple scripts to automate repetitive test steps, cutting down manual effort and freeing the team to focus on deeper exploratory testing."
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <Accordion type="multiple" className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={exp.id} className="border border-border bg-card rounded-lg mb-4 px-6">
            <AccordionTrigger className="py-6 hover:no-underline [&[data-state=open]>svg]:rotate-90">
              <div className="flex items-center justify-between w-full">
                <div className="text-left">
                  <h3 className="text-lg font-medium text-foreground mb-1">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-muted-foreground transition-colors underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {exp.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-6">
              <div className="space-y-6">
                {exp.roles.map((role, index) => (
                  <div key={index} className={index > 0 ? "pt-6 border-t border-border" : ""}>
                    <div className="mb-4">
                      <p className="text-base font-medium text-foreground mb-1">{role.position}</p>
                      <p className="text-sm text-muted-foreground">{role.period}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {role.description}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {role.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Experience;