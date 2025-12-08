import { useScrollReveal } from '@/hooks/useScrollReveal';
import logoPrimary from '@/assets/logo-primary.png';

const mockups = [
  {
    id: 1,
    title: 'On Premium Apparel',
    description: 'Worn with pride, a symbol of authentic living.',
    style: 'bg-gradient-to-br from-secondary to-muted',
  },
  {
    id: 2,
    title: 'Digital Experience',
    description: 'Where the brand comes alive in your pocket.',
    style: 'bg-gradient-to-br from-primary/10 to-secondary',
  },
  {
    id: 3,
    title: 'Restaurant Ambiance',
    description: 'Setting the tone for memorable dining.',
    style: 'bg-gradient-to-br from-muted to-accent/30',
  },
  {
    id: 4,
    title: 'Creative Spaces',
    description: 'Inspiring environments for visionaries.',
    style: 'bg-gradient-to-br from-accent/20 to-secondary',
  },
];

export function BrandInLifeSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-primary" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Brand in Life
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-foreground">
            Discover the Possibilities
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Imagine our brand living in your world—on what you wear, where you dine, and how you create.
          </p>
        </div>

        {/* Mockups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
  return (
    <div
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`${mockup.style} rounded-2xl overflow-hidden hover-lift`}>
        {/* Mockup visual */}
        <div className="aspect-[4/3] relative flex items-center justify-center p-12">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Logo container with different presentations */}
          <div className="relative transform group-hover:scale-105 transition-transform duration-700">
            {index === 0 && (
              // T-shirt style
              <div className="w-48 h-48 bg-card rounded-lg shadow-lg flex items-center justify-center p-8">
                <img src={logoPrimary} alt="MingalarMon on apparel" className="w-full h-auto opacity-90" />
              </div>
            )}
            {index === 1 && (
              // Phone screen style
              <div className="w-32 h-56 bg-foreground rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center p-4">
                  <img src={logoPrimary} alt="MingalarMon on phone" className="w-20 h-auto" />
                </div>
              </div>
            )}
            {index === 2 && (
              // Wall/signage style
              <div className="w-64 h-32 bg-card/90 backdrop-blur rounded-sm shadow-2xl flex items-center justify-center p-6 border border-border/20">
                <img src={logoPrimary} alt="MingalarMon on restaurant wall" className="w-32 h-auto" />
              </div>
            )}
            {index === 3 && (
              // Creative card style
              <div className="w-48 h-48 rounded-full bg-card shadow-xl flex items-center justify-center p-10 animate-float">
                <img src={logoPrimary} alt="MingalarMon in creative space" className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-6 bg-card/50 backdrop-blur-sm">
          <h3 className="text-xl font-serif font-medium text-foreground mb-2">
            {mockup.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {mockup.description}
          </p>
        </div>
      </div>
    </div>
  );
}
