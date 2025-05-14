
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TrailerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrailerModal = ({ open, onOpenChange }: TrailerModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-hogwarts-gold">Harry Potter: The Enchanted Legacy - Official Trailer</DialogTitle>
          <DialogDescription>
            Experience the magic of the next chapter in the wizarding world.
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full">
          {/* Replace with actual trailer when available */}
          <div className="h-full w-full bg-hogwarts-midnight/80 flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-hogwarts-gold text-2xl font-serif mb-4">Coming Soon</h3>
              <p className="text-white/80">
                The official trailer will be revealed on June 15, 2025.
                Subscribe to our newsletter to be the first to see it!
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailerModal;
