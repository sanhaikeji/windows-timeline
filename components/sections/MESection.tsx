'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations/variants';

interface MESectionProps {
  onNext?: () => void;
}

export default function MESection({ onNext }: MESectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="me" id="winme">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="me" inView={true}>
          <div className="w-full h-full bg-gradient-to-br from-blue-700 to-purple-800">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col justify-center items-center"
            >
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Windows ME
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                The Millennium Edition (2000)
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md">
                <h3 className="text-lg font-bold text-white mb-4">Media Enhanced</h3>
                <ul className="text-sm text-white/90 space-y-2">
                  <li>• Windows Movie Maker</li>
                  <li>• Windows Media Player 7</li>
                  <li>• System Restore</li>
                  <li>• Improved USB support</li>
                </ul>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <StartButton era="me" onNext={onNext} />
              </motion.div>
            </motion.div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
}