
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg text-gray-700 mb-4">
            I'm a seasoned Software Engineer with over 10 years of experience building web applications
            and leading engineering teams. Specializing in frontend development with React and backend
            systems with Node.js, I've helped companies scale their products and improve their technical foundations.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Prior to my current role at Tech Solutions Inc., I worked at InnovateTech and WebScale Systems
            where I led the development of several key products that are now used by millions of users worldwide.
          </p>
          <p className="text-lg text-gray-700">
            I'm passionate about mentoring junior developers, contributing to open-source projects,
            and staying on top of the latest technologies and best practices in the industry.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Snapshot</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Location:</span>
              <span>San Francisco, CA</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Experience:</span>
              <span>10+ years</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Education:</span>
              <span>M.S. Computer Science, Stanford University</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Interests:</span>
              <span>Cloud Architecture, DevOps, UI/UX Design</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold w-32">Languages:</span>
              <span>English (Native), Spanish (Conversational)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
