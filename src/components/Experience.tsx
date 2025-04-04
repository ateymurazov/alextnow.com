
import React from 'react';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: "Director, Quality Engineering and Automation",
    company: "Shutterfly",
    period: "Dec 2020 - Present",
    description: [
      "Defined and executed a multi-year Quality Engineering roadmap, integrating predictive analytics, risk-based testing, and AI-driven test automation to accelerate release cycles by 35% and reduced manual testing efforts by 90%.",
      "Led AI-driven test automation for microservices-based applications, ensuring seamless deployments and zero-downtime releases across 15 teams.",
      "Designed and implemented a scalable, microservices-centric automated testing framework, reducing unknown failures and enabling continuous delivery.",
      "Built an end-to-end test automation framework that fully integrates into CI/CD pipelines, eliminating manual validation and cutting test execution time by 30%.",
      "Introduced AI-powered automated test generation and self-healing test scripts, reducing manual authoring efforts by 50%."
    ]
  },
  {
    id: 2,
    role: "Executive Director of Engineering, SBS",
    company: "Deluxe Corp.",
    period: "Feb 2018 - Oct 2020",
    description: [
      "Built and led a world-class engineering team that fully automated the CI/CD build and deploy process, achieving 100% automated validation.",
      "Developed a distributed, microservices-driven Small Business Services platform to support large-scale enterprise SaaS applications, ensuring smooth service integration.",
      "Spearheaded an internal incubator initiative, driving innovation and new revenue growth by launching a distributed data processing platform that generated over $15M in new revenue.",
      "Played a key role in M&A technical due diligence, evaluating company IP, software infrastructure and defining post-acquisition integration strategies for acquired companies.",
      "Provided critical insights that influenced executive decision-making on the acquisition of MyCorporation (Calabasas, CA). Defined post-acquisition integration strategy."
    ]
  },
  {
    id: 3,
    role: "Director Software Engineering",
    company: "Deluxe Corp.",
    period: "Aug 2015 - Feb 2018",
    description: [
      "Reduced time to production by 40% for enterprise applications through automation and agile methodologies.",
      "Automated software capital expense reporting process, eliminating manual intervention and significantly improving accuracy, efficiency, and compliance in financial reporting.",
      "Standardized cross-team SDLC processes, tools and frameworks, increasing development velocity by 20% and reducing production incidents.",
      "Achieved annual $250k cost savings by consolidating & renegotiating licensing contracts for GitHub & Atlassian Tools.",
      "Optimized cloud-based test environments (AWS, Kubernetes) to ensure high availability and cost efficiency."
    ]
  },
  {
    id: 4,
    role: "Software Engineering Manager",
    company: "Deluxe Corp.",
    period: "Jul 2013 - Aug 2015",
    description: [
      "Managed a cross-functional team, post-acquisition to build a highly scalable, microservices-driven One Deluxe platform, while ensuring HIPAA and compliance readiness.",
      "Designed and implemented data analysis frameworks for testing distributed systems handling billions of records.",
      "Increased platform scalability and email delivery performance by 50%.",
      "Recruited, hired and mentored a top-notch talent engineering team, consisting of front/back-end, full-stack developers, test automation, quality, and dev ops engineers.",
      "Achieved PCI Compliance certification for the Email Marketing (VR2) platform."
    ]
  },
  {
    id: 5,
    role: "QA / Test Automation Manager",
    company: "VerticalResponse",
    period: "Aug 2009 - Jul 2013",
    description: [
      "Introduced Test-Driven Development (TDD) and developed an end-to-end automated test suite, increasing deployment frequency to 2-3 times per week.",
      "Developed Continuous Integration (CI) workflows, utilizing parallelization that reduced test runtime from 4.5 hrs. to 30 min and increased test capacity by 5x.",
      "Achieved 90% test coverage for mission-critical components through comprehensive automation strategies.",
      "Architected a GitHub branching strategy to support concurrent major features development, boosting productivity."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-12">
        {experienceData.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="absolute -left-3 top-6 bg-primary p-2 rounded-full text-white">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="ml-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {job.period}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
