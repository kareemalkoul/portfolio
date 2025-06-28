"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "volunteer", label: "Volunteer" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page (within 100px), always show contact
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }
      
      let currentSection = "hero";
      
      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // A section is active if its top is above the middle of the screen
          // and its bottom is below the middle of the screen
          if (elementTop <= windowHeight / 2 && elementBottom >= windowHeight / 2) {
            currentSection = id;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0% -40% 0%",
      threshold: 0,
    };

    const observerCallback = () => {
      updateActiveSection();
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Also listen to scroll events as backup
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    
    // Initial check
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-background/80 backdrop-blur-md border rounded-2xl p-2 shadow-lg">
        {sections.map(({ id, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`
              relative block w-full text-left px-4 py-2 text-sm rounded-xl transition-all duration-300
              ${activeSection === id 
                ? 'text-primary bg-primary/10' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }
            `}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === id ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                animate={{
                  scale: activeSection === id ? 1.2 : 1,
                }}
              />
              <span className="whitespace-nowrap">{label}</span>
            </div>
            
            {activeSection === id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-primary/5 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 