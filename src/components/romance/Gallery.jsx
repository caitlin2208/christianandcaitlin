import React, { useState } from "react";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/3c6ceb250_photo_2026-08-30032543.jpeg",
    caption: "where it all started in gotti!",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/7a0ed528c_photo_2026-08-30032544.jpeg",
    caption: "our first meal prep together :)",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/7a092df73_photo_2026-08-30032545.jpeg",
    caption: "gastrobeats together! a yearly tradition now hehehe",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/7af9acfe9_photo_2026-08-30032537.jpeg",
    caption: "our first christmas together :) when we got each other lego coincidentally",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/fb4e598e5_photo_2026-08-30032534.jpeg",
    caption: "silly slingshot ride together, one of my fav memories hehe",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/a189aeed8_photo_2026-08-30032539.jpeg",
    caption: "you coming to support me always :)",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/1906dda45_photo_2026-08-30032541.jpeg",
    caption: "our photobooth together, we've gotten so good at our posesss",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a9313f7c89406a0051f4bf8/cbd3d8e2c_IMG_8545.jpg",
    caption: "the happiest day of my life, when you asked me to be yours",
    ratio: "aspect-[4/5]",
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto mb-14 max-w-6xl px-6 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-4 text-center font-body text-sm uppercase tracking-[0.35em] text-muted-foreground"
        >
          the living mosaic
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center font-display text-5xl italic text-garnet text-shadow-soft md:text-7xl"
        >
          moments I keep
        </motion.h2>
      </div>

      <div className="no-scrollbar overflow-x-auto pb-8">
        <div className="flex gap-8 px-[8vw] md:gap-12 md:px-[12vw]" style={{ width: "max-content" }}>
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.src}
              className={`group relative shrink-0 ${photo.ratio}`}
              style={{ width: "clamp(260px, 32vw, 420px)" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                animate={{ scale: hovered === i ? 1.04 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-deep relative h-full w-full overflow-hidden rounded-[2rem] p-2"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>

              <motion.figcaption
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-4 px-2 text-center font-display text-lg italic text-garnet md:text-xl"
              >
                {photo.caption}
              </motion.figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center font-body text-sm text-muted-foreground">
        ← drift through them →
      </p>
    </section>
  );
}
