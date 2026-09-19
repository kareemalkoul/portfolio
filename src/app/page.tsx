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
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ParticleField } from "@/components/ui/particle-field";

export default function Home() {
  useScrollSpy();

  return (
    <div className="min-h-screen relative">
      <ParticleField particleCount={30} className="opacity-30 dark:opacity-20" />
      <ScrollProgress />
      <FloatingNav />

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Volunteer />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
