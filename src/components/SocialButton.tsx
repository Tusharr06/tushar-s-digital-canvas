import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  icon: LucideIcon;
  href: string;
  label: string;
  variant?: "default" | "outline";
  className?: string;
}

const SocialButton = ({ 
  icon: Icon, 
  href, 
  label, 
  variant = "default",
  className 
}: SocialButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "relative p-3 rounded-full transition-all duration-300 group overflow-hidden",
        variant === "default" 
          ? "bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50" 
          : "border border-border hover:border-primary/50 bg-transparent",
        className
      )}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <Icon className="w-5 h-5 relative z-10 text-muted-foreground group-hover:text-primary transition-colors" />
    </motion.a>
  );
};

export default SocialButton;
