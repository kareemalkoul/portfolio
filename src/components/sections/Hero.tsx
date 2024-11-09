"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";
import { FadeText } from "@/components/ui/fade-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/kareemalkoul",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/kareem-alkoul/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:kareemalkoul1986@gmail.com",
    label: "Email",
  },
];

export function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      // Adjust for header height
      setTimeout(() => {
        window.scrollBy({
          top: -80, // Adjust this value based on your header height
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono mb-4"
        >
          Hi there, I&apos;m
        </motion.div>

        {/* Name */}
        <BlurIn
          word="Kareem Alkoul"
          className="text-4xl md:text-7xl font-bold mb-4"
        />

        {/* Role */}
        <FadeText
          text="Software Engineer & Full Stack Developer"
          className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
        />

        {/* Description */}
        <AnimatedShinyText className="max-w-2xl mb-8 text-lg">
          Software Engineer with expertise in Full Stack Development and DevOps. 
          Passionate about building scalable web applications and microservices 
          using modern technologies like Nest.js, Next.js, React.js, Node.js, and Cloud platforms.
        </AnimatedShinyText>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border rounded-md hover:bg-primary/10 transition-colors"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={scrollToNextSection}
        className="absolute left-1/2 -translate-x-1/2 bottom-12 w-10 h-10 flex items-center justify-center cursor-pointer hover:text-primary transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
} 