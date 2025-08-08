
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-muted/30">
      <h2 className="section-title">Contact</h2>
      
      <div className="max-w-2xl">
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          If you are looking for a quality engineering leader to scale and elevate your engineering 
          organization, let's talk! Feel free to reach out via email or connect with me on LinkedIn.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-foreground" />
            <a 
              href="mailto:ateymurazov@gmail.com" 
              className="text-lg text-foreground hover:text-muted-foreground transition-colors"
            >
              ateymurazov@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Linkedin className="h-5 w-5 text-foreground" />
            <a 
              href="https://linkedin.com/in/ateymurazov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg text-foreground hover:text-muted-foreground transition-colors"
            >
              linkedin.com/in/ateymurazov
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
