'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations/variants';

interface Win10SectionProps {
  onNext?: () => void;
}

export default function Win10Section({ onNext }: Win10SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="10" id="win10">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="10" inView={true}>
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 p-8 flex flex-col justify-center items-center"
            >
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Windows 10
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                The Last Version (2015)
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md">
                <h3 className="text-lg font-bold text-white mb-4">Service Model</h3>
                <ul className="text-sm text-white/90 space-y-2">
                  <li>• Windows as a Service</li>
                  <li>• Cortana Integration</li>
                  <li>• Universal Apps</li>
                  <li>• Continuum</li>
                </ul>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <StartButton era="10" onNext={onNext} />
              </motion.div>
            </motion.div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
}