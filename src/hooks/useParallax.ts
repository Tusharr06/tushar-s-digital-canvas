import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  offset?: ["start" | "center" | "end", "start" | "center" | "end"];
  speed?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options.offset || ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useParallaxLayer = (
  scrollYProgress: MotionValue<number>,
  speed: number = 1
) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);
  return y;
};
