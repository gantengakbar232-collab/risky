"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  "QA Engineering",
  "Data Science",
  "AI Evaluation",
  "Business Operations",
  "Bilingual (EN/ID)",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
          {/* Photo Placeholder */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative w-[280px] h-[280px] rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 p-[3px]">
              <div className="relative w-full h-full rounded-2xl bg-[#0a1628] overflow-hidden">
                <Image
                  src="/profile.webp"
                  alt="M. Risky Akbar Hidayat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Detail-oriented Quality Assurance Engineer with hands-on experience
              in manual testing, functional testing, system integration testing
              (SIT), and user acceptance testing (UAT) across web applications.
              Proven ability to develop comprehensive test cases, identify and
              track defects using bug tracking tools, and collaborate
              cross-functionally with developers and business analysts to ensure
              product quality. Complementary background in AI model evaluation and
              business operations management. Currently pursuing a Bachelor&apos;s
              degree in Data Science, bilingual in English and Indonesian.
            </p>

            {/* Highlight Tags */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-cyan-300 border border-blue-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
