import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function RoseDecorations() {
  const topLeftRef = useRef<HTMLDivElement | null>(null);
  const bottomRightRef = useRef<HTMLDivElement | null>(null);
  
  const topLeftVisible = useScrollReveal(topLeftRef, { threshold: 0.1 });
  const bottomRightVisible = useScrollReveal(bottomRightRef, { threshold: 0.1 });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      {/* Top left corner rose */}
      <div
        ref={topLeftRef}
        className="fixed top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 pointer-events-none z-0 transition-opacity duration-1500 ease-out"
        style={{ opacity: topLeftVisible ? 0.4 : 0 }}
        aria-hidden="true"
      >
        <img
          src="/assets/generated/rose-corner-top-left.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom right corner rose */}
      <div
        ref={bottomRightRef}
        className="fixed bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 pointer-events-none z-0 transition-opacity duration-1500 ease-out"
        style={{ opacity: bottomRightVisible ? 0.4 : 0 }}
        aria-hidden="true"
      >
        <img
          src="/assets/generated/rose-corner-bottom-right.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Flowing rose petals overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
        aria-hidden="true"
      >
        {/* Generate multiple petals with different animations */}
        {!prefersReducedMotion ? (
          <>
            {[...Array(15)].map((_, i) => (
              <img
                key={i}
                src="/assets/generated/rose-petal-single.dim_256x256.png"
                alt=""
                className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-30"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: `-${10 + (i % 3) * 5}%`,
                  animation: `petal-fall-${(i % 3) + 1} ${12 + (i % 5) * 2}s linear infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </>
        ) : (
          // Static petals for reduced motion
          <>
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src="/assets/generated/rose-petal-single.dim_256x256.png"
                alt=""
                className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-20"
                style={{
                  left: `${(i * 12) % 100}%`,
                  top: `${(i * 15) % 80}%`,
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
