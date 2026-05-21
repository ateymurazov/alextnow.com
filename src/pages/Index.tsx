
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
      <Sidebar />
      <main className="content-with-sidebar">
        <Hero />
        <Principles />
        <Accomplishments />
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
