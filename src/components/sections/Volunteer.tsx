import { Users, School } from "lucide-react";

const volunteerExperiences = [
  {
    icon: <Users className="w-6 h-6" />,
    organization: "RBCs Team",
    role: "Team Leader",
    period: "Sep 2020 – Jun 2023",
    description: "Directed a team in organizing university lecture content to improve educational quality and accessibility at RBCs Team (rbcsteam.org). Developed strategic plans for content improvement, provided mentorship to team members, and managed project timelines and resources to meet deadlines."
  },
  {
    icon: <School className="w-6 h-6" />,
    organization: "RBCs Team",
    role: "Content Writer",
    period: "Sep 2022 – Jun 2023",
    description: "Created and refined lecture content for RBCs Team's educational platform, enhancing clarity and engagement through thorough research. Collaborated with team members and experts to develop high-quality educational materials while maintaining best practices and content standards."
  }
];

export function Volunteer() {
  return (
    <section id="volunteer" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Volunteer Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {volunteerExperiences.map((experience, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border bg-card hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {experience.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    <a 
                      href="https://rbcsteam.org" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-primary transition-colors"
                    >
                      {experience.organization}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">{experience.role} • {experience.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 