
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
          <div className="card-elevated p-8 md:p-10 bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-lg md:text-xl leading-relaxed font-medium text-foreground max-w-3xl">
              Looking for an operating executive who can modernize delivery, unify post-M&amp;A engineering orgs, and embed AI-driven quality at enterprise scale? Let's talk.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors whitespace-nowrap"
            >
              Let's talk
            </a>
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
