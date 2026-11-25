"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/gantengakbar232-collab",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/m-risky-akbar-hidayat-255456405",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:Kersinnas@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>

        {/* Gradient divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-slate-400">
            &copy; 2026 M. Risky Akbar Hidayat. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
