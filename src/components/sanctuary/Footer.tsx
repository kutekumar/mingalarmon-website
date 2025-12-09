import { useScrollReveal } from '@/hooks/useScrollReveal';

const footerLinks = {
  explore: [
    { label: 'About Us', href: '#' },
    { label: 'Our Products', href: '#' },
    { label: 'Manifesto', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  connect: [
    { label: 'Contact', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: '#', icon: '○' },
  { label: 'LinkedIn', href: '#', icon: '□' },
  { label: 'Twitter', href: '#', icon: '◇' },
];

export function Footer() {
  const { ref: footerRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className="py-20 bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="Mingalar Mon"
              className="h-12 w-auto mb-6 opacity-80"
            />
            <p className="text-muted-foreground max-w-sm mb-6">
              Building digital sanctuaries for those who seek authenticity, 
              meaning, and the courage to choose love over fear.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-serif font-medium text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 underline-grow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-serif font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 underline-grow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-serif font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 underline-grow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MingalarMon. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm italic">
            Built with love, for those who choose love over fear.
          </p>
        </div>
      </div>
    </footer>
  );
}
