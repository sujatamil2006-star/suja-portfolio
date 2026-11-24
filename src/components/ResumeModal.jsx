import React from 'react';
import { X, Printer, Download, ExternalLink, Briefcase, GraduationCap, Award, FileText, Code2, Cpu, Database, Wrench } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { personal, education, skills, projects, internships, certificates, paperPresentation, areasOfInterest } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-dark-850 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm sm:text-base font-bold text-white">Curriculum Vitae — {personal.fullName}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-dark-700 hover:bg-dark-600 text-slate-200 transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            
            <a
              href="/Suja_S_Resume.pdf"
              download="Suja_S_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-primary-500 hover:bg-primary-400 text-dark-950 transition-colors shadow-glow-cyan"
              title="Download Original Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-dark-950" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: High-Fidelity Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-dark-950 text-slate-200 text-xs sm:text-sm">
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{personal.fullName}</h1>
                <p className="text-primary-400 font-semibold text-sm sm:text-base mt-0.5">{personal.title}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-slate-700/60"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-slate-700/60"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-400 font-mono">
              <span>📍 {personal.location}</span>
              <span>📞 <a href={`tel:${personal.rawPhone}`} className="hover:text-primary-400">{personal.phone}</a></span>
              <span>✉️ <a href={`mailto:${personal.email}`} className="hover:text-primary-400">{personal.email}</a></span>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <h4 className="text-[11px] font-bold text-primary-400 uppercase tracking-wider mb-1.5">Career Objective</h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {personal.tagline}
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4 text-primary-400" />
              <h3>Education</h3>
            </div>
            {education.map((edu, idx) => (
              <div key={idx} className="bg-dark-850/80 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-white text-sm">{edu.institution}</h4>
                  <p className="text-primary-300 text-xs mt-0.5">{edu.degree}</p>
                </div>
                <div className="sm:text-right font-mono text-xs text-slate-300">
                  <span className="block text-slate-400">{edu.year}</span>
                  <span className="inline-block mt-0.5 font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    CGPA: {personal.cgpa}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-3">
              <Code2 className="w-4 h-4 text-primary-400" />
              <h3>Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="bg-dark-850/70 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-primary-300 block mb-1">Programming:</span>
                <p className="text-slate-300">Python, Java, C, C++</p>
              </div>
              <div className="bg-dark-850/70 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-primary-300 block mb-1">AI / ML:</span>
                <p className="text-slate-300">Machine Learning, NLP, RAG, Computer Vision, Generative AI</p>
              </div>
              <div className="bg-dark-850/70 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-primary-300 block mb-1">Data & Analytics:</span>
                <p className="text-slate-300">SQL, MySQL, Pandas, NumPy, MS Excel, Power BI</p>
              </div>
              <div className="bg-dark-850/70 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-primary-300 block mb-1">Web & Frameworks:</span>
                <p className="text-slate-300">Flask, React, JavaScript, Streamlit, REST APIs</p>
              </div>
              <div className="bg-dark-850/70 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-primary-300 block mb-1">Tools & Libraries:</span>
                <p className="text-slate-300">Git, GitHub, OpenCV, MediaPipe, PySide6, PyAutoGUI, ChromaDB</p>
              </div>
              <div className="bg-dark-850/70 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-primary-300 block mb-1">Core CS:</span>
                <p className="text-slate-300">DSA, DBMS, OOP, Data Analytics</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-3">
              <Cpu className="w-4 h-4 text-primary-400" />
              <h3>Featured AI & Engineering Projects</h3>
            </div>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-dark-850/60 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-white text-sm">
                      {proj.title}
                    </h4>
                    <span className="text-[11px] font-mono text-primary-400">
                      {proj.tags.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <ul className="space-y-1 text-slate-300 text-xs list-disc list-inside">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-3">
              <Briefcase className="w-4 h-4 text-primary-400" />
              <h3>Industrial Internships</h3>
            </div>
            <div className="space-y-4">
              {internships.map((exp, idx) => (
                <div key={idx} className="bg-dark-850/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-bold text-white">{exp.role} <span className="text-primary-400 font-normal">@ {exp.company}</span></h4>
                    <span className="text-xs text-slate-400 font-mono">{exp.period} | {exp.location}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Paper Presentation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-primary-400" />
                <h4>Certifications & Achievements</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside bg-dark-850/50 p-3.5 rounded-xl border border-slate-800">
                <li>NPTEL – Data Analytics with Python (Elite 61%)</li>
                <li>NPTEL – Internet of Things</li>
                <li>Samsung Innovation Campus – Python Programming</li>
                <li>CodeChef – Java Programming & Logical Problem Solving</li>
                <li>HACKSPORA 2.0 (24 Hours National Hackathon)</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4 text-primary-400" />
                <h4>Research Paper & Interests</h4>
              </div>
              <div className="bg-dark-850/50 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div>
                  <span className="text-primary-300 font-semibold block">Presented Paper:</span>
                  <p className="text-slate-300 italic">"Where Data Meets AI: Transforming Information into Intelligence"</p>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-primary-300 font-semibold block">Areas of Interest:</span>
                  <p className="text-slate-400 text-[11px]">{areasOfInterest.join(' • ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-dark-850 border-t border-slate-800 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-400 truncate">
            {personal.email} • {personal.phone}
          </p>
          <div className="flex items-center gap-2">
            <a
              href="/Suja_S_Resume.pdf"
              download="Suja_S_Resume.pdf"
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-primary-500 hover:bg-primary-400 text-dark-950 transition-colors"
            >
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-dark-700 hover:bg-dark-600 text-slate-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
