import React, { useState } from 'react';
import { Award, Briefcase, Sparkles, Eye, CheckCircle2, ShieldCheck, Trophy, Layers, ExternalLink, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function Certificates({ onSelectCertificate }) {
  const { certificates, internships } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Internship',
    'AI & GenAI',
    'NPTEL & Academic',
    'Hackathons',
    'Programming'
  ];

  const filteredCertificates = activeCategory === 'All'
    ? certificates
    : certificates.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
              <span className="w-4 h-[1px] bg-primary-400"></span>
              <span>05 // Audited Credential Vault</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Verified Certifications & Internships
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Authentic verified credentials from NPTEL / IIT Roorkee, IIT Guwahati, TCS iON, NoviTech R&D, EWB Courses, and National Hackathons.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-obsidian-900 rounded-xl border border-white/[0.08]">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playBlip(1050, 0.05, 'triangle');
                    setActiveCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    isSelected
                      ? 'bg-primary-400 text-dark-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Internships Strip if on 'All' or 'Internship' */}
        {(activeCategory === 'All' || activeCategory === 'Internship') && (
          <div className="mb-14 space-y-4">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-sm tracking-wide">
              <Briefcase className="w-4 h-4 text-primary-400" />
              <span className="uppercase">Featured Industrial Internships</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internships.map((intern, idx) => (
                <div
                  key={idx}
                  className="spec-panel p-6 rounded-2xl border border-white/[0.1] hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  onClick={() => {
                    playBlip(1200, 0.06, 'sine');
                    const match = certificates.find(c => c.title.toLowerCase().includes(intern.role.toLowerCase().split(' ')[0]) || c.issuer.includes(intern.company.split(' ')[0]));
                    if (match) onSelectCertificate(match);
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary-500/10 text-primary-300 border border-primary-500/20 uppercase tracking-wider font-bold">
                        {intern.duration} Industrial Internship
                      </span>
                      <h4 className="text-xl font-display font-bold text-white mt-2 group-hover:text-primary-300 transition-colors">
                        {intern.role}
                      </h4>
                      <div className="text-xs font-mono text-slate-300 mt-0.5">
                        {intern.company} • <span className="text-primary-400">{intern.period}</span>
                      </div>
                    </div>

                    <button 
                      className="p-2 rounded-xl bg-obsidian-900 group-hover:bg-primary-400 group-hover:text-dark-950 text-slate-300 border border-white/[0.08] transition-all shrink-0"
                      title="Inspect Certificate"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 mt-3.5 leading-relaxed font-sans">
                    {intern.description}
                  </p>

                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-400 font-sans">
                    {intern.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5 border-t border-white/[0.08]">
                    {intern.skills.map((s, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-900 text-slate-300 border border-white/[0.06]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="spec-panel group rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col hover:border-primary-400/40 hover:-translate-y-1 transition-all duration-300 shadow-xl cursor-pointer"
              onClick={() => {
                playBlip(1200, 0.06, 'sine');
                onSelectCertificate(cert);
              }}
            >
              {/* Certificate Image Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden bg-obsidian-950 flex items-center justify-center p-3 border-b border-white/[0.06]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-obsidian-900/90 text-primary-300 border border-primary-500/20 backdrop-blur-md">
                    {cert.category}
                  </span>
                  {cert.score && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {cert.score}
                    </span>
                  )}
                </div>

                {/* Inspect Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-obsidian-950/60 backdrop-blur-[2px]">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-400 text-dark-950 font-bold text-xs uppercase tracking-wider font-mono">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Credential</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-mono font-bold text-primary-400 uppercase tracking-wider truncate">
                    {cert.issuer}
                  </div>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-primary-300 transition-colors mt-1 line-clamp-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed font-sans">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {cert.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-900 text-slate-300 border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-[11px] text-slate-500">{cert.date}</span>
                  <span className="text-primary-400 font-semibold group-hover:underline flex items-center gap-1 text-[11px]">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
