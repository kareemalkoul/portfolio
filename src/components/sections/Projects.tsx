import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FaTools, FaUsers, FaUserTie } from "react-icons/fa";
import {
  SiAndroid,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiGo,
  SiJetpackcompose,
  SiMongodb,
  SiMysql,
  SiNatsdotio,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiStripe,
  SiSwagger,
  SiTensorflow,
} from "react-icons/si";
import ImageFallback from "../img";
import { AnimatedSection } from "../ui/animated-section";

interface ProjectLinks {
  github?: string;
  live?: string;
  linkedin?: string;
  facebook?: string;
}

interface Tag {
  name: string;
  icon?: JSX.Element;
}

interface Project {
  role: string;
  title: string;
  description: string;
  images: string[];
  tags: Tag[];
  links?: ProjectLinks;
  softSkills?: Tag[];
}

const projects: Project[] = [
  {
    title: "Optimal",
    description:
      "Built an e-commerce platform for mom and baby products, featuring an interactive learning system with reels, blogs, and a user-friendly dashboard for management. Focused on enhancing UX/UI for community engagement.",
    images: [
      "/images/optimal/optimal-1.png",
      //  "/images/optimal/optimal-2.png"
    ],
    tags: [
      { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" /> },
      { name: "ReactJS", icon: <SiReact className="w-3 h-3" /> },
      { name: "NestJS", icon: <SiNestjs className="w-3 h-3" /> },
      { name: "Fastify", icon: <SiFastify className="w-3 h-3" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-3 h-3" /> },
      { name: "Prisma", icon: <SiPrisma className="w-3 h-3" /> },
      { name: "Swagger", icon: <SiSwagger className="w-3 h-3" /> },
      { name: "FCM", icon: <SiFirebase className="w-3 h-3" /> },
    ],
    role: "Full-Stack Developer",
    links: {
      live: "https://optimal.web.stage.brain-socket.com/",
    },
  },
  {
    title: "Handyman",
    description:
      "Created a booking system that allows users to schedule home repair services, with integrated payment processing via Stripe.",
    images: [
      "/images/handyman/handyman-1.png",
      // "/images/handyman/handyman-2.png",
    ],
    tags: [
      { name: "NestJS", icon: <SiNestjs className="w-3 h-3" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3 h-3" /> },
      { name: "Prisma", icon: <SiPrisma className="w-3 h-3" /> },
      { name: "Swagger", icon: <SiSwagger className="w-3 h-3" /> },
      { name: "Stripe", icon: <SiStripe className="w-3 h-3" /> },
    ],
    role: "Backend Developer",
  },
  {
    title: "Quantum",
    description:
      "Developed an interactive game for students, focusing on mathematics and mental math. The platform includes challenges, score tracking, and competitive features to encourage learning.",
    images: [
      "/images/quantum/quantum-1.png",
      "/images/quantum/quantum-2.png",
      "/images/quantum/quantum-3.png",
    ],
    tags: [
      { name: "Express", icon: <SiExpress className="w-3 h-3" /> },
      { name: "NestJS", icon: <SiNestjs className="w-3 h-3" /> },
      { name: "MySQL", icon: <SiMysql className="w-3 h-3" /> },
      { name: "Swagger", icon: <SiSwagger className="w-3 h-3" /> },
    ],
    role: "Backend Developer",
  },
  {
    title: "HR System",
    description:
      "Built an HR management system with employee activity tracking and comprehensive logging functionality.",
    images: [
      "/images/hr/hr-1.png",
      //  "/images/erp-hr/erp-hr-2.png"
    ],
    tags: [
      { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" /> },
      { name: "ReactJS", icon: <SiReact className="w-3 h-3" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-3 h-3" /> },
      { name: "Golang", icon: <SiGo className="w-3 h-3" /> },
      { name: "NATS", icon: <SiNatsdotio className="w-3 h-3" /> },
      { name: "Redis", icon: <SiRedis className="w-3 h-3" /> },
    ],
    role: "Full-Stack Developer",
  },
  {
    title: "GlobalF&B",
    description:
      "Designed a B2B e-commerce solution tailored to the food industry, supporting high-volume transactions and scalable architecture.",
    images: [
      "/images/globalfnb/globalfnb-1.png",
      // "/images/globalfnb/globalfnb-2.png",
    ],
    tags: [
      { name: "MongoDB", icon: <SiMongodb className="w-3 h-3" /> },
      { name: "Golang", icon: <SiGo className="w-3 h-3" /> },
      { name: "NATS", icon: <SiNatsdotio className="w-3 h-3" /> },
      { name: "Redis", icon: <SiRedis className="w-3 h-3" /> },
      { name: "Paytabs" },
    ],
    role: "Backend Developer",
    links: { live: "https://globalfandb.com/" },
  },

  {
    title: "Chambot",
    description:
      "Developed a customer service chatbot for answering queries, booking trips, and providing location-based assistance. An admin interface enables the update of intents, FAQs, and conversation flows.",
    images: ["/images/chambot/chambot-1.jpg"],
    tags: [
      { name: "Rasa", icon: <SiNextdotjs className="w-3 h-3" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="w-3 h-3" /> },
    ],
    role: "AI Engineer",
  },

  {
    title: "Cokids",
    description:
      "Led the development of a mobile platform to teach kids programming through interactive kits, incorporating educational design and team leadership.",
    images: [
      "/images/cokids/cokids-1.jpg",
      // "/images/cokids/cokids-2.png"
    ],
    tags: [
      { name: "Business acumen", icon: <FaUserTie className="w-3 h-3" /> },
      { name: "Decision-making", icon: <FaTools className="w-3 h-3" /> },
      { name: "Team management", icon: <FaUsers className="w-3 h-3" /> },
      { name: "Leadership", icon: <FaUserTie className="w-3 h-3" /> },
      { name: "Android", icon: <SiAndroid className="w-3 h-3" /> },
      {
        name: "Jetpack Compose",
        icon: <SiJetpackcompose className="w-3 h-3" />,
      },
    ],
    role: "Co-Fonder / Team Leader / AI Engineer",
    links: {
      linkedin: "https://www.linkedin.com/company/cokids-edu/",
      facebook: "https://www.facebook.com/cokids.edu",
    },
  },
];

const FALLBACK_IMAGE = "/images/project-placeholder.webp";
const SLIDE_INTERVAL = 3_000; // 3 seconds per slide

interface FullScreenModalProps {
  images: string[];
  title: string;
  onClose: () => void;
  initialIndex?: number;
}

function FullScreenModal({
  images,
  title,
  onClose,
  initialIndex = 0,
}: FullScreenModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleNext, handlePrev, onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={handlePrev}
        className="absolute left-4 text-white hover:text-primary transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 text-white hover:text-primary transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-5xl max-h-[90vh] mx-4">
        <div className="relative aspect-video">
          <ImageFallback
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            fallbackSrc={FALLBACK_IMAGE}
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-white/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectImageSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isModalOpen) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  return (
    <>
      <div
        className="relative h-48 overflow-hidden bg-muted cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${
              (currentImageIndex * 100) / images.length
            }%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-full"
              style={{ width: `${100 / images.length}%` }}
            >
              <ImageFallback
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fallbackSrc={FALLBACK_IMAGE}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-primary" : "bg-primary/30"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <FullScreenModal
          images={images}
          title={title}
          onClose={() => setIsModalOpen(false)}
          initialIndex={currentImageIndex}
        />
      )}
    </>
  );
}

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 [&>*:last-child]:md:col-span-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors"
            >
              <ProjectImageSlider
                images={project.images}
                title={project.title}
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-primary">{project.role}</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary flex items-center gap-2 font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tag.icon}
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {project.softSkills && project.softSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.softSkills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1.5 text-sm rounded-full bg-secondary/10 text-secondary flex items-center gap-2 font-medium hover:bg-secondary/20 transition-colors"
                        >
                          {skill.icon}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.links && (
                  <div className="flex gap-4 mt-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.links.linkedin && (
                      <a
                        href={project.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                    {project.links.facebook && (
                      <a
                        href={project.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Facebook
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
