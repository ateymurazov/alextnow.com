
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg text-gray-700 mb-4">
            My journey began as a Quality Assurance Engineer, where I discovered my passion for building 
            robust test automation frameworks from the ground up. Over the past two decades, I've evolved 
            from hands-on QA to leading global engineering organizations, always maintaining my commitment 
            to quality and innovation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            What sets me apart is my unique trajectory – starting in quality assurance, advancing to 
            automation engineering, and growing into leadership roles where I've successfully managed 
            cross-functional teams spanning multiple time zones and continents. This diverse background 
            gives me a holistic perspective that bridges technical excellence with strategic leadership.
          </p>
          <p className="text-lg text-gray-700">
            Today, I leverage my expertise in AI-driven methodologies, cloud architecture, and 
            microservices testing to drive organizational transformation. My approach combines deep 
            technical knowledge with people-focused leadership, creating environments where teams thrive 
            and deliver exceptional results that directly impact business outcomes.
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
