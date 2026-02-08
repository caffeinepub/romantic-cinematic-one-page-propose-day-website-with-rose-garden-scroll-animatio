import { useState } from 'react';
import Section from './Section';
import RoseDecorations from './RoseDecorations';
import FinalReveal from './FinalReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Heart } from 'lucide-react';

export default function ProposeDayPage() {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

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
