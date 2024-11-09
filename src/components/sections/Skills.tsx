import { Code2, Users } from "lucide-react";
import {
    FaComments,
    FaDocker,
    FaGitAlt, FaGithub,
    FaNodeJs, FaPython, FaReact,
    FaTools, FaUsers, FaUserTie
} from "react-icons/fa";
import {
    SiAnsible,
    SiApachekafka,
    SiDiscord,
    SiGo,
    SiJenkins,
    SiJira,
    SiMongodb,
    SiMysql,
    SiNatsdotio,
    SiNestjs, SiNextdotjs,
    SiNginx,
    SiNotion,
    SiPostgresql,
    SiPrisma,
    SiRedis,
    SiTailwindcss,
    SiTrello,
    SiTypescript
} from "react-icons/si";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Nodejs", icon: <FaNodeJs className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
      { name: "Golang", icon: <SiGo className="w-4 h-4" /> },
      { name: "Python", icon: <FaPython className="w-4 h-4" /> },
      { name: "Nestjs", icon: <SiNestjs className="w-4 h-4" /> },
      { name: "Nextjs", icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: "React", icon: <FaReact className="w-4 h-4" /> },
      { name: "Twailand", icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: "Git", icon: <FaGitAlt className="w-4 h-4" /> },
      { name: "GitLab/GitHub", icon: <FaGithub className="w-4 h-4" /> },
      { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
      { name: "Nginx", icon: <SiNginx className="w-4 h-4" /> },
      { name: "CI/CD Tools", icon: <SiJenkins className="w-4 h-4" /> },
      { name: "Ansible", icon: <SiAnsible className="w-4 h-4" /> },
      { name: "Prisma", icon: <SiPrisma className="w-4 h-4" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4" /> },
      { name: "Kafka", icon: <SiApachekafka className="w-4 h-4" /> },
      { name: "NATS-Streaming", icon: <SiNatsdotio className="w-4 h-4" /> }
    ]
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
    ]
  }
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
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium hover:bg-primary/20 transition-colors flex items-center gap-2"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 