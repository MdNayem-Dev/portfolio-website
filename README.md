<div align="center">

# ⚡ Md. Nayem Hossain — Full-Stack Developer Portfolio

**A modern, production-grade, highly-optimized personal portfolio web application built with React 19, TypeScript, Tailwind CSS, Framer Motion, and Three.js.**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://mdnayem.dev) • [Download Resume](public/Md_Nayem_Hossain_Resume.pdf) • [Report Issue](https://github.com/MdNayem-Dev/portfolio-website/issues)

</div>

---

## 🌟 Key Features

### 🌐 Dual-Language Support (English & বাংলা)
- Instant toggle between **English** and **বাংলা** without page reloads.
- Full localization of navigation, hero content, project case studies, skill matrices, reviews, FAQ, and contact forms.
- Automatically persists the user's language choice in `localStorage`.

### 🌓 Seamless Dark & Light Mode
- Theme switcher with smooth CSS variable transitions.
- Automatic system color scheme detection (`prefers-color-scheme`).
- Anti-FOUC (Flash of Unstyled Content) script in `index.html` ensuring zero flicker on cold loads.

### 📄 Integrated ATS-Optimized Resume / CV
- **Direct PDF Download:** 1-click download of vector-sharp `Md_Nayem_Hossain_Resume.pdf`.
- **Interactive Resume Modal:** Embedded in-app viewer with print trigger, zoom/scroll, and open-in-new-tab functionality.
- Fully ATS-friendly HTML template (`public/resume.html`) with print-optimized styling (`@media print`).

### 🚀 Ultra-Smooth 60FPS Performance on All Devices
- **Snappy Page Transitions:** GPU-accelerated page transitions powered by Framer Motion (`AnimatePresence`) with zero layout shift.
- **Micro-Stutter Elimination:** Decoupled mouse-tracking shadow effects from React component state to direct DOM refs, resulting in 0 unnecessary component re-renders.
- **Intelligent Cursor Sleep:** Custom physics cursor enters sleep mode when idle and automatically disables on touch devices.
- **Adaptive 3D Canvas:** Three.js hero shapes throttle frame rates and adjust geometry detail on low-power devices (`hardwareConcurrency <= 4` or mobile) to preserve battery and maintain silky-smooth 60 FPS.
- **Rollup Code Splitting:** Heavy modals (Resume, Admin Telemetry) are code-split, keeping the initial gzipped bundle under **41 KB**.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 19, TypeScript, Vite 5 |
| **Styling & Design System** | Tailwind CSS 3.4, Custom Bento Grids, 3D Typography |
| **Animation & Physics** | Framer Motion 11, Vanilla Tilt, CSS Hardware Transforms |
| **3D Graphics** | Three.js (Adaptive WebGL Canvas) |
| **Typography** | Plus Jakarta Sans, Playfair Display, Caveat, Hind Siliguri |
| **Icons** | Lucide React, Font Awesome 6 |
| **Target Deployments** | Cloudflare Pages, Vercel, Netlify |

---

## 📂 Project Structure

```text
portfolio-website/
├── public/
│   ├── favicon.svg                   # Vector brand favicon
│   ├── resume.html                   # ATS-optimized responsive printable CV
│   ├── Md_Nayem_Hossain_Resume.pdf   # Downloadable vector PDF resume
│   └── images/                       # Profile cutouts and optimized assets
├── src/
│   ├── components/
│   │   ├── AdminModal.tsx            # Telemetry & diagnostics modal
│   │   ├── BackgroundAmbient.tsx     # Hardware-accelerated ambient glows & grids
│   │   ├── CTABanner.tsx             # Interactive contact banner
│   │   ├── ClientReviews.tsx         # Testimonials & social proof carousel
│   │   ├── CustomCursor.tsx          # Adaptive lerp mouse cursor
│   │   ├── DeveloperStory.tsx        # Editorial narrative & achievements
│   │   ├── FAQAccordion.tsx          # Interactive FAQ section
│   │   ├── Footer.tsx                # Multi-column directory & footer
│   │   ├── HeroCanvas.tsx            # Adaptive Three.js 3D floating meshes
│   │   ├── LanguageSwitcher.tsx      # Bilingual toggle pill/drawer
│   │   ├── Navbar.tsx                # Responsive navigation with mobile drawer
│   │   ├── Preloader.tsx             # Animated entrance splash screen
│   │   ├── ResumeModal.tsx           # In-app CV modal with print & download
│   │   └── TechMarquee.tsx           # Infinite tech stack carousel
│   ├── context/
│   │   ├── LanguageContext.tsx       # State management for EN/BN localization
│   │   └── ThemeContext.tsx          # Light/Dark mode state & storage
│   ├── data/
│   │   ├── portfolio.ts              # English profile data & project case studies
│   │   ├── portfolioBn.ts            # Bengali profile data
│   │   └── translations.ts           # UI string dictionary (en/bn)
│   ├── hooks/
│   │   └── useVanillaTilt.ts         # 3D card tilt effect hook
│   ├── pages/
│   │   ├── HomePage.tsx              # Landing page with hero, tech marquee & reviews
│   │   ├── AboutPage.tsx             # Detailed background, philosophy & skills matrix
│   │   ├── ProjectsPage.tsx          # In-depth project showcase & case studies
│   │   └── ContactPage.tsx           # Direct contact form, socials & schedule info
│   ├── types/
│   │   └── portfolio.ts              # Strongly-typed data schemas
│   ├── App.tsx                       # Root router & page transition manager
│   ├── index.css                     # Tailwind layers, 3D press utilities & scrollbars
│   └── main.tsx                      # React root entry
├── index.html                        # HTML shell with FOUC prevention & font preconnects
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts                    # Optimized vendor chunk splitting
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MdNayem-Dev/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Socials

- **Developer:** Md. Nayem Hossain
- **GitHub:** [@MdNayem-Dev](https://github.com/MdNayem-Dev)
- **LinkedIn:** [md-nayem-dev](https://www.linkedin.com/in/md-nayem-dev)
- **Email:** contact@mdnayem.dev

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <b>Md. Nayem Hossain</b>. All rights reserved.</sub>
</div>
