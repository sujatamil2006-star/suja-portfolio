import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, Terminal, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { toggleSound, isSoundEnabled, playBlip } from '../utils/audio';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  const handleToggleSound = () => {
    const next = toggleSound();
    setSoundOn(next);
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'AI Lab', href: '#simulator', id: 'simulator' },
    { label: 'Credentials', href: '#certificates', id: 'certificates' },
    { label: 'Internships', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'simulator', 'certificates', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerHireMeConfetti = () => {
    playBlip(1300, 0.08, 'sine');
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.15 },
      colors: ['#22d3ee', '#10b981', '#ffffff']
    });
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Architectural Brand Logo */}
        <a 
          href="#hero" 
          onClick={() => playBlip(1000, 0.05, 'triangle')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-white/[0.12] flex items-center justify-center text-primary-400 font-mono font-bold text-xs group-hover:border-primary-400 transition-colors">
            SS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-primary-300 transition-colors">
                {portfolioData.personal.fullName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider">
              KPRIET // AI & DATA SCIENCE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-obsidian-900/80 px-2 py-1.5 rounded-xl border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => playBlip(950 + idx * 40, 0.04, 'sine')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                  isActive
                    ? 'bg-white/[0.08] text-primary-300 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Tactical Audio Toggle */}
          <button
            onClick={handleToggleSound}
            title={soundOn ? 'Interactive Audio: Enabled (Click to Mute)' : 'Interactive Audio: Muted (Click to Enable SFX)'}
            className={`p-2 rounded-xl border transition-all flex items-center justify-center text-xs font-mono ${
              soundOn
                ? 'bg-primary-500/10 border-primary-400/40 text-primary-300'
                : 'bg-obsidian-900 hover:bg-obsidian-850 border-white/[0.08] text-slate-400 hover:text-slate-200'
            }`}
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 animate-pulse text-primary-400" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => {
              playBlip(1000, 0.05, 'sine');
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-obsidian-900 hover:bg-obsidian-850 border border-white/[0.1] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-primary-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={triggerHireMeConfetti}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-dark-950 bg-primary-400 hover:bg-primary-300 transition-all shadow-sm"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleToggleSound}
            className="p-2 rounded-lg bg-obsidian-900 border border-white/[0.1] text-slate-400"
            aria-label="Toggle Sound"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-primary-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-900 border border-white/[0.1] text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-obsidian-950/95 border-b border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-mono text-slate-300 hover:bg-obsidian-900 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-obsidian-900 border border-white/[0.1] text-xs font-mono text-slate-200"
              >
                <FileText className="w-4 h-4 text-primary-400" />
                <span>View CV</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerHireMeConfetti();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary-400 text-dark-950 text-xs font-mono font-bold"
              >
                <Send className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
