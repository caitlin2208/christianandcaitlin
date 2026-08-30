import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PasswordGate from "@/components/romance/PasswordGate";
import DaysCounter from "@/components/romance/DaysCounter";
import Gallery from "@/components/romance/Gallery";
import Letter from "@/components/romance/Letter";
import MusicPlayer from "@/components/romance/MusicPlayer";
import ReplayFooter from "@/components/romance/ReplayFooter";
import HeartCursor from "@/components/romance/HeartCursor";
import Flowers from "@/components/romance/Flowers";
import TypedHeading from "@/components/romance/TypedHeading";
import FlowerCurtain from "@/components/romance/FlowerCurtain";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    setShowCurtain(true);
    window.setTimeout(() => setShowCurtain(false), 2200);
  };

  return (
    <div className="relative min-h-screen bg-shell">
      <HeartCursor />

      <AnimatePresence>
        {!unlocked && <PasswordGate onUnlock={handleUnlock} />}
      </AnimatePresence>

      <AnimatePresence>
        {unlocked && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <Flowers />
            <TypedHeading />
            <div id="days-counter"><DaysCounter /></div>
            <Gallery />
            <Letter />
            <ReplayFooter />
            <MusicPlayer active={unlocked} />
          </motion.main>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCurtain && <FlowerCurtain />}
      </AnimatePresence>
    </div>
  );
}
