
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              <span className="block">Hi, I'm Aleksandr Teymurazov</span>
              <span className="block text-primary">Technology & Quality Engineering Leader</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-8">
              My journey from Quality Assurance Engineer to Executive Leadership spans over 20 years, 
              specializing in building automation frameworks, integrating engineering teams through M&A, 
              leading globally distributed teams, and implementing AI-driven methodologies that transform 
              organizations and drive business growth.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#experience">View my work</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-96 w-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/lovable-uploads/8ee80040-e5b2-47fb-88f7-a7cd86f740dc.png"
                alt="Aleksandr Teymurazov"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
