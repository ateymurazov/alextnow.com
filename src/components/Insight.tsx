import React from 'react';

const Insight = () => {
  return (
    <section id="insight" className="section-container">
      <h2 className="section-title">Insight</h2>
      
      <div className="prose prose-lg max-w-none text-foreground">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-4">The Evolution of Quality Engineering</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The traditional QA role is rapidly evolving. Today's quality engineers must be strategic partners, 
              not just testers. They need to understand the business impact of quality decisions, implement 
              AI-driven testing strategies, and lead cross-functional initiatives that prevent defects rather 
              than just finding them. The future belongs to quality leaders who can bridge technical execution 
              with business outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">M&A Integration: The Hidden Technology Challenge</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Most M&A deals focus on financial synergies but underestimate technology integration complexity. 
              Having led multiple post-acquisition technology unifications, I've learned that success requires 
              immediate cultural alignment, standardized toolchains, and clear migration roadmaps. The companies 
              that move fast on technical integration realize value faster and avoid the productivity losses 
              that can derail deal economics.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">AI in Engineering: Beyond the Hype</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI isn't just about code generation—it's about augmenting human decision-making. In quality 
              engineering, AI shines in test case prioritization, risk assessment, and anomaly detection. 
              But the real value comes from AI systems that learn from your specific codebase and failure 
              patterns, creating feedback loops that continuously improve both product quality and team 
              productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;