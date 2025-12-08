import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Sparkles, Send, Mail, User, Briefcase } from 'lucide-react';
import { toast } from 'sonner';

export function JoinSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`MingalarMon Waitlist: ${formState.role}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nRole: ${formState.role}\n\nMessage:\n${formState.message || 'No additional message'}`
      );
      
      // Open email client
      window.location.href = `mailto:kutekumar@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success after a brief delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Email client opened! Please send the email to complete your submission.');
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Join Us
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mt-4 text-foreground leading-tight">
              Be Part of
              <span className="block text-gradient">Something Rare</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
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
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                        <User className="w-4 h-4 text-primary" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mt-6 group">
                    <label htmlFor="role" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <Briefcase className="w-4 h-4 text-primary" />
                      I am a...
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formState.role}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="Discerning Consumer">Discerning Consumer</option>
                      <option value="Restaurant Owner">Restaurant Owner</option>
                      <option value="Agency Professional">Agency Professional</option>
                      <option value="Creator / Entrepreneur">Creator / Entrepreneur</option>
                      <option value="Simply Curious">Simply Curious</option>
                    </select>
                  </div>

                  {/* Message (optional) */}
                  <div className="mt-6 group">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                      <Sparkles className="w-4 h-4 text-gold" />
                      Tell us about yourself (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Share your vision or how you'd like to collaborate..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-8 btn-primary py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Preparing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        Join the Waitlist
                      </>
                    )}
                  </button>
                </div>

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
    <div className="text-center py-16 animate-fade-up bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50">
      {/* Success icon */}
      <div className="relative inline-block mb-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-breathe">
          <Check className="w-12 h-12 text-primary" />
        </div>
        <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-gold animate-float" />
        <Sparkles className="absolute -bottom-2 -left-4 w-5 h-5 text-gold animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
        Welcome to the Journey
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed px-6">
        You're now part of something rare. We'll be in touch soon with exclusive updates 
        and early access opportunities.
      </p>

      <div className="mt-10 flex justify-center">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </div>
  );
}
