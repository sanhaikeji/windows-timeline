import { Variants } from 'framer-motion';

export const windowEntrance: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 100,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export const crtShake: Variants = {
  idle: { x: 0 },
  shake: {
    x: [0, -0.2, 0.2, -0.2, 0.2, 0],
    transition: {
      duration: 0.24,
      ease: 'linear',
      repeat: 0
    }
  }
};

export const bloomPulse: Variants = {
  idle: {
    filter: 'drop-shadow(0 0 24px currentColor)'
  },
  pulse: {
    filter: [
      'drop-shadow(0 0 24px currentColor)',
      'drop-shadow(0 0 40px currentColor)',
      'drop-shadow(0 0 24px currentColor)'
    ],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity
    }
  }
};

export const tileFlip: Variants = {
  idle: {
    rotateY: 0,
    scale: 1
  },
  hover: {
    rotateY: 180,
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 200,
      damping: 20
    }
  }
};

export const particleExplosion: Variants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: [0, 1, 1, 0],
    scale: [0, 1.2, 1, 0],
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      times: [0, 0.2, 0.8, 1]
    }
  }
};

export const runDialogSlide: Variants = {
  hidden: {
    y: '-100%',
    opacity: 0
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};