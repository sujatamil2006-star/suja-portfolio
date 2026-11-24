import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, Sparkles, Search, GitBranch, Terminal, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [projectSearch, setProjectSearch] = useState('');

  const filterTabs = ['All', 'Edge-AI & CV', 'GenAI & Security', 'Machine Learning', 'Full Stack'];

  let filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  if (projectSearch.trim()) {
    const q = projectSearch.toLowerCase();
    filteredProjects = filteredProjects.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) || 
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  return (
    <section id="projects" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
              <span className="w-4 h-[1px] bg-primary-400"></span>
              <span>02 // Verified Engineering Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Open-Source AI & Systems Lab
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans">
              All 12 public codebases from my GitHub repository featuring edge computer vision, local air-gapped RAG, and production machine learning.
            </p>
          </div>

          {/* Search Box with Monospace Styling */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
              placeholder="Filter by tech (e.g. MediaPipe, RAG)..."
              className="w-full pl-9 pr-8 py-2.5 text-xs font-mono rounded-xl bg-obsidian-900 border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-primary-400"
            />
            {projectSearch && (
              <button 
                onClick={() => setProjectSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-white"
              >
                ESC
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab;
            const count = tab === 'All' ? projects.length : projects.filter(p => p.category === tab).length;
            return (
              <button
                key={tab}
                onClick={() => {
                  playBlip(1050, 0.05, 'triangle');
                  setSelectedFilter(tab);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-primary-400 text-dark-950 font-bold shadow-md shadow-primary-500/20'
                    : 'bg-obsidian-900 text-slate-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-dark-950/20 text-dark-950 font-bold' : 'bg-obsidian-850 text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center spec-panel rounded-2xl border border-white/[0.08]">
            <p className="text-slate-400 text-sm font-mono">No repository matches query: "{projectSearch}"</p>
            <button
              onClick={() => { setProjectSearch(''); setSelectedFilter('All'); }}
              className="mt-3 text-xs text-primary-400 hover:underline font-mono"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="spec-panel group rounded-2xl overflow-hidden flex flex-col border border-white/[0.08] hover:border-primary-400/40 hover:-translate-y-1 transition-all duration-300 shadow-xl cursor-pointer"
                onClick={() => {
                  playBlip(1200, 0.06, 'sine');
                  onSelectProject(project);
                }}
              >
                {/* Spec Sheet Header Strip */}
                <div className="px-4 py-2.5 bg-obsidian-900 border-b border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <GitBranch className="w-3.5 h-3.5 text-primary-400" />
                    <span>main</span>
                  </div>
                  <span className="text-[10px] font-semibold text-primary-300 uppercase px-2 py-0.5 rounded bg-primary-500/10 border border-primary-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Thumbnail Container with Technical Mask */}
                <div className="relative h-44 w-full overflow-hidden bg-obsidian-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent"></div>

                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-300" />
                        FLAGSHIP
                      </span>
                    </div>
                  )}

                  {/* Hover loupe */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-obsidian-950/50 backdrop-blur-[2px]">
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary-400 text-dark-950 font-bold text-xs uppercase tracking-wider font-mono">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Architecture</span>
                    </span>
                  </div>
                </div>

                {/* Spec Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-primary-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Performance metrics matrix */}
                    {project.stats && (
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/[0.06] text-[11px] font-mono">
                        {Object.entries(project.stats).slice(0, 2).map(([k, v], i) => (
                          <div key={i} className="p-1.5 rounded bg-obsidian-950/60 border border-white/[0.04]">
                            <span className="text-slate-500 capitalize block text-[10px]">{k}</span>
                            <span className="text-primary-300 font-semibold truncate block">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Monospace Tech Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-900 text-slate-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-obsidian-900 text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div 
                    className="pt-3 border-t border-white/[0.08] flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-mono font-semibold text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Spec Sheet</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white bg-obsidian-900 hover:bg-obsidian-850 border border-white/[0.1] transition-colors flex items-center gap-1.5 text-xs font-mono"
                      title="Inspect GitHub Source"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
