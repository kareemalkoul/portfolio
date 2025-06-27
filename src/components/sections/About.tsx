/* eslint-disable react/no-unescaped-entities */
import { Code2, Cpu, Globe, Terminal, TrendingUp, Users, Zap } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Backend Development",
    description: "Creating robust and efficient RESTful APIs with Node.js, NestJS, and microservices architecture",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Full Stack Development",
    description: "Building end-to-end solutions with modern technologies like React, Next.js, and TypeScript",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Robust Systems",
    description: "Building scalable and maintainable systems with clean architecture and best practices",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "DevOps & Infrastructure",
    description: "Implementing CI/CD pipelines, containerization, and cloud deployments for seamless delivery",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and user experience",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Leadership",
    description: "Leading development teams and mentoring junior developers with effective communication",
    color: "from-indigo-500 to-purple-500",
  },
];

const achievements = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "3+",
    label: "Years Experience",
    description: "Building enterprise-level applications"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    number: "10+",
    label: "Projects Delivered",
    description: "From startups to enterprise solutions"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "5+",
    label: "Technologies",
    description: "Mastered and actively using"
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="bg-muted/30 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that make a difference. 
            Let me share my journey and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Passionate <span className="text-primary font-semibold">MERN Stack Developer</span> with +3 years' experience in
                building scalable, maintainable web applications using MongoDB,
                Express.js, React, and Node.js.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Proficient in modern technologies within the MERN ecosystem,
                including <span className="text-primary font-semibold">TypeScript, Nest.js, Next.js, React.js and Node.js</span>.
                Demonstrated expertise in RESTful API design, CI/CD pipelines, and
                agile methodologies.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Staying at the forefront of technology by leveraging cutting-edge <span className="text-green-600 dark:text-green-400 font-semibold">AI tools </span>
                and emerging trends. Experienced in utilizing AI-powered development
                tools like <span className="text-green-600 dark:text-green-400 font-semibold">ChatGPT, Cursor AI, V0</span> and modern
                frameworks to accelerate development cycles while maintaining code
                quality.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                Passionate about <span className="text-primary font-semibold">knowledge sharing</span> and team development. 
                Regularly conduct technical sessions and workshops within my company to share 
                best practices, emerging technologies, and development methodologies with team members, 
                fostering a culture of continuous learning and collaboration.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                Seeking challenging opportunities to leverage my MERN stack
                expertise and contribute to innovative projects while implementing
                the latest industry best practices and technologies.
              </motion.p>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Let's Work Together
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-background/80 backdrop-blur-sm border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border pt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
