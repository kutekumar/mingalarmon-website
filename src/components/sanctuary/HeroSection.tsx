import { useScrollReveal } from '@/hooks/useScrollReveal';
import logoPrimary from '@/assets/logo-primary.png';

export function HeroSection() {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <iframe
          src="https://www.youtube.com/embed/mJGGorRZoIs?autoplay=1&mute=1&loop=1&playlist=mJGGorRZoIs&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-full object-cover scale-150 opacity-30"
          allow="autoplay; encrypted-media"
          title="Background ambiance"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-breathe" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img
              src={logoPrimary}
              alt="MingalarMon Logo"
              className="h-24 md:h-32 w-auto animate-float"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-6 leading-tight">
            <span className="block">Love Over Fear</span>
            <span className="block mt-2 text-primary italic">
              Experience the Rare Feeling
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We build immersive digital products for elite consumers, fine dining culture, 
            bespoke business solutions, and people who search for authenticity.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="btn-primary group">
              <span className="relative">
                Join the Waitlist
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-foreground transition-all duration-500 group-hover:w-full" />
              </span>
            </button>
            <button className="btn-secondary group">
              <span className="relative">
                See Demo
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full group-hover:bg-primary-foreground" />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
