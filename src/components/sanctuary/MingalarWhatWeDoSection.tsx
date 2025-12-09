import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SplitText from '@/components/SplitText';

// Minimal SVG icons using MingalarMon red color
const DigitalSanctuaryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FineDiningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BespokeSoftwareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AuthenticLifestylesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const VisionaryToolsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 4v1m5.66 1.34l-.71.71M20 12h-1m-1.34 5.66l-.71-.71M12 20v-1m-5.66-1.34l.71-.71M4 12h1m1.34-5.66l.71.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HumanConnectionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LoveOverFearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const services = [
  {
    id: 1,
    title: "Digital Sanctuaries",
    description: "Thoughtful digital experiences where people feel safe, inspired, and valued. We craft spaces that blend technology with human warmth.",
    icon: <DigitalSanctuaryIcon />,
    features: ["Authentic Design", "Human-Centered", "Emotional Connection", "Safe Spaces"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  },
  {
    id: 2,
    title: "Fine Dining Solutions",
    description: "Elevating Yangon's culinary scene through immersive digital storytelling and seamless guest experiences.",
    icon: <FineDiningIcon />,
    features: ["Refined Journey", "Memorable Experiences", "Cultural Authenticity", "Elegant Design"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  },
  {
    id: 3,
    title: "Bespoke Software",
    description: "Tools built with soul. Software that feels human, works beautifully, and grows with your vision.",
    icon: <BespokeSoftwareIcon />,
    features: ["Tailored Solutions", "Intuitive Design", "Emotional Grounding", "Trust Building"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  },
  {
    id: 4,
    title: "Authentic Lifestyles",
    description: "Helping creators and entrepreneurs build meaningful businesses rooted in truth and purpose.",
    icon: <AuthenticLifestylesIcon />,
    features: ["Truth & Purpose", "Bold Expression", "Confidence", "Creative Freedom"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  },
  {
    id: 5,
    title: "Visionary Tools",
    description: "Modern tools that reflect who you are and what you believe in, crafted with intention and care.",
    icon: <VisionaryToolsIcon />,
    features: ["Clarity", "Trust", "Understanding", "Intuitive Beauty"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  },
  {
    id: 6,
    title: "Human Connection",
    description: "Creating digital experiences that inspire genuine connection, curiosity, and a sense of wonder.",
    icon: <HumanConnectionIcon />,
    features: ["Genuine Connection", "Curiosity", "Wonder", "Compassion"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  },
  {
    id: 7,
    title: "Love Over Fear",
    description: "Our guiding principle in everything we create - encouraging confidence over hesitation, creativity over doubt.",
    icon: <LoveOverFearIcon />,
    features: ["Love Over Fear", "Authenticity", "Elegance", "Compassion"],
    color: "from-mingalar-red/5 to-mingalar-red/10"
  }
];

export const MingalarWhatWeDoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-pure-white dark:bg-pure-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with split text animation */}
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mingalar-red/10 dark:bg-mingalar-red/20 rounded-full mb-8">
            <span className="text-sm font-semibold text-mingalar-red">What We Do</span>
          </div>
          
          <SplitText
            text="Crafting Digital Sanctuaries"
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
            text="We believe in building with intention, creating spaces where people feel seen, valued, and inspired."
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-pure-white dark:bg-pure-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-mingalar-red">
                {/* Hover effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-mingalar-red/10 dark:bg-mingalar-red/20 flex items-center justify-center text-mingalar-red mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-serif font-medium text-pure-black dark:text-pure-white mb-4 group-hover:text-mingalar-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="px-3 py-1 bg-mingalar-red/10 dark:bg-mingalar-red/20 text-mingalar-red text-sm rounded-full font-medium">
                        +{service.features.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Expand indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-mingalar-red font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredService === service.id ? 1 : 0,
                      x: hoveredService === service.id ? 0 : -10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 right-0 z-20 mt-4 bg-pure-white dark:bg-pure-black border border-mingalar-red rounded-2xl p-6 shadow-xl"
                  >
                    <h4 className="text-lg font-semibold text-mingalar-red mb-4">Service Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-mingalar-red" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-mingalar-red" />
            <div className="w-2 h-2 rounded-full bg-mingalar-red animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-mingalar-red" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};