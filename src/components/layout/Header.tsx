"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Code2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Volunteer", href: "#volunteer" },
  { name: "Contact", href: "#contact" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    const headerOffset = 80; // Height of your fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Update the URL in the address bar
    window.history.pushState(null, '', href);
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bold text-xl hover:text-primary transition-colors flex items-center gap-2 group"
        >
          <Code2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono">Kareem Alkoul</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="relative text-foreground/70 hover:text-foreground transition-colors group flex items-center gap-1"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 bg-background/80 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "top-16 opacity-100 visible"
            : "-top-full opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                scrollToSection(e, item.href);
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors flex items-center gap-2"
            >
              {item.name}
            </a>
          ))}
          <div className="px-4 py-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 