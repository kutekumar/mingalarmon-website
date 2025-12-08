import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Sparkles } from 'lucide-react';

export function JoinSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} className="py-32 bg-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-foreground">
              Be Part of Something Rare
            </h2>
            <p className="text-muted-foreground mt-4">
              Join our community of creators, visionaries, and authenticity seekers.
            </p>
          </div>

          {/* Form or Success State */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    I am a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formState.role}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="consumer">Discerning Consumer</option>
                    <option value="restaurant">Restaurant Owner</option>
                    <option value="agency">Agency Professional</option>
                    <option value="creator">Creator / Entrepreneur</option>
                    <option value="curious">Simply Curious</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join the Waitlist'
                  )}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessMessage() {
  return (
    <div className="text-center py-12 animate-fade-up">
      {/* Success icon */}
      <div className="relative inline-block mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-breathe">
          <Check className="w-10 h-10 text-primary" />
        </div>
        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold animate-float" />
        <Sparkles className="absolute -bottom-1 -left-3 w-4 h-4 text-gold animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
        Welcome to the Journey
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        You're now part of something rare. We'll be in touch soon with exclusive updates 
        and early access opportunities.
      </p>

      <div className="mt-8 flex justify-center">
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </div>
  );
}
