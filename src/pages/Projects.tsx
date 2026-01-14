import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";

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
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <Navigation />

        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
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

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
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

export default Projects;
