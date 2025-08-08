
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6 animate-fade-in">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">ALEKSANDR</span>
                <span className="block text-white/90">TEYMURAZOV</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
                Director of Quality Engineering transforming how teams build, test, and deliver software at scale
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                onClick={scrollToSection}
                size="lg"
                className="glass-effect text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
                variant="outline"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToSection}
          className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white/60 transition-all duration-300 hover:bg-white/10"
        >
          <ChevronDown className="h-5 w-5 text-white/80" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
