import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TechIcon from "@/components/TechIcon";
import SkillBar from "@/components/SkillBar";
import AnimatedIllustration from "@/components/AnimatedIllustration";
import PageTransition from "@/components/PageTransition";
import { Check } from "lucide-react";

const techStack = [
  { name: "Flutter", icon: "💙" },
  { name: "Dart", icon: "🎯" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Firebase", icon: "🔥" },
  { name: "SQL", icon: "🗃️" },
  { name: "Git", icon: "📦" },
];

const skills = [
  "Develop cross-platform mobile apps with Flutter",
  "Build scalable backend APIs using Java & Spring Boot",
  "Design clean, performant UI/UX",
  "Explore AI & machine learning through practical projects",
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

        {/* What I Do Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <AnimatedIllustration variant="about" />
              </motion.div>

              {/* Right - Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <motion.span
                  variants={itemVariants}
                  className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6"
                >
                  Skills & Expertise
                </motion.span>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold font-display mb-6"
                >
                  What I <span className="gradient-text">Do</span>
                </motion.h2>

                {/* Tech Icons */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-4 gap-4 mb-8"
                >
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <TechIcon name={tech.name} icon={tech.icon} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Skills List */}
                <motion.ul variants={itemVariants} className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-1 rounded-full bg-primary/20 text-primary mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-muted-foreground">{skill}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proficiency Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
                Proficiency
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                My <span className="gradient-text">Skill Levels</span>
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-8">
              <SkillBar
                label="Frontend / Mobile Development"
                percentage={80}
                delay={0}
              />
              <SkillBar
                label="Backend Development"
                percentage={70}
                delay={0.2}
              />
              <SkillBar
                label="Programming & Problem Solving"
                percentage={75}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
