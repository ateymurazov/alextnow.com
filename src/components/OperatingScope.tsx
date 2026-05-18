import React from 'react';
import { Globe, Users, Building2, Cog } from 'lucide-react';

const items = [
  {
    icon: Globe,
    label: 'Geographic reach',
    body: 'Global engineering orgs across US, Canada, Europe, and India.',
  },
  {
    icon: Users,
    label: 'Org scale',
    body: '120+ direct QE organization · 200+ engineers across delivery.',
  },
  {
    icon: Building2,
    label: 'Domains',
    body: 'Enterprise SaaS, commerce, and regulated platforms.',
  },
  {
    icon: Cog,
    label: 'Focus areas',
    body: 'CI/CD modernization, AI-enabled quality systems, and M&A integration.',
  },
];

const OperatingScope = () => {
  return (
    <div className="mb-16">
      <div className="section-eyebrow mb-4">Operating Scope</div>
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
        Where I operate, and at what scale.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="card-elevated p-5 hover-lift">
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {item.label}
              </div>
              <p className="text-sm text-foreground leading-relaxed">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OperatingScope;
