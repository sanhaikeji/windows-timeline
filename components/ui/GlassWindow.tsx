'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { windowEntrance } from '@/lib/animations/variants';

interface GlassWindowProps {
  children: React.ReactNode;
  era: string;
  className?: string;
  inView?: boolean;
}

export const GlassWindow = forwardRef<HTMLDivElement, GlassWindowProps>(
  ({ children, era, className = '', inView = false }, ref) => {
    const borderRadius = {
      dos: '0px',
      '95': '2px',
      '98': '2px',
      me: '4px',
      xp: '8px',
      vista: '12px',
      '7': '8px',
      '8': '0px',
      '10': '8px',
      '11': '12px'
    }[era] || '8px';

    return (
      <motion.div
        ref={ref}
        variants={windowEntrance}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`
          relative w-full max-w-4xl aspect-[4/3]
          bg-black/20 backdrop-blur-xl border border-white/10
          overflow-hidden shadow-2xl
          ${className}
        `}
        style={{
          borderRadius,
          background: `
            linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%),
            rgba(0,0,0,0.3)
          `,
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)'
        }}
      >
        {/* Window chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center px-4 z-10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>
        
        {/* Content area */}
        <div className="absolute inset-0 pt-8">
          {children}
        </div>

        {/* Acrylic effect overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120,119,198,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>
    );
  }
);

GlassWindow.displayName = 'GlassWindow';