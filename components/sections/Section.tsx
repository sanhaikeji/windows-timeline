'use client';

import React, { forwardRef, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTimelineStore } from '@/hooks/useTimelineStore';

interface SectionProps {
  children: React.ReactNode;
  era: string;
  className?: string;
  id?: string;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, era, className = '', id }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const sectionRef = (ref as React.Ref<HTMLDivElement>) || internalRef;
    
    const inView = useInView(sectionRef as React.RefObject<HTMLElement>, {
      amount: 0.5,
      once: false
    });
    
    const { setActiveEra } = useTimelineStore();

    // Update active era when section comes into view
    useEffect(() => {
      if (inView) {
        setActiveEra(era);
      }
    }, [inView, era, setActiveEra]);

    return (
      <section
        ref={sectionRef}
        id={id}
        data-era={era}
        className={`
          relative w-full min-h-screen flex items-center justify-center
          p-4 md:p-8 overflow-hidden
          ${className}
        `}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';