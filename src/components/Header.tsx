
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-xl font-bold text-primary">
              Aleksandr Teymurazov
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={toggleMobileMenu}
              className="rounded-md p-2 inline-flex items-center justify-center"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="outline" className="ml-8">
              <a href="/Aleksandr_Teymurazov_Resume.pdf" download className="flex items-center">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#" className="text-xl font-bold text-primary">
                    Aleksandr Teymurazov
                  </a>
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost"
                    onClick={toggleMobileMenu}
                    className="rounded-md p-2 inline-flex items-center justify-center"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#about" className="nav-link -m-3 p-3 flex items-center rounded-md" onClick={toggleMobileMenu}>
                    About
                  </a>
                  <a href="#experience" className="nav-link -m-3 p-3 flex items-center rounded-md" onClick={toggleMobileMenu}>
                    Experience
                  </a>
                  <a href="#skills" className="nav-link -m-3 p-3 flex items-center rounded-md" onClick={toggleMobileMenu}>
                    Skills
                  </a>
                  <a href="#contact" className="nav-link -m-3 p-3 flex items-center rounded-md" onClick={toggleMobileMenu}>
                    Contact
                  </a>
                </nav>
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="w-full">
                  <a href="/Aleksandr_Teymurazov_Resume.pdf" download className="flex items-center justify-center">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
