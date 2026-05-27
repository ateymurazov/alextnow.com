import React from 'react';

import { Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-foreground">Aleksandr Teymurazov</p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">
            © 2026 / QUALITY INTELLIGENCE LEADER / San Francisco Bay Area
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/blog"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://linkedin.com/in/ateymurazov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
