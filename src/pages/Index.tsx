
import React from "react";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Accomplishments from "@/components/Accomplishments";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Insight from "@/components/Insight";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="content-with-sidebar">
        <Hero />
        <Accomplishments />
        <Education />
        <Experience />
        <Insight />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
