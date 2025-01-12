"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function HighlightSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hi, I&apos;m – a passionate and dedicated front-end developer with over
        one year of professional experience as a{" "}
        <Highlight className="text-black dark:text-white">
          React/Next.js developer,
        </Highlight>
        I have a strong foundation in building scalable and efficient
        applications.
      </motion.h1>
    </HeroHighlight>
  );
}
