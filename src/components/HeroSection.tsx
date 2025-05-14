
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import TrailerModal from "@/components/TrailerModal";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-hogwarts-midnight/60" />
      
      {/* Floating magical elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <span className="text-hogwarts-gold opacity-40 text-3xl">✨</span>
          </div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <div 
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block py-2 px-4 bg-hogwarts-gold text-hogwarts-midnight rounded-full text-sm font-bold mb-6">
            Coming July 31st, 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Harry Potter: 
            <span className="block text-hogwarts-gold">The Enchanted Legacy</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            The magical world awaits once more as J.K. Rowling unveils the next chapter in the beloved wizarding saga. 
            Join Harry, now Head of Magical Law Enforcement, as he faces a new threat that connects to his own past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="magic-btn text-lg">Pre-Order Now</Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-hogwarts-gold text-hogwarts-gold hover:bg-hogwarts-gold/10 text-lg"
              onClick={() => setTrailerOpen(true)}
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#book" className="text-white/70 hover:text-white transition-colors" aria-label="Scroll to book section">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      <TrailerModal open={trailerOpen} onOpenChange={setTrailerOpen} />
    </section>
  );
};

export default HeroSection;
