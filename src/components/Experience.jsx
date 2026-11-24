import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronRight, ShieldCheck, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function Experience({ onSelectCertificate }) {
  const { internships, education, certificates } = portfolioData;
  const [activeTab, setActiveTab] = useState('internships');

  return (
    <section id="experience" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
              <span className="w-4 h-[1px] bg-primary-400"></span>
              <span>06 // Track Record & University Node</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Industrial Experience & Education
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans">
              Verified corporate training at NoviTech R&D and EWB Courses alongside academic standing at KPRIET.
            </p>
          </div>

          {/* Toggle between Internships & Education/Certs */}
          <div className="flex items-center gap-1.5 p-1 bg-obsidian-900 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => {
                playBlip(1050, 0.05, 'triangle');
                setActiveTab('internships');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'internships'
                  ? 'bg-primary-400 text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Internships ({internships.length})</span>
            </button>
            <button
              onClick={() => {
                playBlip(1050, 0.05, 'triangle');
                setActiveTab('education');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'education'
                  ? 'bg-primary-400 text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Internships Timeline */}
        {activeTab === 'internships' && (
          <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-10">
            {internships.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-obsidian-950 border-2 border-primary-400 group-hover:bg-primary-400 transition-all"></div>

                <div className="spec-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-primary-400/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary-500/10 text-primary-300 border border-primary-500/20 font-bold">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-primary-400 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="mt-4 space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags & Certificate View trigger */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-900 text-slate-300 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {onSelectCertificate && (
                      <button
                        onClick={() => {
                          playBlip(1200, 0.06, 'sine');
                          const match = certificates.find(c => c.image === exp.certificateImage);
                          if (match) onSelectCertificate(match);
                        }}
                        className="text-xs font-mono text-primary-400 hover:text-primary-300 font-semibold flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verify Certificate ({exp.certificateId})</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & College */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-white font-mono font-bold text-sm tracking-wide">
                <GraduationCap className="w-4 h-4 text-primary-400" />
                <span className="uppercase">Undergraduate Degree Program</span>
              </div>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="spec-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary-400 font-bold">{edu.year}</span>
                      <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                        CGPA 8.3 / 10
                      </span>
                    </div>
                    <h4 className="text-2xl font-display font-extrabold text-white mt-1.5">{edu.degree}</h4>
                    <p className="text-sm font-semibold text-slate-300 mt-1">{edu.institution}</p>
                    <div className="mt-3 inline-block text-xs font-mono font-semibold px-3 py-1 rounded bg-primary-500/10 text-primary-300 border border-primary-500/20">
                      {edu.honors}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.08] space-y-2.5 text-xs text-slate-300 font-sans">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Core Specialization: Machine Learning, Computer Vision, Local RAG, Deep Learning & High-Performance Data Systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Active builder in National 24h Hackathons, AI Technical Associations & KPRIET Research symposia</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-white font-mono font-bold text-sm tracking-wide">
                <Award className="w-4 h-4 text-primary-400" />
                <span className="uppercase">Audited Academic Benchmarks</span>
              </div>
              <div className="spec-panel p-6 rounded-2xl border border-white/[0.08] space-y-4">
                <div className="p-4 rounded-xl bg-obsidian-900 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-primary-400 font-semibold block uppercase">National 24H Hackathon</span>
                  <div className="text-sm font-display font-bold text-white mt-1">HACKSPORA 2.0</div>
                  <div className="text-xs text-slate-400 mt-0.5">Karpagam Academy of Higher Education</div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-900 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold block uppercase">NPTEL Elite Certification</span>
                  <div className="text-sm font-display font-bold text-white mt-1">Data Analytics with Python (61%)</div>
                  <div className="text-xs text-slate-400 mt-0.5">IIT Roorkee • Funded by MoE Govt. of India</div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-900 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-primary-400 font-semibold block uppercase">Women in Tech Initiative</span>
                  <div className="text-sm font-display font-bold text-white mt-1">Women Who Master Hackathon</div>
                  <div className="text-xs text-slate-400 mt-0.5">Logitech & Aspire For Her</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
