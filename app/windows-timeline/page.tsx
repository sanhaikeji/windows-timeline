'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { DosSection } from '@/components/sections/DosSection';
import { Section95 } from '@/components/sections/95Section';
import { XPSection } from '@/components/sections/XPSection';
import { VistaSection } from '@/components/sections/VistaSection';
import { Win8Section } from '@/components/sections/Win8Section';
import { Win11Section } from '@/components/sections/Win11Section';
import { RunDialog } from '@/components/ui/RunDialog';
import { useTimelineStore } from '@/hooks/useTimelineStore';
import { useGlobalHotkey } from '@/hooks/useGlobalHotkey';
import { useFPS } from '@/hooks/useFPS';
import { interpolateGradient } from '@/lib/animations/gradients';
import { ERA_LIST, PARTICLE_COUNT_DESKTOP, PARTICLE_COUNT_MOBILE, PARTICLE_COUNT_LOW } from '@/lib/constants';
import { Canvas } from '@react-three/fiber';
import { ParallaxParticles } from '@/hooks/useParallaxParticles';

// Lazy load remaining sections
import dynamic from 'next/dynamic';

const Section98 = dynamic(() => import('@/components/sections/98Section').then(mod => mod.Section98));
const MESection = dynamic(() => import('@/components/sections/MESection').then(mod => mod.MESection));
const Win7Section = dynamic(() => import('@/components/sections/Win7Section').then(mod => mod.Win7Section));
const Win10Section = dynamic(() => import('@/components/sections/Win10Section').then(mod => mod.Win10Section));

export default function WindowsTimelinePage() {
  const { scrollProgress, setScrollProgress, setParticleCount } = useTimelineStore();
  const [showRunDialog, setShowRunDialog] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // FPS monitoring with automatic particle count adjustment
  const handleFPSDrop = useCallback((fps: number) => {
    console.warn(`[FPS] Performance drop detected: ${fps} FPS`);
    
    // Reduce particle count based on current level
    setParticleCount((current) => {
      if (current === PARTICLE_COUNT_DESKTOP) {
        console.log('[FPS] Downgrading to mobile particle count');
        return PARTICLE_COUNT_MOBILE;
      } else if (current === PARTICLE_COUNT_MOBILE) {
        console.log('[FPS] Downgrading to low particle count');
        return PARTICLE_COUNT_LOW;
      }
      return current;
    });
  }, [setParticleCount]);

  const { getCurrentFPS } = useFPS({ onFPSDrop: handleFPSDrop });

  // Global hotkey for Run dialog (Win+R)
  useGlobalHotkey({
    onTrigger: () => setShowRunDialog(true)
  });

  // Update scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollProgress(value);
    });
    return unsubscribe;
  }, [scrollYProgress, setScrollProgress]);

  // Handle Run dialog commands
  const handleRunCommand = useCallback((command: string) => {
    const lowerCommand = command.toLowerCase();
    
    switch (lowerCommand) {
      case 'winver':
        // Scroll to easter egg section
        const easterEgg = document.getElementById('easter');
        if (easterEgg) {
          easterEgg.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'cmd':
        // Could open a terminal-like interface
        console.log('Opening command prompt...');
        break;
      case 'regedit':
        // Registry editor easter egg
        console.log('Opening registry editor...');
        break;
      case 'taskmgr':
        // Task manager easter egg
        console.log('Opening task manager...');
        break;
      default:
        console.log(`Unknown command: ${command}`);
    }
  }, []);

  // Scroll to next section
  const scrollToNext = useCallback((currentEra: string) => {
    const currentIndex = ERA_LIST.findIndex(era => era.id === currentEra);
    const nextEra = ERA_LIST[currentIndex + 1];
    
    if (nextEra) {
      const element = document.getElementById(nextEra.id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  // Background gradient based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#0a0a0a', '#0067c0']
  );

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ParallaxParticles />
        </Canvas>
      </div>

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        className="relative z-10 h-screen overflow-y-auto overflow-x-hidden"
        style={{ backgroundColor }}
      >
        {/* Performance Monitor */}
        <div className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-sm rounded px-3 py-2 text-xs text-white/70">
          <div>FPS: {Math.round(getCurrentFPS())}</div>
          <div>Progress: {Math.round(scrollProgress * 100)}%</div>
        </div>

        {/* Timeline Sections */}
        <DosSection onNext={() => scrollToNext('dos')} />
        <Section95 onNext={() => scrollToNext('95')} />
        <Section98 onNext={() => scrollToNext('98')} />
        <MESection onNext={() => scrollToNext('me')} />
        <XPSection onNext={() => scrollToNext('xp')} />
        <VistaSection onNext={() => scrollToNext('vista')} />
        <Win7Section onNext={() => scrollToNext('7')} />
        <Win8Section onNext={() => scrollToNext('8')} />
        <Win10Section onNext={() => scrollToNext('10')} />
        <Win11Section />

        {/* Easter Egg Section */}
        <section id="easter" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
          <div className="text-center p-8">
            <motion.h1
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="text-6xl font-bold text-white mb-4"
            >
              🎉 Easter Egg!
            </motion.h1>
            <p className="text-xl text-white/90">
              You found the secret Windows version info!
            </p>
            <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">About Windows Timeline</h3>
              <p className="text-white/80 text-sm">
                Built with Next.js 14, TypeScript, Three.js, and Framer Motion<br/>
                Celebrating 40 years of Windows innovation (1985-2025)
              </p>
            </div>
          </div>
        </section>

        {/* Run Dialog */}
        <RunDialog
          isOpen={showRunDialog}
          onClose={() => setShowRunDialog(false)}
          onCommand={handleRunCommand}
        />
      </motion.div>
    </>
  );
}

// Metadata
export const metadata = {
  title: 'Windows Timeline - 40 Years of Innovation',
  description: 'Experience the evolution of Windows from MS-DOS to Windows 11 in this interactive timeline.',
  openGraph: {
    title: 'Windows Timeline - 40 Years of Innovation',
    description: 'Experience the evolution of Windows from MS-DOS to Windows 11 in this interactive timeline.',
    images: ['/wallpapers/11-bloom.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windows Timeline - 40 Years of Innovation',
    description: 'Experience the evolution of Windows from MS-DOS to Windows 11 in this interactive timeline.',
    images: ['/wallpapers/11-bloom.webp'],
  },
};
