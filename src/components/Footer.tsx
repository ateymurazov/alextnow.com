import React from 'react';
import { Linkedin, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative mt-24 border-t border-border/60">
      {/* Atmospheric transition */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-background" />
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
        {/* Closing statement */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.24em] text-accent mb-4">
            Closing note
          </p>
          <p className="text-2xl md:text-3xl font-heading font-medium text-foreground leading-tight tracking-tight">
            Engineering excellence is built deliberately —
            <span className="text-muted-foreground"> one decision, one system, one team at a time.</span>
          </p>
        </div>

        {/* Meta row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-10 border-t border-border/60">
          <div>
            <p className="font-heading font-semibold text-foreground text-lg">Aleksandr Teymurazov</p>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em] mt-2">
              © 2026 / Engineering Quality &amp; Delivery Leader
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="mailto:ateymurazov@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
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
              className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              Back to top
              <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
