import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ManifestoSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-[600px] h-[600px] rounded-full bg-gold/10 blur-[100px] transition-all duration-[2000ms] ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-border" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-border" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <span
            className={`inline-block text-primary font-medium tracking-widest uppercase text-sm mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Manifesto
          </span>

          {/* Title */}
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 glow-text' : 'opacity-0 translate-y-10'
            }`}
          >
            Love Over Fear
          </h2>

          {/* Manifesto text */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif italic">
              In a world rushing toward the next thing, we choose to slow down.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We believe authenticity is rare, and rare things deserve protection. 
              We build for those who seek depth over noise, meaning over metrics, 
              and connection over transaction.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every product we create, every experience we design, every word we write—
              it all comes from the same place: a commitment to truth, beauty, and 
              the courage to choose love over fear.
            </p>

            <p className="text-xl md:text-2xl text-primary leading-relaxed font-serif mt-8">
              This is our promise. This is who we are.
            </p>
          </div>

          {/* Decorative element */}
          <div
            className={`mt-16 flex justify-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
