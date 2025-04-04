
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg text-gray-700 mb-4">
            As a Technology & Quality Engineering Leader, I bring over two decades of global experience 
            transforming engineering teams through cutting-edge automation, AI-driven methodologies, 
            and strategic technological innovation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My expertise spans microservices architecture, cloud infrastructure, and AI-powered testing 
            frameworks. I've consistently driven organizational efficiency by implementing advanced 
            automation strategies that reduce manual efforts and accelerate delivery cycles.
          </p>
          <p className="text-lg text-gray-700">
            With a proven track record of leading distributed teams across continents, I specialize in 
            creating scalable solutions that bridge technological innovation with business growth. 
            My approach combines deep technical expertise with strategic leadership to deliver 
            exceptional results.
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
