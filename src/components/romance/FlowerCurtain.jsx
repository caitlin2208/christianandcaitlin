import React from "react";
import { motion } from "framer-motion";

const LEFT_FLOWERS = ["🌷", "🌸", "🌹", "🌺", "🌼", "💐", "🌸", "🌷", "🌹", "🌺", "🌼", "🌸"];
const RIGHT_FLOWERS = ["🌺", "🌷", "🌼", "🌹", "🌸", "💐", "🌷", "🌺", "🌹", "🌸", "🌼", "🌷"];

function CurtainHalf({ side, flowers }) {
  const x = side === "left" ? "-105%" : "105%";

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x }}
      transition={{ duration: 1.25, delay: 0.65, ease: [0.65, 0, 0.35, 1] }}
      className="relative h-full w-1/2 bg-gradient-to-br from-[#f7d1d3] to-[#efabb1] p-4 md:p-8"
    >
      <div className="grid h-full grid-cols-2 md:grid-cols-3 content-around justify-items-center gap-4">
        {flowers.map((flower, i) => (
          <motion.span
            key={`${side}-${i}`}
            initial={{ scale: 0, rotate: side === "left" ? -25 : 25, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: Math.min(i * 0.035, 0.35), duration: 0.35 }}
            className="select-none text-3xl md:text-5xl lg:text-6xl"
          >
            {flower}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function FlowerCurtain() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[80] flex overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden="true"
    >
      <CurtainHalf side="left" flowers={LEFT_FLOWERS} />
      <CurtainHalf side="right" flowers={RIGHT_FLOWERS} />
    </motion.div>
  );
}
