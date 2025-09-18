export const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeIn = (direction = "up", delay = 0) => {
  const dist = 40;
  let x = 0,
    y = 0;
  if (direction === "up") y = dist;
  if (direction === "down") y = -dist;
  if (direction === "left") x = dist;
  if (direction === "right") x = -dist;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };
};

// utils/motion.js
export const slideIn = (direction = "left", delay = 0) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,

      opacity: 0, // start invisible
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1, // fade in
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const fadeInUp = (delay = 0) => {
  return {
    hidden: { opacity: 0, y: 40 }, // start lower + invisible
    show: {
      opacity: 1,
      y: 0, // move to normal position
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

// export const staggerContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

export const staggerContainer = (stagger = 0.15, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});
