import React from 'react';
import { Cpu, Zap, Layout, ShieldCheck, CheckCircle2, ArrowUpRight, FileText, BookOpen, Award, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

const iconMap = {
  Cpu: Cpu,
  Zap: Zap,
  Layout: Layout,
  ShieldCheck: ShieldCheck
};

export default function About({ onOpenResume }) {
  const { personal, pillars, paperPresentation } = portfolioData;

  const quickHighlights = [
    { title: "Edge-AI & Gesture Inference", spec: "MediaPipe 3D / Snapdragon NPU" },
    { title: "Enterprise Local RAG", spec: "ChromaDB + Qwen 3:8B" },
    { title: "FinTech Risk & Explainable AI", spec: "XGBoost + SHAP Attribution" },
    { title: "Industrial Data Analytics", spec: "EDA & Feature Engineering" },
    { title: "Defensive Cybersecurity Auditing", spec: "Essential Eight Framework" },
    { title: "Production Full-Stack Systems", spec: "Python, Flask & Modern React" }
  ];

  return (
    <section id="about" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
            <span className="w-4 h-[1px] bg-primary-400"></span>
            <span>01 // Technical Dossier & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Architecting Reliable AI Systems For The Real World.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Undergraduate in Artificial Intelligence & Data Science at KPR Institute of Engineering and Technology, combining computer vision, natural language processing, and cybersecurity with hands-on industrial execution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Academic & Engineering Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="spec-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                  <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider">
                    RESEARCHER_PROFILE // SUJA S
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-bold">
                  CGPA: {personal.cgpa} / 10
                </span>
              </div>

              {personal.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}

              {/* Research Paper Feature Box */}
              {paperPresentation && (
                <div className="p-4 rounded-xl bg-obsidian-900 border border-primary-500/30 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-primary-300 uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-primary-500/10">
                        Peer-Reviewed Paper Presentation
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">KPRIET</span>
                    </div>
                    <h5 className="text-sm font-display font-bold text-white mt-1.5">{paperPresentation.title}</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{paperPresentation.description}</p>
                  </div>
                </div>
              )}

              {/* Technical Core Competency Spec Grid */}
              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Engineering Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {quickHighlights.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-obsidian-900/80 border border-white/[0.05] flex flex-col justify-between">
                      <span className="text-xs font-bold text-slate-200">{item.title}</span>
                      <span className="text-[10px] font-mono text-primary-400 mt-0.5">{item.spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playBlip(1000, 0.06, 'sine');
                    onOpenResume();
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-white/[0.1] text-xs font-mono font-semibold transition-colors"
                >
                  <FileText className="w-4 h-4 text-primary-400" />
                  <span>Inspect Full Resume</span>
                </button>
                <a
                  href="/Suja_S_Resume.pdf"
                  download="Suja_S_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 text-primary-300 border border-primary-500/30 text-xs font-mono font-semibold transition-colors"
                >
                  <span>Download PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Cpu;
              return (
                <div
                  key={idx}
                  className="spec-panel p-5 rounded-xl border border-white/[0.08] hover:border-primary-400/40 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-obsidian-950 border border-white/[0.08] flex items-center justify-center text-primary-400 shrink-0 group-hover:border-primary-400/40 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-primary-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
