import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      institution: "San Francisco State University",
      degree: "BS Computer Information Systems",
      period: "1995 - 2003",
      abbreviation: "SFSU",
      type: "degree",
      description: "Comprehensive foundation in computer science, information systems, and business processes."
    },
    {
      id: 2,
      institution: "Scrum Alliance",
      degree: "Certified Scrum Master",
      period: "2020",
      abbreviation: "CSM",
      type: "certification",
      certId: "001100272",
      description: "Advanced training in agile methodologies, team facilitation, and sprint management."
    },
    {
      id: 3,
      institution: "International Institute for Software Testing",
      degree: "Certified Software Test Professional (CSTP)",
      period: "2004",
      abbreviation: "IIST",
      type: "certification",
      description: "Specialized certification in comprehensive software testing methodologies and best practices."
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-eyebrow">02 — Credentials</div>
      <h2 className="section-title">Education &<br />Certifications.</h2>
      
      <div className="grid gap-8">
        {educationItems.map((item) => (
          <div key={item.id} className="card-elevated p-8 hover-lift">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-sm">{item.abbreviation}</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.institution}</h3>
                    <p className="text-lg font-medium text-primary mb-2">{item.degree}</p>
                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    {item.type === 'degree' ? (
                      <GraduationCap className="h-4 w-4" />
                    ) : (
                      <Award className="h-4 w-4" />
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  
                  {item.certId && (
                    <div className="text-sm text-muted-foreground">
                      <span className="bg-secondary px-3 py-1 rounded-full">
                        ID: {item.certId}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      item.type === 'degree' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {item.type === 'degree' ? 'Degree' : 'Certification'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;