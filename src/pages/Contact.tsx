import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedIllustration from "@/components/AnimatedIllustration";
import PageTransition from "@/components/PageTransition";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tushar@example.com",
    href: "mailto:tushar@example.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Tusharr06",
    href: "https://github.com/Tusharr06",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    color: "from-blue-500 to-blue-700",
  },
];

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  variants={itemVariants}
                  className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6"
                >
                  Get in Touch
                </motion.span>

                <motion.h1
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold font-display mb-6"
                >
                  Let's build something{" "}
                  <span className="gradient-text">meaningful</span> together.
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                >
                  I'm currently open to new opportunities and exciting projects. 
                  Whether you have a question, want to collaborate, or just want 
                  to say hi — feel free to reach out!
                </motion.p>

                {/* Contact Cards */}
                <motion.div variants={itemVariants} className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                      whileHover={{ x: 8 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} text-white`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                      <motion.span
                        className="ml-auto text-muted-foreground group-hover:text-primary"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ))}
                </motion.div>

                {/* Fun CTA */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Open to <span className="text-foreground font-medium">internships</span>,{" "}
                      <span className="text-foreground font-medium">freelance projects</span>, and{" "}
                      <span className="text-foreground font-medium">collaborations</span>!
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex items-center justify-center"
              >
                <AnimatedIllustration variant="contact" />
              </motion.div>
            </div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-16 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm border border-border/50">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Based in India</span>
                <span className="text-2xl">🇮🇳</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
