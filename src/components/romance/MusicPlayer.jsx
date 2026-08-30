import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music2, X } from "lucide-react";

const VIDEO_ID = "8VUomhjIE48";

export default function MusicPlayer({ active }) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const createPlayer = () => {
    if (!containerRef.current || playerRef.current) return;
    if (!window.YT || !window.YT.Player) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        iv_load_policy: 3,
      },
      events: {
        onReady: () => setReady(true),
        onStateChange: (e) => {
          if (!window.YT) return;
          if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true);
          else if (
            e.data === window.YT.PlayerState.PAUSED ||
            e.data === window.YT.PlayerState.ENDED
          ) {
            setPlaying(false);
          }
        },
      },
    });
  };

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    if (!document.getElementById("yt-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const previousHandler = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousHandler === "function") previousHandler();
      createPlayer();
    };
  }, []);

  useEffect(() => {
    if (!ready) return undefined;

    const id = setInterval(() => {
      const p = playerRef.current;
      if (!p || typeof p.getCurrentTime !== "function") return;

      const c = p.getCurrentTime() || 0;
      const d = p.getDuration() || 0;
      setCurrent(c);
      setDuration(d);
      setProgress(d ? (c / d) * 100 : 0);
    }, 500);

    return () => clearInterval(id);
  }, [ready]);

  useEffect(() => {
    if (active && ready && playerRef.current) {
      playerRef.current.playVideo();
    }
  }, [active, ready]);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p || !ready) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  const fmt = (s) => {
    if (!s || Number.isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  const seek = (e) => {
    const p = playerRef.current;
    if (!p || !ready) return;

    const d = p.getDuration();
    if (!d) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    p.seekTo(pct * d, true);
  };

  return (
    <>
      <div
        aria-hidden="true"
        style={{ position: "fixed", left: -9999, top: -9999, width: 1, height: 1 }}
      >
        <div ref={containerRef} />
      </div>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="glass-deep fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-rose"
        aria-label="Our song"
      >
        <span
          className="absolute inset-0 animate-ping rounded-full bg-blossom/40"
          style={{ animationDuration: "2.5s" }}
        />
        <Music2 className="relative h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-deep fixed bottom-24 right-6 z-40 w-72 rounded-3xl p-5"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-muted-foreground transition-colors hover:text-rose"
              aria-label="Close player"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="mb-1 font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              our song
            </p>

            <p className="mb-4 font-display text-2xl italic leading-tight text-garnet">
              the one that sounds like us
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                disabled={!ready}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose text-garnet shadow-lg transition-transform hover:scale-105 disabled:opacity-50"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <Pause className="h-5 w-5" fill="currentColor" />
                ) : (
                  <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                )}
              </button>

              <div className="flex-1">
                <button
                  type="button"
                  className="relative block h-6 w-full cursor-pointer"
                  onClick={seek}
                  aria-label="Seek song"
                >
                  <span className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-rose/15">
                    <span
                      className="absolute left-0 top-0 h-full rounded-full bg-rose"
                      style={{ width: `${progress}%` }}
                    />
                  </span>
                </button>

                <div className="mt-1 flex justify-between font-body text-[11px] tabular-nums text-muted-foreground">
                  <span>{fmt(current)}</span>
                  <span>{fmt(duration)}</span>
                </div>
              </div>
            </div>

            {!ready && (
              <p className="mt-4 font-body text-xs italic leading-relaxed text-muted-foreground/80">
                loading our song ♡
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
