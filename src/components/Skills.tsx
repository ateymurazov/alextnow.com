
import React from 'react';

const skillsCategories = [
  {
    id: 1,
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Redux", level: 80 },
      { name: "Next.js", level: 75 }
    ]
  },
  {
    id: 2,
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "PostgreSQL", level: 75 }
    ]
  },
  {
    id: 3,
    name: "DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 75 }
    ]
  },
  {
    id: 4,
    name: "Soft Skills",
    skills: [
      { name: "Team Leadership", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Mentoring", level: 80 },
      { name: "Project Management", level: 75 }
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
