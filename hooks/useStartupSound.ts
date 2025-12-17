import { useEffect, useRef, useCallback } from 'react';
import { Howl } from 'howler';
import { SOUND_URLS, STARTUP_SOUND_VOLUME } from '@/lib/constants';
import { useTimelineStore } from './useTimelineStore';

interface UseStartupSoundReturn {
  play: (era: keyof typeof SOUND_URLS) => void;
  stop: () => void;
}

export const useStartupSound = (): UseStartupSoundReturn => {
  const soundRef = useRef<Howl | null>(null);
  const { userInteracted } = useTimelineStore();

  const play = useCallback((era: keyof typeof SOUND_URLS) => {
    if (!userInteracted) return;

    // Stop any currently playing sound
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }

    const soundUrl = SOUND_URLS[era];
    if (!soundUrl) return;

    const sound = new Howl({
      src: [soundUrl],
      volume: STARTUP_SOUND_VOLUME,
      loop: false,
      preload: true,
      html5: true // Use HTML5 audio for better performance
    });

    soundRef.current = sound;
    sound.play();

    // Auto-unload after playback
    sound.on('end', () => {
      sound.unload();
      soundRef.current = null;
    });
  }, [userInteracted]);

  const stop = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
      soundRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
      }
    };
  }, []);

  return { play, stop };
};