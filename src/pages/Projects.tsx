import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import ParallaxBackground from "@/components/ParallaxBackground";

const projects = [
  {
    title: "FieldSync",
    description:
      "A Flutter-based mobile application designed to efficiently manage and synchronize field-level data, focusing on smooth performance and real-time updates.",
    techStack: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/Tusharr06/FieldSync",
  },
  {
    title: "Readitt",
    description:
      "A modern Flutter application that focuses on clean UI and content-based feed experience, emphasizing usability and smooth navigation.",
    techStack: ["Flutter", "Dart"],
    githubUrl: "https://github.com/Tusharr06/Readitt",
  },
  {
    title: "Carbon-Edge",
    description:
      "An application aimed at promoting environmental awareness by tracking and presenting data related to sustainability in a user-friendly way.",
    techStack: ["Flutter", "Dart"],
    githubUrl: "https://github.com/Tusharr06/Carbon-Edge",
  },
  {
    title: "Drishti-AI",
    description:
      "An AI-based project exploring computer vision concepts, focusing on intelligent data analysis and real-world AI use cases.",
    techStack: ["Python", "Machine Learning"],
    githubUrl: "https://github.com/Tusharr06/Drishti-AI",
  },
  {
    title: "IPL Win Predictor",
    description:
      "A machine learning project that predicts IPL match outcomes using historical match data and statistical models.",
    techStack: ["Python", "Pandas", "ML"],
    githubUrl: "https://github.com/Tusharr06/IPL_WIN_PREDICTOR",
  },
  {
    title: "IQ Resume",
    description:
      "A data-driven project focused on resume analysis and insights using machine learning techniques to extract meaningful patterns.",
    techStack: ["Python", "Jupyter", "ML"],
    githubUrl: "https://github.com/Tusharr06/iq-resume",
  },
];

const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <ParallaxBackground />
        <Navigation />

        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            {/* Header with parallax */}
            <motion.div
              ref={headerRef}
              style={{ y: headerY, opacity: headerOpacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
                My Work
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects I've built, showcasing my skills in mobile
                development, backend systems, and machine learning.
              </p>
            </motion.div>

            {/* Projects Grid with staggered parallax */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCardWithParallax
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            {/* View More CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <motion.a
                href="https://github.com/Tusharr06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View more on GitHub</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

// Individual project card with parallax
const ProjectCardWithParallax = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds based on column position
  const speed = (index % 3) * 0.1 + 0.2;
  const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);

  return (
    <motion.div ref={ref} style={{ y }}>
      <ProjectCard
        title={project.title}
        description={project.description}
        techStack={project.techStack}
        githubUrl={project.githubUrl}
        index={index}
      />
    </motion.div>
  );
};

export default Projects;
