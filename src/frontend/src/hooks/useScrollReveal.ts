import { useEffect, useState, type RefObject } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { threshold = 0.2, rootMargin = '0px' } = options;

  useEffect(() => {
    // If user prefers reduced motion, show content immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, prefersReducedMotion]);

  return isVisible;
}
