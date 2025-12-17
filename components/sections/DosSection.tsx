'use client';

import React, { useRef } from 'react';
import { Section } from './Section';
import { GlassWindow } from '@/components/ui/GlassWindow';
import { StartButton } from '@/components/ui/StartButton';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations/variants';

interface DosSectionProps {
  onNext?: () => void;
}

export const DosSection: React.FC<DosSectionProps> = ({ onNext }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} era="dos" id="dos">
      <div className="relative w-full h-full flex items-center justify-center">
        <GlassWindow era="dos" inView={true}>
          <div className="w-full h-full bg-black flex flex-col justify-center items-center p-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-4 font-mono">
                MS-DOS 1.0
              </h1>
              <p className="text-lg text-gray-300 mb-8 font-mono">
                The Beginning (1985)
              </p>
              
              {/* DOS Command Prompt */}
              <div className="bg-black border border-green-500/30 rounded p-4 mb-8 font-mono text-sm">
                <div className="text-green-400">
                  <div>C:\> ver</div>
                  <div className="text-green-300">Microsoft MS-DOS Version 1.0</div>
                  <div className="mt-2">C:\> dir</div>
                  <div className="text-green-300"> Volume in drive C has no label</div>
                  <div className="text-green-300"> Directory of C:\</div>
                  <div className="text-green-300 mt-1">COMMAND COM 54,645 05-01-85 12:00a</div>
                  <div className="text-green-300">FORMAT COM 22,528 05-01-85 12:00a</div>
                  <div className="text-green-300">FDISK COM 32,256 05-01-85 12:00a</div>
                  <div className="mt-2">C:\> _</div>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                  />
                </div>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <StartButton era="dos" onNext={onNext} />
              </motion.div>
            </motion.div>
          </div>
        </GlassWindow>
      </div>
    </Section>
  );
};