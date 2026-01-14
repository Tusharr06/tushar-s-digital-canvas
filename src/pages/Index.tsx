import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialButton from "@/components/SocialButton";
import AnimatedIllustration from "@/components/AnimatedIllustration";
import PageTransition from "@/components/PageTransition";
import Starfield from "@/components/Starfield";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <Starfield />
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="container mx-auto px-6 pt-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.15 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    Available for opportunities
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
                >
                  Hi, I'm{" "}
                  <span className="gradient-text">Tushar</span>{" "}
                  <motion.span
                    className="inline-block"
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    👋
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
                >
                  A passionate{" "}
                  <span className="text-primary font-medium">Software Developer</span>{" "}
                  building scalable Web and Mobile applications using Flutter, backend
                  technologies, and modern frameworks.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <SocialButton icon={Github} href="https://github.com/Tusharr06" label="GitHub" />
                  <SocialButton icon={Linkedin} href="#" label="LinkedIn" />
                  <SocialButton icon={Mail} href="mailto:tushar@example.com" label="Email" />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-purple-deep hover:opacity-90 transition-opacity group">
                      <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Contact Me
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-border hover:border-primary/50 hover:bg-primary/5 group">
                    <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden lg:flex items-center justify-center"
              >
                <AnimatedIllustration variant="hero" />
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs font-medium">Scroll to explore</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
