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
    position: "Director, Quality Engineering and Automation",
    period: "December 2020 - Present",
    website: "http://shutterfly.com",
    description: "When I joined Shutterfly in December 2020, I inherited five independent Quality teams—SnapFish, Lifetouch, Spoonflower, Shutterfly Business, and Shutterfly Consumer, each operating with its own processes, tools, and priorities. I immediately set out to transform those silos into a single, high-performance machine. Over several months, I personally designed and executed a unified Quality Engineering organization: I restructured product-aligned teams under a central Quality function and created a brand new Core Automation team that focused on delivering common frameworks, metrics, and tooling across every brand.",
    details: "With the new structure in place, 120 quality and automation engineers strong, and three direct managers reporting into me, I turned my attention to building a rolling capacity-planning model in close collaboration with Product, Engineering, and Finance. Next, I revamped our CI/CD pipeline by embedding modern test automation—unit, integration, and performance—into every stage. That initiative slashed manual testing time by 90% and accelerated deployments by 35%. In just eighteen months under my leadership, the reorganized QE org delivered $500K in annual cost savings, increased test execution capacity by 40%, and forged a culture of shared ownership."
  },
  {
    id: "2",
    company: "Deluxe Corp.",
    position: "Executive Director of Engineering, SBS",
    period: "February 2018 - October 2020",
    website: "http://deluxe.com",
    description: "Led the post-acquisition integration of five engineering organizations (VerticalResponse, Hostopia, WebBuilder, LogoMix, MyCorporation) into a unified 'One Deluxe' engineering ecosystem. This role required balancing technical leadership with strategic business objectives during a period of rapid organizational change.",
    details: "I established standardized SDLC practices, consolidated toolchains, and created shared CI/CD pipelines that resulted in a 20% lift in feature throughput within months. The integration work I led generated over $500,000 in annual cost savings through licensing consolidation and process optimization, while maintaining service quality across all acquired platforms."
  },
  {
    id: "3",
    company: "VerticalResponse",
    position: "Director of Engineering",
    period: "January 2009 - July 2013",
    website: "http://verticalresponse.com",
    description: "Managed the VerticalResponse engineering organization post-acquisition, focusing on platform modernization and team scaling during integration with Deluxe Corp. Led the complete rewrite of the VR Classic email marketing platform while maintaining zero downtime for millions of users.",
    details: "Successfully orchestrated a ground-up rewrite of a monolithic SaaS platform processing billions of emails daily. Through phased rollouts and parallel runs, achieved full feature parity with 20% performance improvements. Scaled the engineering team from 15 to 45 developers while implementing modern development practices and microservices architecture."
  },
  {
    id: "4",
    company: "DeepDyve",
    position: "Co-Founder & CTO",
    period: "October 2007 - August 2009",
    website: "https://www.deepdyve.com",
    description: "Co-founded DeepDyve, a research discovery platform that provides instant access to scientific and scholarly articles. Led the technical vision and architecture for the platform that would eventually serve millions of researchers worldwide.",
    details: "Built the foundational technology infrastructure and search algorithms that powered DeepDyve's article discovery engine. Established partnerships with major publishers and developed innovative pay-per-view and subscription models that disrupted traditional academic publishing access."
  },
  {
    id: "5",
    company: "iPass",
    position: "Senior Software Engineer",
    period: "August 2002 - September 2007",
    website: "http://ipass.com",
    description: "Developed enterprise mobility solutions for global connectivity and WiFi access management. Worked on core platform features that enabled seamless internet access for business travelers across thousands of hotspots worldwide.",
    details: "Contributed to the development of iPass's flagship connectivity platform, implementing robust authentication systems and network management tools. Played a key role in scaling the platform to support millions of users and thousands of WiFi hotspot locations globally."
  },
  {
    id: "6",
    company: "Onepage",
    position: "Software Engineer",
    period: "October 2000 - April 2002",
    website: "https://www.bizjournals.com/east...",
    description: "Worked on early web-based business solutions and enterprise software applications. Contributed to the development of innovative business tools during the early dot-com era.",
    details: "Developed web applications and business management tools that helped companies streamline their operations. Gained valuable experience in early web technologies and enterprise software development practices."
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
              <div className="mb-4">
                <p className="text-base font-medium text-foreground mb-2">{exp.position}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.details}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Experience;