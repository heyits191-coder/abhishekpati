
import { Variants, TargetAndTransition } from 'framer-motion';

// Premium Cubic Bezier for all animations (Calm and Smooth)
export const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE_PREMIUM,
    },
  },
};

export const WORD_REVEAL: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_PREMIUM,
    },
  },
};

export const SLIDE_IN_LEFT: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: EASE_PREMIUM,
    },
  },
};

export const SLIDE_IN_RIGHT: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: EASE_PREMIUM,
    },
  },
};

export const SCALE_IN: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: EASE_PREMIUM,
    },
  },
};

export const HOVER_LIFT: TargetAndTransition = {
  y: -10,
  transition: { duration: 0.4, ease: EASE_PREMIUM }
};

export const BUTTON_TAP = { scale: 0.94 };

// Fixed: separated transition from animate to avoid TypeScript widening issues with ease string
export const PARALLAX_FLOAT = {
  animate: {
    y: [0, -15, 0],
    x: [0, 10, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  }
};
