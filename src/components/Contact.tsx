"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "Kersinnas@gmail.com",
    href: "mailto:Kersinnas@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "M. Risky Akbar Hidayat",
    href: "https://linkedin.com/in/m-risky-akbar-hidayat-255456405",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "gantengakbar232-collab",
    href: "https://github.com/gantengakbar232-collab",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "East Java, Indonesia (Remote)",
    href: "",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="section-title text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          I&apos;m open to remote opportunities worldwide. Let&apos;s connect!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left – Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={item.label}
                {...wrapperProps}
                className="glass-card flex items-center gap-4 p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/40 transition-colors group"
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-200">{item.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Right – Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl border border-slate-700/50 p-6 flex flex-col gap-4"
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg bg-slate-900/80 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg bg-slate-900/80 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg bg-slate-900/80 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
