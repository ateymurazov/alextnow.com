
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              <span className="block">Hi, I'm John Doe</span>
              <span className="block text-primary">Senior Software Engineer</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-8">
              I build scalable web applications with modern technologies.
              Passionate about clean code, user experience, and solving complex problems.
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
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="John Doe"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
