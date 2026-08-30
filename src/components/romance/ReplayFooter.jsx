import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function ReplayFooter() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-rose px-6 py-24 text-center md:py-32">
      <motion.div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "#f4c7cb",
          top: "-8rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.45,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur"
        >
          <Heart className="h-7 w-7 text-white" fill="currentColor" />
        </motion.div>

        <p className="mb-4 font-display text-4xl italic text-white text-shadow-soft md:text-5xl">
          and the counting never stops
        </p>
        <p className="mb-12 max-w-md font-body leading-relaxed text-white/90">
          made with every piece of my heart, for the only one who has it.
        </p>

        <motion.button
          onClick={toTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/25 px-8 py-4 text-white backdrop-blur transition-colors hover:bg-white/35"
        >
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          <span className="font-body text-sm uppercase tracking-[0.25em]">replay us</span>
        </motion.button>

        <p className="mt-16 font-display text-lg italic text-white/70">♡ ♡ ♡</p>
      </div>
    </footer>
  );
}
