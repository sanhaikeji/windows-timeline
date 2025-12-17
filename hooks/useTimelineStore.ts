import { create } from 'zustand';
import { ERA_LIST } from '@/lib/constants';

type EraId = typeof ERA_LIST[number]['id'];

interface TimelineState {
  scrollProgress: number;
  activeEra: EraId;
  userInteracted: boolean;
  particleCount: number;
  unlockAudio: () => void;
  setActiveEra: (era: EraId) => void;
  setScrollProgress: (progress: number) => void;
  setParticleCount: (count: number) => void;
}

export const useTimelineStore = create<TimelineState>((set) => ({
  scrollProgress: 0,
  activeEra: 'dos',
  userInteracted: false,
  particleCount: 2048,

  unlockAudio: () => {
    set({ userInteracted: true });
  },

  setActiveEra: (era: EraId) => {
    set({ activeEra: era });
  },

  setScrollProgress: (progress: number) => {
    set({ scrollProgress: Math.max(0, Math.min(1, progress)) });
  },

  setParticleCount: (count: number) => {
    set({ particleCount: count });
  }
}));