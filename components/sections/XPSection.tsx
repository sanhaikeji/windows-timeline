'use client';

import React, { useRef, useState } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, bloomPulse } from '@/lib/animations/variants';
import { WallpaperMorph } from '@/components/canvas/WallpaperMorph';
import { ParticleExplosion } from '@/components/canvas/ParticleExplosion';
import { Canvas } from '@react-three/fiber';

interface XPSectionProps {
  onNext?: () => void;
}

export const XPSection: React.FC<XPSectionProps> = ({ onNext }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showExplosion, setShowExplosion] = useState(false);

  const handleStartClick = () => {
    setShowExplosion(true);
    setTimeout(() => {
      setShowExplosion(false);
      if (onNext) onNext();
    }, 1500);
  };

  return (
    <Section ref={sectionRef} era="xp" id="xp">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="xp" inView={true}>
          <div className="w-full h-full relative">
            {/* Wallpaper Canvas */}
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              className="absolute inset-0"
            >
              <WallpaperMorph
                fromTexture="/wallpapers/me-clouds.webp"
                toTexture="/wallpapers/xp-bliss.webp"
                progress={1}
                trigger={showExplosion}
              />
              {showExplosion && (
                <ParticleExplosion
                  trigger={showExplosion}
                  color="#228b22"
                  count={2048}
                />
              )}
            </Canvas>

            {/* Desktop Content */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="absolute top-4 left-4 text-center"
              >
                <motion.div
                  variants={bloomPulse}
                  initial="idle"
                  animate="pulse"
                  className="w-16 h-16 bg-green-400/20 backdrop-blur-sm rounded mb-2 flex items-center justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded" />
                </motion.div>
                <span className="text-white text-xs font-semibold drop-shadow-lg">
                  My Computer
                </span>
              </motion.div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-24 text-center"
              >
                <div className="w-16 h-16 bg-yellow-400/20 backdrop-blur-sm rounded mb-2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded" />
                </div>
                <span className="text-white text-xs font-semibold drop-shadow-lg">
                  Recycle Bin
                </span>
              </motion.div>

              {/* Taskbar */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-sm border-t border-white/20 flex items-center px-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded" />
                  <span className="text-white text-xs">Start</span>
                </div>
              </motion.div>

              {/* Welcome message */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto"
              >
                <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  Windows XP
                </h1>
                <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                  The Digital Dawn (2001)
                </p>
                
                <motion.div
                  className="flex flex-col items-center gap-4"
                >
                  <StartButton era="xp" onNext={handleStartClick} />
                  
                  <p className="text-sm text-white/70">
                    Experience the iconic Bliss wallpaper
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
};