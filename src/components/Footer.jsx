import React from 'react';
import { ArrowUp, Terminal, Mail, Cpu } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    playBlip(1300, 0.06, 'triangle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-white/[0.08] bg-obsidian-950 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-white/[0.1] flex items-center justify-center text-primary-400 font-bold">
              SS
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm">
                {personal.fullName}
              </span>
              <p className="text-[11px] text-slate-500">
                {personal.institution} • {personal.department}
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300">
            <a href="#hero" className="hover:text-primary-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-300 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-primary-300 transition-colors">Projects</a>
            <a href="#simulator" className="hover:text-primary-300 transition-colors">AI Lab</a>
            <a href="#certificates" className="hover:text-primary-300 transition-colors">Vault</a>
            <a href="#experience" className="hover:text-primary-300 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-obsidian-900 hover:bg-primary-400 hover:text-dark-950 text-slate-300 border border-white/[0.1] transition-all ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>
            ENGINEERING_NODE // © {new Date().getFullYear()} {personal.fullName}. ALL RIGHTS RESERVED.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>PROD BUILD • REACT 18 + TAILWIND CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
