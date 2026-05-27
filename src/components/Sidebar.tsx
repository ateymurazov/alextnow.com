import React, { useEffect, useState } from 'react';

import { Briefcase, GraduationCap, Trophy, Lightbulb, Mail, Menu, X, Linkedin, Compass, Cpu } from 'lucide-react';

const menuItems = [
  { id: 'accomplishments', label: 'Accomplishments', icon: Trophy, num: '01' },
  { id: 'principles', label: 'Principles', icon: Compass, num: '02' },
  { id: 'experience', label: 'Experience', icon: Briefcase, num: '03' },
  { id: 'framework', label: 'Framework', icon: Cpu, num: '04' },
  { id: 'insight', label: 'Insight', icon: Lightbulb, num: '05' },
  { id: 'education', label: 'Education', icon: GraduationCap, num: '06' },
  { id: 'contact', label: 'Contact', icon: Mail, num: '07' },
];

const Sidebar = () => {
  const [active, setActive] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offsets = menuItems
        .map((m) => {
          const el = document.getElementById(m.id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top;
          return { id: m.id, top };
        })
        .filter(Boolean) as { id: string; top: number }[];
      const current = offsets
        .filter((o) => o.top < window.innerHeight * 0.4)
        .pop();
      setActive(current?.id ?? '');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const NavList = () => (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group flex items-center gap-4 w-full px-3 py-3 rounded-xl transition-all duration-300 ${
              isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            }`}
          >
            <span className={`font-mono text-[10px] tracking-wider transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground/60'}`}>
              {item.num}
            </span>
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{item.label}</span>
            {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">Aleksandr Teymurazov</p>
            <p className="text-[11px] text-muted-foreground">EQUALITY INTELLIGENCE LEADER</p>
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="px-5 pb-5 border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="pt-4">
              <NavList />
            </div>
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="sidebar-nav">
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center font-mono text-sm font-bold">
              AT
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Portfolio / 2026</span>
          </div>
          <h1 className="text-2xl font-semibold text-foreground leading-tight">
            Aleksandr<br />Teymurazov
          </h1>
          <div className="mt-4 space-y-1">
            <p className="text-sm font-medium text-foreground">Building Trusted Software Delivery Systems</p>
            <p className="text-xs text-muted-foreground">Enterprise Quality Intelligence.</p>
          </div>
        </div>

        <NavList />

        <div className="mt-auto pt-8 border-t border-border space-y-3">
          <a
            href="https://linkedin.com/in/ateymurazov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            linkedin.com/in/ateymurazov
          </a>
          <a
            href="mailto:ateymurazov@gmail.com"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            Email me
          </a>
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 pt-2">
            © 2026 Aleksandr Teymurazov
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
