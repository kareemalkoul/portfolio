import { Code2, Terminal, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Full Stack Development",
    description: "Building end-to-end solutions with modern technologies"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "API Design",
    description: "Creating robust and efficient RESTful APIs"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "DevOps",
    description: "Implementing CI/CD pipelines and containerization"
  }
];

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate FullStack Developer with +3 years' experience in building scalable, maintainable web
              applications and back-end systems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Proficient in modern technologies such as Node.js, React, TypeScript,
              and NestJS. Demonstrated expertise in API design, CI/CD pipelines, containerization, and agile
              methodologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Seeking challenging opportunities to leverage my technical skills and contribute to
              innovative projects.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-background border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 