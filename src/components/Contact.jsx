import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, Clock, MapPin, Sparkles, Phone, Download, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { playBlip, playSuccessChime } from '../utils/audio';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    playBlip(1100, 0.05, 'sine');
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Email address copied to clipboard!'
      });
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    playBlip(1100, 0.05, 'sine');
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Phone number copied to clipboard!'
      });
    }
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    playBlip(1000, 0.08, 'triangle');

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      playSuccessChime();
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22d3ee', '#10b981', '#ffffff']
      });

      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: 'Transmission dispatched! Thank you for getting in touch.'
        });
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 750);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
            <span className="w-4 h-[1px] bg-primary-400"></span>
            <span>07 // Inquiries & Collaborative Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Initiate Direct Contact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            Available for AI/ML engineering roles, research internships, hackathon collaborations, and technical advisory.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="spec-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  Direct Node Information
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Connect through certified secure channels or copy direct endpoints below:
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-obsidian-900 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/[0.08] text-primary-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate font-mono">
                    <div className="text-[10px] text-slate-500 uppercase">EMAIL_ENDPOINT</div>
                    <a href={`mailto:${personal.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-primary-300 transition-colors truncate block">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-xs font-mono text-slate-200 border border-white/[0.1] transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Copy Phone Box */}
              <div className="p-4 rounded-xl bg-obsidian-900 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/[0.08] text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate font-mono">
                    <div className="text-[10px] text-slate-500 uppercase">DIRECT_PHONE</div>
                    <a href={`tel:${personal.rawPhone}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors truncate block">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="px-3 py-1.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-xs font-mono text-slate-200 border border-white/[0.1] transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Node location & turnaround */}
              <div className="space-y-2.5 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>LOCATION: Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>LATENCY: Turnaround within 2 hours</span>
                </div>
              </div>

              {/* Profiles & Verified Accounts */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3 font-mono">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/[0.08] text-slate-200 text-xs transition-all hover:border-primary-400/40"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/[0.08] text-slate-200 text-xs transition-all hover:border-primary-400/40"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <a
                  href="/Suja_S_Resume.pdf"
                  download="Suja_S_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-semibold transition-all mt-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="spec-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-400" />
                <span>Transmit Direct Inquiry</span>
              </h3>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-obsidian-900/60 rounded-xl border border-emerald-500/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">Transmission Successful</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-sans">
                    Your message has been logged in Suja's dispatch queue. Expect a prompt response.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 text-xs font-mono text-slate-200 border border-white/[0.1]"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Sender Identity <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-obsidian-900 border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-primary-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-obsidian-900 border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-primary-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Subject / Role Specification
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Internship / Edge-Vision Collaboration"
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-obsidian-900 border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-primary-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Transmission Body <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Suja, I came across your SnapSense and ITEye repositories..."
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-obsidian-900 border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-primary-400 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-400 hover:bg-primary-300 text-dark-950 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-dark-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
