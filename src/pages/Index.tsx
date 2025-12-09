import { HeroSection } from '@/components/sanctuary/HeroSection';
import { MingalarWhatWeDoSection } from '@/components/sanctuary/MingalarWhatWeDoSection';
import { MingalarBrandSection } from '@/components/sanctuary/MingalarBrandSection';
import { EnhancedNav } from '@/components/sanctuary/EnhancedNav';
import { ProductsCarousel } from '@/components/sanctuary/ProductsCarousel';
import { BrandInLifeSection } from '@/components/sanctuary/BrandInLifeSection';
import { OrnamentDivider } from '@/components/sanctuary/OrnamentDivider';
import { ManifestoSection } from '@/components/sanctuary/ManifestoSection';
import { JoinSection } from '@/components/sanctuary/JoinSection';
import { Footer } from '@/components/sanctuary/Footer';
import { AccessibilityToggle } from '@/components/sanctuary/AccessibilityToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Enhanced Navigation */}
      <EnhancedNav />
      
      {/* Main content */}
      <main className="pt-16">
        <HeroSection />
        <MingalarWhatWeDoSection />
        <MingalarBrandSection />
        <OrnamentDivider />
        <div id="products">
          <ProductsCarousel />
        </div>
        <BrandInLifeSection />
        <ManifestoSection />
        <div id="contact">
          <JoinSection />
        </div>
      </main>

      <Footer />
      
      {/* Accessibility toggle */}
      <AccessibilityToggle />
    </div>
  );
};

export default Index;
