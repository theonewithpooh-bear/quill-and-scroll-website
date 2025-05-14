
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our magical newsletter.",
        duration: 5000,
      });
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-b from-hogwarts-purple/70 to-hogwarts-midnight">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-hogwarts-midnight/80 backdrop-blur-sm border border-hogwarts-gold/30 rounded-xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:flex-1">
              <div className="mb-2 inline-block p-2 bg-hogwarts-gold/20 rounded-full">
                <Mail className="w-6 h-6 text-hogwarts-gold" />
              </div>
              <h2 className="text-3xl font-bold text-hogwarts-gold mb-4">Stay Updated</h2>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for exclusive content, early access to events, 
                and magical updates about "Harry Potter: The Enchanted Legacy".
              </p>
              
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-hogwarts-gold">✦</span>
                  <span>Early access to chapter previews</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hogwarts-gold">✦</span>
                  <span>Behind-the-scenes content</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hogwarts-gold">✦</span>
                  <span>Exclusive author interviews</span>
                </li>
              </ul>
            </div>
            
            <div className="md:flex-1 w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-hogwarts-gold/30 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="w-4 h-4 rounded border-hogwarts-gold/50 text-hogwarts-gold focus:ring-hogwarts-gold/50" 
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-white/70">
                    I agree to receive updates about the book and related events.
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="magic-btn w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe to the Magic'
                  )}
                </Button>
                
                <p className="text-xs text-white/50 text-center">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
