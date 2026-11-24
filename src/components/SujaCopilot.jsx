import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Download, ExternalLink, ChevronRight, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playBlip } from '../utils/audio';

export default function SujaCopilot({ onOpenResume, onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I am Suja's AI Portfolio Assistant. Ask me anything about her AI/ML projects, skills, education at KPRIET, or internships!",
      chips: [
        "Top AI Projects",
        "Education & CGPA",
        "Internships",
        "Download Resume"
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAIResponse = (userText) => {
    const query = userText.toLowerCase();

    if (query.includes('project') || query.includes('work') || query.includes('repo')) {
      return {
        text: "Suja has published 12+ open-source repositories! Here are her flagship AI systems:\n\n1. **SnapSense AI**: Edge-native gesture recognition tracking 21 3D hand landmarks on Snapdragon NPUs.\n2. **ITEye**: Essential Eight cybersecurity auditing using local RAG & Qwen 3:8B.\n3. **AI Risk Manager**: Real-time payment fraud detection using XGBoost, Isolation Forest & SHAP XAI.\n4. **TrustBridge AI**: Built for the PayPal AI Hackathon 2026 for automated milestone verification.",
        action: { label: 'Explore Projects Section', href: '#projects' },
        chips: ["Tell me about SnapSense", "What is ITEye?", "Skills Breakdown"]
      };
    }

    if (query.includes('snapsense') || query.includes('gesture')) {
      return {
        text: "**SnapSense AI** is Suja's zero-latency edge gesture engine. It uses MediaPipe and OpenCV to track 21 3D hand landmarks at 60 FPS, translating physical gestures into mouse clicks, scrolling, and volume control without cloud latency.",
        action: { label: 'Try Interactive Demo Above', href: '#hero' },
        chips: ["View GitHub Repo", "Other Projects"]
      };
    }

    if (query.includes('iteye') || query.includes('security') || query.includes('cyber')) {
      return {
        text: "**ITEye** is an AI cybersecurity tool auditing telemetry logs against the Australian Essential Eight framework. It runs a local RAG pipeline with ChromaDB and Qwen 3:8B to keep enterprise data 100% on-premises.",
        chips: ["Internship Experience", "Download Resume"]
      };
    }

    if (query.includes('education') || query.includes('college') || query.includes('cgpa') || query.includes('study')) {
      return {
        text: `Suja is pursuing her **B.Tech in Artificial Intelligence & Data Science** (2024–2028) at **KPR Institute of Engineering and Technology (KPRIET), Coimbatore** with a strong CGPA of **${portfolioData.personal.cgpa}**!`,
        chips: ["Internships", "Certifications", "Contact Suja"]
      };
    }

    if (query.includes('intern') || query.includes('experience')) {
      return {
        text: "Suja has completed 2 certified industrial internships:\n\n• **Data Analytics Intern** @ **NoviTech R&D Pvt Ltd** (Coimbatore): Real-world data wrangling, EDA, and preprocessing pipelines.\n• **Cybersecurity Intern** @ **EWB Courses**: Vulnerability assessment and defensive security auditing under AICTE portal guidelines.",
        chips: ["Verified Certificates", "View Projects"]
      };
    }

    if (query.includes('resume') || query.includes('cv') || query.includes('download')) {
      return {
        text: "You can download Suja's official resume PDF directly, or inspect her interactive CV right in the browser!",
        action: { label: 'Download Resume PDF', href: '/Suja_S_Resume.pdf', download: true },
        chips: ["Open Interactive CV", "Contact Info"]
      };
    }

    if (query.includes('skill') || query.includes('tech') || query.includes('python') || query.includes('java')) {
      return {
        text: "Suja's primary stack includes:\n\n• **AI/ML**: Machine Learning, NLP, RAG, Computer Vision, Generative AI\n• **Programming**: Python (Advanced), Java (CodeChef), C, C++\n• **Data & Tools**: SQL, Pandas, NumPy, OpenCV, MediaPipe, ChromaDB, PySide6\n• **Web**: React, Flask, JavaScript, Streamlit, Tailwind CSS",
        chips: ["View Projects", "Download Resume"]
      };
    }

    if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone')) {
      return {
        text: `You can reach Suja directly at:\n\n✉️ **Email**: ${portfolioData.personal.email}\n📞 **Phone**: ${portfolioData.personal.phone}\n🔗 **LinkedIn**: [linkedin.com/in/suja-s](https://www.linkedin.com/in/suja-s-754050375)\n💻 **GitHub**: [github.com/sujatamil2006-star](https://github.com/sujatamil2006-star)`,
        chips: ["Send Message", "Download Resume"]
      };
    }

    // Default polite response
    return {
      text: `Suja S is an AI & Data Science undergraduate at KPRIET (CGPA 8.3/10) specializing in Machine Learning, RAG, Computer Vision, and full-stack development. She has 12+ GitHub projects and internships in Data Analytics & Cybersecurity. How can I help you learn more?`,
      chips: ["Top AI Projects", "Education & CGPA", "Download Resume", "Contact Info"]
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    playBlip(1100, 0.05, 'sine');

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(query);
      playBlip(1300, 0.08, 'triangle');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: response.text,
          action: response.action,
          chips: response.chips
        }
      ]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            playBlip(1000, 0.07, 'sine');
          }}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-obsidian-900 border border-white/[0.12] hover:border-primary-400 text-white shadow-2xl backdrop-blur-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 font-mono"
        >
          <div className="relative">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-ping absolute -top-0.5 -right-0.5"></span>
            <div className="w-7 h-7 rounded-lg bg-obsidian-950 border border-white/[0.1] flex items-center justify-center text-primary-400 font-bold">
              <Bot className="w-4 h-4 text-primary-400" />
            </div>
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5 font-display">
              <span>Ask Suja AI</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-primary-500/10 text-primary-300 font-mono font-bold">
                COPILOT
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              {isOpen ? 'Click to minimize' : 'Interactive portfolio assistant'}
            </div>
          </div>
        </button>
      </div>

      {/* Slide-Up Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-6 z-50 w-[92vw] sm:w-[420px] h-[520px] bg-obsidian-950/95 border border-white/[0.12] rounded-2xl shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in duration-200">
          {/* Header */}
          <div className="px-5 py-3.5 bg-obsidian-900 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-950 border border-white/[0.1] flex items-center justify-center text-primary-400">
                <Bot className="w-4 h-4 text-primary-400" />
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                  <span>Suja AI Copilot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h4>
                <p className="text-[10px] text-slate-500 font-mono">
                  TRAINED ON SUJA S // KPRIET NODE
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-850 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-primary-500 text-dark-950 font-medium rounded-tr-none'
                      : 'bg-dark-800 border border-slate-700/70 text-slate-200 rounded-tl-none space-y-2.5'
                  }`}
                >
                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>

                  {/* Optional Action Button */}
                  {msg.action && (
                    <div className="pt-2 border-t border-slate-700/60">
                      {msg.action.download ? (
                        <a
                          href={msg.action.href}
                          download="Suja_S_Resume.pdf"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500 text-dark-950 font-bold text-[11px] hover:bg-primary-400 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{msg.action.label}</span>
                        </a>
                      ) : (
                        <a
                          href={msg.action.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-300 border border-primary-500/30 text-[11px] font-semibold hover:bg-primary-500/30 transition-colors"
                        >
                          <span>{msg.action.label}</span>
                          <ChevronRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Suggestion Chips */}
                  {msg.chips && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (chip === 'Open Interactive CV') {
                              onOpenResume();
                              setIsOpen(false);
                            } else if (chip === 'Download Resume') {
                              window.open('/Suja_S_Resume.pdf');
                            } else {
                              handleSendMessage(chip);
                            }
                          }}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-dark-900 hover:bg-dark-750 text-primary-300 border border-primary-500/30 transition-colors text-left font-mono"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs italic">
                <Bot className="w-4 h-4 text-primary-400 animate-spin" />
                <span>Suja AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-dark-850 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about AI projects, CGPA, skills..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-dark-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-primary-500 hover:bg-primary-400 disabled:opacity-40 text-dark-950 font-bold transition-colors shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
