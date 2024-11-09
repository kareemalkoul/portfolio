"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SiGitlab, SiStackoverflow } from "react-icons/si";
import BlurIn from "@/components/ui/blur-in";
import { FadeText } from "@/components/ui/fade-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Image from "next/image";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/kareemalkoul",
    label: "GitHub",
  },
  {
    icon: <SiGitlab className="w-5 h-5" />,
    href: "https://gitlab.com/kareem_alkoul",
    label: "GitLab",
  },
  {
    icon: <SiStackoverflow className="w-5 h-5" />,
    href: "https://stackoverflow.com/users/15849317/kareem-alkoul",
    label: "Stack Overflow",
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
      const headerHeight = 80; // Height of your fixed header
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Name */}
            <div className="md:max-w-xl md:pl-8 lg:pl-12">
              <BlurIn
                word="Kareem Alkoul"
                className="text-4xl md:text-7xl font-bold mb-4 inline-block"
              />

              {/* Role */}
              <FadeText
                text="Software Engineer & Full Stack Developer"
                className="text-2xl md:text-4xl font-bold text-muted-foreground mb-6"
              />

              {/* Description */}
              <AnimatedShinyText className="mb-8 text-lg">
                Software Engineer with expertise in Full Stack Development and DevOps. 
                Passionate about building scalable web applications and microservices 
                using modern technologies like Nest.js, Next.js, React.js, Node.js, and Cloud platforms.
              </AnimatedShinyText>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
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
              <div className="flex gap-4 justify-center md:justify-start">
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
          </div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 animate-rotate" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 transform transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/images/circle-personal-photo-2023.png"
                  alt="Kareem Alkoul"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>
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