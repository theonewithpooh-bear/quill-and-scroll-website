
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Book, User, Mail, Menu } from "lucide-react";

interface MobileMenuProps {
  navLinks: {
    href: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-hogwarts-gold" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-hogwarts-midnight border-hogwarts-purple w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-hogwarts-gold font-serif">
            <div className="flex items-center gap-2">
              <img src="/images/hp-logo.svg" alt="Harry Potter: The Enchanted Legacy Logo" className="w-8 h-8" />
              <span>The Enchanted Legacy</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 px-2 py-3 rounded-md text-white hover:bg-hogwarts-purple/20 transition-colors"
                >
                  <span className="text-hogwarts-gold">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8">
          <Button className="w-full magic-btn">Pre-Order Now</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
