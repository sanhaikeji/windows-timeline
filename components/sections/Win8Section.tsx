'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { MetroTile } from '@/components/ui/MetroTile';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations/variants';
import { METRO_TILES } from '@/lib/constants';

interface Win8SectionProps {
  onNext?: () => void;
}

export const Win8Section: React.FC<Win8SectionProps> = ({ onNext }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="8" id="win8">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="8" inView={true}>
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
            {/* Start Screen */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-white">Start</h1>
                <div className="flex items-center gap-4">
                  <div className="text-white/80 text-sm">Administrator</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full" />
                </div>
              </div>

              {/* Metro Tiles Grid */}
              <div className="flex-1 grid grid-cols-6 gap-4 auto-rows-min">
                {METRO_TILES.map((tile, index) => (
                  <MetroTile
                    key={tile.id}
                    title={tile.title}
                    color={tile.color}
                    size={index % 5 === 0 ? 'large' : 'medium'}
                    index={index}
                  />
                ))}
              </div>

              {/* Bottom section */}
              <div className="mt-8 flex items-center justify-between">
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Windows 8
                  </h2>
                  <p className="text-white/80 mb-4">
                    The Modern Era (2012)
                  </p>
                  <p className="text-sm text-white/60 max-w-md">
                    The first Windows designed for touch, with the revolutionary Metro interface
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                >
                  <StartButton era="8" onNext={onNext} />
                </motion.div>
              </div>
            </motion.div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
};