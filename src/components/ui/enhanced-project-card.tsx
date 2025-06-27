"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectTag {
  name: string;
  icon?: JSX.Element;
}

interface ProjectLinks {
  github?: string;
  live?: string;
  linkedin?: string;
  facebook?: string;
}

interface EnhancedProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  links?: ProjectLinks;
  role: string;
  delay?: number;
  onImageClick?: () => void;
}

export function EnhancedProjectCard({
  title,
  description,
  image,
  tags,
  links,
  role,
  delay = 0,
  onImageClick
}: EnhancedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-background border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={onImageClick}
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <Eye className="w-6 h-6 text-white" />
            </motion.button>
          </motion.div>

          {/* Role Badge */}
          <div className="absolute top-3 left-3">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.2 }}
              className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm"
            >
              {role}
            </motion.span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-xl font-bold group-hover:text-primary transition-colors duration-300"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
            className="text-muted-foreground text-sm leading-relaxed line-clamp-3"
          >
            {description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {tags.slice(0, 6).map((tag, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.6 + index * 0.05 }}
                className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-muted hover:bg-primary/10 transition-colors duration-200"
              >
                {tag.icon && <span className="text-primary">{tag.icon}</span>}
                <span>{tag.name}</span>
              </motion.div>
            ))}
            {tags.length > 6 && (
              <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                +{tags.length - 6} more
              </span>
            )}
          </motion.div>

          {/* Links */}
          {links && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.7 }}
              className="flex gap-3 pt-2"
            >
              {links.github && (
                <motion.a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
              {links.live && (
                <motion.a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          )}
        </div>

        {/* Hover border effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-primary/50 rounded-2xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
} 