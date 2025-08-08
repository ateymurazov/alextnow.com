import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-container bg-muted/30">
      <h2 className="section-title">Education</h2>
      
      <div className="space-y-12">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">SFSU</span>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">San Francisco State University</h3>
            <p className="text-lg text-muted-foreground mb-1">BS Computer Information Systems</p>
            <p className="text-sm text-muted-foreground">1995 - 2003</p>
          </div>
        </div>

        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-xs">CSM</span>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Scrum Alliance</h3>
            <p className="text-lg text-muted-foreground mb-1">Certified Scrum Master</p>
            <p className="text-sm text-muted-foreground">Certificate ID: 001100272 | 2020</p>
          </div>
        </div>

        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-xs">IIST</span>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">International Institute for Software Testing</h3>
            <p className="text-lg text-muted-foreground mb-1">Certified Software Test Professional (CSTP)</p>
            <p className="text-sm text-muted-foreground">2004</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;