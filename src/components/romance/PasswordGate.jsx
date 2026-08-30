import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import Hearts from "./Hearts";

const SECRET = "121225";

export default function PasswordGate({ onUnlock }) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [dissolving, setDissolving] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => inputsRef.current[0]?.focus(), 600);
    return () => clearTimeout(t);
  }, []);

  const validate = (code) => {
    if (code === SECRET) {
      setDissolving(true);
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => {
        setDigits(["", "", "", "", "", ""]);
        setError(false);
        inputsRef.current[0]?.focus();
      }, 900);
    }
  };

  const handleChange = (i, val) => {
    const clean = val.replace(/[^0-9]/g, "");
    if (!clean) {
      const next = [...digits];
      next[i] = "";
      setDigits(next);
      return;
    }

    const next = [...digits];

    if (clean.length > 1) {
      for (let k = 0; k < clean.length && i + k < 6; k++) {
        next[i + k] = clean[k];
      }
      setDigits(next);

      const filled = next.filter((d) => d !== "").join("");
      if (filled.length === 6) {
        validate(filled);
      } else {
        inputsRef.current[Math.min(i + clean.length, 5)]?.focus();
      }
      return;
    }

    next[i] = clean;
    setDigits(next);
    setError(false);

    if (i < 5) {
      inputsRef.current[i + 1]?.focus();
    } else {
      validate(next.join(""));
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
  };

  return (
    <AnimatePresence>
      {!dissolving && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-shell"
          exit={{ opacity: 0, scale: 1.08, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            className="orb"
            style={{ width: 420, height: 420, background: "#e8a0a4", top: "-6rem", left: "-4rem" }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="orb"
            style={{ width: 360, height: 360, background: "#ea8c92", bottom: "-5rem", right: "-3rem", opacity: 0.3 }}
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <Hearts />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center px-6 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full glass"
            >
              <Heart className="h-7 w-7 text-rose" fill="currentColor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-6xl text-garnet italic mb-3 text-shadow-soft"
            >
              surprise! welcome to our little archive
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-md mb-12 leading-relaxed"
            >
              key in our favourite date for more <span className="text-rose">&lt;3</span>
            </motion.p>

            <div className={`flex gap-3 md:gap-5 ${error ? "animate-[shake_0.5s]" : ""}`}>
              {digits.map((d, i) => (
                <motion.input
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  disabled={dissolving}
                  className={`h-16 w-12 md:h-20 md:w-16 text-center font-display text-3xl md:text-4xl rounded-full
                    transition-all duration-300 outline-none
                    ${d ? "glass-deep text-rose" : "glass text-garnet/30"}
                    ${error ? "border-2 border-rose !text-rose" : "focus:border-rose/60"}
                    placeholder:text-transparent`}
                  style={{ caretColor: "transparent" }}
                />
              ))}
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 font-body text-sm text-rose"
                >
                  Hmm, that's not quite it. Try again, love.
                </motion.p>
              )}
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5 }}
              className="mt-16 font-display italic text-lg text-muted-foreground"
            >
              six little numbers ♡
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
