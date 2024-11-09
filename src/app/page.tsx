import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Building digital experiences that make a difference. Specialized in modern web technologies
            and scalable solutions.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
