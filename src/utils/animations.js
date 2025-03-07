// Animation variants for Framer Motion

export const fadeIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  initial: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textVariant = (delay) => ({
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const floatAnimation = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export const cardHoverAnimation = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const buttonTapAnimation = {
  tap: {
    scale: 0.95,
  },
};

export const glassmorphismAnimation = {
  rest: {
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  hover: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
};
