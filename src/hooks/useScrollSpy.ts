"use client";

import { useEffect, useState } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") || "";
            setActiveSection(id);
            // Update URL without causing a page reload
            window.history.pushState(
              {},
              "",
              id ? `#${id}` : window.location.pathname
            );
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
