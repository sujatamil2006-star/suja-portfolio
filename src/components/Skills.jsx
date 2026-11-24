import React, { useState } from 'react';
import { Search, Code2, Cpu, Database, Wrench, Shield, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Code2 },
    { id: 'frontend', label: 'Core AI & ML', icon: Cpu },
    { id: 'backend', label: 'Backend & Edge RAG', icon: Code2 },
    { id: 'databaseAndCloud', label: 'Data & Computer Vision', icon: Database },
    { id: 'toolsAndPractices', label: 'Cybersecurity & Tools', icon: Shield },
  ];

  const getFilteredSkills = () => {
    let result = [];

    if (activeTab === 'all') {
      result = [
        ...skills.frontend.map(s => ({ ...s, category: 'AI & ML' })),
        ...skills.backend.map(s => ({ ...s, category: 'Backend & RAG' })),
        ...skills.databaseAndCloud.map(s => ({ ...s, category: 'Data & CV' })),
        ...skills.toolsAndPractices.map(s => ({ ...s, category: 'Security & Tools' }))
      ];
    } else {
      const catLabel = categories.find(c => c.id === activeTab)?.label || activeTab;
      result = (skills[activeTab] || []).map(s => ({ ...s, category: catLabel }));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    }

    return result;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
              <span className="w-4 h-[1px] bg-primary-400"></span>
              <span>04 // Technical Stack & Diagnostic Specs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Production Capabilities Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans">
              Algorithms, frameworks, hardware inference stacks, and security protocols verified across real systems.
            </p>
          </div>

          {/* Interactive Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Python, OpenCV)..."
              className="w-full pl-9 pr-8 py-2.5 text-xs font-mono rounded-xl bg-obsidian-900 border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-primary-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-white"
              >
                ESC
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playBlip(1000, 0.05, 'triangle');
                  setActiveTab(cat.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-primary-400 text-dark-950 font-bold shadow-md shadow-primary-500/20'
                    : 'bg-obsidian-900 text-slate-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Segmented Diagnostic Meters */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center spec-panel rounded-2xl border border-white/[0.08]">
            <p className="text-slate-400 text-sm font-mono">No matching capability for "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-primary-400 hover:underline font-mono"
            >
              Reset search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => {
              // Discrete 10-segment diagnostic meter
              const totalSegments = 10;
              const activeSegments = Math.round((skill.level / 100) * totalSegments);

              return (
                <div
                  key={idx}
                  className="spec-panel p-4 rounded-xl border border-white/[0.08] hover:border-primary-400/40 transition-all group font-mono"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                      <span className="font-bold text-sm text-slate-100 group-hover:text-primary-300 transition-colors font-sans">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-obsidian-950 text-slate-400 border border-white/[0.06]">
                      {skill.category}
                    </span>
                  </div>

                  {/* Segmented Diagnostic Meter (Hardware UI) */}
                  <div className="grid grid-cols-10 gap-1 my-2">
                    {Array.from({ length: totalSegments }).map((_, segIdx) => (
                      <div
                        key={segIdx}
                        className={`h-1.5 rounded-sm transition-all duration-300 ${
                          segIdx < activeSegments
                            ? 'bg-primary-400 shadow-sm shadow-primary-500/50'
                            : 'bg-obsidian-950 border border-white/[0.06]'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2">
                    <span className="text-slate-500">BENCHMARK</span>
                    <span className="text-emerald-400 font-bold">{skill.level}% VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
