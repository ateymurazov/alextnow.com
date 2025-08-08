import React from 'react';

const experiences = [
  {
    id: 1,
    company: "Shutterfly",
    position: "Director, Quality Engineering and Automation",
    period: "December 2020 - Present",
    website: "shutterfly.com",
    description: "When I joined Shutterfly in December 2020, I inherited five independent Quality teams—SnapFish, Lifetouch, Spoonflower, Shutterfly Business, and Shutterfly Consumer, each operating with its own processes, tools, and priorities. I immediately set out to transform those silos into a single, high-performance machine. Over several months, I personally designed and executed a unified Quality Engineering organization: I restructured product-aligned teams under a central Quality function and created a brand new Core Automation team that focused on delivering common frameworks, metrics, and tooling across every brand.",
    details: "With the new structure in place, 120 quality and automation engineers strong, and three direct managers reporting into me, I turned my attention to building a rolling capacity-planning model in close collaboration with Product, Engineering, and Finance. Next, I revamped our CI/CD pipeline by embedding modern test automation—unit, integration, and performance—into every stage. That initiative slashed manual testing time by 90% and accelerated deployments by 35%. In just eighteen months under my leadership, the reorganized QE org delivered $500K in annual cost savings, increased test execution capacity by 40%, and forged a culture of shared ownership."
  },
  {
    id: 2,
    company: "Deluxe Corp.",
    position: "Executive Director of Engineering, SBS",
    period: "February 2018 - October 2020",
    website: "deluxe.com",
    description: "Led the post-acquisition integration of five engineering organizations (VerticalResponse, Hostopia, WebBuilder, LogoMix, MyCorporation) into a unified 'One Deluxe' engineering ecosystem. This role required balancing technical leadership with strategic business objectives during a period of rapid organizational change.",
    details: "I established standardized SDLC practices, consolidated toolchains, and created shared CI/CD pipelines that resulted in a 20% lift in feature throughput within months. The integration work I led generated over $500,000 in annual cost savings through licensing consolidation and process optimization, while maintaining service quality across all acquired platforms."
  },
  {
    id: 3,
    company: "Deluxe Corp.",
    position: "Director of Engineering",
    period: "July 2013 - February 2018",
    website: "deluxe.com",
    description: "Managed the VerticalResponse engineering organization post-acquisition, focusing on platform modernization and team scaling during integration with Deluxe Corp. Led the complete rewrite of the VR Classic email marketing platform while maintaining zero downtime for millions of users.",
    details: "Successfully orchestrated a ground-up rewrite of a monolithic SaaS platform processing billions of emails daily. Through phased rollouts and parallel runs, achieved full feature parity with 20% performance improvements. Scaled the engineering team from 15 to 45 developers while implementing modern development practices and microservices architecture."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-b border-border pb-12 last:border-b-0">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">{exp.company}</h3>
              <p className="text-lg text-muted-foreground mb-2">{exp.position}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <a 
                href={`http://${exp.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                {exp.website}
              </a>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                {exp.description}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {exp.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;