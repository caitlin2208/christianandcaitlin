import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLLAGE = [
  "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/3c6ceb250_photo_2026-08-30032543.jpeg",
  "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/7a0ed528c_photo_2026-08-30032544.jpeg",
  "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/7a092df73_photo_2026-08-30032545.jpeg",
  "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/7af9acfe9_photo_2026-08-30032537.jpeg",
  "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/fb4e598e5_photo_2026-08-30032534.jpeg",
  "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/cbd3d8e2c_IMG_8545.jpg",
];

const TEXT = "i love you so much baba";

export default function TypedHeading() {
  const [shown, setShown] = useState("");

useEffect(() => {
  let timer;

  const startTyping = setTimeout(() => {
    let i = 0;

    timer = setInterval(() => {
      i += 1;
      setShown(TEXT.slice(0, i));

      if (i >= TEXT.length) {
        clearInterval(timer);
      }
    }, 110);
  }, 2300);

  return () => {
    clearTimeout(startTyping);
    clearInterval(timer);
  };
}, []);
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-[-50px] grid grid-cols-2 gap-3 opacity-80 blur-[9px] saturate-75 md:grid-cols-3"
        aria-hidden="true"
      >
        {COLLAGE.map((photo) => (
          <img
            key={photo}
            src={photo}
            alt=""
            className="h-full min-h-0 w-full object-cover"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-shell/45 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-rose/20 via-white/10 to-shell/80" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          className="mb-8 font-body text-xs uppercase tracking-[0.4em] text-garnet/70 md:text-sm"
        >
          for my favourite person
        </motion.p>

        <h1
  className="font-display italic leading-[0.88] text-garnet text-shadow-soft"
  style={{ fontSize: "clamp(4.2rem, 11vw, 9rem)" }}
>
  {shown}

  <motion.span
    className="ml-2 inline-block h-[0.8em] w-[3px] bg-rose"
    animate={{ opacity: [1, 0, 1] }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
    }}
  />
</h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.75 }}
          className="mt-8 font-body text-sm text-garnet md:text-lg"
        >
          every little piece of us, kept here ♡
        </motion.p>

        <motion.a
          href="#days-counter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="mt-16 inline-flex flex-col items-center gap-3 font-body text-xs tracking-[0.3em] text-garnet/70"
        >
          OUR STORY
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl"
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
