import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  className?: string;
}

const ParallaxBackground = ({ className = "" }: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // Different speeds for different layers create depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Layer 1 - Slow moving large orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsla(263, 70%, 58%, 0.08) 0%, transparent 70%)",
          top: "5%",
          left: "-10%",
          y: y1,
          scale: scale1,
          rotate: rotate1,
        }}
      />

      {/* Layer 2 - Medium speed accent orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsla(270, 60%, 75%, 0.06) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          y: y2,
          scale: scale2,
          rotate: rotate2,
        }}
      />

      {/* Layer 3 - Fast small accent */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsla(263, 70%, 45%, 0.05) 0%, transparent 70%)",
          top: "40%",
          right: "20%",
          y: y3,
        }}
      />

      {/* Floating particles that move with scroll */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, -100 * (i % 3 + 1)]),
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
