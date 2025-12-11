import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from "framer-motion";

export function HeroSection() {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >

      <motion.div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        initial={{ scale: 1, x: 0 }}
        animate={{ scale: [1, 1.035, 1], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      >
        <iframe
          src="https://www.youtube.com/embed/mJGGorRZoIs?autoplay=1&mute=1&loop=1&playlist=mJGGorRZoIs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="w-full h-full object-cover object-center opacity-70"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share"
          title="Background ambiance"
          style={{ pointerEvents: 'none', filter: 'brightness(1.15) saturate(1.05) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-pure-white/75 dark:bg-pure-black/75 mix-blend-screen pointer-events-none" />
      </motion.div>

      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[100svh] pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full"
        >

          {/* Foreground Content */}
          <div className="relative z-40 mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
            <motion.div
              className="flex flex-col items-center justify-center tracking-tight space-y-1 sm:space-y-2 md:space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="font-serif text-mingalar-red leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light"
                animate={{ rotate: [0, -0.4, 0.4, 0], y: [0, -1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                WHERE TECHNOLOGY
              </motion.span>
              <motion.span
                className="font-serif text-mingalar-red leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin"
                animate={{ rotate: [0, 0.4, -0.4, 0], y: [0, 1, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                FEELS LIKE
              </motion.span>
              <motion.span
                className="text-mingalar-red leading-none text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold"
                style={{ fontFamily: '"Lavishly Yours", cursive' }}
                animate={{ rotate: [0, -0.3, 0.3, 0], y: [0, -1, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                human
              </motion.span>
            </motion.div>
          </div>

          <div className="mt-6 md:mt-8">
            <motion.p
              className="font-serif text-lg sm:text-xl md:text-2xl text-pure-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] block leading-relaxed font-medium"
              animate={{ y: [0, -2, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              We develop products with care, honesty and intention.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 md:mt-8 relative z-50"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button
              className="mm-btn round-5"
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
              <strong>JOIN OUR WORLD</strong>
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
