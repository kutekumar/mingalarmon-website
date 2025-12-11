import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { EnhancedNav } from '@/components/sanctuary/EnhancedNav';
import { Footer } from '@/components/sanctuary/Footer';
import { AccessibilityToggle } from '@/components/sanctuary/AccessibilityToggle';
import { Check, Sparkles, Send, Mail, User, Phone, Calendar, Lightbulb, Heart, Users, Shield } from 'lucide-react';
import { toast } from 'sonner';

const Visionaries = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectIdea: '',
    preferredTime: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('MingalarMon Visionaries: New Collaboration Request');
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\nProject Idea:\n${formState.projectIdea}\n\nPreferred Meeting Time:\n${formState.preferredTime}`
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Enhanced Navigation */}
      <EnhancedNav />
      
      {/* Main content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                For Young Visionaries
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                Where Ideas Meet
                <span className="block text-gradient">Gentle Support</span>
              </h1>
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                You have the vision and the skills. We provide the guidance and support to bring your dreams to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section
          ref={contentRef}
          className="py-20 md:py-32 relative overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Love Over Fear: Your Creative Journey
                </h2>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  We understand that many talented young creators feel overwhelmed by complex apps and difficult tools. 
                  Your ideas deserve to be heard, and your skills deserve to be shared with the world.
                </p>
              </div>

              {/* Value Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  {
                    icon: Lightbulb,
                    title: "Design Guidance",
                    description: "Simple, clear design advice that makes your ideas shine"
                  },
                  {
                    icon: Users,
                    title: "Marketing Support",
                    description: "Help your work reach the people who need it most"
                  },
                  {
                    icon: Heart,
                    title: "Product Clarity",
                    description: "Turn complex ideas into simple, beautiful solutions"
                  },
                  {
                    icon: Shield,
                    title: "Accessibility",
                    description: "Make your work welcoming to everyone, everywhere"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover-lift text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                  A Safe and Friendly Partner
                </h3>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  At MingalarMon, we believe in making technology feel human. We're here to guide you through every step, 
                  ensuring your experience is smooth, understandable, and empowering. No jargon, no complexity—just genuine support.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section
          ref={formRef}
          className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl animate-float" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                  Let's Create Together
                </h2>
                <p className="font-serif text-lg text-muted-foreground">
                  Ready to bring your vision to life? Schedule a friendly chat with our team.
                </p>
              </div>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {/* Phone */}
                      <div className="group">
                        <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                          <Phone className="w-4 h-4 text-primary" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                          placeholder="+44 123 456 7890"
                        />
                      </div>

                      {/* Preferred Time */}
                      <div className="group">
                        <label htmlFor="preferredTime" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                          <Calendar className="w-4 h-4 text-primary" />
                          Preferred Meeting Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formState.preferredTime}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a time</option>
                          <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                          <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                          <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                          <option value="Weekend">Weekend</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Idea */}
                    <div className="mt-6 group">
                      <label htmlFor="projectIdea" className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                        <Lightbulb className="w-4 h-4 text-primary" />
                        Tell us about your project idea
                      </label>
                      <textarea
                        id="projectIdea"
                        name="projectIdea"
                        value={formState.projectIdea}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder="Share your vision, dreams, and what you'd like to create..."
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          Send Your Vision
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    We'll respond within 48 hours to schedule your consultation.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Encouraging Note */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
                <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                    Every Big Change Begins With a Small Step
                  </h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                    Your creative journey matters. We're here to support you every step of the way, 
                    making technology feel human and accessible. Together, we'll turn your vision into reality.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Accessibility toggle */}
      <AccessibilityToggle />
    </div>
  );
};

function SuccessMessage() {
  return (
    <div className="text-center py-16 animate-fade-up bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50">
      {/* Success icon */}
      <div className="relative inline-block mb-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-breathe">
          <Check className="w-12 h-12 text-primary" />
        </div>
        <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-primary animate-float" />
        <Sparkles className="absolute -bottom-2 -left-4 w-5 h-5 text-primary animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
        Thank You for Reaching Out
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed px-6">
        We've received your vision and will be in touch within 48 hours to schedule our first chat. 
        Your creative journey starts now!
      </p>

      <div className="mt-10 flex justify-center">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </div>
  );
}

export default Visionaries;