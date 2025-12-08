import { useScrollReveal } from '@/hooks/useScrollReveal';
import mockupApparel from '@/assets/mockup-apparel.jpg';
import mockupDigital from '@/assets/mockup-digital.jpg';
import mockupRestaurant from '@/assets/mockup-restaurant.jpg';
import mockupCreative from '@/assets/mockup-creative.jpg';

const mockups = [
  {
    id: 1,
    title: 'On Premium Apparel',
    description: 'Worn with pride, a symbol of authentic living.',
    image: mockupApparel,
  },
  {
    id: 2,
    title: 'Digital Experience',
    description: 'Where the brand comes alive in your pocket.',
    image: mockupDigital,
  },
  {
    id: 3,
    title: 'Restaurant Ambiance',
    description: 'Setting the tone for memorable dining.',
    image: mockupRestaurant,
  },
  {
    id: 4,
    title: 'Creative Spaces',
    description: 'Inspiring environments for visionaries.',
    image: mockupCreative,
  },
];

export function BrandInLifeSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border border-primary/10 animate-breathe" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-gold/5" />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-gradient-to-l from-gold/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with improved hierarchy */}
        <div
          className={`text-center mb-20 md:mb-28 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            Brand in Life
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mt-4 text-foreground leading-tight">
            Discover the
            <span className="block text-gradient">Possibilities</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Imagine our brand living in your world—on what you wear, where you dine, and how you create.
          </p>
        </div>

        {/* Mockups grid with masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {mockups.map((mockup, index) => (
            <MockupCard
              key={mockup.id}
              mockup={mockup}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MockupCardProps {
  mockup: typeof mockups[0];
  index: number;
  isVisible: boolean;
}

function MockupCard({ mockup, index, isVisible }: MockupCardProps) {
  const isLarge = index === 0 || index === 3;
  
  return (
    <div
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isLarge ? 'md:row-span-1' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative rounded-3xl overflow-hidden bg-card border border-border/50 group-hover:border-primary/30 transition-all duration-500 hover-lift">
        {/* Image container */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src={mockup.image} 
            alt={mockup.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Floating badge */}
          <div className="absolute top-6 left-6">
            <span className="inline-block px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-primary border border-border/50">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl md:text-3xl font-serif font-medium text-primary-foreground mb-2 group-hover:translate-y-0 transition-transform duration-500">
            {mockup.title}
          </h3>
          <p className="text-primary-foreground/80 text-base md:text-lg">
            {mockup.description}
          </p>
          
          {/* Reveal line */}
          <div className="mt-6 h-0.5 bg-gradient-to-r from-gold to-transparent w-0 group-hover:w-full transition-all duration-700" />
        </div>

        {/* Corner glow effect */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}
