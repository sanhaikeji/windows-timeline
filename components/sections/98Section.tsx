'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn, crtShake } from '@/lib/animations/variants';

interface Section98Props {
  onNext?: () => void;
}

export default function Section98({ onNext }: Section98Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="98" id="win98">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="98" inView={true}>
          <motion.div
            variants={crtShake}
            initial="idle"
            animate="shake"
            className="w-full h-full bg-gradient-to-br from-blue-800 to-indigo-900 relative"
          >
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col justify-center items-center"
            >
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Windows 98
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                The Evolution (1998)
              </p>
              
              <div className="bg-gray-200/90 backdrop-blur-sm rounded p-6 mb-8 max-w-md">
                <h3 className="text-lg font-bold text-black mb-4">What's New</h3>
                <ul className="text-sm text-black space-y-2">
                  <li>• Internet Explorer 4</li>
                  <li>• Windows Update</li>
                  <li>• USB Support</li>
                  <li>• DVD Playback</li>
                </ul>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <StartButton era="98" onNext={onNext} />
              </motion.div>
            </motion.div>
          </motion.div>
        </GlassWindow>
      </div>
    </Section>
  );
}