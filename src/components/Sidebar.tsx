import React from 'react';
import { Briefcase, GraduationCap, Trophy, Lightbulb, Mail } from 'lucide-react';

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'accomplishments', label: 'Accomplishments', icon: Trophy },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'insight', label: 'Insight', icon: Lightbulb },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="sidebar-nav">
      <div className="mb-16">
        <div className="space-y-2 mb-6">
          <h1 className="text-2xl font-bold text-foreground">Aleksandr</h1>
          <h1 className="text-2xl font-bold text-foreground">Teymurazov</h1>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">Director of Quality Engineering</p>
          <p className="text-xs text-muted-foreground">Transforming engineering organizations</p>
        </div>
      </div>
      
      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center space-x-3 nav-link w-full p-3 rounded-lg hover:bg-accent/50 transition-all duration-300"
            >
              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-8 left-8 right-8">
        <div className="text-xs text-muted-foreground space-y-1">
          <p>© 2024 Aleksandr Teymurazov</p>
          <p>Building the future of quality engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;