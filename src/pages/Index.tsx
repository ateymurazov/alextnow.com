
import React from "react";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="content-with-sidebar">
        <Hero />
        <Principles />
        <Accomplishments />
        <Experience />
        <Insight />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
