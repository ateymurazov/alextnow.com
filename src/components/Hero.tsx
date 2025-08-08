
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = () => {
    const element = document.getElementById('accomplishments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/8ee80040-e5b2-47fb-88f7-a7cd86f740dc.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-end justify-center pb-20">
        <div className="text-center text-white">
          <h1 className="text-3xl font-light mb-4 tracking-wide">SAY HELLO TO ALEKSANDR</h1>
          <button 
            onClick={scrollToSection}
            className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-white transition-colors"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
