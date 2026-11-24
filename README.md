# 🚀 Suja Dev — Senior Full-Stack Engineer Portfolio

A modern, high-performance, and interactive developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and interactive **HTML5 Canvas** animations.

---

## ✨ Features

- **Interactive Canvas Constellation**: Mouse-responsive 2D physics network background.
- **Dynamic Typewriter Hero**: Rotates through roles and highlights availability with live pulse indicator.
- **Centralized Data File**: Update **everything** (bio, stats, skills, projects, experience, socials) in one file: `src/data/portfolioData.js`.
- **Live Skill Search & Category Filter**: Instant keyword filtering and proficiency meters.
- **Featured Projects Showcase**: Category filtering (*All*, *Full Stack*, *Frontend*, *AI / Cloud*, *Mobile*), tech tags, live preview & GitHub source links.
- **Project Case Study Modal**: Deep dive into architectures, problem statements, deliverables, and performance benchmarks.
- **Interactive Career Timeline**: Collapsible milestone nodes with key achievements and credentials view.
- **Curriculum Vitae (CV) Modal**: In-browser printable/downloadable resume view.
- **Interactive Contact Hub**: Direct copy-to-clipboard email with toast feedback, real-time message validation, and celebration confetti.
- **Ultra-Fast Performance**: Built on Vite with zero runtime bloat.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized output will be in the `dist/` directory ready for deployment.

---

## 📝 How to Personalize Your Information

Everything is organized in [`src/data/portfolioData.js`](src/data/portfolioData.js):

- **Personal Info**: Name, roles, tagline, bio, email, social URLs.
- **Key Stats**: Years of experience, completed projects, client satisfaction rate.
- **Skills**: Add or adjust proficiency levels and categories (Frontend, Backend, Cloud, Tools).
- **Projects**: Add your own images, titles, descriptions, live demo links, and GitHub repositories.
- **Work Experience**: Add your roles, company names, dates, and achievements.
- **Education & Certifications**: Add degrees, honors, and verified certificates.

---

## 🌐 Free 1-Click Deployment

### Deploy to Vercel
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository — Vercel will automatically detect Vite and deploy it in seconds!

### Deploy to Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository with Build Command `npm run build` and Publish Directory `dist`.
