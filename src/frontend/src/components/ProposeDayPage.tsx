import { useState, useRef, useEffect } from 'react';
import Section from './Section';
import RoseDecorations from './RoseDecorations';
import FinalReveal from './FinalReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Heart, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

export default function ProposeDayPage() {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Music controls state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  // Update audio volume when volume state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Cleanup fade interval on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current !== null) {
        cancelAnimationFrame(fadeIntervalRef.current);
      }
    };
  }, []);

  const fadeInAudio = () => {
    if (!audioRef.current) return;

    const targetVolume = isMuted ? 0 : volume;
    
    // If reduced motion is preferred, skip fade or use very short duration
    const fadeDuration = prefersReducedMotion ? 300 : 2000; // 0.3s vs 2s
    const startTime = performance.now();
    const startVolume = 0;

    const animate = (currentTime: number) => {
      if (!audioRef.current) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / fadeDuration, 1);
      
      // Ease-in-out curve for smoother fade
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const currentVolume = startVolume + (targetVolume - startVolume) * easedProgress;
      audioRef.current.volume = currentVolume;

      if (progress < 1) {
        fadeIntervalRef.current = requestAnimationFrame(animate);
      } else {
        fadeIntervalRef.current = null;
      }
    };

    // Cancel any existing fade
    if (fadeIntervalRef.current !== null) {
      cancelAnimationFrame(fadeIntervalRef.current);
    }

    // Start fade-in
    audioRef.current.volume = 0;
    fadeIntervalRef.current = requestAnimationFrame(animate);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // Cancel fade if pausing mid-fade
        if (fadeIntervalRef.current !== null) {
          cancelAnimationFrame(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        fadeInAudio();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-cream via-blush-light to-rose-soft -z-10" />
      <div 
        className="fixed inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: 'url(/assets/generated/rose-pattern-subtle.dim_2048x2048.png)',
          backgroundSize: '512px 512px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Rose decorations */}
      <RoseDecorations />

      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/assets/audio/chaar-kadam-male-portion.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />

      {/* Music Controls - Fixed position */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-sm rounded-2xl shadow-romantic p-4 border border-rose-medium/20">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className="h-10 w-10 rounded-full hover:bg-rose-soft/50 text-rose-deep"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>
          
          <div className="flex items-center gap-2 min-w-[120px]">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="h-8 w-8 rounded-full hover:bg-rose-soft/50 text-rose-deep"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            
            <Slider
              value={[isMuted ? 0 : volume]}
              onValueChange={handleVolumeChange}
              max={1}
              step={0.01}
              className="w-20"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          
          {/* Hero / Poetic Introduction */}
          <Section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-32">
            <div className="space-y-8">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-rose-deep leading-tight tracking-tight">
                Happy Propose Day
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-rose-medium/80 max-w-2xl mx-auto leading-relaxed italic">
                I propose you to take acre of you for the rest of our lives and even after, Te amo mi chica de ensueño
              </p>
              <div className="pt-8">
                <div className="inline-block w-16 h-[1px] bg-gradient-to-r from-transparent via-rose-medium to-transparent" />
              </div>
              
              {/* Animated Teddy Bear with Rose Bouquet */}
              <div className="pt-12 flex justify-center">
                <img
                  src="/assets/generated/teddy-bear-rose-bouquet.dim_768x768.png"
                  alt="Teddy bear holding a rose bouquet"
                  className={`w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain ${
                    prefersReducedMotion ? '' : 'animate-teddy-sway'
                  }`}
                />
              </div>
            </div>
          </Section>

          {/* Love Letter Section */}
          <Section className="py-24 sm:py-32">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-rose-deep text-center mb-12 flex items-center justify-center gap-3">
                Meri Makhan Mishri
                <Heart 
                  className={`w-8 h-8 sm:w-10 sm:h-10 text-rose-medium fill-rose-medium ${
                    prefersReducedMotion ? '' : 'animate-heart-float'
                  }`}
                  aria-hidden="true"
                />
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-rose-dark/90 leading-relaxed">
                <p className="text-lg sm:text-xl font-light">
                  I was searching the long lost peace which I didn't find even in the presence of my parents, but as I grew up I found a lil of it in the temple where I used to act like a complete idiot when  I was a kid. I got into Gods and tales there was a time I used to call myself an Avatar of God, funny right?
                </p>
                <p className="text-lg sm:text-xl font-light">
                  Its just I felt like I found myself happy from the very core of my heart when I was unbothered by the world and lost in the peace resides deep in my heart. Its true that I was in the plans of shifting to Himalayas and I used to listen and relate to that song which goes like, 'maybe my soul mate died or I don't have a soul.' I was completely prepared of earning a load of fortune then giving it o my parents and then going to meditate in the caves of Himalaya, and the first step of the plan was to succesfully completing 12th and after that just hustling my ass off to vanish from existence. Luckily you came on the perfect time or else we would've met a couple of years later.
                </p>
                <p className="text-lg sm:text-xl font-light">
                  Yes even though I would've been in Himalayas  destiny would've brought together again, again and again. It won't stop doing intentional coincidences, planned accidents and heartful mischief cuz for how long can a soul remain away from itself. I used to think that why do people change in love but now I know, people don't change, the change is the outcome of a soul reuniting and becoming one again. The way I am merged in you once and for all my soul.
                </p>
              </div>
            </div>
          </Section>

          {/* Final Proposal Section */}
          <Section className="py-24 sm:py-32 pb-40">
            <div className="space-y-16 text-center">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-rose-deep leading-tight">
                  Will You Be Mine?
                </h2>
                <p className="font-serif text-xl sm:text-2xl text-rose-medium/90 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                  {`Bin puchhe mera naam aur pata
Rasmon ko rakh ke pare
Chaar kadam bas chaar kadam
Chal do na saath mere`}
                </p>
              </div>
              
              <FinalReveal 
                isRevealed={showFinalMessage}
                onReveal={() => setShowFinalMessage(true)}
              />
            </div>
          </Section>

          {/* Footer */}
          <footer className="py-12 text-center border-t border-rose-medium/20">
            <p className="text-sm text-rose-medium/60">
              © 2026. Built with love using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-rose-medium transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
