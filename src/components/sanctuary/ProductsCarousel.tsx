import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    category: 'For Restaurants',
    title: 'Royal Plate',
    description:
      'Premium Dining, Made Simple — A modern platform that helps customers discover restaurants, reserve tables, and order food with ease. Designed to be simple, elegant, and accessible for everyone.',
    useCase:
      'Ideal for restaurants seeking a refined, accessible digital dining experience.',
  },
  {
    category: 'For Marketplaces',
    title: 'GemLink: Jewelry Marketplace',
    description:
      'GemLink is a beautifully designed jewelry marketplace that brings gem companies, jewelers, and buyers together in one seamless experience.',
    useCase: 'Perfect for jewelers and buyers seeking a trusted, elegant marketplace.',
  },
  {
    category: 'For Agencies',
    title: 'Creative Studio Tools',
    description: 'Where strategy meets soul in digital storytelling.',
    useCase: 'Empowering agencies to deliver authentic brand experiences.',
  },
  {
    category: 'For Creators',
    title: 'Authentic Growth Suite',
    description: 'Build your legacy on truth, not trends.',
    useCase: 'For creators who choose meaning over metrics.',
  },
  {
    category: 'For Visionaries',
    title: 'Bespoke Development',
    description: 'Your vision, our craft. Built without compromise.',
    useCase: 'Custom solutions for those who dream beyond templates.',
  },
];

export function ProductsCarousel() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section id="products" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-foreground">
              Built With Love
            </h2>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className={`group relative rounded-3xl border border-border/50 bg-card overflow-hidden hover-lift transition-all ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(500px circle at 50% 20%, rgba(212,175,55,0.08), transparent 40%)' }} />

              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-7 md:p-8 focus:outline-none"
                aria-expanded={expanded === index}
                aria-controls={`product-panel-${index}`}
              >
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary">
                  {product.category}
                </span>

                <h3 className="mt-3 text-2xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {product.description}
                </p>

                {/* Expand hint */}
                <div className="mt-5 flex items-center gap-2 text-sm text-primary font-medium">
                  <span>{expanded === index ? 'Hide details' : 'Learn more'}</span>
                  <svg className={`w-4 h-4 transition-transform ${expanded === index ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {expanded === index && (
                  <motion.div
                    id={`product-panel-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-7 md:px-8 pb-7 md:pb-8 border-t border-border/60 bg-background/40 backdrop-blur-sm"
                  >
                    <p className="text-sm md:text-base text-muted-foreground/90 italic">
                      {product.useCase}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <motion.button
                        className="btn-secondary text-sm py-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Request Demo
                      </motion.button>
                      <motion.button
                        className="btn-primary text-sm py-3"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Talk to Us
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsCarousel;
