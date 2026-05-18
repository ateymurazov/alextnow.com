import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import headshot from '@/assets/aleksandr-headshot.jpg';

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen overflow-hidden mesh-bg grain pt-24 lg:pt-0">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          {/* Text */}
          <div className="lg:col-span-6 animate-blur-in order-2 lg:order-1">
            <div className="section-eyebrow">
              <Sparkles className="h-3 w-3" />
              Quality Engineering Leader
            </div>

            <h1 className="text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-foreground mb-8">
              Building software<br />
              teams that <span className="gradient-text italic font-medium">ship</span>.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
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

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: '25+', v: 'Years leading eng' },
                { k: '200+', v: 'Engineers led' },
                { k: '50%', v: 'Defect reduction' },
                { k: '$15M+', v: 'Revenue impact' },
              ].map((s) => (
                <div key={s.v} className="border-l border-border pl-4">
                  <div className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">{s.k}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider font-mono">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-6 order-1 lg:order-2 animate-fade-in">
            <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/25 via-transparent to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-glow bg-card">
                <img
                  src={headshot}
                  alt="Aleksandr Teymurazov — Director of Quality Engineering"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo('accomplishments')}
          className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
