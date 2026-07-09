import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import InView from "@/components/InView";

const Accomplishments = lazy(() => import("@/components/Accomplishments"));
const Education = lazy(() => import("@/components/Education"));
const Experience = lazy(() => import("@/components/Experience"));
const Principles = lazy(() => import("@/components/Principles"));
const Insight = lazy(() => import("@/components/Insight"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const Framework = lazy(() => import("@/components/Framework"));

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // wait for lazy sections to mount before scrolling
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Aleksandr Teymurazov | Quality Intelligence</title>
      </Helmet>
      <Sidebar />
      <main className="content-with-sidebar">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Accomplishments />
          <Principles />
          <Experience />
          <Framework />
          <InView id="insight">
            <Insight />
          </InView>
          <Education />
          <InView id="contact">
            <Contact />
          </InView>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
