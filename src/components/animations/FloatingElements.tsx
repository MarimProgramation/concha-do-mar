"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Floating shell 1 */}
      <motion.div
        className="absolute top-[15%] left-[5%] text-4xl opacity-[0.07]"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🐚
      </motion.div>

      {/* Floating shell 2 */}
      <motion.div
        className="absolute top-[45%] right-[8%] text-3xl opacity-[0.06]"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🦪
      </motion.div>

      {/* Floating starfish */}
      <motion.div
        className="absolute top-[70%] left-[12%] text-3xl opacity-[0.05]"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        ⭐
      </motion.div>

      {/* Wave decoration */}
      <motion.div
        className="absolute bottom-[20%] right-[15%] text-2xl opacity-[0.05]"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🌊
      </motion.div>

      {/* Pearl */}
      <motion.div
        className="absolute top-[30%] right-[25%] w-3 h-3 rounded-full bg-ocean-200 opacity-[0.15]"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Small bubble */}
      <motion.div
        className="absolute top-[60%] left-[30%] w-2 h-2 rounded-full bg-seafoam-200 opacity-[0.12]"
        animate={{
          y: [0, -35, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
}
