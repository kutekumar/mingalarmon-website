import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    category: 'For Consumers',
    title: 'Elite Membership',
    description: 'Access curated experiences that feel like coming home to luxury.',
    useCase: 'Perfect for collectors, enthusiasts, and connoisseurs.',
  },
  {
    category: 'For Restaurants',
    title: 'Dining Experience Platform',
    description: 'Transform every meal into a memory worth savoring.',
    useCase: 'Built for fine dining establishments seeking deeper guest connections.',
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
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

          {/* Navigation arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              product={product}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: typeof products[0];
  index: number;
  isVisible: boolean;
}

function ProductCard({ product, index, isVisible }: ProductCardProps) {
  return (
    <div
      className={`flex-shrink-0 w-80 md:w-96 snap-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-sanctuary h-full flex flex-col group">
        {/* Category badge */}
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-4">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-serif font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 flex-grow">
          {product.description}
        </p>

        {/* Use case */}
        <p className="text-sm text-muted-foreground/80 italic mb-6">
          {product.useCase}
        </p>

        {/* CTA */}
        <button className="btn-secondary text-sm py-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
          Request Demo
        </button>
      </div>
    </div>
  );
}
