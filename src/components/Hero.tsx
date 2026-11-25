"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["QA Engineer", "Data Science Student", "Co-Founder"];

function useTypingAnimation(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const typedText = useTypingAnimation(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Aurora glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/5 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400/80"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 font-[var(--font-poppins),Poppins,sans-serif] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
        >
          <span
            className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent"
            style={{
              textShadow: "0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(59, 130, 246, 0.15)",
            }}
          >
            M. Risky Akbar
          </span>
          <br />
          <span
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent"
            style={{
              filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.4))",
            }}
          >
            Hidayat
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-2 text-xl font-medium text-slate-300 sm:text-2xl md:text-3xl"
        >
          <span className="text-slate-500">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {typedText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block h-7 w-[2px] bg-cyan-400 sm:h-8"
          />
          <span className="text-slate-500">/&gt;</span>
        </motion.div>

        {/* Intro line */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          Detail-oriented Quality Assurance Engineer with a passion for ensuring
          software excellence.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Download CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-shadow hover:shadow-xl hover:shadow-cyan-500/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
            <svg
              className="relative h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="relative">Download CV</span>
          </motion.a>

          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-transparent px-8 py-3.5 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <svg
              className="relative h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="relative">Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-slate-500">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border border-slate-600"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto mt-1 h-1.5 w-0.5 rounded-full bg-cyan-400"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
