import React, { useMemo } from "react";
import { motion } from "framer-motion";

const FLOWERS = ["🌸", "🌷", "🌹", "🌼", "🌺", "💐"];

export default function Flowers({ count = 18 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        emoji: FLOWERS[i % FLOWERS.length],
        size: 16 + Math.random() * 22,
        delay: Math.random() * 9,
        duration: 10 + Math.random() * 9,
        drift: (Math.random() - 0.5) * 140,
        rotate: (Math.random() - 0.5) * 160,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((f) => (
        <motion.span
          key={f.id}
          className="absolute top-[-3rem] select-none"
          style={{ left: `${f.left}%`, fontSize: f.size }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "115vh",
            x: f.drift,
            rotate: f.rotate,
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {f.emoji}
        </motion.span>
      ))}
    </div>
  );
}
