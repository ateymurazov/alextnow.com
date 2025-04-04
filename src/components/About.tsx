
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg text-gray-700 mb-4">
            I'm a Technology & Quality Engineering Leader with over 20 years of experience managing globally distributed
            engineering teams, specializing in AI-driven test automation, microservices testing frameworks, large-
            scale cloud infrastructure, and CI/CD automation. I have proven expertise in integrating engineering teams
            post-merger and acquisition (M&A) to create standardized development processes, scalable automation
            frameworks, and unified CI/CD pipelines.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Throughout my career, I've led global teams across the US, Europe, and Asia, optimizing server-level 
            test automation, cloud-based QA, and large-scale infrastructure setups. I have extensive experience in 
            enterprise QA governance, compliance, risk assessment, and infrastructure automation.
          </p>
          <p className="text-lg text-gray-700">
            I'm passionate about building high-performing teams, driving innovation, and leveraging cutting-edge 
            technologies to deliver exceptional results. My approach combines technical excellence with strong 
            leadership to transform organizations and create sustainable, scalable solutions.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Snapshot</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Location:</span>
              <span>Burlingame, California</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Experience:</span>
              <span>20+ years</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Education:</span>
              <span>B.S. Computer Information Systems, San Francisco State University</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Specialties:</span>
              <span>AI-Driven Testing, CI/CD, Cloud Infrastructure, Leadership</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Certifications:</span>
              <span>Scrum Master, Product Owner, Software Testing Professional</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
