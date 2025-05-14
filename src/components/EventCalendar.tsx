
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Book Launch Party",
    date: "July 31, 2025",
    location: "Waterstones, London",
    description: "Join us for the official launch of 'Harry Potter: The Enchanted Legacy' with special guests and magical activities.",
    time: "7:00 PM GMT",
  },
  {
    id: 2,
    title: "Author Signing Event",
    date: "August 2, 2025",
    location: "Barnes & Noble, New York",
    description: "Meet the author and get your copy signed. Limited tickets available.",
    time: "4:00 PM EST",
  },
  {
    id: 3,
    title: "Virtual Reading & Q&A",
    date: "August 7, 2025",
    location: "Online Livestream",
    description: "A virtual reading from the book followed by an exclusive Q&A session with the author and cast.",
    time: "12:00 PM PST",
  },
  {
    id: 4,
    title: "Wizarding World Exhibition",
    date: "August 15-30, 2025",
    location: "British Library, London",
    description: "A special exhibition featuring props, costumes, and artifacts from the Wizarding World, including new items from 'The Enchanted Legacy'.",
    time: "10:00 AM - 6:00 PM Daily",
  }
];

const EventCalendar = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-hogwarts-midnight to-hogwarts-purple/70">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hogwarts-gold mb-4">Upcoming Events</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join us for magical events celebrating the launch of "Harry Potter: The Enchanted Legacy" around the world.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="sticky top-20">
              <div className="bg-hogwarts-midnight/80 backdrop-blur-sm border border-hogwarts-purple/30 p-8 rounded-lg shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-hogwarts-gold" />
                  <h3 className="text-2xl font-serif text-white">Event Calendar</h3>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p>
                    The launch of "Harry Potter: The Enchanted Legacy" will be celebrated with a series of 
                    magical events across the globe. From exclusive readings to immersive experiences, 
                    there are many ways to join the excitement.
                  </p>
                  <p>
                    Be sure to register early as these events are expected to sell out quickly. 
                    Virtual options are available for those unable to attend in person.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button className="magic-btn w-full">View Full Calendar</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-hogwarts-midnight/60 backdrop-blur-sm border border-hogwarts-gold/20 rounded-lg overflow-hidden hover:border-hogwarts-gold/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-serif text-hogwarts-gold group-hover:text-hogwarts-gold/100 transition-colors mb-1">
                        {event.title}
                      </h4>
                      <p className="text-white/70">{event.location}</p>
                    </div>
                    <div className="bg-hogwarts-gold/20 px-3 py-1 rounded text-hogwarts-gold text-sm">
                      {event.date}
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4">{event.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">{event.time}</span>
                    <Button variant="outline" className="border-hogwarts-gold/50 text-hogwarts-gold hover:bg-hogwarts-gold/10">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
