import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Change this to the day you became "us".
export const START_DATE = "2025-12-12T00:00:00";

function diffParts(target) {
  const now = Date.now();
  let ms = Math.max(0, now - target);
  const days = Math.floor(ms / 86400000);
  ms -= days * 86400000;
  const hours = Math.floor(ms / 3600000);
  ms -= hours * 3600000;
  const minutes = Math.floor(ms / 60000);
  ms -= minutes * 60000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds };
}

function RollingDigit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-9 w-7 overflow-hidden md:h-11 md:w-9">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 flex items-center justify-center font-display text-2xl font-medium tabular-nums text-garnet md:text-3xl"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function DaysCounter() {
  const startMs = new Date(START_DATE).getTime();
  const [parts, setParts] = useState(() => diffParts(startMs));
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.42]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const id = setInterval(() => setParts(diffParts(startMs)), 1000);
    return () => clearInterval(id);
  }, [startMs]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        className="orb"
        style={{ width: 480, height: 480, background: "#f4c7cb", top: "10%", left: "5%" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb"
        style={{ width: 380, height: 380, background: "#ea8c92", bottom: "5%", right: "8%", opacity: 0.22 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ scale, opacity, y }} className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-6 font-body text-sm uppercase tracking-[0.35em] text-muted-foreground md:text-base"
        >
          We have been us for
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium leading-none text-garnet text-shadow-soft"
          style={{ fontSize: "clamp(6rem, 22vw, 16rem)" }}
        >
          {parts.days}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-10 mt-2 font-display text-2xl italic text-garnet md:text-3xl"
        >
          days
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glass flex items-center gap-6 rounded-full px-7 py-4 md:gap-10 md:px-10 md:py-5"
        >
          <RollingDigit value={parts.hours} label="hours" />
          <span className="font-display text-2xl text-blossom">·</span>
          <RollingDigit value={parts.minutes} label="minutes" />
          <span className="font-display text-2xl text-blossom">·</span>
          <RollingDigit value={parts.seconds} label="seconds" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-10 max-w-md font-body text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          and every single one of them has been my favorite.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border border-rose/40 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-rose/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
