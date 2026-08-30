import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hearts({ count = 16 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 24,
        delay: Math.random() * 7,
        duration: 7 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 80,
        opacity: 0.22 + Math.random() * 0.4,
        rotate: (Math.random() - 0.5) * 40,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute bottom-[-4rem] text-rose"
          style={{ left: `${h.left}%`, opacity: h.opacity }}
          initial={{ y: 0, x: 0, scale: 0.5, rotate: 0 }}
          animate={{
            y: "-115vh",
            x: h.drift,
            scale: [0.5, 1, 0.85],
            rotate: [0, h.rotate, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart style={{ width: h.size, height: h.size }} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
