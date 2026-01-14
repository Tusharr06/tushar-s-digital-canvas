import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechIconProps {
  name: string;
  icon: string;
  color?: string;
  className?: string;
}

const techColors: Record<string, string> = {
  flutter: "from-blue-400 to-cyan-400",
  dart: "from-blue-500 to-blue-600",
  java: "from-orange-500 to-red-500",
  spring: "from-green-500 to-green-600",
  python: "from-yellow-400 to-blue-500",
  firebase: "from-yellow-500 to-orange-500",
  sql: "from-blue-400 to-indigo-500",
  git: "from-orange-500 to-red-600",
};

const TechIcon = ({ name, icon, color, className }: TechIconProps) => {
  const gradientColor = color || techColors[name.toLowerCase()] || "from-primary to-accent";
  
  // Check if icon is a URL (logo) or emoji
  const isLogoUrl = icon.startsWith('http');
  
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-2 group cursor-pointer",
        className
      )}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className={cn(
        "relative p-4 rounded-xl bg-secondary/30 border border-border/50",
        "group-hover:border-primary/30 transition-all duration-300",
        "group-hover:shadow-lg group-hover:shadow-primary/10"
      )}>
        <div className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
          gradientColor
        )} />
        {isLogoUrl ? (
          <img 
            src={icon} 
            alt={`${name} logo`} 
            className="w-8 h-8 relative z-10 object-contain"
          />
        ) : (
          <span className="text-3xl relative z-10">{icon}</span>
        )}
      </div>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default TechIcon;
