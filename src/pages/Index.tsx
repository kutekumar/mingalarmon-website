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
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const targetId = state.scrollTo;
      const el = document.getElementById(targetId);
      const nav = document.querySelector('nav');
      const navH = (nav as HTMLElement)?.offsetHeight || 0;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      // clear state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Enhanced Navigation */}
      <EnhancedNav />
      
      {/* Main content */}
      <main className="pt-16">
        <HeroSection />
        <div id="services">
          <MingalarWhatWeDoSection />
        </div>
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
