import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import SocialButton from "./SocialButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border/50 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>by Tushar © {currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <SocialButton
              icon={Github}
              href="https://github.com/Tusharr06"
              label="GitHub"
              variant="outline"
            />
            <SocialButton
              icon={Linkedin}
              href="#"
              label="LinkedIn"
              variant="outline"
            />
            <SocialButton
              icon={Mail}
              href="mailto:tushar@example.com"
              label="Email"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
