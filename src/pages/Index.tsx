import { HeroSection } from '@/components/sanctuary/HeroSection';
import { WhatWeDoSection } from '@/components/sanctuary/WhatWeDoSection';
import { ProductsCarousel } from '@/components/sanctuary/ProductsCarousel';
import { BrandInLifeSection } from '@/components/sanctuary/BrandInLifeSection';
import { ManifestoSection } from '@/components/sanctuary/ManifestoSection';
import { JoinSection } from '@/components/sanctuary/JoinSection';
import { Footer } from '@/components/sanctuary/Footer';
import { AccessibilityToggle } from '@/components/sanctuary/AccessibilityToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ProductsCarousel />
        <BrandInLifeSection />
        <ManifestoSection />
        <JoinSection />
      </main>

      <Footer />
      
      {/* Accessibility toggle */}
      <AccessibilityToggle />
    </div>
  );
};

export default Index;
