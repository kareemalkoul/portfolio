"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon?: ReactNode;
  link?: string;
  proficiency?: number; // 0-100
  category?: string;
  delay?: number;
}

export function SkillCard({ 
  name, 
  icon, 
  link, 
  proficiency = 85, 
  category,
  delay = 0 
}: SkillCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group p-4 rounded-xl border bg-background/50 backdrop-blur-sm
        hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
        transition-all duration-300 cursor-pointer overflow-hidden
        ${link ? 'hover:bg-primary/5' : ''}
      `}
      onClick={handleClick}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {icon && (
              <motion.div 
                className="text-primary group-hover:scale-110 transition-transform duration-200"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>
            )}
            <span className="font-medium text-sm group-hover:text-primary transition-colors duration-200">
              {name}
            </span>
          </div>
          
          {link && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
            >
              <ExternalLink className="w-3 h-3" />
            </motion.div>
          )}
        </div>

        {/* Proficiency bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Proficiency</span>
            <span>{proficiency}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              transition={{ duration: 1, delay: delay + 0.2 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
            />
          </div>
        </div>

        {/* Category tag */}
        {category && (
          <div className="mt-2">
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
} 