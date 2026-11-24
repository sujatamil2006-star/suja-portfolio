import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, ChevronDown, Sparkles, Cpu, ShieldCheck, Activity, Layers, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;

  // Real-time IST clock in Coimbatore
  const [localTime, setLocalTime] = useState('');
  useEffect(() => {
    const updateClock = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
        setLocalTime(timeStr);
      } catch (e) {
        setLocalTime('15:54:13');
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Interactive AI Core Dossier Tab selection
  const [activeTab, setActiveTab] = useState('snapsense');

  const dossierData = {
    snapsense: {
      tag: 'EDGE-AI / COMPUTER VISION',
      title: 'SnapSense AI',
      subtitle: 'Zero-Latency Edge Gesture Engine',
      runtime: 'Snapdragon X Elite NPU',
      fps: '60 FPS Real-Time',
      latency: '0.4ms Inference',
      framework: 'MediaPipe 21 Joints + OpenCV + PySide6',
      badge: 'NPU-ACCELERATED',
      badgeColor: 'emerald',
      github: 'https://github.com/sujatamil2006-star/SnapSense-AI',
      summary: 'Translates physical hand gestures into zero-latency mouse cursor tracking, air pinches, and volume controls without cloud dependencies.',
      actionAnchor: '#simulator',
      actionLabel: 'Launch 3D Hand Landmark Lab'
    },
    iteye: {
      tag: 'LOCAL RAG / CYBERSECURITY',
      title: 'ITEye',
      subtitle: 'Essential Eight Compliance Auditor',
      runtime: 'ChromaDB Local Vector DB',
      fps: '14.2 tokens/sec',
      latency: '<140ms Vector Query',
      framework: 'Qwen 3:8B + Flask + RAG Pipeline',
      badge: '100% AIR-GAPPED',
      badgeColor: 'cyan',
      github: 'https://github.com/sujatamil2006-star/ITEye',
      summary: 'Audits enterprise telemetry logs against cybersecurity frameworks using purely local embeddings to guarantee zero data leakage.',
      actionAnchor: '#projects',
      actionLabel: 'Inspect Architecture Spec'
    },
    risk: {
      tag: 'FINTECH AI / EXPLAINABILITY',
      title: 'AI Risk Manager',
      subtitle: 'Real-Time Fraud Detection Engine',
      runtime: 'FastAPI + Python C-Bindings',
      fps: '5,000 req/sec',
      latency: '1.8ms per Transaction',
      framework: 'XGBoost + Isolation Forest + SHAP XAI',
      badge: '99.4% RECALL',
      badgeColor: 'amber',
      github: 'https://github.com/sujatamil2006-star/ai-risk-manager',
      summary: 'Detects fraudulent digital payments in real-time with explainable AI (SHAP) feature attribution for high-volume banking systems.',
      actionAnchor: '#projects',
      actionLabel: 'View Risk Model Metrics'
    }
  };

  const currentDossier = dossierData[activeTab];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Technical Telemetry Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/[0.08] text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 px-2.5 py-1 rounded bg-obsidian-850 border border-white/[0.08] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NODE: COIMBATORE, TN</span>
              <span className="text-primary-400 font-bold">{localTime} IST</span>
            </span>
            <span className="px-2.5 py-1 rounded bg-obsidian-850 border border-white/[0.08] text-slate-300 hidden sm:inline">
              KPRIET // B.TECH AI & DS
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
              CGPA: {personal.cgpa} / 10.0
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span className="hidden md:inline">SYSTEM_STATUS:</span>
            <span className="text-emerald-400 font-bold">PRODUCTION</span>
            <span className="text-slate-600">//</span>
            <span>12 GITHUB REPOS</span>
          </div>
        </div>

        {/* Main Grid: Editorial Statement on Left, Live Telemetry Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
                <span className="w-5 h-[1px] bg-primary-400"></span>
                <span>AI & Data Science Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                Building <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400">
                  Intelligent Systems
                </span> <br className="hidden sm:inline" />
                That Solve Real-World Problems.
              </h1>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              I am <span className="text-white font-semibold">{personal.fullName}</span>, an AI & Data Science researcher at <span className="text-white font-medium">KPR Institute of Engineering & Technology</span>. I specialize in building on-device computer vision models, local enterprise RAG systems, and defensive cybersecurity intelligence with verified industrial experience.
            </p>

            {/* Tactical Action Bar */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#simulator"
                onClick={() => playBlip(1200, 0.08, 'sine')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-400 hover:bg-primary-300 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary-500/25"
              >
                <Cpu className="w-4 h-4 text-dark-950" />
                <span>Test SnapSense AI (3D Lab)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/Suja_S_Resume.pdf"
                download="Suja_S_Resume.pdf"
                onClick={() => playBlip(900, 0.06, 'triangle')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-white/[0.12] hover:border-primary-400/50 text-xs font-semibold uppercase tracking-wider transition-all"
                title="Download Suja S Resume PDF"
              >
                <Download className="w-4 h-4 text-primary-400" />
                <span>Resume PDF</span>
              </a>

              <button
                onClick={() => {
                  playBlip(1000, 0.06, 'sine');
                  onOpenResume();
                }}
                className="px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Interactive CV →
              </button>
            </div>

            {/* Social & Channel Quick Links */}
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-400">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider">Direct Links:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900 border border-white/[0.08] hover:border-primary-400/50 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900 border border-white/[0.08] hover:border-primary-400/50 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Hardware & AI Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="spec-panel rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl relative">
              {/* Console Top Header */}
              <div className="px-5 py-3.5 bg-obsidian-900/90 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-400"></span>
                  <span className="text-xs font-mono font-bold text-white tracking-wide">
                    ACTIVE_SYSTEM_DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  LIVE BENCHMARK
                </span>
              </div>

              {/* Console Nav Tabs */}
              <div className="grid grid-cols-3 bg-obsidian-950 border-b border-white/[0.08] text-xs font-mono">
                <button
                  onClick={() => {
                    setActiveTab('snapsense');
                    playBlip(1100, 0.05, 'sine');
                  }}
                  className={`py-2.5 px-2 text-center transition-all ${
                    activeTab === 'snapsense'
                      ? 'bg-obsidian-850 text-primary-300 font-bold border-b-2 border-primary-400'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  SnapSense
                </button>
                <button
                  onClick={() => {
                    setActiveTab('iteye');
                    playBlip(1100, 0.05, 'sine');
                  }}
                  className={`py-2.5 px-2 text-center transition-all ${
                    activeTab === 'iteye'
                      ? 'bg-obsidian-850 text-primary-300 font-bold border-b-2 border-primary-400'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  ITEye RAG
                </button>
                <button
                  onClick={() => {
                    setActiveTab('risk');
                    playBlip(1100, 0.05, 'sine');
                  }}
                  className={`py-2.5 px-2 text-center transition-all ${
                    activeTab === 'risk'
                      ? 'bg-obsidian-850 text-primary-300 font-bold border-b-2 border-primary-400'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  Risk Manager
                </button>
              </div>

              {/* Console Card Body */}
              <div className="p-6 space-y-5 bg-obsidian-900/60 font-sans">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary-400 font-bold">
                      {currentDossier.tag}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white mt-0.5">
                      {currentDossier.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {currentDossier.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-primary-500/10 border border-primary-500/30 text-primary-300 shrink-0 font-bold">
                    {currentDossier.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentDossier.summary}
                </p>

                {/* Telemetry Matrix Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/[0.06] text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-obsidian-950/80 border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Target Engine</span>
                    <span className="text-slate-200 font-medium text-[11px] truncate block mt-0.5">
                      {currentDossier.runtime}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-950/80 border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Throughput</span>
                    <span className="text-emerald-400 font-bold text-[11px] block mt-0.5">
                      {currentDossier.fps}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-950/80 border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Latency</span>
                    <span className="text-primary-300 font-bold text-[11px] block mt-0.5">
                      {currentDossier.latency}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-950/80 border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Framework</span>
                    <span className="text-slate-300 font-medium text-[11px] truncate block mt-0.5">
                      {currentDossier.framework.split('+')[0]}
                    </span>
                  </div>
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href={currentDossier.actionAnchor}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 text-primary-300 hover:text-white text-xs font-mono font-semibold transition-all"
                  >
                    <span>{currentDossier.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={currentDossier.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-obsidian-950 hover:bg-obsidian-850 border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Key Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-primary-400/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Chevron indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#about" 
          className="text-slate-500 hover:text-primary-400 transition-colors animate-bounce p-2"
          aria-label="Scroll to About"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
