
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FirstChapterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FirstChapterModal = ({ open, onOpenChange }: FirstChapterModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-hogwarts-gold">Chapter One: The Head of Magical Law Enforcement</DialogTitle>
          <DialogDescription>
            An exclusive preview of the first chapter
          </DialogDescription>
        </DialogHeader>

        <div className="prose prose-lg max-w-none text-gray-200 py-4">
          <p>
            The office of the Head of Magical Law Enforcement was nothing like it had been twenty years ago. Harry Potter had seen to that when he'd taken the position five years earlier. Gone were the sterile walls and intimidating decor that had been hallmarks of the department for decades.
          </p>
          
          <p>
            Now, photographs lined the walls — not just the expected certificates and commendations, but pictures of his family: Ginny with her fiery hair caught in mid-laugh; James looking mischievous after his first year at Hogwarts; Albus, serious and thoughtful beside his cousin Rose; and little Lily, who wasn't so little anymore, waving frantically from her first broom.
          </p>
          
          <p>
            Harry ran a hand through his hair, now streaked with the occasional strand of silver, as he studied the report before him. The scar on his forehead had faded to a thin, barely noticeable line, though people still found excuses to stare at it when they thought he wouldn't notice.
          </p>

          <p className="italic">
            ...continued in the full release on July 31st, 2025.
          </p>
        </div>
        
        <DialogClose asChild>
          <Button variant="outline" className="border-hogwarts-gold text-hogwarts-gold hover:bg-hogwarts-gold/10">
            Close Preview
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default FirstChapterModal;
