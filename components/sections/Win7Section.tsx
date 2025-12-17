'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations/variants';

interface Win7SectionProps {
  onNext?: () => void;
}

export default function Win7Section({ onNext }: Win7SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="7" id="win7">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="7" inView={true}>
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col justify-center items-center"
            >
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Windows 7
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                The Perfect Balance (2009)
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md">
                <h3 className="text-lg font-bold text-white mb-4">Refined & Reliable</h3>
                <ul className="text-sm text-white/90 space-y-2">
                  <li>• Aero Snap & Shake</li>
                  <li>• Jump Lists</li>
                  <li>• Libraries</li>
                  <li>• Touch Support</li>
                </ul>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <StartButton era="7" onNext={onNext} />
              </motion.div>
            </motion.div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
}