import { Heart } from 'lucide-react';
import { Button } from './ui/button';

interface FinalRevealProps {
  isRevealed: boolean;
  onReveal: () => void;
}

export default function FinalReveal({ isRevealed, onReveal }: FinalRevealProps) {
  return (
    <div className="space-y-8">
      {!isRevealed ? (
        <Button
          onClick={onReveal}
          size="lg"
          className="bg-rose-medium hover:bg-rose-deep text-white px-12 py-6 text-lg font-serif rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Heart className="mr-2 h-5 w-5" />
          Say Yes
        </Button>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-6">
          <div className="inline-block p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-medium/20">
            <p className="font-serif text-2xl sm:text-3xl text-rose-deep leading-relaxed">
              Forever begins with you. ❤️
            </p>
          </div>
          <p className="text-lg text-rose-medium/80 font-light italic">
            Thank you for making me the happiest person alive.
          </p>
        </div>
      )}
    </div>
  );
}
