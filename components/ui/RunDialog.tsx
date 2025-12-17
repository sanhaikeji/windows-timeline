'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { runDialogSlide } from '@/lib/animations/variants';
import { EASTER_EGG_COMMANDS } from '@/lib/constants';

interface RunDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCommand: (command: string) => void;
}

export const RunDialog: React.FC<RunDialogProps> = ({ isOpen, onClose, onCommand }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 100);
    }
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const command = inputValue.trim().toLowerCase();
    
    if (command) {
      onCommand(command);
      setInputValue('');
      onClose();
    }
  }, [inputValue, onCommand, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            variants={runDialogSlide}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl p-6 w-96">
              <h2 className="text-xl font-semibold text-white mb-4">Run</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="run-input" className="block text-sm text-white/80 mb-2">
                    Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.
                  </label>
                  <input
                    ref={inputRef}
                    id="run-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Open:"
                    autoComplete="off"
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    OK
                  </button>
                </div>
              </form>

              {/* Easter egg hints */}
              <div className="mt-4 text-xs text-white/50">
                <p>Try commands like: {EASTER_EGG_COMMANDS.join(', ')}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};