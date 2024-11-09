"use client"
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Volunteer } from "@/components/sections/Volunteer";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Home() {
  useScrollSpy();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}
