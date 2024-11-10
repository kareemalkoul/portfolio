"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const characters = text.split("");

  return (
    <div className={cn("inline-block", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingAnimation;
