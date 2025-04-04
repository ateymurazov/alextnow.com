
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            I'm currently open to new opportunities and would love to discuss how my skills and experience
            can benefit your team. Feel free to reach out via email or connect with me on LinkedIn.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <a 
                href="mailto:john.doe@example.com" 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                john.doe@example.com
              </a>
            </div>
            
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 text-primary mr-3" />
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                linkedin.com/in/johndoe
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <Button asChild>
              <a 
                href="mailto:john.doe@example.com"
                className="flex items-center"
              >
                Send me an email <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
