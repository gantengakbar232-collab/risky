"use client";

import { motion } from "framer-motion";
import { FaBug, FaTools, FaCode, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";

interface SkillCategory {
  title: string;
  icon: IconType;
  tags: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Testing & QA",
    icon: FaBug,
    tags: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "SIT",
      "UAT",
      "Smoke Testing",
      "Exploratory Testing",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    tags: [
      "Mantis Bug Tracker",
      "JIRA",
      "GitHub",
      "GitHub Copilot",
      "Replit Agent",
      "Adobe Express",
      "Wispr Flow",
    ],
  },
  {
    title: "Technical Skills",
    icon: FaCode,
    tags: [
      "AI",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "SQL",
      "Python",
      "Financial Analysis",
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    tags: [
      "Attention to Detail",
      "Analytical Thinking",
      "Cross-functional Collaboration",
      "Leadership",
      "Adaptability",
      "Problem-Solving",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title text-3xl sm:text-4xl font-bold mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-card p-6"
                variants={cardVariants}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: tagIdx * 0.04,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
