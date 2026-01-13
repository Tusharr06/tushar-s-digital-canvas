import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedIllustrationProps {
  variant?: "hero" | "about" | "contact";
}

const AnimatedIllustration = ({ variant = "hero" }: AnimatedIllustrationProps) => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  if (variant === "hero") {
    return (
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Main Character */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/30 to-accent/30 rounded-full scale-150" />
          
          {/* Developer Figure */}
          <svg viewBox="0 0 400 500" className="w-64 h-80 md:w-80 md:h-96 relative z-10">
            {/* Body */}
            <motion.ellipse
              cx="200"
              cy="320"
              rx="70"
              ry="90"
              fill="hsl(263, 70%, 58%)"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Head */}
            <motion.circle
              cx="200"
              cy="180"
              r="60"
              fill="hsl(30, 80%, 80%)"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            
            {/* Hair */}
            <motion.path
              d="M140 170 Q150 100 200 90 Q250 100 260 170 Q200 150 140 170"
              fill="hsl(30, 30%, 20%)"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
            />
            
            {/* Glasses */}
            <motion.g
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            >
              <rect x="155" y="165" width="35" height="25" rx="5" fill="none" stroke="hsl(263, 70%, 45%)" strokeWidth="3" />
              <rect x="210" y="165" width="35" height="25" rx="5" fill="none" stroke="hsl(263, 70%, 45%)" strokeWidth="3" />
              <line x1="190" y1="177" x2="210" y2="177" stroke="hsl(263, 70%, 45%)" strokeWidth="3" />
            </motion.g>
            
            {/* Smile */}
            <motion.path
              d="M180 200 Q200 215 220 200"
              fill="none"
              stroke="hsl(0, 60%, 50%)"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            
            {/* Laptop */}
            <motion.g
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Laptop Base */}
              <rect x="130" y="350" width="140" height="8" rx="2" fill="hsl(234, 40%, 30%)" />
              {/* Laptop Screen */}
              <rect x="140" y="290" width="120" height="60" rx="4" fill="hsl(234, 40%, 20%)" />
              {/* Screen Content */}
              <motion.g animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                <rect x="150" y="300" width="40" height="4" rx="2" fill="hsl(263, 70%, 58%)" />
                <rect x="150" y="310" width="60" height="4" rx="2" fill="hsl(270, 60%, 75%)" />
                <rect x="150" y="320" width="30" height="4" rx="2" fill="hsl(263, 70%, 58%)" />
                <rect x="150" y="330" width="50" height="4" rx="2" fill="hsl(270, 60%, 75%)" />
              </motion.g>
            </motion.g>
            
            {/* Arms */}
            <motion.path
              d="M130 290 Q100 320 130 360"
              fill="none"
              stroke="hsl(30, 80%, 80%)"
              strokeWidth="20"
              strokeLinecap="round"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M270 290 Q300 320 270 360"
              fill="none"
              stroke="hsl(30, 80%, 80%)"
              strokeWidth="20"
              strokeLinecap="round"
              animate={{ rotate: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xs"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            {"</>"}
          </motion.div>
          
          <motion.div
            className="absolute top-20 -left-8 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg"
            animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            ⚡
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 -right-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xl"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
          >
            🚀
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  if (variant === "about") {
    return (
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-full scale-150" />
          
          <svg viewBox="0 0 400 400" className="w-64 h-64 md:w-80 md:h-80 relative z-10">
            {/* Monitor */}
            <motion.rect
              x="80"
              y="60"
              width="240"
              height="180"
              rx="10"
              fill="hsl(234, 40%, 15%)"
              stroke="hsl(263, 70%, 45%)"
              strokeWidth="4"
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Screen */}
            <rect x="95" y="75" width="210" height="150" rx="5" fill="hsl(234, 47%, 8%)" />
            
            {/* Code Lines */}
            <motion.g animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}>
              <rect x="110" y="95" width="80" height="6" rx="3" fill="hsl(263, 70%, 58%)" />
              <rect x="110" y="110" width="120" height="6" rx="3" fill="hsl(270, 60%, 75%)" />
              <rect x="120" y="125" width="90" height="6" rx="3" fill="hsl(200, 70%, 50%)" />
              <rect x="120" y="140" width="70" height="6" rx="3" fill="hsl(270, 60%, 75%)" />
              <rect x="110" y="155" width="100" height="6" rx="3" fill="hsl(263, 70%, 58%)" />
              <rect x="110" y="170" width="60" height="6" rx="3" fill="hsl(50, 70%, 50%)" />
              <rect x="110" y="185" width="140" height="6" rx="3" fill="hsl(270, 60%, 75%)" />
            </motion.g>
            
            {/* Monitor Stand */}
            <rect x="180" y="240" width="40" height="40" fill="hsl(234, 40%, 20%)" />
            <rect x="140" y="280" width="120" height="15" rx="5" fill="hsl(234, 40%, 25%)" />
            
            {/* Keyboard */}
            <motion.rect
              x="100"
              y="320"
              width="200"
              height="40"
              rx="5"
              fill="hsl(234, 40%, 18%)"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.3 }}
            />
          </svg>
          
          {/* Floating Icons */}
          <motion.div
            className="absolute top-0 right-0 text-4xl"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            💡
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-0 text-3xl"
            animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            ⚙️
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Contact variant
  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-full scale-150" />
        
        <svg viewBox="0 0 300 300" className="w-48 h-48 md:w-64 md:h-64 relative z-10">
          {/* Envelope */}
          <motion.path
            d="M30 80 L150 160 L270 80 L270 220 L30 220 Z"
            fill="hsl(263, 70%, 58%)"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M30 80 L150 160 L270 80"
            fill="none"
            stroke="hsl(270, 60%, 75%)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          
          {/* Paper */}
          <motion.rect
            x="60"
            y="40"
            width="180"
            height="120"
            rx="5"
            fill="hsl(240, 20%, 95%)"
            initial={{ y: 40 }}
            animate={{ y: [40, 20, 40] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Text lines on paper */}
          <motion.g
            initial={{ y: 40 }}
            animate={{ y: [40, 20, 40] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <rect x="80" y="60" width="100" height="6" rx="3" fill="hsl(263, 70%, 58%)" />
            <rect x="80" y="80" width="140" height="6" rx="3" fill="hsl(234, 30%, 70%)" />
            <rect x="80" y="100" width="120" height="6" rx="3" fill="hsl(234, 30%, 70%)" />
            <rect x="80" y="120" width="80" height="6" rx="3" fill="hsl(234, 30%, 70%)" />
          </motion.g>
        </svg>
        
        {/* Floating elements */}
        <motion.div
          className="absolute -top-2 right-0 text-3xl"
          animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨
        </motion.div>
        
        <motion.div
          className="absolute bottom-0 -left-4 text-2xl"
          animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
        >
          💬
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIllustration;
