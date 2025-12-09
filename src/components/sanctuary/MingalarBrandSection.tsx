import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SplitText from '@/components/SplitText';

// Minimal SVG icons
const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const PurposeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const ValuesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const brandContent = {
  vision: {
    title: "Vision",
    icon: <VisionIcon />,
    content: "To become a trusted sanctuary in the digital world — a place where technology feels warm, thoughtful and human. We envision a future where businesses and individuals embrace authenticity, and where digital experiences inspire a sense of calm, curiosity and genuine connection.",
    keywords: ["Trust", "Warmth", "Authenticity", "Connection"]
  },
  mission: {
    title: "Mission",
    icon: <MissionIcon />,
    content: "Our mission is to create meaningful digital products and tailored solutions that transform the way people dine, discover, learn and build. We aim to support financially free individuals, passionate creators and forward-thinking businesses with tools that feel intuitive, beautiful and emotionally grounded.",
    keywords: ["Transformation", "Intuition", "Beauty", "Grounded"]
  },
  purpose: {
    title: "Purpose",
    icon: <PurposeIcon />,
    content: "To help people and businesses express their truth boldly, confidently and lovingly, while giving them modern tools that reflect who they are and what they believe in.",
    keywords: ["Truth", "Confidence", "Love", "Reflection"]
  },
  values: {
    title: "Values",
    icon: <ValuesIcon />,
    content: "Our core values guide everything we create: Authenticity — We honour what is real and sincere. Elegance — We design with intention, simplicity and beauty. Trust — We build products that earn confidence. Curiosity — We encourage exploration and wonder. Compassion — We choose the human approach, every time.",
    keywords: ["Authenticity", "Elegance", "Trust", "Curiosity", "Compassion"]
  }
};

export const MingalarBrandSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<keyof typeof brandContent>('vision');

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-gradient-to-b from-pure-white to-gray-50 dark:from-pure-black dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mingalar-red/10 dark:bg-mingalar-red/20 rounded-full mb-8">
            <span className="text-sm font-semibold text-mingalar-red">Our Foundation</span>
          </div>
          
          <SplitText
            text="Love Over Fear"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-pure-black dark:text-pure-white mb-6"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            enableScrollTrigger={true}
            textAlign="center"
            tag="h2"
          />
          
          <SplitText
            text="This is not a slogan, but a way of working. We develop products with care, honesty and intention."
            className="text-lg md:text-xl font-serif text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            enableScrollTrigger={true}
            textAlign="center"
            tag="p"
          />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(brandContent).map(([key, value], index) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof brandContent)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-mingalar-red text-pure-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-mingalar-red/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {value.title}
            </motion.button>
          ))}
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-pure-white dark:bg-pure-black rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-mingalar-red/10 dark:bg-mingalar-red/20 flex items-center justify-center text-mingalar-red flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {brandContent[activeTab].icon}
                </motion.div>
                <div>
                  <h3 className="text-3xl font-serif font-medium text-pure-black dark:text-pure-white mb-4">
                    {brandContent[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {brandContent[activeTab].content}
                  </p>
                </div>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-3">
                {brandContent[activeTab].keywords.map((keyword, index) => (
                  <motion.div
                    key={keyword}
                    className="px-4 py-2 bg-mingalar-red/5 dark:bg-mingalar-red/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-mingalar-red font-medium">{keyword}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Elements */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {Object.entries(brandContent).map(([key, value], index) => (
            <motion.div
              key={key}
              className="bg-pure-white dark:bg-pure-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800 cursor-pointer group"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(138, 7, 7, 0.3)" }}
              onClick={() => setActiveTab(key as keyof typeof brandContent)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-mingalar-red/10 dark:bg-mingalar-red/20 flex items-center justify-center text-mingalar-red group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-serif font-medium text-pure-black dark:text-pure-white group-hover:text-mingalar-red transition-colors duration-300">
                  {value.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {value.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};