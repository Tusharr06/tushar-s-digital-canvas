import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  fadeIn?: boolean;
  scaleEffect?: boolean;
}

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.3,
  fadeIn = true,
  scaleEffect = false,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    fadeIn ? [0, 1, 1, 0.8] : [1, 1, 1, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    scaleEffect ? [0.95, 1, 1, 0.98] : [1, 1, 1, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
