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
    <AnimatedSection id="volunteer" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Volunteer Experience</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {volunteerExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
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
                  <p className="text-sm text-muted-foreground">
                    {experience.role} • {experience.period}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{experience.description}</p>
              {experience.certificationImage && (
                <div className="mt-6">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={(e) => handleImageClick(e, experience.certificationImage)}
                  >
                    <Image
                      src={experience.certificationImage}
                      alt="Certification"
                      width={500}
                      height={300}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      quality={95}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPENDPzE2O0FBNi5QWUE5SDQ7UmBGV1pfdnxmdGpwcmpecW1wdWb/2wBDARUXFx4aHR4eHWZQOkBmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmb/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        View Certification
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    RBCs Certification
                  </p>
                </div>
              )}
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
