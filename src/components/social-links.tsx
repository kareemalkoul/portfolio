import { Github, Linkedin, Mail } from "lucide-react";
import { SiGitlab, SiStackoverflow } from "react-icons/si";

export const socialLinks = [
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
