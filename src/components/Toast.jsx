import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-dark-850/95 border border-primary-500/40 text-slate-100 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md transition-all animate-bounce-short">
      {toast.type === 'error' ? (
        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" />
      )}
      <div className="text-sm font-medium">{toast.message}</div>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-100 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
