
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BookDetails from '@/components/BookDetails';
import CharacterSpotlights from '@/components/CharacterSpotlights';
import EventCalendar from '@/components/EventCalendar';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BookDetails />
      <CharacterSpotlights />
      <EventCalendar />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
