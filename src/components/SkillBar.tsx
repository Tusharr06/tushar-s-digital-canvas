import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  label: string;
  percentage: number;
  delay?: number;
  className?: string;
}

const SkillBar = ({ label, percentage, delay = 0, className }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.4 }}
          className="text-sm font-bold text-primary"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-3 bg-secondary/50 rounded-full overflow-hidden border border-border/30">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            delay,
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
              delay: delay + 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
