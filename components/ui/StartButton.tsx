'use client';

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useStartupSound } from '@/hooks/useStartupSound';
import { useTimelineStore } from '@/hooks/useTimelineStore';
import { ERA_LIST } from '@/lib/constants';

interface StartButtonProps {
  era: string;
  onNext?: () => void;
  className?: string;
}

export const StartButton: React.FC<StartButtonProps> = ({ era, onNext, className = '' }) => {
  const { play } = useStartupSound();
  const { unlockAudio } = useTimelineStore();

  const handleClick = useCallback(() => {
    // Unlock audio context on first interaction
    unlockAudio();
    
    // Play startup sound
    play(era as any);
    
    // Trigger next section after sound starts
    if (onNext) {
      setTimeout(() => {
        onNext();
      }, 300);
    }
  }, [unlockAudio, play, era, onNext]);

  const getButtonStyle = () => {
    switch (era) {
      case '95':
      case '98':
      case 'me':
        return {
          background: 'linear-gradient(to bottom, #c0c0c0 0%, #a0a0a0 50%, #808080 100%)',
          border: '2px outset #c0c0c0',
          borderRadius: '0px',
          padding: '4px 16px',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px',
          color: '#000000'
        };
      case 'xp':
        return {
          background: 'linear-gradient(to bottom, #3d95d4 0%, #1f5f9f 100%)',
          border: '1px solid #1e5492',
          borderRadius: '6px',
          padding: '6px 20px',
          fontFamily: 'Tahoma, sans-serif',
          fontSize: '11px',
          color: '#ffffff'
        };
      case 'vista':
      case '7':
        return {
          background: 'linear-gradient(to bottom, #4da6ff 0%, #0078d4 100%)',
          border: '1px solid #005a9e',
          borderRadius: '4px',
          padding: '6px 20px',
          fontFamily: 'Segoe UI, sans-serif',
          fontSize: '12px',
          color: '#ffffff'
        };
      case '8':
        return {
          background: 'linear-gradient(to bottom, #00bcf2 0%, #0078d4 100%)',
          border: 'none',
          borderRadius: '0px',
          padding: '8px 24px',
          fontFamily: 'Segoe UI, sans-serif',
          fontSize: '14px',
          color: '#ffffff'
        };
      case '10':
      case '11':
        return {
          background: 'linear-gradient(to bottom, #0078d4 0%, #005a9e 100%)',
          border: '1px solid #004578',
          borderRadius: '4px',
          padding: '6px 20px',
          fontFamily: 'Segoe UI Variable, Segoe UI, sans-serif',
          fontSize: '12px',
          color: '#ffffff'
        };
      default:
        return {
          background: '#000000',
          border: '1px solid #ffffff',
          borderRadius: '0px',
          padding: '4px 16px',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: '#ffffff'
        };
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        flex items-center justify-center gap-2
        transition-all duration-200
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400
        ${className}
      `}
      style={getButtonStyle()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Start ${era} experience`}
    >
      {era === '95' || era === '98' || era === 'me' ? (
        <>
          <div className="w-4 h-4 bg-green-500" style={{ 
            clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' 
          }} />
          <span className="font-bold">Start</span>
        </>
      ) : era === 'xp' ? (
        <>
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-blue-500" />
          <span>Start</span>
        </>
      ) : era === '8' ? (
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm" />
        </div>
      ) : (
        <>
          <div className="w-4 h-4 bg-white rounded" />
          <span>Start</span>
        </>
      )}
    </motion.button>
  );
};