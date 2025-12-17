'use client';

import React, { useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { tileFlip } from '@/lib/animations/variants';

interface MetroTileProps {
  title: string;
  color: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
  icon?: React.ReactNode;
  index?: number;
}

export const MetroTile: React.FC<MetroTileProps> = ({ 
  title, 
  color, 
  size = 'medium',
  icon,
  index = 0
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect based on scroll
  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, -20 + (index * 5)]
  );

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-24 h-24';
      case 'medium':
        return 'w-48 h-24';
      case 'large':
        return 'w-48 h-48';
      case 'wide':
        return 'w-96 h-24';
      default:
        return 'w-48 h-24';
    }
  };

  return (
    <motion.div
      className={`relative ${getSizeClasses()} cursor-pointer`}
      style={{ y }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        variants={tileFlip}
        initial="idle"
        animate={isFlipped ? 'hover' : 'idle'}
        style={{
          transformStyle: 'preserve-3d',
          backgroundColor: color,
          border: '2px solid rgba(255,255,255,0.2)'
        }}
      >
        {/* Front face */}
        <div 
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-3"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-between">
            {icon || (
              <div className="w-6 h-6 bg-white/20 rounded" />
            )}
          </div>
          <h3 className="text-white font-semibold text-sm truncate">
            {title}
          </h3>
        </div>

        {/* Back face */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: color
          }}
        >
          <div className="text-white/80 text-xs text-center px-2">
            {title}
          </div>
        </div>
      </motion.div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: `0 0 20px ${color}`,
          borderRadius: 'inherit'
        }}
      />
    </motion.div>
  );
};