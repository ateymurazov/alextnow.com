
import React from 'react';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: [
      "Leading a team of 8 engineers developing a cloud-based enterprise solution",
      "Architected and implemented a microservices infrastructure that improved system reliability by 45%",
      "Introduced CI/CD pipelines and testing practices that reduced deployment time by 60%",
      "Mentored junior developers and conducted technical interviews for new hires"
    ]
  },
  {
    id: 2,
    role: "Frontend Lead",
    company: "InnovateTech",
    period: "2017 - 2020",
    description: [
      "Redesigned the company's flagship product using React and TypeScript",
      "Implemented state management solutions that improved application performance by 35%",
      "Collaborated with UX designers to create intuitive interfaces for complex workflows",
      "Developed and maintained component libraries and design systems"
    ]
  },
  {
    id: 3,
    role: "Software Developer",
    company: "WebScale Systems",
    period: "2013 - 2017",
    description: [
      "Built RESTful APIs and backend services using Node.js and Express",
      "Implemented database solutions with MongoDB and PostgreSQL",
      "Optimized application performance and fixed critical bugs",
      "Participated in code reviews and documentation initiatives"
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
