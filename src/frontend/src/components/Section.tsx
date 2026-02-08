import { useRef, type ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </section>
  );
}
