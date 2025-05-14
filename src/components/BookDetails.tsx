
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Star } from "lucide-react";
import FirstChapterModal from "@/components/FirstChapterModal";

const BookDetails = () => {
  const [chapterOpen, setChapterOpen] = useState(false);

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-hogwarts-midnight to-hogwarts-purple/90">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hogwarts-gold mb-4">The Next Chapter Begins</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Dive into a new adventure with Harry Potter and discover what lies beyond the pages
            of the original series in this exciting new installment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-hogwarts-gold to-hogwarts-purple rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[2/3] max-w-sm mx-auto overflow-hidden rounded-lg shadow-2xl shadow-hogwarts-purple/50">
              <img 
                src="/images/book-cover.webp" 
                alt="Harry Potter: The Enchanted Legacy Book Cover" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-hogwarts-midnight/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-hogwarts-gold">Harry Potter</h3>
                  <p className="text-white">The Enchanted Legacy</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-1 mb-4">
              <Star className="w-5 h-5 fill-hogwarts-gold text-hogwarts-gold" />
              <Star className="w-5 h-5 fill-hogwarts-gold text-hogwarts-gold" />
              <Star className="w-5 h-5 fill-hogwarts-gold text-hogwarts-gold" />
              <Star className="w-5 h-5 fill-hogwarts-gold text-hogwarts-gold" />
              <Star className="w-5 h-5 fill-hogwarts-gold text-hogwarts-gold" />
              <span className="ml-2 text-white text-sm">Based on early reviews</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">About the Book</h3>
            
            <div className="space-y-6 text-white/80">
              <p>
                Twenty years after the Battle of Hogwarts, a new magical threat emerges from the shadows. 
                Harry Potter, now Head of Magical Law Enforcement, must confront a mystery that ties directly 
                to his own past and threatens the peaceful world he helped build.
              </p>
              <p>
                With familiar faces and new allies, Harry embarks on a journey that will challenge everything 
                he thought he knew about magic, legacy, and the true meaning of power.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-hogwarts-midnight/50 p-4 rounded-lg">
                  <h4 className="font-serif text-hogwarts-gold mb-2">Release Date</h4>
                  <p className="text-white">July 31, 2025</p>
                </div>
                <div className="bg-hogwarts-midnight/50 p-4 rounded-lg">
                  <h4 className="font-serif text-hogwarts-gold mb-2">Publisher</h4>
                  <p className="text-white">Bloomsbury Publishing</p>
                </div>
                <div className="bg-hogwarts-midnight/50 p-4 rounded-lg">
                  <h4 className="font-serif text-hogwarts-gold mb-2">Pages</h4>
                  <p className="text-white">576 pages</p>
                </div>
                <div className="bg-hogwarts-midnight/50 p-4 rounded-lg">
                  <h4 className="font-serif text-hogwarts-gold mb-2">Format</h4>
                  <p className="text-white">Hardcover, eBook, Audiobook</p>
                </div>
              </div>
              
              <div className="pt-8">
                <Button 
                  className="magic-btn flex items-center gap-2"
                  onClick={() => setChapterOpen(true)}
                >
                  <BookOpen className="w-5 h-5" /> Read First Chapter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FirstChapterModal open={chapterOpen} onOpenChange={setChapterOpen} />
    </section>
  );
};

export default BookDetails;
