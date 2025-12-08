import { useState, useEffect } from 'react';
import { Settings, X } from 'lucide-react';

export function AccessibilityToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [reducedMotion]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:border-primary transition-all duration-300"
        aria-label="Accessibility settings"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Settings className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-card border border-border rounded-2xl shadow-xl p-6 animate-fade-up">
          <h3 className="font-serif font-medium text-foreground mb-4">
            Accessibility
          </h3>

          <div className="space-y-4">
            {/* Reduce motion toggle */}
            <label className="flex items-center justify-between cursor-pointer group">
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Reduce animations
              </span>
              <button
                role="switch"
                aria-checked={reducedMotion}
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                  reducedMotion ? 'bg-primary' : 'bg-border'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-primary-foreground transition-transform duration-300 ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </label>

            <p className="text-xs text-muted-foreground">
              This will reduce all motion effects on the site for a calmer experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
