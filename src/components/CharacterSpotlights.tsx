
import React from 'react';
import { cn } from "@/lib/utils";

const characters = [
  {
    id: 1,
    name: "Harry Potter",
    role: "Head of Magical Law Enforcement",
    description: "Now in his forties, Harry leads the wizarding world's law enforcement while mentoring the next generation of wizards.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Lila Nightshade",
    role: "Mysterious Newcomer",
    description: "A powerful witch with unknown intentions whose appearance coincides with strange magical anomalies.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Albus Potter",
    role: "Young Wizard",
    description: "Harry's son finds himself caught between his father's legacy and a new magical conspiracy threatening their world.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  }
];

const CharacterSpotlights = () => {
  const [activeCharacter, setActiveCharacter] = React.useState(1);

  return (
    <section id="characters" className="py-20 bg-gradient-to-b from-hogwarts-purple/90 to-hogwarts-midnight">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hogwarts-gold mb-4">Character Spotlights</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Meet the key characters in "The Enchanted Legacy" and discover their roles in the next chapter of the wizarding world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => setActiveCharacter(character.id)}
              className={cn(
                "text-left p-4 rounded-lg transition-all",
                activeCharacter === character.id
                  ? "bg-hogwarts-gold/20 border border-hogwarts-gold"
                  : "bg-hogwarts-midnight/50 border border-transparent hover:bg-hogwarts-midnight/80"
              )}
            >
              <h3 className={cn(
                "text-xl font-serif mb-1",
                activeCharacter === character.id ? "text-hogwarts-gold" : "text-white"
              )}>
                {character.name}
              </h3>
              <p className="text-white/70 text-sm">{character.role}</p>
            </button>
          ))}
        </div>
        
        {characters.map((character) => (
          <div
            key={character.id}
            className={cn(
              "grid md:grid-cols-2 gap-8 items-center transition-opacity duration-500",
              activeCharacter === character.id ? "opacity-100" : "opacity-0 hidden"
            )}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-hogwarts-gold to-hogwarts-purple rounded-lg blur opacity-20"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-hogwarts-gold mb-2">{character.name}</h3>
              <p className="text-xl text-white/80 mb-6">{character.role}</p>
              <div className="prose prose-lg text-white/80">
                <p>{character.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae 
                  vestibulum vestibulum. Cras porttitor augue at velit tempus, id tincidunt ipsum 
                  molestie. Duis imperdiet risus nec enim gravida dignissim.
                </p>
                <p>
                  "Magic is not just about power; it's about understanding the connections between all living things."
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterSpotlights;
