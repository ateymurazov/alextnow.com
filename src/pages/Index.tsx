import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";

const Accomplishments = lazy(() => import("@/components/Accomplishments"));
const Education = lazy(() => import("@/components/Education"));
const Experience = lazy(() => import("@/components/Experience"));
const Principles = lazy(() => import("@/components/Principles"));
const Insight = lazy(() => import("@/components/Insight"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const Framework = lazy(() => import("@/components/Framework"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Aleksandr Teymurazov | Quality Intelligence</title>
        <link rel="canonical" href="https://alextnow.com/" />
      </Helmet>
      <Sidebar />
      <main className="content-with-sidebar">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Accomplishments />
          <Principles />
          <Experience />
          <Framework />
          <Insight />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
