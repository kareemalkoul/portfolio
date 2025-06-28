import { Code2, Users, Brain, MessagesSquare, Sparkles, Database } from "lucide-react";
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
  SiExpress,
  SiFastify,
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
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { AnimatedSection } from "../ui/animated-section";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      // Node.js and related technologies
      {
        name: "Nodejs",
        icon: <FaNodeJs className="w-4 h-4" />,
        link: "https://nodejs.org/",
      },
      {
        name: "Express",
        icon: <SiExpress className="w-4 h-4" />,
        link: "https://expressjs.com/",
      },
      {
        name: "Fastify",
        icon: <SiFastify className="w-4 h-4" />,
        link: "https://fastify.dev/",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4" />,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Nestjs",
        icon: <SiNestjs className="w-4 h-4" />,
        link: "https://nestjs.com/",
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="w-4 h-4" />,
        link: "https://www.prisma.io/",
      },
      {
        name: "Nextjs",
        icon: <SiNextdotjs className="w-4 h-4" />,
        link: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: <FaReact className="w-4 h-4" />,
        link: "https://reactjs.org/",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-4 h-4" />,
        link: "https://tailwindcss.com/",
      },

      // Other programming languages
      {
        name: "Golang",
        icon: <SiGo className="w-4 h-4" />,
        link: "https://golang.org/",
      },
      {
        name: "Python",
        icon: <FaPython className="w-4 h-4" />,
        link: "https://www.python.org/",
      },
      {
        name: "Stripe",
        icon: <SiStripe className="w-4 h-4" />,
        link: "https://stripe.com/",
      },
      { name: "PayTabs", link: "https://www.paytabs.com/" },
      { name: "Checkout", link: "https://www.checkout.com/" },

      // Databases & Message Queues
      {
        name: "Firebase",
        icon: <SiFirebase className="w-4 h-4" />,
        link: "https://firebase.google.com/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4" />,
        link: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4" />,
        link: "https://www.postgresql.org/",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-4 h-4" />,
        link: "https://www.mysql.com/",
      },
      {
        name: "Redis",
        icon: <SiRedis className="w-4 h-4" />,
        link: "https://redis.io/",
      },
      {
        name: "Kafka",
        icon: <SiApachekafka className="w-4 h-4" />,
        link: "https://kafka.apache.org/",
      },
      {
        name: "NATS-Streaming",
        icon: <SiNatsdotio className="w-4 h-4" />,
        link: "https://docs.nats.io/nats-streaming-concepts/intro",
      },

      // DevOps & Infrastructure
      {
        name: "Git",
        icon: <FaGitAlt className="w-4 h-4" />,
        link: "https://git-scm.com/",
      },
      {
        name: "GitLab/GitHub",
        icon: <FaGithub className="w-4 h-4" />,
        link: "https://about.gitlab.com/",
      },
      {
        name: "Linux",
        icon: <FaLinux className="w-4 h-4" />,
        link: "https://www.linux.org/",
      },
      {
        name: "Bash",
        icon: <SiGnubash className="w-4 h-4" />,
        link: "https://www.gnu.org/software/bash/",
      },
      {
        name: "Docker",
        icon: <FaDocker className="w-4 h-4" />,
        link: "https://www.docker.com/",
      },
      {
        name: "Nginx",
        icon: <SiNginx className="w-4 h-4" />,
        link: "https://nginx.org/",
      },
      {
        name: "GitLab CI/Runner",
        icon: <SiGitlab className="w-4 h-4" />,
        link: "https://docs.gitlab.com/runner/",
      },
      {
        name: "GitLab CI/CD",
        icon: <SiGitlab className="w-4 h-4" />,
        link: "https://docs.gitlab.com/ee/ci/",
      },
      {
        name: "Ansible",
        icon: <SiAnsible className="w-4 h-4" />,
        link: "https://www.ansible.com/",
      },
    ],
  },
  {
    title: "AI Skills",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      {
        name: "OpenAI API",
        icon: <Sparkles className="w-4 h-4" />,
        link: "https://openai.com/api/",
      },
      {
        name: "RAG",
        icon: <Database className="w-4 h-4" />,
        link: "https://www.pinecone.io/learn/retrieval-augmented-generation/",
      },
      {
        name: "LlamaIndex",
        icon: <Brain className="w-4 h-4" />,
        link: "https://www.llamaindex.ai/",
      },
      {
        name: "Prompt Engineering",
        icon: <MessagesSquare className="w-4 h-4" />,
        link: "https://platform.openai.com/docs/guides/prompt-engineering",
      },
      {
        name: "Agents",
        icon: <Brain className="w-4 h-4" />,
        link: "https://docs.anthropic.com/en/docs/build-with-claude/agents",
      },
      {
        name: "AI Tools",
        icon: <Sparkles className="w-4 h-4" />,
      },
      {
        name: "Cursor",
        icon: <Code2 className="w-4 h-4" />,
        link: "https://cursor.sh/",
      },
      {
        name: "Claude",
        icon: <MessagesSquare className="w-4 h-4" />,
        link: "https://claude.ai/",
      },
      {
        name: "IDE Agentics",
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        name: "MCP Server",
        icon: <Database className="w-4 h-4" />,
        link: "https://modelcontextprotocol.io/",
      },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "Team Leadership", icon: <FaUserTie className="w-4 h-4" /> },
      { name: "Communication", icon: <FaComments className="w-4 h-4" /> },
      { name: "Team Collaboration", icon: <FaUsers className="w-4 h-4" /> },
      { name: "Knowledge Sharing", icon: <Brain className="w-4 h-4" /> },
      { name: "Workshops", icon: <Users className="w-4 h-4" /> },
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
    <AnimatedSection id="skills" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of technologies and skills I&apos;ve mastered throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`group p-6 rounded-xl border bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden ${
                category.title === "AI Skills" ? "border-green-500/30 bg-green-500/5 hover:border-green-500/50 hover:shadow-green-500/10" : ""
              }`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                category.title === "AI Skills" 
                  ? "bg-gradient-to-br from-green-500/5 to-transparent" 
                  : "bg-gradient-to-br from-primary/5 to-transparent"
              }`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      category.title === "AI Skills" 
                        ? "bg-green-500/20 text-green-600" 
                        : "bg-primary/10 text-primary"
                    }`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className={`font-bold text-xl group-hover:text-primary transition-colors duration-300 ${
                    category.title === "AI Skills" ? "text-green-600 group-hover:text-green-500" : ""
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      {"link" in skill ? (
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:shadow-md ${
                            category.title === "AI Skills"
                              ? "bg-green-500/20 text-green-700 hover:bg-green-500/30 hover:text-green-600"
                              : "bg-primary/10 hover:bg-primary/20 hover:text-primary"
                          }`}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.icon}
                          </motion.div>
                          {skill.name}
                        </a>
                      ) : (
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-default ${
                          category.title === "AI Skills"
                            ? "bg-green-500/20 text-green-700"
                            : "bg-primary/10"
                        }`}>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.icon}
                          </motion.div>
                          {skill.name}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
