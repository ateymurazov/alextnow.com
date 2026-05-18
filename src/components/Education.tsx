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
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-eyebrow">04 — Credentials</div>
      <h2 className="section-title">Education &<br />Certifications.</h2>

      <div className="grid gap-8">
        {educationItems.map((item) => (
          <div key={item.id} className="card-elevated p-5 sm:p-8 hover-lift">
            <div className="flex items-start gap-4 sm:gap-6">
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
                    <GraduationCap className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>

                  <div className="text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                      Degree
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
