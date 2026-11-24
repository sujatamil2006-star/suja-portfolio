import React from 'react';
import { X, ExternalLink, Award, Calendar, ShieldCheck, Download, Printer } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-dark-850 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-primary-500/15 text-primary-400">
              <Award className="w-4 h-4" />
            </span>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {certificate.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700 hover:bg-dark-600 text-xs text-slate-200 transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <a
              href={certificate.image}
              download={`${certificate.id}.jpg`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/15 hover:bg-primary-500/25 border border-primary-500/30 text-xs text-primary-300 font-semibold transition-colors"
              title="Download image"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save Image</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Image View */}
        <div className="p-4 sm:p-6 bg-dark-950 flex-1 overflow-y-auto flex flex-col items-center justify-center">
          <div className="relative group rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-white/5 max-w-full">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="max-h-[60vh] w-auto object-contain rounded-xl"
            />
          </div>

          {/* Details strip */}
          <div className="w-full mt-5 p-4 rounded-xl bg-dark-850/80 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Credential ID:</span>
                <span className="font-mono text-primary-400 bg-dark-900 px-2 py-0.5 rounded border border-slate-700/60">
                  {certificate.credentialId}
                </span>
                {certificate.score && (
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {certificate.score}
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
                {certificate.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {certificate.tags && certificate.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
