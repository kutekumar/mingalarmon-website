import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    title: 'Elite Consumers',
    description: 'Curated experiences for those who appreciate the extraordinary. We create digital sanctuaries that speak to refined tastes.',
    icon: '◆',
  },
  {
    title: 'Fine Dining Yangon',
    description: 'Elevating Myanmar\'s culinary scene through immersive digital storytelling and seamless guest experiences.',
    icon: '◇',
  },
  {
    title: 'Fine Dining Redefined',
    description: 'Transforming how restaurants connect with their guests—from reservation to memory.',
    icon: '○',
  },
  {
    title: 'SAAS for Visionaries',
    description: 'Tools built with soul. Software that feels human, works beautifully, and grows with your vision.',
    icon: '□',
  },
  {
    title: 'Bespoke Solutions',
    description: 'Every detail considered. Custom digital craftsmanship for brands that refuse ordinary.',
    icon: '△',
  },
  {
    title: 'Digital Agency',
    description: 'Strategy meets artistry. We bring authentic brands to life in the digital realm.',
    icon: '◎',
  },
  {
    title: 'Authentic Lifestyles',
    description: 'Helping creators and entrepreneurs build meaningful businesses rooted in truth and purpose.',
    icon: '✦',
  },
];

export function WhatWeDoSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-foreground">
            Crafting Digital Sanctuaries
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We believe in building with intention, creating spaces where people feel seen, valued, and inspired.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  return (
    <div
      className={`card-sanctuary group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon circle */}
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
        <span className="text-2xl text-primary group-hover:text-primary-foreground transition-colors duration-500">
          {service.icon}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Hover line */}
      <div className="mt-6 h-0.5 bg-border w-0 group-hover:w-full transition-all duration-700" />
    </div>
  );
}
