
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg text-gray-700 mb-4">
            As a senior technology leader with over 20 years of experience, I provide technical, strategic, 
            and operational leadership to manage enterprise-grade SaaS solutions built on private, public, 
            and hybrid cloud infrastructures. My journey began in Quality Assurance, where I discovered my 
            passion for building solid test automation frameworks from the ground up, and evolved to 
            leading global engineering organizations spanning development, QA, automation, DevOps, 
            implementation, and support.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I've had the privilege of working with large organizations such as Shutterfly, Deluxe, iPass, 
            and Oracle, where I regularly partnered with C-suite and executive leadership to define 
            deliverables that align with vision and strategic business goals. What sets me apart is my 
            collaborative, multi-disciplinary leadership approach working with diverse global teams across 
            multiple time zones and continents to set clear direction and employ metrics-driven methodologies.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I bring extensive experience in mergers and acquisitions, having successfully integrated 
            multiple engineering teams from acquired companies at both Shutterfly and Deluxe Corporation. 
            At Deluxe, I migrated five engineering teams from different acquisitions into a unified One Deluxe 
            organization, achieving cost savings of $500,000 through tools and license consolidation. 
            Similarly, at Shutterfly, I led the integration of teams from Snapfish, Lifetouch, Spoonflower, 
            and Shutterfly Business Solutions into a single cohesive engineering organization.
          </p>
          <p className="text-lg text-gray-700">
            As a hands-on technologist and team builder, I have a proven ability to optimize processes 
            and deliver solutions focused on customer value, cost-effectiveness, and quality. I'm equally 
            comfortable executing new strategic transformational initiatives and driving continuous 
            improvement across organizations, leveraging my expertise in AI-driven methodologies, cloud 
            architecture, and microservices testing to create environments where teams thrive and deliver 
            exceptional results that directly impact business outcomes.
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
              <span>Strategic Leadership, AI-Driven Testing, CI/CD, M&A Integration, Cloud Infrastructure</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Companies:</span>
              <span>Shutterfly, Deluxe, iPass, Oracle</span>
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
