'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn, bloomPulse } from '@/lib/animations/variants';

interface VistaSectionProps {
  onNext?: () => void;
}

export const VistaSection: React.FC<VistaSectionProps> = ({ onNext }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="vista" id="vista">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="vista" inView={true}>
          <motion.div
            variants={bloomPulse}
            initial="idle"
            animate="pulse"
            className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900"
            style={{
              filter: 'drop-shadow(0 0 24px #1ba1e2)'
            }}
          >
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col justify-center items-center"
            >
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                Windows Vista
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                The Visual Leap (2007)
              </p>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 max-w-lg">
                <h3 className="text-xl font-bold text-white mb-6">Aero Glass Experience</h3>
                <div className="grid grid-cols-2 gap-4 text-white/90">
                  <div>• Translucent windows</div>
                  <div>• Live thumbnails</div>
                  <div>• Flip 3D navigation</div>
                  <div>• Windows Sidebar</div>
                </div>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <StartButton era="vista" onNext={onNext} />
              </motion.div>
            </motion.div>
          </motion.div>
        </GlassWindow>
      </div>
    </Section>
  );
};