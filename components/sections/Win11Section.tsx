'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn, bloomPulse } from '@/lib/animations/variants';

interface Win11SectionProps {
  onNext?: () => void;
}

export const Win11Section: React.FC<Win11SectionProps> = ({ onNext }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="11" id="win11">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="11" inView={true}>
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
            {/* Windows 11 Desktop */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col justify-between"
            >
              {/* Desktop Icons */}
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    variants={bloomPulse}
                    initial="idle"
                    animate="pulse"
                    className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded mb-2 flex items-center justify-center mx-auto"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
                  </motion.div>
                  <span className="text-white text-sm font-semibold drop-shadow-lg">
                    This PC
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded mb-2 flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg" />
                  </div>
                  <span className="text-white text-sm font-semibold drop-shadow-lg">
                    Recycle Bin
                  </span>
                </motion.div>
              </div>

              {/* Center Content */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <motion.h1 
                  className="text-8xl font-bold text-white mb-4 drop-shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Windows 11
                </motion.h1>
                <p className="text-2xl text-white/90 mb-6 drop-shadow-lg">
                  The Future is Here (2021)
                </p>
                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                  A new era of Windows with centered design, enhanced productivity, and seamless integration
                </p>
                
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                >
                  <StartButton era="11" onNext={onNext} />
                </motion.div>
              </motion.div>

              {/* Taskbar */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.9 }}
                className="h-12 bg-white/10 backdrop-blur-xl border-t border-white/20 rounded-b-lg flex items-center justify-center px-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-24 h-2 bg-white/20 rounded" />
                    <div className="w-16 h-2 bg-white/20 rounded" />
                    <div className="w-20 h-2 bg-white/20 rounded" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
                  `,
                  backgroundSize: '100% 100%'
                }} 
              />
            </div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
};