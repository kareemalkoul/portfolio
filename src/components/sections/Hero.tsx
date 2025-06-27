import { socialLinks } from "@/components/social-links";
import BlurIn from "@/components/ui/blur-in";
import DotPattern from "@/components/ui/dot-pattern";
import { FadeText } from "@/components/ui/fade-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import TypingAnimation from "@/components/ui/typing-animation";
import { trackAction } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useTransform(mouseX, [0, 1], [0, 50]);
  const y = useTransform(mouseY, [0, 1], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      const headerHeight = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/kareem-fullstack.pdf';
    link.download = 'Kareem-Alkoul-CV.pdf';
    link.click();
    trackAction("CV Download");
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center isolate overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <DotPattern
          width={50}
          height={50}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "absolute inset-0"
          )}
        />
        
        {/* Animated gradient blobs */}
        <motion.div
          style={{ x, y }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          style={{ x: useTransform(x, v => v * -0.5), y: useTransform(y, v => v * -0.5) }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="md:max-w-xl md:pl-8 lg:pl-12">
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    const headerHeight = 80;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                  trackAction("Availability Badge Click");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 cursor-pointer hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for Work</span>
              </motion.div>

              <div className="relative">
                <BlurIn
                  word="Kareem Alkoul"
                  className="text-4xl md:text-7xl font-bold mb-4 inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                />
              </div>

              <div className="relative">
                <TypingAnimation
                  text="Software Engineer & Full Stack Developer"
                  className="text-2xl md:text-4xl font-bold text-muted-foreground mb-6 block"
                  delay={0.1}
                />
              </div>

              <div className="relative">
                <FadeText
                  text="Software Engineer with expertise in Full Stack Development and DevOps. Passionate about building scalable web applications and microservices using modern technologies like Nest.js, Next.js, React.js, Node.js, and Cloud platforms."
                  className="mb-8 text-lg leading-relaxed"
                />
              </div>

              {/* Enhanced Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="text-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                <ShimmerButton
                  onClick={() => {
                    window.location.href = "#contact";
                    trackAction("Get in Touch Click");
                  }}
                  className="group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </ShimmerButton>
                
                <motion.button
                  onClick={downloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border rounded-md hover:bg-primary/10 transition-all duration-200 flex items-center gap-2 group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </motion.button>
                
                <motion.a
                  href="#projects"
                  onClick={() => trackAction("View Projects Click")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border rounded-md hover:bg-primary/10 transition-all duration-200"
                >
                  View Projects
                </motion.a>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAction(`Social Click: ${link.label}`)}
                    className="group relative w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
                    aria-label={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {link.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-primary/60 animate-rotate" />
              <motion.div 
                className="absolute inset-2 rounded-full bg-gradient-to-l from-primary/20 to-primary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Enhanced photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 transform transition-all duration-700 group-hover:scale-110 group-hover:border-primary/40">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/circle-personal-photo-2023.png"
                    alt="Kareem Alkoul"
                    className="object-cover w-full h-full transition-all duration-700 group-hover:brightness-110"
                    priority
                    width={350}
                    height={350}
                  />
                </motion.div>
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4 bg-primary/60 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        onClick={scrollToNextSection}
        className="absolute left-1/2 -translate-x-1/2 bottom-12 cursor-pointer group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-300">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
