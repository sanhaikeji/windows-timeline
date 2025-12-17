import { useEffect, useRef, useCallback } from 'react';

interface FPSOptions {
  onFPSDrop?: (fps: number) => void;
  threshold?: number;
  sampleSize?: number;
}

export const useFPS = ({ onFPSDrop, threshold = 50, sampleSize = 60 }: FPSOptions = {}) => {
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsHistory = useRef<number[]>([]);
  const rafId = useRef<number | null>(null);

  const measureFPS = useCallback(() => {
    frameCount.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime.current >= 1000) {
      const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
      
      // Update FPS history
      fpsHistory.current.push(fps);
      if (fpsHistory.current.length > sampleSize) {
        fpsHistory.current.shift();
      }

      // Check for consistent low FPS
      if (fpsHistory.current.length >= 3) {
        const recentFPS = fpsHistory.current.slice(-3);
        const avgFPS = recentFPS.reduce((a, b) => a + b, 0) / recentFPS.length;
        
        if (avgFPS < threshold && onFPSDrop) {
          onFPSDrop(avgFPS);
        }
      }

      frameCount.current = 0;
      lastTime.current = currentTime;
    }

    rafId.current = requestAnimationFrame(measureFPS);
  }, [onFPSDrop, threshold, sampleSize]);

  const start = useCallback(() => {
    if (rafId.current) return; // Already running
    
    frameCount.current = 0;
    lastTime.current = performance.now();
    fpsHistory.current = [];
    rafId.current = requestAnimationFrame(measureFPS);
  }, [measureFPS]);

  const stop = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const getCurrentFPS = useCallback(() => {
    if (fpsHistory.current.length === 0) return 60;
    return fpsHistory.current[fpsHistory.current.length - 1];
  }, []);

  const getAverageFPS = useCallback(() => {
    if (fpsHistory.current.length === 0) return 60;
    return fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;
  }, []);

  // Auto-start on mount
  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return {
    start,
    stop,
    getCurrentFPS,
    getAverageFPS,
    fpsHistory: fpsHistory.current
  };
};