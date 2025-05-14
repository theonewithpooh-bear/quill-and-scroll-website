
import React from 'react';
import { cn } from "@/lib/utils";

const characters = [
  {
    id: 1,
    name: "Harry Potter",
    role: "Head of Magical Law Enforcement",
    description: "Now in his forties, Harry leads the wizarding world's law enforcement while mentoring the next generation of wizards. Though the scar on his forehead has faded to a thin line, the memories of his past battles still haunt him, especially as new threats emerge that seem connected to his own history.",
    image: "/images/character-harry.webp",
    quote: "Magic is not just about power; it's about the responsibility we have to those we protect.",
  },
  {
    id: 2,
    name: "Lila Nightshade",
    role: "Mysterious Newcomer",
    description: "A powerful witch whose sudden appearance coincides with strange magical anomalies across Britain. Her exceptional abilities and knowledge of ancient magic raise questions about her true identity and intentions. Some believe she may hold the key to unlocking secrets that were meant to remain buried.",
    image: "/images/character-lila.webp",
    quote: "The old magic never truly disappeared; it merely waited for those worthy to wield it once more.",
  },
  {
    id: 3,
    name: "Albus Potter",
    role: "Young Wizard",
    description: "Harry's middle child finds himself caught between his father's overwhelming legacy and his own desire to forge a unique path. When he discovers an ancient artifact that responds only to his touch, Albus must decide whether to embrace his birthright or continue to resist it.",
    image: "/images/character-albus.webp",
    quote: "Everyone expects me to be exactly like my father, but what if I'm meant to be something else entirely?",
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
                  loading="lazy"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-hogwarts-gold mb-2">{character.name}</h3>
              <p className="text-xl text-white/80 mb-6">{character.role}</p>
              <div className="prose prose-lg text-white/80">
                <p>{character.description}</p>
                <p className="mt-6 italic">
                  "{character.quote}"
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
