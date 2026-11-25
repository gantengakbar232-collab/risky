"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    icon: FaGraduationCap,
    title: "Universitas Terbuka",
    degree: "Bachelor's Degree in Data Science",
    date: "Expected Jun 2030",
    tags: [
      "Statistics",
      "Data Analysis",
      "Machine Learning",
      "Database Management",
      "Programming",
    ],
    activities: "",
  },
  {
    icon: FaSchool,
    title: "SMA Negeri 1 Sumenep",
    degree: "Mathematics",
    date: "May 2022 – May 2025",
    tags: [],
    activities:
      "Member of Literacy and Research Organization, Essay Writing, Laboratory Experiments",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="section-title text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {educationData.map((edu, i) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card rounded-xl border border-slate-700/50 overflow-hidden"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="p-6 flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="text-blue-400 text-xl" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
                    <span className="text-xs text-slate-400 whitespace-nowrap">
                      {edu.date}
                    </span>
                  </div>

                  <p className="text-blue-300 text-sm mb-3">{edu.degree}</p>

                  {edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {edu.activities && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.activities}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
