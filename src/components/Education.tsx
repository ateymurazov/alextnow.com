import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="section-eyebrow">06 / Credentials</div>
      <h2 className="section-title">Education &<br />Certifications.</h2>

      <div className="card-elevated p-6 sm:p-8 hover-lift">
        <div className="flex items-center gap-5 sm:gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-sm">SFSU</span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              San Francisco State University
            </h3>
            <p className="text-base text-primary font-medium mt-1">
              BS, Computer Information Systems
            </p>
          </div>

          <GraduationCap className="hidden sm:block h-5 w-5 text-muted-foreground flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default Education;
