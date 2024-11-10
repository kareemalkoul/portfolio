/* eslint-disable react/no-unescaped-entities */
import { Code2, Cpu, Globe, Terminal } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Backend Development",
    description: "Creating robust and efficient RESTful APIs",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Full Stack Development",
    description: "Building end-to-end solutions with modern technologies",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Robust Systems",
    description: "Building scalable and maintainable systems",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "DevOps",
    description:
      "Implementing CI/CD pipelines and containerization to automate deployments",
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="bg-muted/50 py-16">
      {/* <section className="min-h-screen flex flex-col justify-center items-center py-16"> */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate MERN Stack Developer with +3 years' experience in
              building scalable, maintainable web applications using MongoDB,
              Express.js, React, and Node.js.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Proficient in modern technologies within the MERN ecosystem,
              including TypeScript, Nest.js, Next.js, React.js and Node.js.
              Demonstrated expertise in RESTful API design, CI/CD pipelines, and
              agile methodologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Staying at the forefront of technology by leveraging cutting-edge AI tools 
              and emerging trends. Experienced in utilizing AI-powered development
              tools like ChatGPT, Cursor Ai , V0 and modern
              frameworks to accelerate development cycles while maintaining code
              quality.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Seeking challenging opportunities to leverage my MERN stack
              expertise and contribute to innovative projects while implementing
              the latest industry best practices and technologies.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-background border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* </section> */}
    </AnimatedSection>
  );
}
