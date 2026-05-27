
import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Accomplishments from "@/components/Accomplishments";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Principles from "@/components/Principles";
import Insight from "@/components/Insight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OperatingScope from "@/components/OperatingScope";
import Framework from "@/components/Framework";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://alextnow.com/" />
      </Helmet>
      <Sidebar />
      <main className="content-with-sidebar">
        <Hero />
        <Accomplishments />
        <Principles />
        <section className="section-container">
          <div className="card-elevated p-8 md:p-10 bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-foreground">
                Modern software delivery depends on trusted quality systems.
              </p>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                Specializing in CI/CD modernization, Quality Intelligence, release governance, and post M&amp;A engineering integration.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/ateymurazov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border/60 bg-background/40 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-background/60 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border/60 bg-background/40 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-background/60 transition-all"
              >
                Contact
              </a>
              <a
                href="#insight"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('insight')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border/60 bg-background/40 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-background/60 transition-all"
              >
                Insights
              </a>
            </div>
          </div>
        </section>
        <Experience />
        <Framework />
        <Insight />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
