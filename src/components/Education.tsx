import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const items = [
    {
      type: 'degree' as const,
      institution: 'San Francisco State University',
      credential: 'BS, Computer Information Systems',
      period: '2003',
    },
    {
      type: 'certification' as const,
      institution: 'Scrum Alliance',
      credential: 'Certified Scrum Master',
      period: '2020',
    },
    {
      type: 'certification' as const,
      institution: 'International Institute for Software Testing',
      credential: 'Certified Software Test Professional (CSTP)',
      period: '2004',
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-eyebrow">04 — Credentials</div>
      <h2 className="section-title text-2xl sm:text-3xl">Education & certifications.</h2>

      <div className="card-elevated divide-y divide-border">
        {items.map((item) => {
          const Icon = item.type === 'degree' ? GraduationCap : Award;
          return (
            <div
              key={item.credential}
              className="flex items-center gap-4 px-5 sm:px-6 py-4"
            >
              <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-medium text-foreground truncate">
                  {item.credential}
                </p>
                <p className="text-xs text-muted-foreground truncate">{item.institution}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground tabular-nums">
                {item.period}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
