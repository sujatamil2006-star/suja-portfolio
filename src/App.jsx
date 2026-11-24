import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GestureSimulator from './components/GestureSimulator';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import SujaCopilot from './components/SujaCopilot';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 selection:bg-primary-400 selection:text-dark-950 font-sans">
      {/* Interactive 2D Canvas Constellation */}
      <ParticleBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About onOpenResume={() => setIsResumeOpen(true)} />
          <Skills />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <GestureSimulator />
          <Certificates onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
          <Experience onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
          <Contact onShowToast={showToast} />
        </main>

        <Footer />
      </div>

      {/* Interactive Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <CertificateModal 
        certificate={selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Toast Feedback System */}
      <Toast 
        toast={toast} 
        onClose={hideToast} 
      />

      {/* Interactive AI Portfolio Assistant */}
      <SujaCopilot 
        onOpenResume={() => setIsResumeOpen(true)} 
        onShowToast={showToast} 
      />
    </div>
  );
}
