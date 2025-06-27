import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <AnimatedSection id="projects" className="py-16 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built across different domains and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 [&>*:last-child]:md:col-span-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group rounded-xl border bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <ProjectImageSlider
                  images={project.images}
                  title={project.title}
                />

                <div className="p-6">
                  <motion.div 
                    className="flex justify-between items-start mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                      {project.role}
                    </span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-muted-foreground mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <motion.span
                          key={tagIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIdx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary flex items-center gap-2 font-medium hover:bg-primary/20 transition-all duration-200 cursor-default"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {tag.icon}
                          </motion.div>
                          {tag.name}
                        </motion.span>
                      ))}
                    </div>

                    {project.softSkills && project.softSkills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.softSkills.map((skill, skillIdx) => (
                          <motion.span
                            key={skillIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIdx * 0.05 + 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            className="px-3 py-1.5 text-sm rounded-full bg-secondary/10 text-secondary flex items-center gap-2 font-medium hover:bg-secondary/20 transition-all duration-200 cursor-default"
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              {skill.icon}
                            </motion.div>
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {project.links && (
                    <motion.div 
                      className="flex gap-4 mt-6 pt-4 border-t border-border/50"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 font-medium"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.links.linkedin && (
                        <motion.a
                          href={project.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          LinkedIn
                        </motion.a>
                      )}
                      {project.links.facebook && (
                        <motion.a
                          href={project.links.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Facebook
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
