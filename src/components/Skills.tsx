
import React from 'react';

const skillsCategories = [
  {
    id: 1,
    name: "Leadership & Management",
    skills: [
      { name: "Team Leadership", level: 95 },
      { name: "Agile Transformation", level: 90 },
      { name: "Mentoring", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "M&A Technical Integration", level: 85 }
    ]
  },
  {
    id: 2,
    name: "Quality Engineering & Automation",
    skills: [
      { name: "AI-Driven Test Automation", level: 95 },
      { name: "Microservices Testing", level: 90 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Test-Driven Development", level: 85 },
      { name: "Performance Testing", level: 85 }
    ]
  },
  {
    id: 3,
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Infrastructure Monitoring", level: 80 },
      { name: "Cloud-Based QA", level: 90 }
    ]
  },
  {
    id: 4,
    name: "Technical Skills",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "AI/ML Model Validation", level: 85 },
      { name: "Data Analysis", level: 85 },
      { name: "Compliance & Risk Management", level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Professional Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsCategories.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
