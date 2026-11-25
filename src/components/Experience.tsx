"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "uTest",
    role: "Quality Assurance Engineer",
    date: "Nov 2025 – Feb 2026",
    location: "Remote",
    bullets: [
      "Executed functional, regression, and exploratory testing on web and mobile applications to identify critical defects before production release.",
      "Designed and maintained test cases and test suites aligned with business requirements and user stories.",
      "Reproduced and documented bugs with detailed steps, expected vs. actual results, and severity classifications.",
      "Participated in test cycles alongside a global QA community, ensuring diverse device and environment coverage.",
    ],
  },
  {
    company: "Freelance",
    role: "Quality Assurance Tester",
    date: "May 2025 – Sep 2025",
    location: "Remote",
    bullets: [
      "Developed and executed 100+ detailed test cases based on system and functional specifications for government web applications.",
      "Performed System Integration Testing (SIT) and User Acceptance Testing (UAT) across multiple project modules, ensuring end-to-end data integrity.",
      "Utilized Mantis Bug Tracker to log, categorize, assign, and verify 50+ reported issues throughout the defect lifecycle.",
      "Collaborated with developers, business analysts, and fellow testers in Agile sprints to enhance product quality and release reliability.",
      "Created comprehensive test reports and defect summaries for project stakeholders, supporting data-driven release decisions.",
    ],
  },
  {
    company: "Outlier AI",
    role: "AI Model Trainer & Technical Evaluator",
    date: "Nov 2025 – Dec 2025",
    location: "Remote",
    bullets: [
      "Evaluated and annotated AI-generated outputs for accuracy, relevance, and quality against defined rubrics and guidelines.",
      "Provided structured feedback to improve machine learning model performance in natural language processing tasks.",
      "Applied critical thinking and attention to detail to identify edge cases, inconsistencies, and quality issues in AI responses.",
    ],
  },
  {
    company: "Hias Kaca",
    role: "Co-Founder & Operations Manager",
    date: "Feb 2025 – Present",
    location: "Indonesia",
    bullets: [
      "Developed and implemented Standard Operating Procedures (SOPs) for 3 operational areas: distribution, production workshop, and warehouse management.",
      "Led internal audits and business process controls to ensure operational compliance and quality standardization.",
      "Managed financial analysis, budgeting, and financial report preparation, ensuring accuracy and regulatory compliance.",
      "Organized and led stock opname operations, coordinating cross-functional teams to optimize inventory accuracy.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-lg font-semibold text-white">
                      {exp.company}
                    </span>
                    <span className="text-blue-400">—</span>
                    <span className="text-blue-300 font-medium">
                      {exp.role}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-400">
                    <span>{exp.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex-shrink-0 text-gray-400 group-hover:text-cyan-300 transition-colors"
                >
                  <FaChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="px-5 pb-5 space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <motion.li
                          key={bIdx}
                          className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: bIdx * 0.05,
                          }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
