import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    title: 'Elite Consumers',
    description: 'Curated experiences for those who appreciate the extraordinary. We create digital sanctuaries that speak to refined tastes.',
    icon: '◆',
    color: 'from-primary/20 to-primary/5',
    hoverColor: 'group-hover:from-primary/30 group-hover:to-primary/10',
  },
  {
    title: 'Fine Dining Yangon',
    description: 'Elevating Myanmar\'s culinary scene through immersive digital storytelling and seamless guest experiences.',
    icon: '◇',
    color: 'from-gold/20 to-gold/5',
    hoverColor: 'group-hover:from-gold/30 group-hover:to-gold/10',
  },
  {
    title: 'Fine Dining Redefined',
    description: 'Transforming how restaurants connect with their guests—from reservation to memory.',
    icon: '○',
    color: 'from-accent/30 to-accent/10',
    hoverColor: 'group-hover:from-accent/40 group-hover:to-accent/20',
  },
  {
    title: 'SAAS for Visionaries',
    description: 'Tools built with soul. Software that feels human, works beautifully, and grows with your vision.',
    icon: '□',
    color: 'from-secondary to-secondary/50',
    hoverColor: 'group-hover:from-secondary group-hover:to-secondary/70',
  },
  {
    title: 'Bespoke Solutions',
    description: 'Every detail considered. Custom digital craftsmanship for brands that refuse ordinary.',
    icon: '△',
    color: 'from-primary/15 to-gold/10',
    hoverColor: 'group-hover:from-primary/25 group-hover:to-gold/20',
  },
  {
    title: 'Digital Agency',
    description: 'Strategy meets artistry. We bring authentic brands to life in the digital realm.',
    icon: '◎',
    color: 'from-gold/15 to-primary/10',
    hoverColor: 'group-hover:from-gold/25 group-hover:to-primary/20',
  },
  {
    title: 'Authentic Lifestyles',
    description: 'Helping creators and entrepreneurs build meaningful businesses rooted in truth and purpose.',
    icon: '✦',
    color: 'from-accent/20 to-secondary/30',
    hoverColor: 'group-hover:from-accent/30 group-hover:to-secondary/40',
  },
];

export function WhatWeDoSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold/8 to-transparent blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/8 to-transparent blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/5 to-secondary/10 blur-3xl animate-breathe" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with better hierarchy */}
        <div
          className={`text-center mb-20 md:mb-28 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mt-4 text-foreground leading-tight">
            Crafting Digital
            <span className="block text-gradient">Sanctuaries</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We believe in building with intention, creating spaces where people feel seen, valued, and inspired.
          </p>
        </div>

        {/* Interactive hexagonal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
              isActive={activeIndex === index}
              mousePosition={mousePosition}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>

        {/* Decorative bottom element */}
        <div className={`flex justify-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-border" />
            <div className="w-2 h-2 rounded-full bg-gold animate-breathe" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isVisible: boolean;
  isActive: boolean;
  mousePosition: { x: number; y: number };
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

function ServiceCard({ service, index, isVisible, isActive, mousePosition, onMouseMove, onMouseLeave }: ServiceCardProps) {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${index === 6 ? 'lg:col-start-2' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Spotlight effect following cursor */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isActive
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--gold) / 0.15), transparent 60%)`
            : 'none',
        }}
      />

      {/* Card */}
      <div className={`relative h-full bg-gradient-to-br ${service.color} ${service.hoverColor} rounded-3xl p-8 md:p-10 border border-border/50 group-hover:border-primary/30 transition-all duration-500 overflow-hidden`}>
        {/* Floating icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
            <span className="text-4xl text-primary group-hover:text-gold transition-colors duration-500">
              {service.icon}
            </span>
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-2 rounded-3xl border border-dashed border-primary/0 group-hover:border-primary/20 transition-all duration-700 group-hover:rotate-6" />
        </div>

        {/* Content */}
        <h3 className="text-2xl md:text-2xl font-serif font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base">
          {service.description}
        </p>

        {/* Interactive reveal arrow */}
        <div className="mt-8 flex items-center gap-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
          <span className="text-sm font-medium tracking-wide">Explore</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Corner decoration */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}
