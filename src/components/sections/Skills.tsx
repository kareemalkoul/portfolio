import { Code2, Users } from "lucide-react";
import {
    FaComments,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaLinux,
    FaNodeJs,
    FaPython,
    FaReact,
    FaTools,
    FaUsers,
    FaUserTie,
} from "react-icons/fa";
import {
    SiAnsible,
    SiApachekafka,
    SiDiscord,
    SiGitlab,
    SiGnubash,
    SiGo,
    SiJira,
    SiMongodb,
    SiMysql,
    SiNatsdotio,
    SiNestjs,
    SiNextdotjs,
    SiNginx,
    SiNotion,
    SiPostgresql,
    SiPrisma,
    SiRedis,
    SiStripe,
    SiTailwindcss,
    SiTrello,
    SiTypescript
} from "react-icons/si";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      // Node.js and related technologies
      { name: "Nodejs", icon: <FaNodeJs className="w-4 h-4" />, link: "https://nodejs.org/" },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, link: "https://www.typescriptlang.org/" },
      { name: "Nestjs", icon: <SiNestjs className="w-4 h-4" />, link: "https://nestjs.com/" },
      { name: "Prisma", icon: <SiPrisma className="w-4 h-4" />, link: "https://www.prisma.io/" },
      { name: "Nextjs", icon: <SiNextdotjs className="w-4 h-4" />, link: "https://nextjs.org/" },
      { name: "React", icon: <FaReact className="w-4 h-4" />, link: "https://reactjs.org/" },
      { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" />, link: "https://tailwindcss.com/" },

      // Other programming languages
      { name: "Golang", icon: <SiGo className="w-4 h-4" />, link: "https://golang.org/" },
      { name: "Python", icon: <FaPython className="w-4 h-4" />, link: "https://www.python.org/" },
      { name: "Stripe", icon: <SiStripe className="w-4 h-4" />, link: "https://stripe.com/" },
      { name: "PayTabs", link: "https://www.paytabs.com/" },
      { name: "Checkout", link: "https://www.checkout.com/" },

      // Linux and Shell

      // DevOps & Infrastructure
      { name: "Git", icon: <FaGitAlt className="w-4 h-4" />, link: "https://git-scm.com/" },
      { name: "GitLab/GitHub", icon: <FaGithub className="w-4 h-4" />, link: "https://about.gitlab.com/" },
      { name: "Linux", icon: <FaLinux className="w-4 h-4" />, link: "https://www.linux.org/" },
      { name: "Bash", icon: <SiGnubash className="w-4 h-4" />, link: "https://www.gnu.org/software/bash/" },
      { name: "Docker", icon: <FaDocker className="w-4 h-4" />, link: "https://www.docker.com/" },
      { name: "Nginx", icon: <SiNginx className="w-4 h-4" />, link: "https://nginx.org/" },
      { name: "GitLab CI/Runner", icon: <SiGitlab className="w-4 h-4" />, link: "https://docs.gitlab.com/runner/" },
      { name: "GitLab CI/CD", icon: <SiGitlab className="w-4 h-4" />, link: "https://docs.gitlab.com/ee/ci/" },
      { name: "Ansible", icon: <SiAnsible className="w-4 h-4" />, link: "https://www.ansible.com/" },

      // Databases & Message Queues
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" />, link: "https://www.mongodb.com/" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" />, link: "https://www.postgresql.org/" },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4" />, link: "https://www.mysql.com/" },
      { name: "Redis", icon: <SiRedis className="w-4 h-4" />, link: "https://redis.io/" },
      { name: "Kafka", icon: <SiApachekafka className="w-4 h-4" />, link: "https://kafka.apache.org/" },
      { name: "NATS-Streaming", icon: <SiNatsdotio className="w-4 h-4" />, link: "https://docs.nats.io/nats-streaming-concepts/intro" },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "Team Leadership", icon: <FaUserTie className="w-4 h-4" /> },
      { name: "Communication", icon: <FaComments className="w-4 h-4" /> },
      { name: "Team Collaboration", icon: <FaUsers className="w-4 h-4" /> },
      { name: "Tools Management", icon: <FaTools className="w-4 h-4" /> },
      { name: "Jira", icon: <SiJira className="w-4 h-4" /> },
      { name: "Trello", icon: <SiTrello className="w-4 h-4" /> },
      { name: "Discord", icon: <SiDiscord className="w-4 h-4" /> },
      { name: "Notion", icon: <SiNotion className="w-4 h-4" /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border bg-card hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  'link' in skill ? (
                    <a
                      key={skillIdx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      {skill.icon}
                      {skill.name}
                    </a>
                  ) : (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
