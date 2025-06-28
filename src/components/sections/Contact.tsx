"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/animated-section";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create email content with proper line breaks for HTML
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      // Create mailto URL with manual encoding
      const mailtoUrl = `mailto:kareemalkoul1986@gmail.com?subject=${subject}&body=${body}`;
      
      // Open in new window/tab
      window.open(mailtoUrl, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error opening email client:', error);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
            <span className="sr-only">Contact Section - </span>
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s connect and discuss how we can work together
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              I&apos;m currently available for freelance work or full-time positions. 
              Drop me a line if you&apos;d like to work together!
            </motion.p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "kareemalkoul1986@gmail.com",
                  href: "mailto:kareemalkoul1986@gmail.com"
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "+963 935 062 813",
                  href: "tel:+963935062813"
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Location",
                  value: "Damascus, Syria",
                  href: null
                }
              ].map((contact, index) => (
                <motion.div 
                  key={contact.label}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 p-6 rounded-xl bg-card/50 backdrop-blur-sm border hover:border-primary/50 transition-colors duration-300"
            aria-label="Contact form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { name: "name", label: "Name", type: "text", rows: null },
              { name: "email", label: "Email", type: "email", rows: null },
              { name: "message", label: "Message", type: "textarea", rows: 5 }
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor={field.name} className="block text-sm font-semibold mb-2">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <motion.textarea
                    id={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    rows={field.rows!}
                    className="w-full px-4 py-3 rounded-lg border bg-background hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none resize-none"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                ) : (
                  <motion.input
                    type={field.type}
                    id={field.name}
                    aria-label={field.name === "name" ? "Your name" : undefined}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-background hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Send Message
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-200"
                whileHover={{ rotate: 45 }}
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
} 