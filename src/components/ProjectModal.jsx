import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-dark-900 border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-dark-950">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-85 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-dark-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-dark-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30 uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key Metrics / Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark-850 border border-slate-800">
              {Object.entries(project.stats).map(([k, v], i) => (
                <div key={i} className="text-center">
                  <div className="text-sm sm:text-base font-bold text-primary-400">{v}</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 capitalize">{k}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400" />
                Technical Implementation & Architecture
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 text-xs rounded-lg bg-dark-800 text-slate-200 border border-slate-700/60 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-dark-950 font-bold text-xs sm:text-sm hover:opacity-95 shadow-glow-cyan transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
