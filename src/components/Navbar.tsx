
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Home, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/MobileMenu";

// Define nav links once for reuse
const navLinks = [
  { href: "#home", label: "Home", icon: <Home className="w-4 h-4" /> },
  { href: "#book", label: "Book", icon: <BookOpen className="w-4 h-4" /> },
  { href: "#characters", label: "Characters", icon: <User className="w-4 h-4" /> },
  { href: "#events", label: "Events", icon: <Calendar className="w-4 h-4" /> },
  { href: "#newsletter", label: "Newsletter", icon: <Mail className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-hogwarts-midnight/90 backdrop-blur-md py-2 shadow-md" 
        : "bg-transparent py-4"
    )}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/images/hp-logo.svg" 
            alt="Harry Potter: The Enchanted Legacy Logo" 
            className="w-10 h-10" 
          />
          <span className="text-xl font-serif font-bold text-hogwarts-gold">The Enchanted Legacy</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.href}
              href={link.href} 
              icon={link.icon}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button className="magic-btn">Pre-Order Now</Button>
        </div>
        
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
};

const NavLink = ({ 
  children, 
  href, 
  icon 
}: { 
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-1 text-white hover:text-hogwarts-gold transition-colors relative group"
    >
      {icon && <span>{icon}</span>}
      <span className="sparkle-effect">{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hogwarts-gold transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default Navbar;
