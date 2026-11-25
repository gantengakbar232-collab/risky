"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Government Web App QA",
    description:
      "Comprehensive testing of government web applications including SIT and UAT with 100+ test cases and 50+ tracked defects.",
    tags: ["QA Testing", "SIT", "UAT", "Mantis"],
    status: "Completed",
    placeholder: false,
  },
  {
    title: "AI Model Evaluation",
    description:
      "Evaluated AI-generated outputs for accuracy and quality, providing structured feedback for NLP model improvement.",
    tags: ["AI", "NLP", "Evaluation"],
    status: "Completed",
    placeholder: false,
  },
  {
    title: "Coming Soon",
    description: "More exciting projects are on the way. Stay tuned!",
    tags: [],
    status: "",
    placeholder: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="section-title text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Here are some of my recent projects. More coming soon!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
            className={`glass-card relative rounded-xl overflow-hidden transition-shadow duration-300 ${
              project.placeholder
                ? "border border-dashed border-slate-600 opacity-60"
                : "border border-slate-700/50"
            }`}
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Gradient top border */}
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                {project.status && (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
