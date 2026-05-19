import React from 'react';
import { Mail, Linkedin, FileDown, MapPin } from 'lucide-react';

const Contact = () => {
  const actions = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ateymurazov',
      icon: Linkedin,
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:ateymurazov@gmail.com',
      icon: Mail,
      external: false,
    },
    {
      label: 'Resume',
      href: '/Aleksandr_Teymurazov_Resume.pdf',
      icon: FileDown,
      external: false,
      download: true,
    },
  ];

  return (
    <section id="contact" className="relative section-container">
      <div className="section-eyebrow">06 / Contact</div>

      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.05]">
          Let's build better<br />engineering organizations.
        </h2>

        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Focused on engineering transformation, delivery systems, AI-enabled quality,
          and operational scale.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {actions.map(({ label, href, icon: Icon, external, download }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(download ? { download: true } : {})}
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-accent/60 hover:text-accent hover:bg-accent/[0.04]"
            >
              <Icon className="h-4 w-4 transition-colors duration-300 text-muted-foreground group-hover:text-accent" />
              {label}
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
          <MapPin className="h-3 w-3" />
          San Francisco Bay Area
        </div>
      </div>
    </section>
  );
};

export default Contact;
