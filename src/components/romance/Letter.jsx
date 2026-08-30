import React from "react";
import { motion } from "framer-motion";

const SALUTATION = "my dearest baba,";

const PARAGRAPHS = [
  "thank you for being the most amazingest boyfriend i could have ever been blessed with. i thank god for sending me someone so meant for me — someone who gets me, understands me so intentionally, and shows up for me with the most care and heart of love.",
  "you never fail to brighten up my day, and every moment spent with you feels like i'm back at home and brings so, so much joy to me.",
  "i sometimes feel like i am not good enough for you, with how much effort you put into this relationship and the intentionality you bring to show me i am loved every day — working on every part of yourself and changing things to make this relationship work. not a single effort goes unnoticed, okay.",
  "i love and cherish you so deeply. although i may have difficulty showing it sometimes, i really am so grateful that you also know and understand, and stay patient to stick by me through everything.",
  "i couldn't have found someone as perfect as you are for me, and i am so glad you've come into my life and made it so much more colourful and filled with so much joy.",
  "you also made me realise how much love i have in me to offer, and i really want to put in my best effort to show that to you every day too :)",
  "i love you my precious. thank you for loving me on the days it gets hard, taking care of me on days i am tired even when you are too, and supporting me even when you are busy. not a single act of love from you ever goes unnoticed or unappreciated!",
];

export default function Letter() {
  return (
    <section className="relative px-6 py-28 md:py-40">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/30 to-transparent" />

      <div className="relative mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-4 text-center font-body text-sm uppercase tracking-[0.35em] text-muted-foreground"
        >
          the written soul
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-16 text-center font-display text-5xl italic text-garnet text-shadow-soft md:mb-24 md:text-7xl"
        >
          a letter for you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 font-display text-3xl italic text-garnet text-shadow-soft md:text-4xl"
        >
          {SALUTATION}
        </motion.p>

        <div className="space-y-8 md:space-y-10">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              className="text-left font-body text-lg leading-[1.8] text-garnet md:text-xl"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 text-right"
        >
          <p className="font-display text-3xl italic text-garnet text-shadow-soft md:text-4xl">
            forever yours ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
