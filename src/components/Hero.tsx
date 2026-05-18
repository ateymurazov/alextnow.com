import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen overflow-hidden mesh-bg grain pt-24 lg:pt-0">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-5xl animate-blur-in">
          <div className="section-eyebrow">
            <Sparkles className="h-3 w-3" />
            Quality Engineering Leader
          </div>

          <h1 className="text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.95] tracking-tight text-foreground mb-8">
            Building software<br />
            teams that <span className="gradient-text italic font-medium">ship</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            I'm <span className="text-foreground font-medium">Aleksandr Teymurazov</span> — a Director of Quality
            Engineering with 25+ years transforming how teams build, test, and deliver software at scale across
            Shutterfly, Deluxe, Oracle, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollTo('experience')}
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 rounded-full h-14 px-8 text-base"
            >
              Explore my work
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button
              onClick={() => scrollTo('contact')}
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-foreground/20 hover:bg-foreground/5"
            >
              Let's talk
            </Button>
          </div>

          {/* stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              { k: '25+', v: 'Years leading eng' },
              { k: '200+', v: 'Engineers led' },
              { k: '50%', v: 'Defect reduction' },
              { k: '$15M+', v: 'Revenue impact' },
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4">
                <div className="text-3xl font-semibold text-foreground tracking-tight">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-mono">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollTo('accomplishments')}
          className="absolute bottom-10 right-10 hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
