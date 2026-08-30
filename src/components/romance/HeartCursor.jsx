import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeartCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 35, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 700, damping: 35, mass: 0.2 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return undefined;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] hidden text-rose md:block"
      style={{ left: sx, top: sy }}
    >
      <Heart
        className="h-5 w-5 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_2px_6px_rgba(234,140,146,0.5)]"
        fill="currentColor"
      />
    </motion.div>
  );
}
