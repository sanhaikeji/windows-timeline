import { useEffect, useRef, useCallback } from 'react';
import { HOTKEY_TIMEOUT } from '@/lib/constants';

interface UseGlobalHotkeyProps {
  onTrigger: () => void;
  keys?: string[];
}

export const useGlobalHotkey = ({ onTrigger, keys = ['Meta', 'Meta', 'KeyR'] }: UseGlobalHotkeyProps) => {
  const pressedKeys = useRef<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.code;
    
    // Prevent default browser behavior for the hotkey
    if (keys.includes(key)) {
      event.preventDefault();
    }

    // Add key to pressed keys if not already present
    if (!pressedKeys.current.includes(key)) {
      pressedKeys.current.push(key);
    }

    // Check if the sequence matches
    if (pressedKeys.current.length === keys.length) {
      const matches = keys.every((k, i) => pressedKeys.current[i] === k);
      if (matches) {
        onTrigger();
        pressedKeys.current = [];
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        return;
      }
    }

    // Reset timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      pressedKeys.current = [];
      timeoutRef.current = null;
    }, HOTKEY_TIMEOUT);
  }, [onTrigger, keys]);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const key = event.code;
    pressedKeys.current = pressedKeys.current.filter(k => k !== key);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleKeyDown, handleKeyUp]);
};