import { Users, School, X } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const volunteerExperiences = [
  {
    icon: <School className="w-6 h-6" />,
    organization: "RBCs Team",
    role: "Content Writer",
    period: "Sep 2020 – Feb 2023",
    description:
      "Created and refined lecture content for RBCs Team's educational platform, enhancing clarity and engagement through thorough research. Collaborated with team members and experts to develop high-quality educational materials while maintaining best practices and content standards.",
    certificationImage: "/images/rbcs-mohammed-kareem.jpg",
  },
  {
    icon: <Users className="w-6 h-6" />,
    organization: "RBCs Team",
    role: "Team Leader",
    period: "Jan 2021 – Feb 2023",
    description:
      "Directed a team in organizing university lecture content to improve educational quality and accessibility at RBCs Team (rbcsteam.org). Developed strategic plans for content improvement, provided mentorship to team members, and managed project timelines and resources to meet deadlines.",
    certificationImage: "/images/rbcs-mohammed-kareem.jpg",
  },
 
];

type ClickPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function ImageModal({ 
  isOpen, 
  onClose, 
  imageSrc,
  clickPosition 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageSrc: string;
  clickPosition: ClickPosition | null;
}) {
  return (
    <AnimatePresence>
      {isOpen && clickPosition && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-5xl w-full"
            initial={{
              position: 'fixed',
              top: clickPosition.y,
              left: clickPosition.x,
              width: clickPosition.width,
              height: clickPosition.height,
              transform: 'none'
            }}
            animate={{
              position: 'relative',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              transform: 'none'
            }}
            exit={{
              position: 'fixed',
              top: clickPosition.y,
              left: clickPosition.x,
              width: clickPosition.width,
              height: clickPosition.height,
              transform: 'none',
              opacity: 0
            }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 200,
              mass: 0.8,
              velocity: 2
            }}
            style={{
              transformOrigin: 'top left'
            }}
            layoutId={`image-${imageSrc}`}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={imageSrc}
                  alt="Certification"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg"
                  quality={100}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Volunteer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(null);

  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    imageSrc: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    setClickPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
    setSelectedImage(imageSrc);
  };

  return (
    <AnimatedSection id="volunteer" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
            Volunteer Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to meaningful causes and making a positive impact in the community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group p-6 rounded-xl border bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {experience.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      <motion.a
                        href="https://rbcsteam.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {experience.organization}
                      </motion.a>
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {experience.role} • {experience.period}
                    </p>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {experience.description}
                </motion.p>
                
                {experience.certificationImage && (
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="relative group/cert cursor-pointer overflow-hidden rounded-lg"
                      onClick={(e) => handleImageClick(e, experience.certificationImage)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src={experience.certificationImage}
                        alt="Certification"
                        width={500}
                        height={300}
                        className="w-full object-cover transition-transform duration-300 group-hover/cert:scale-105"
                        quality={95}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPENDPzE2O0FBNi5QWUE5SDQ7UmBGV1pfdnxmdGpwcmpecW1wdWb/2wBDARUXFx4aHR4eHWZQOkBmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmb/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.span 
                          className="text-white text-sm font-medium"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                        >
                          View Certification
                        </motion.span>
                      </div>
                    </motion.div>
                    <p className="text-sm text-muted-foreground mt-2 text-center font-medium">
                      RBCs Certification
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(null);
          setClickPosition(null);
        }}
        imageSrc={selectedImage || ''}
        clickPosition={clickPosition}
      />
    </AnimatedSection>
  );
}
