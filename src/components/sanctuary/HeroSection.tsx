import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export function HeroSection() {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  // Animated text loop
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const loopTexts = [
    "Love Over Fear",
    "Premium Experiences", 
    "Authentic Brands",
    "Digital Excellence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loopTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Create subtle floating animation for background elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
      size: 8 + Math.random() * 24,
    }));
  }, []);

  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >

      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/mJGGorRZoIs?autoplay=1&mute=1&loop=1&playlist=mJGGorRZoIs&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-full object-cover md:scale-150 opacity-70"
          allow="autoplay; encrypted-media"
          title="Background ambiance"
          style={{ pointerEvents: 'none', filter: 'brightness(1.25) saturate(1.05) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-pure-white/75 dark:bg-pure-black/75 mix-blend-screen pointer-events-none" />
      </div>

      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full"
        >

          {/* Foreground Content */}
          <div className="relative z-40 mx-auto flex flex-col items-center justify-center text-center space-y-8 md:space-y-12 max-w-4xl">
            <div className="space-y-6 md:space-y-8 w-full">
              <motion.h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-mingalar-red block leading-tight"
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Where technology feels human...
              </motion.h1>
              <div className="mt-4 md:mt-6">
                <motion.p
                  className="font-serif text-base sm:text-lg md:text-xl text-pure-black dark:text-pure-white block leading-relaxed"
                  animate={{
                    y: [0, -1, 0],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  Designed for those who value meaning over noise.
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 md:mt-12 relative z-50"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button
              className="mm-btn round-5 mt-8"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                const nav = document.querySelector('nav');
                const navH = (nav as HTMLElement)?.offsetHeight || 0;
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
            >
              <div className="mm-btn-container-stars">
                <div className="mm-btn-stars" />
              </div>
              <strong>JOIN OUR WAITLIST</strong>
              <div className="mm-btn-glow">
                <div className="mm-btn-circle" />
                <div className="mm-btn-circle" />
              </div>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.div 
            className="w-8 h-12 rounded-full border-2 border-gold/50 flex justify-center p-3"
            animate={{ borderColor: ["rgba(212, 175, 55, 0.5)", "rgba(212, 175, 55, 1)", "rgba(212, 175, 55, 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-gold rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
