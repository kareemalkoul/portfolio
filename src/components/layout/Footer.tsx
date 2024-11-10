import { motion } from "framer-motion";
import { socialLinks } from "@/components/social-links";
import { Download } from "lucide-react";
import ShimmerButton from "@/components/ui/shimmer-button";
import { trackAction } from "@/lib/supabase";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Logo/Name */}
          <motion.a
            href="#"
            className="text-2xl font-bold hover:text-primary transition-colors relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative inline-block">
              KA
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.a>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ShimmerButton
              onClick={async () => {
                try {
                  await trackAction("Download CV");
                  
                  // Initiate the download
                  const link = document.createElement("a");
                  link.href = "/kareem-fullstack.pdf";
                  link.download = "Kareem_Alkoul_CV.pdf";
                  link.click();
                } catch (error) {
                  console.error('Error downloading CV:', error);
                  // Still allow the download even if tracking fails
                  const link = document.createElement("a");
                  link.href = "/kareem-fullstack.pdf";
                  link.download = "Kareem_Alkoul_CV.pdf";
                  link.click();
                }
              }}
              className="inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </ShimmerButton>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAction(`Footer Social Click: ${link.label}`)}
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={link.label}
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Designed & Built by Kareem Alkoul
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
