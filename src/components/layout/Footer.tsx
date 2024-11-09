import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:kareem@example.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <a href="#" className="text-2xl font-bold hover:text-primary transition-colors">
            KA
          </a>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              Designed & Built by Kareem Alkoul
            </p>
            <p>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 