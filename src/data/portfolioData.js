export const portfolioData = {
  personal: {
    name: "Suja",
    fullName: "Suja S",
    title: "B.Tech – Artificial Intelligence & Data Science",
    badge: "Available for AI / ML Roles & Internships",
    location: "Coimbatore, Tamil Nadu, India",
    institution: "KPR Institute of Engineering and Technology (KPRIET), Coimbatore",
    department: "Artificial Intelligence and Data Science",
    academicYear: "2024 – 2028",
    cgpa: "8.3 / 10",
    phone: "+91 7708450010",
    rawPhone: "7708450010",
    email: "sujatamil2006@gmail.com",
    github: "https://github.com/sujatamil2006-star",
    linkedin: "https://www.linkedin.com/in/suja-s-754050375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "https://twitter.com",
    resumeUrl: "/Suja_S_Resume.pdf",
    tagline: "Artificial Intelligence and Data Science undergraduate with hands-on experience in Python, machine learning, NLP, RAG, computer vision, Generative AI, and full-stack application development.",
    roles: [
      "AI & Data Science Specialist",
      "Machine Learning & RAG Developer",
      "Computer Vision & Edge-AI Builder",
      "Full-Stack Python & React Developer"
    ],
    bio: [
      "I am an Artificial Intelligence and Data Science undergraduate at KPR Institute of Engineering and Technology (KPRIET), Coimbatore, with a strong academic standing (CGPA 8.3 / 10) and hands-on experience across Python, Machine Learning, NLP, RAG, Computer Vision, Generative AI, and full-stack application development.",
      "Passionate about building practical AI solutions that solve real-world challenges, I have published multiple open-source AI projects on GitHub spanning edge gesture recognition (SnapSense AI), privacy-first cybersecurity auditing (ITEye), FinTech fraud detection with explainable AI (ai-risk-manager), and healthcare intelligence.",
      "My industry experience includes internships at NoviTech R&D in Data Analytics and EWB Courses in Cybersecurity, accredited certifications from NPTEL (IIT Roorkee & IIT Kharagpur), TCS iON, Samsung Innovation Campus, and competitive national hackathons."
    ]
  },

  stats: [
    { label: "GitHub Repositories", value: "16+", description: "Open-source AI, ML & Web" },
    { label: "Academic CGPA", value: "8.3", description: "B.Tech AI & Data Science (2024-2028)" },
    { label: "Verified Credentials", value: "12+", description: "NPTEL, TCS, IIT & Industry" },
    { label: "Industry Internships", value: "2", description: "Data Analytics & Security" }
  ],

  areasOfInterest: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI & LLMs",
    "Data Analytics",
    "Computer Vision",
    "Software Development"
  ],

  pillars: [
    {
      title: "Generative AI & RAG",
      description: "Building local and cloud RAG pipelines using ChromaDB, vector embeddings, and LLM models (Qwen, OpenAI) for domain knowledge mapping.",
      icon: "Zap"
    },
    {
      title: "Computer Vision & Edge-AI",
      description: "Developing real-time spatial vision systems with OpenCV, MediaPipe 3D hand tracking, and PySide6 transparent overlays.",
      icon: "Cpu"
    },
    {
      title: "Data Analytics & ML",
      description: "Processing, preprocessing, and extracting actionable intelligence from complex datasets using Python, Pandas, NumPy, and Scikit-Learn.",
      icon: "ShieldCheck"
    },
    {
      title: "Full-Stack Development",
      description: "Delivering responsive interfaces and high-speed backends with React, JavaScript, Flask, Streamlit, and REST APIs.",
      icon: "Layout"
    }
  ],

  skills: {
    frontend: [
      { name: "React.js & JavaScript (ES6+)", level: 90 },
      { name: "Flask & Streamlit Web Apps", level: 92 },
      { name: "Tailwind CSS & Responsive UI", level: 94 },
      { name: "PySide6 GUI Overlays & PyAutoGUI", level: 88 },
      { name: "REST APIs & Endpoints", level: 90 }
    ],
    backend: [
      { name: "Python (Data Science, ML & RAG)", level: 95 },
      { name: "FastAPI & Flask Backends", level: 90 },
      { name: "Java Programming (CodeChef)", level: 88 },
      { name: "C & C++ Programming", level: 85 },
      { name: "Data Structures & Algorithms (DSA)", level: 88 }
    ],
    databaseAndCloud: [
      { name: "SQL & MySQL", level: 90 },
      { name: "Pandas & NumPy Data Wrangling", level: 95 },
      { name: "MS Excel & Power BI Dashboards", level: 90 },
      { name: "ChromaDB & Vector Stores", level: 91 },
      { name: "Database Management Systems (DBMS)", level: 90 }
    ],
    toolsAndPractices: [
      { name: "MediaPipe & OpenCV Computer Vision", level: 94 },
      { name: "XGBoost, Isolation Forest & SHAP", level: 89 },
      { name: "RAG & LLM Prompt Engineering", level: 92 },
      { name: "Git & GitHub Version Control", level: 94 },
      { name: "Cybersecurity & Vulnerability Assessment", level: 86 }
    ]
  },

  projects: [
    {
      id: "snapsense-ai",
      title: "SnapSense AI – Edge-Native Spatial Controller",
      category: "Edge-AI & CV",
      subtitle: "Zero-latency edge gesture engine for Snapdragon X Elite NPU & Windows",
      description: "SnapSense AI is a zero-latency edge gesture engine built for the Snapdragon X Elite NPU. It transforms any standard webcam into an always-on spatial controller, tracking 3D hand landmarks in real-time to control Windows OS (mouse, scroll, volume, multitasking) with zero cloud processing and minimal battery drain.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "OpenCV", "MediaPipe", "PySide6", "PyAutoGUI", "Edge-AI"],
      featured: true,
      githubUrl: "https://github.com/sujatamil2006-star/SnapSense-AI",
      liveUrl: "https://github.com/sujatamil2006-star/SnapSense-AI",
      stats: {
        tracking: "21 3D Landmarks",
        hardware: "Snapdragon NPU",
        privacy: "100% On-Device"
      },
      highlights: [
        "Integrated MediaPipe to track 21 3D hand landmarks in real time and translate micro-gestures into mouse cursor movement, scrolling, media playback, and multitasking actions.",
        "Developed a transparent PySide6 UI overlay with multi-threading for background operation and zero foreground interference.",
        "Optimized computer vision pipeline for local, privacy-focused edge deployment without transmitting camera frames to cloud servers."
      ]
    },
    {
      id: "iteye-cybersecurity",
      title: "ITEye – AI-Powered Cybersecurity Auditing Platform",
      category: "GenAI & Security",
      subtitle: "Automated Essential Eight framework audit via local RAG & Qwen 3:8B",
      description: "An AI-powered cybersecurity assessment tool that automatically audits infrastructure telemetry data against the Australian Essential Eight framework using a local RAG pipeline and Qwen 3:8B.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Flask", "JavaScript", "Qwen 3:8B", "ChromaDB", "RAG"],
      featured: true,
      githubUrl: "https://github.com/sujatamil2006-star/ITEye",
      liveUrl: "https://github.com/sujatamil2006-star/ITEye",
      stats: {
        framework: "Essential Eight",
        model: "Qwen 3:8B Local",
        storage: "ChromaDB RAG"
      },
      highlights: [
        "Built a local RAG pipeline using ChromaDB and Qwen 3:8B to map security logs directly to compliance requirements while keeping sensitive logs on-premise.",
        "Developed AI-assisted automated remediation suggestions and human-in-the-loop validation for critical security findings.",
        "Created REST APIs and interactive telemetry monitoring dashboards with Flask and JavaScript."
      ]
    },
    {
      id: "ai-risk-manager",
      title: "AI Risk Manager – Real-Time FinTech Fraud Detection",
      category: "Machine Learning",
      subtitle: "Payment fraud detection using XGBoost, Isolation Forest & SHAP XAI",
      description: "An intelligent FinTech platform that detects payment fraud in real-time. It combines XGBoost and Isolation Forest models with SHAP-powered explainable AI (XAI) to provide transparent risk assessments to human analysts. Built with FastAPI and React.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "FastAPI", "React", "XGBoost", "Isolation Forest", "SHAP XAI"],
      featured: true,
      githubUrl: "https://github.com/sujatamil2006-star/ai-risk-manager",
      liveUrl: "https://github.com/sujatamil2006-star/ai-risk-manager",
      stats: {
        models: "Ensemble ML",
        interpretability: "SHAP Values",
        stack: "FastAPI + React"
      },
      highlights: [
        "Trained high-precision fraud detection models combining supervised XGBoost and unsupervised Isolation Forest for zero-day anomaly detection.",
        "Integrated SHAP (SHapley Additive exPlanations) to provide explainable score breakdowns for each flagged transaction.",
        "Constructed a high-throughput async FastAPI backend integrated with a responsive React dashboard."
      ]
    },
    {
      id: "trustbridge-ai",
      title: "TrustBridge AI – Milestone Payment Guardian",
      category: "GenAI & Security",
      subtitle: "PayPal AI Hackathon 2026: Explainable AI deliverable verification",
      description: "TrustBridge AI — AI-Powered Milestone Payment Guardian pairing explainable AI deliverable verification with PayPal Orders v2 Sandbox checkout for the PayPal AI Hackathon 2026.",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
      tags: ["JavaScript", "PayPal Orders v2", "Explainable AI", "Hackathon 2026", "Node.js"],
      featured: true,
      githubUrl: "https://github.com/sujatamil2006-star/trustbridge-ai",
      liveUrl: "https://github.com/sujatamil2006-star/trustbridge-ai",
      stats: {
        hackathon: "PayPal AI 2026",
        payments: "PayPal Orders v2",
        escrow: "AI Milestone Guard"
      },
      highlights: [
        "Architected automated smart milestone release based on AI evaluation of delivered work artifacts.",
        "Integrated PayPal Orders v2 API Sandbox checkout flow for secure escrow and funds disbursement.",
        "Designed clear merchant-client dispute prevention interface with transparent verification logs."
      ]
    },
    {
      id: "ai-hospital-management",
      title: "AI-Powered Hospital Management System",
      category: "Full Stack",
      subtitle: "Comprehensive clinical operations platform with AI disease prediction",
      description: "AI-Powered Hospital Management System built using Flask, Python, MySQL, HTML, CSS, JavaScript, and Bootstrap. The system streamlines hospital operations with patient registration, doctor management, appointment scheduling, pharmacy, laboratory, billing, and AI-based disease prediction for smarter healthcare management.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Flask", "MySQL", "JavaScript", "Bootstrap", "Disease AI"],
      featured: true,
      githubUrl: "https://github.com/sujatamil2006-star/AI-Hospital-Management-System",
      liveUrl: "https://github.com/sujatamil2006-star/AI-Hospital-Management-System",
      stats: {
        database: "MySQL Relational",
        features: "7 Core Modules",
        prediction: "AI Diagnostics"
      },
      highlights: [
        "Implemented 7 clinical modules: Patient Intake, Doctor Scheduling, Pharmacy, Labs, Invoicing, Records, and AI Prediction.",
        "Engineered relational MySQL schema with foreign-key constraints and optimized query performance.",
        "Embedded machine learning disease predictor assisting doctors with preliminary symptom diagnosis."
      ]
    },
    {
      id: "eda-churn-kpriet",
      title: "Telco Customer Churn Case Study (KPRIET)",
      category: "Machine Learning",
      subtitle: "Deep Learning MLP & statistical hypothesis testing (0.8392 ROC-AUC)",
      description: "Telco Customer Churn Case Study (7,043 rows, 21 features) applying Ben Fry's 7 Stages of Data Visualization & Deep Learning MLP classification. Features statistical hypothesis testing (Mann-Whitney U, Chi-Square), hyperparameter tuning, and permutation importance. Achieved 79.47% test accuracy & 0.8392 ROC-AUC. (KPRIET - U21ADP05)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Deep Learning MLP", "Pandas", "Scikit-Learn", "KPRIET", "Statistical Tests"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/EDA",
      liveUrl: "https://github.com/sujatamil2006-star/EDA",
      stats: {
        dataset: "7,043 rows x 21 cols",
        rocAuc: "0.8392 ROC-AUC",
        accuracy: "79.47% Test Acc"
      },
      highlights: [
        "Executed statistical hypothesis tests (Mann-Whitney U and Chi-Square) identifying statistically significant churn drivers.",
        "Trained a Deep Learning Multi-Layer Perceptron (MLP) neural network with extensive hyperparameter tuning.",
        "Applied Ben Fry's 7 Stages of Data Visualization to translate complex multi-dimensional metrics into intuitive charts."
      ]
    },
    {
      id: "phishing-url-awareness",
      title: "Defensive Phishing URL Scanner CLI",
      category: "GenAI & Security",
      subtitle: "Static URL structure analyzer built for EWB Cybersecurity Internship",
      description: "A defensive Python CLI tool that inspects URL structures for phishing warning signs (IP hostnames, @ symbols, punycode, subdomains, and HTTP scheme) using local static analysis without opening links. Built for EWB Cybersecurity.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Cybersecurity", "Static Analysis", "EWB", "CLI Tool"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/phishing-url-awareness",
      liveUrl: "https://github.com/sujatamil2006-star/phishing-url-awareness",
      stats: {
        safety: "100% Zero-Open",
        heuristics: "5 Core Signals",
        organization: "EWB Courses"
      },
      highlights: [
        "Analyzes raw URL lexical structures to detect deceptive IP-based hosts, punycode spoofing, and malicious subdomains.",
        "Operates completely offline without sending network requests or triggering tracking beacons.",
        "Packaged as a lightweight command-line utility with colored terminal warnings and diagnostic explanations."
      ]
    },
    {
      id: "mediassist-ai",
      title: "MediAssist AI – Intelligent Medical Analyzer",
      category: "GenAI & Security",
      subtitle: "Medical report interpreter explaining clinical records via grounded NLP & RAG",
      description: "AI medical application that interprets uploaded laboratory reports and diagnostic records, translating complex medical terms and abnormal values into clear, understandable language using clinical RAG.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "NLP", "RAG", "ChromaDB", "Medical AI", "Streamlit"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/AI-Medical-Analyzer",
      liveUrl: "https://github.com/sujatamil2006-star/AI-Medical-Analyzer",
      stats: {
        grounding: "Clinical RAG",
        clarity: "Patient-First NLP",
        engine: "ChromaDB"
      },
      highlights: [
        "Employs Retrieval-Augmented Generation (RAG) backed by medical references to deliver grounded, factual explanations.",
        "Parses multi-format clinical values against standard normal ranges to flag deviations gently.",
        "Built intuitive patient-facing interface for non-technical individuals."
      ]
    },
    {
      id: "covid19-prediction",
      title: "COVID-19 Chest Radiography Classifier",
      category: "Edge-AI & CV",
      subtitle: "Deep learning image classification for chest X-ray pulmonary scans",
      description: "Computer vision and machine learning classification pipeline analyzing chest radiography X-ray images for rapid COVID-19-related pulmonary diagnostics.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "OpenCV", "Deep Learning", "Image Processing", "Medical Imaging"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/covid19-prediction",
      liveUrl: "https://github.com/sujatamil2006-star/covid19-prediction",
      stats: {
        modality: "Chest Radiography",
        preprocessing: "Adaptive Equalization",
        inference: "Instant Classification"
      },
      highlights: [
        "Implemented OpenCV image preprocessing including contrast enhancement and lung field segmentation.",
        "Trained predictive classifier distinguishing pulmonary infection patterns from normal scans.",
        "Evaluated model metrics with sensitivity and specificity analysis."
      ]
    },
    {
      id: "ai-resume-analyzer",
      title: "AI Resume & Candidate Skill Analyzer",
      category: "Machine Learning",
      subtitle: "Automated resume parsing and semantic job match scorer",
      description: "Intelligent recruitment tool that parses candidate resumes in PDF/Word format, extracts core technical skills, and computes semantic alignment against job description criteria.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "NLP", "Skill Extraction", "Semantic Matching", "PDF Parsing"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/AI-RESUME-ANALYZER",
      liveUrl: "https://github.com/sujatamil2006-star/AI-RESUME-ANALYZER",
      stats: {
        extraction: "Regex + NLP",
        scoring: "Semantic Match %",
        formats: "PDF & DOCX"
      },
      highlights: [
        "Extracted structured contact info, education, technical skills, and work history from unstructured text.",
        "Engineered TF-IDF and cosine similarity scoring for candidate-job compatibility ranking.",
        "Outputs candidate feedback highlighting missing keyword qualifications."
      ]
    },
    {
      id: "colab-ai",
      title: "CoLabAI 2.0 – Collaborative AI Workspace",
      category: "Full Stack",
      subtitle: "Real-time collaborative developer interface and team ideation hub",
      description: "Collaborative developer workspace and AI ideation interface enabling multi-user brainstorming, live code sharing, and AI assistant prompt collaboration.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      tags: ["HTML", "JavaScript", "Python", "Collaboration", "AI Workspace"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/CoLabAI-2.0",
      liveUrl: "https://github.com/sujatamil2006-star/CoLabAI-2.0",
      stats: {
        interface: "CoLabAI 2.0",
        collaboration: "Real-Time",
        stack: "JS + Python"
      },
      highlights: [
        "Designed modern interactive whiteboard and prompt editor for shared team ideation.",
        "Integrated multi-turn AI chat assistants assisting with design workflows.",
        "Lightweight, responsive frontend architecture optimized for low-latency collaboration."
      ]
    },
    {
      id: "findjob-portal",
      title: "FindJob – Interactive Career Portal",
      category: "Full Stack",
      subtitle: "Full-featured job discovery and career opportunity application hub",
      description: "Interactive career portal web application connecting tech talent with open positions, offering category filtering, applicant tracking, and company profile showcases.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
      tags: ["JavaScript", "HTML5", "CSS3", "Career Portal", "Web App"],
      featured: false,
      githubUrl: "https://github.com/sujatamil2006-star/findjob-career-portal",
      liveUrl: "https://github.com/sujatamil2006-star/findjob-career-portal",
      stats: {
        portal: "Career Hub",
        filters: "Role & Skills",
        ui: "Responsive Web"
      },
      highlights: [
        "Built responsive job search listings with instant keyword and domain filtering.",
        "Created applicant application workflows with resume upload simulation.",
        "Designed clean corporate cards and recruiter listing dashboards."
      ]
    }
  ],

  internships: [
    {
      role: "Data Analytics Intern",
      company: "NoviTech R&D Private Limited",
      period: "15 Dec 2025 - 13 Jan 2026",
      duration: "1 Month",
      location: "Coimbatore, India",
      certificateId: "NT_DAIN701",
      certificateImage: "/certificates/cert_novitech_analytics.jpg",
      description: "Completed intensive industrial internship training in Data Analytics, focusing on real-world datasets, data extraction, pipeline transformation, and exploratory analytical insights.",
      achievements: [
        "Executed end-to-end exploratory data analysis (EDA) on commercial datasets using Python, Pandas, and NumPy.",
        "Built data cleaning and automated preprocessing pipelines to handle messy tabular records.",
        "Synthesized analytics findings and reported statistical trends to the R&D technical lead."
      ],
      skills: ["Data Analytics", "Python", "Pandas", "NumPy", "Statistical Analysis", "Data Cleaning"]
    },
    {
      role: "Cybersecurity Intern",
      company: "EWB Courses (EWB Tech Pvt Ltd)",
      period: "Oct 2026 (Issued 31 Oct 2026)",
      duration: "1 Month",
      location: "Remote / National",
      certificateId: "EWB/INT/2026/2381",
      certificateImage: "/certificates/cert_ewb_cybersecurity.jpg",
      description: "Successfully completed hands-on 1-month Cybersecurity internship and delivered the assigned real-world security assessment project under AICTE National Internship Portal guidelines.",
      achievements: [
        "Conducted vulnerability assessments and recognized common security threat vectors in modern software systems.",
        "Applied network security fundamentals, encryption methods, and threat mitigation strategies.",
        "Documented a complete real-world cybersecurity project report evaluated and certified by EWB Courses."
      ],
      skills: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "Information Security", "Risk Mitigation"]
    }
  ],

  paperPresentation: {
    title: "Where Data Meets AI: Transforming Information into Intelligence",
    description: "Authored and presented technical paper exploring how structured/unstructured data convergence with modern AI architectures enables predictive decision systems."
  },

  certificates: [
    {
      id: "novitech-data-analytics",
      title: "Data Analytics Internship Completion",
      issuer: "NoviTech R&D Private Limited",
      category: "Internship",
      date: "Jan 2026",
      image: "/certificates/cert_novitech_analytics.jpg",
      credentialId: "NT_DAIN701",
      description: "1-Month industrial internship certification covering practical data analytics, data wrangling, and predictive modeling.",
      featured: true,
      tags: ["Data Analytics", "Python", "Pandas", "R&D"]
    },
    {
      id: "ewb-cybersecurity",
      title: "CyberSecurity Internship Certificate",
      issuer: "EWB Courses (AICTE Registered)",
      category: "Internship",
      date: "Oct 2026",
      image: "/certificates/cert_ewb_cybersecurity.jpg",
      credentialId: "EWB/INT/2026/2381",
      description: "1-Month internship completion and successful delivery of real-world cybersecurity practical project.",
      featured: true,
      tags: ["Cybersecurity", "Network Defense", "Project Delivery"]
    },
    {
      id: "nptel-python-analytics",
      title: "Data Analytics with Python (Elite)",
      issuer: "NPTEL • IIT Roorkee • MoE Govt. of India",
      category: "NPTEL & Academic",
      date: "Jan-Apr 2026",
      score: "Elite (Consolidated 61%)",
      image: "/certificates/cert_nptel_python.jpg",
      credentialId: "NPTEL26CS86S650505183",
      description: "12-week rigorous national certification on statistical analysis, regression, clustering, and data visualization using Python.",
      featured: true,
      tags: ["Python", "Machine Learning", "IIT Roorkee", "Swayam"]
    },
    {
      id: "tcs-ion-ai-foundation",
      title: "Career Edge – AI Foundation",
      issuer: "TCS iON • Tata Consultancy Services",
      category: "AI & GenAI",
      date: "Oct 2026",
      image: "/certificates/cert_tcs_ion_ai_foundation.jpg",
      credentialId: "279661-33879164-1016",
      description: "Comprehensive AI Foundation program covering Introduction to AI, Generative AI Essentials, Prompt Engineering Basics, AI Tools, and Responsible AI.",
      featured: true,
      tags: ["Generative AI", "Prompt Engineering", "AI Tools", "TCS iON"]
    },
    {
      id: "unstop-genai-llm",
      title: "From Tokens to Transformers: GenAI x LLM Mastery",
      issuer: "IIT Guwahati & Unstop",
      category: "AI & GenAI",
      date: "2026",
      image: "/certificates/cert_unstop_genai.jpg",
      credentialId: "Unstop Verified",
      description: "Advanced masterclass and workshop on Transformer architectures, Large Language Models (LLMs), attention mechanisms, and GenAI system building.",
      featured: true,
      tags: ["GenAI", "LLMs", "Transformers", "IIT Guwahati"]
    },
    {
      id: "tcs-ion-yuva-ai",
      title: "YUVA AI For All",
      issuer: "IndiaAI & TCS iON • Ministry of Electronics & IT",
      category: "AI & GenAI",
      date: "Oct 2026",
      image: "/certificates/cert_tcs_ion_yuva_ai.jpg",
      credentialId: "TCS iON IndiaAI",
      description: "National AI literacy and foundational competence program offered through the national IndiaAI initiative.",
      featured: false,
      tags: ["IndiaAI", "AI Literacy", "MeitY", "TCS iON"]
    },
    {
      id: "kongu-genai-vibe-coding",
      title: "Applied Generative AI: Foundations and Vibe Coding",
      issuer: "Kongu Engineering College (KEC)",
      category: "AI & GenAI",
      date: "Aug 2026",
      image: "/certificates/cert_kongu_genai.jpg",
      credentialId: "KEC National Workshop",
      description: "National Level Workshop on Generative AI applications, developer workflows, and agentic coding paradigms.",
      featured: false,
      tags: ["Generative AI", "Vibe Coding", "Workshop"]
    },
    {
      id: "nptel-industry-4-iot",
      title: "Introduction to Industry 4.0 and Industrial IoT",
      issuer: "NPTEL • IIT Kharagpur • MoE Govt. of India",
      category: "NPTEL & Academic",
      date: "Jul-Oct 2025",
      score: "56%",
      image: "/certificates/cert_nptel_iot.jpg",
      credentialId: "NPTEL25CS146S754300219",
      description: "12-week specialized course covering cyber-physical systems, smart sensors, industrial networking protocols, and IoT architecture.",
      featured: false,
      tags: ["IoT", "Industry 4.0", "IIT Kharagpur", "Cyber-Physical"]
    },
    {
      id: "karpagam-hackspora",
      title: "HACKSPORA 2.0 – National 24h Hackathon",
      issuer: "Karpagam Academy of Higher Education",
      category: "Hackathons",
      date: "19-20 Sept 2026",
      image: "/certificates/cert_karpagam_hackathon.jpg",
      credentialId: "AiQUBIT Hackathon",
      description: "Participated and built rapid prototype solutions during an intensive 24-hour National Level Hackathon organized by Dept of AI & Data Science.",
      featured: true,
      tags: ["Hackathon", "24 Hours", "Rapid Prototyping", "Teamwork"]
    },
    {
      id: "logitech-women-hackathon",
      title: "Women Who Master Hackathon",
      issuer: "Logitech & Aspire For Her • Unstop",
      category: "Hackathons",
      date: "27 July 2026",
      image: "/certificates/cert_logitech_women_hackathon.jpg",
      credentialId: "Logitech Unstop",
      description: "All-women national initiative empowering women in tech and driving innovative engineering solutions.",
      featured: false,
      tags: ["Women In Tech", "Logitech", "Hackathon", "Unstop"]
    },
    {
      id: "codechef-practice-java",
      title: "Practice Java Certification",
      issuer: "CodeChef",
      category: "Programming",
      date: "14 July 2026",
      image: "/certificates/cert_codechef_java.jpg",
      credentialId: "CodeChef Pro",
      description: "Completed problem-solving exercises in Object-Oriented Java, data structures, and algorithmic principles on CodeChef.",
      featured: false,
      tags: ["Java", "OOP", "Data Structures", "CodeChef"]
    },
    {
      id: "kpriet-excel-analytics",
      title: "Data Analysis Using MS Excel",
      issuer: "KPR Institute of Engineering and Technology",
      category: "NPTEL & Academic",
      date: "2026",
      image: "/certificates/cert_kpriet_excel.jpg",
      credentialId: "KPRIET VAC",
      description: "Value-Added Course on advanced spreadsheet data modeling, pivot tables, statistical functions, and visualization by Dept of AI & DS.",
      featured: false,
      tags: ["Excel Analytics", "Pivot Tables", "KPRIET", "Data Modeling"]
    }
  ],

  education: [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      institution: "KPR Institute of Engineering and Technology, Coimbatore",
      year: "2024 – 2028",
      cgpa: "8.3 / 10",
      honors: "CGPA: 8.3 / 10 (Autonomous, Affiliated to Anna University)"
    }
  ],

  certifications: [
    { name: "NPTEL – Data Analytics with Python (Elite)", issuer: "IIT Roorkee / Swayam", year: "2026" },
    { name: "NPTEL – Internet of Things", issuer: "IIT Kharagpur / Swayam", year: "2025" },
    { name: "Samsung Innovation Campus – Python Programming", issuer: "Samsung Innovation Campus", year: "2026" },
    { name: "Data Analytics Internship", issuer: "NoviTech R&D, Coimbatore", year: "2025 - 2026" },
    { name: "Cybersecurity Internship", issuer: "EWB Courses", year: "2026" },
    { name: "CodeChef – Java Programming & Logical Problem Solving", issuer: "CodeChef", year: "2026" },
    { name: "TCS iON Career Edge – AI Foundation", issuer: "Tata Consultancy Services", year: "2026" },
    { name: "From Tokens to Transformers: GenAI x LLM Mastery", issuer: "IIT Guwahati & Unstop", year: "2026" }
  ]
};
