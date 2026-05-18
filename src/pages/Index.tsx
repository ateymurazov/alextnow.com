
import React from "react";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Accomplishments from "@/components/Accomplishments";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Insight from "@/components/Insight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="content-with-sidebar">
        <Hero />
        <Accomplishments />
        <Education />
        <Experience />
        <Insight />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
