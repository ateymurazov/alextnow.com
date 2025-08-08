import React from 'react';

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar-nav">
      <div className="mb-12">
        <h1 className="text-2xl font-light mb-2">Aleksandr</h1>
        <h1 className="text-2xl font-light mb-4">Teymurazov</h1>
        <p className="text-sm font-light opacity-80">Director of Quality Engineering</p>
      </div>
      
      <nav className="space-y-6">
        <button 
          onClick={() => scrollToSection('accomplishments')}
          className="block text-left nav-link"
        >
          Career Accomplishments
        </button>
        <button 
          onClick={() => scrollToSection('education')}
          className="block text-left nav-link"
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="block text-left nav-link"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('insight')}
          className="block text-left nav-link"
        >
          Insight
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="block text-left nav-link"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;