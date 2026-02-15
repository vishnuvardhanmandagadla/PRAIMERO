# PRAIMERO

Enterprise AI consulting website built with React, featuring interactive CSS 3D models, scroll-triggered animations, and a premium design system.

**Live Stack:** React 18 + Vite + Framer Motion + React Router DOM

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx                          # Root — routing, lazy loading, AnimatePresence
├── main.jsx                         # Entry point
├── styles/
│   └── index.css                    # Global styles, CSS variables, typography
├── data/
│   └── services.js                  # Service data (modules, features, benefits)
├── components/
│   ├── Navbar/                      # Fixed navigation bar
│   ├── Hero3D/                      # Landing hero with 3D cube grid
│   ├── About/                       # "Who We Are" section with stats
│   ├── Services/                    # "Our Expertise" service cards
│   ├── CTA/                         # Call-to-action section
│   ├── Footer/                      # Site footer
│   ├── Intro/                       # Splash intro animation (disabled)
│   └── ServiceModels/               # 3D models for service pages
│       ├── ERPModel3D               # Stacked data layers
│       ├── SalesforceModel3D        # Orbiting network nodes
│       └── ServiceNowModel3D        # Interlocking gears
└── pages/
    ├── Landing/LandingPage.jsx      # Home page
    ├── ERP/ERPPage.jsx              # Oracle ERP service page
    ├── Salesforce/SalesforcePage.jsx # Salesforce service page
    ├── ServiceNow/ServiceNowPage.jsx# ServiceNow service page
    └── Contact/ContactPage.jsx      # Contact form page
```

---

## Pages & Routes

| Route          | Page            | Description                          |
|----------------|-----------------|--------------------------------------|
| `/`            | LandingPage     | Home with hero, about, services, CTA |
| `/erp`         | ERPPage         | Oracle ERP service details           |
| `/salesforce`  | SalesforcePage  | Salesforce CRM service details       |
| `/servicenow`  | ServiceNowPage  | ServiceNow automation details        |
| `/contact`     | ContactPage     | Contact form with info sidebar       |

All service pages and the contact page are **lazy-loaded** via `React.lazy()` for faster initial page load.

---

## Sections Breakdown

### Navbar

Fixed-position navigation bar with glassmorphic blur background. Tracks scroll state to adjust opacity. Includes desktop link bar, CTA button ("Let's Talk"), and mobile hamburger menu with animated slide-out drawer.

- **Logo:** PR**AI**MERO (gradient accent on "AI")
- **Links:** Home, Oracle ERP, Salesforce, ServiceNow
- **Mobile:** Full-screen slide-out menu with numbered links and staggered entry animations
- **Scroll behavior:** Background darkens and blur increases on scroll

---

### Hero3D (Landing Page)

Full-viewport hero section with an interactive 3D isometric cube grid and brand content.

**3D Cube Grid:**
- 10x10 grid of CSS 3D cubes (100 cubes, 6 faces each) rendered in isometric perspective (`rotateX(60deg) rotateZ(-45deg)`)
- Each cube is a `React.memo` component for optimized re-renders
- **Hover interaction:** Hovered cube rises up (`translateZ(35px)`) with brand gradient colors (pink-to-blue). Eight neighboring cubes rise slightly (`translateZ(10px)`) with lighter gradients
- **Click interaction:** Triggers a color glow ripple that spreads outward from the clicked cube. A radial gradient wave also sweeps across the base plane
- Cubes fade in with staggered CSS animation on page load

**Content:**
- Brand title: "PRAI" (dark) + "MERO" (purple gradient)
- Subtitle: "Empowering Enterprises Through Intelligent Innovation"
- Description paragraph about AI-driven enterprise solutions
- Pill-styled tags: AI, ERP, CRM, CLOUD, AUTOMATION, ANALYTICS
- Two action buttons: "Explore Solutions" (outline) and "Start Your Transformation" (dark primary with + icon)

**Background:** Light gradient (`#fafafa` to `#f2f0fa`) with decorative pink and purple radial accent glows.

---

### About (Landing Page)

"Who We Are" section presented in a rounded card layout with premium gradient overlays.

**Content:**
- Section label with flanking decorative gradient lines
- Title: "Redefining Enterprise Intelligence" (with gradient-text emphasis)
- Three paragraphs describing PRAIMERO's mission and approach
- Decorative gradient divider line below content

**Stats Grid (4 cards):**
| Value | Label              |
|-------|--------------------|
| 50+   | Enterprise Clients |
| 3     | Core Platforms     |
| 99%   | Client Retention   |
| 24/7  | Support Coverage   |

Each stat card features a purple gradient accent bar on top, white background with subtle inner highlight, and hover glow effect.

**Design:** Rounded card (`border-radius: 32px`) with margin from viewport edges, purple-blue gradient overlays, and `content-visibility: auto` for off-screen rendering optimization.

---

### Services (Landing Page)

"Our Expertise" section locked to viewport height (`100vh`) with animated background effects.

**Background:**
- Rich purple-to-blue radial gradient layers
- Four animated amoeba blobs (blurred gradient elements) drifting across the background with organic shapes
- Fine-grain SVG noise texture overlay (`feTurbulence`, `mix-blend-mode: overlay`)

**Cards (3 service cards in a grid):**
Each card displays:
- Icon, numbered label (01-03)
- Service title and short description
- Feature pills (e.g., "Financial Intelligence", "Supply Chain Optimization")
- "Learn More" link with arrow icon

**Card styling:** Glassmorphic effect with `backdrop-filter: blur(12px)`, embossed grid pattern overlay, and hover lift animation.

| # | Service    | Features                                                                  |
|---|------------|---------------------------------------------------------------------------|
| 1 | Oracle ERP | Financial Intelligence, Supply Chain Optimization, Human Capital Analytics, Business Intelligence |
| 2 | Salesforce | Revenue Acceleration, Smart Service Management, Marketing Automation, Einstein AI Integration |
| 3 | ServiceNow | IT Service Automation, Infrastructure Intelligence, Customer Support Systems, HR Service Platforms |

---

### CTA (Landing Page)

Call-to-action section in a rounded card with gradient background matching the About section's design language.

- Title: "The AI your enterprise deserves"
- Subtitle about elevating operations with AI
- Two buttons: "Start Free Trial" (outline) and "Get A Demo" (primary)
- Fade-up scroll animations via Framer Motion

---

### Footer

Site-wide footer with brand info, navigation links, and contact details.

- **Brand:** PR**AI**MERO logo with tagline
- **Link columns:** Services (3 links), Company (3 links), Get in Touch (email, phone, social icons)
- **Bottom bar:** Copyright notice + Privacy/Terms links
- **Background:** Light gray (`#f5f5f5`) with noise texture overlay

---

## Service Pages (ERP, Salesforce, ServiceNow)

All three service pages share the same layout structure (`ServicePage.css`) with unique content and 3D models.

### Hero Section
- White noise texture background with subtle grid pattern
- Breadcrumb navigation (Home / Service Name)
- Service title with gradient emphasis
- Description and feature tags
- **3D model** positioned on the right side (absolute, responsive scaling)

### Modules Section
- Dark purple gradient background (matching landing Services section)
- Animated amoeba blobs in background
- Noise texture overlay
- 2-column grid of module cards with glassmorphic styling
- Each module: numbered label, title, description

### Benefits Section
- Light background with noise texture
- Checklist of strategic advantages
- CTA button linking to contact page

### 3D Models

Each service page features a unique CSS 3D model:

**Oracle ERP — Stacked Data Layers (`ERPModel3D`)**
- 4 translucent horizontal slabs viewed from isometric angle
- Layers labeled: Finance, Supply Chain, HCM, Analytics
- Colors graduate from pink (bottom) to indigo (top)
- Idle animation: gentle float + slow Y-axis rotation drift
- Hover: individual layers lift with glow effect

**Salesforce — Orbiting Network (`SalesforceModel3D`)**
- Central hub sphere labeled "CRM" with concentric pulse rings
- 4 orbiting nodes on tilted circular paths at different speeds
- Nodes: Sales (7s), Service (10s), Marketing (13s), Commerce (16s)
- Counter-rotation keeps labels upright
- Data-flow arcs spin around orbit rings

**ServiceNow — Interlocking Gears (`ServiceNowModel3D`)**
- 1 large gear (12 teeth, labeled "ITSM") + 2 smaller gears (8 teeth each, labeled "ITOM" and "CSM")
- Synchronized rotation: large gear clockwise (12s), small gears counter-clockwise (8s)
- Counter-rotating labels stay readable
- Tooth rate matched (1 tooth/sec) for visual meshing

---

## Contact Page

### Hero
- Breadcrumb, title: "Let's Build the Future Together"
- Subtitle about 24-hour response time

### Contact Form
- Fields: Full Name, Email Address, Organization, Service Interest (dropdown), Project Details (textarea)
- Submit button: "Submit Inquiry"

### Info Sidebar
- Email: info@praimero.com
- Phone: +1 (555) 000-0000
- Social links: LinkedIn, Twitter
- Quick links to service pages

---

## Design System

### Color Palette

| Role           | Value                                      |
|----------------|--------------------------------------------|
| Pink accent    | `#e8a4c4`                                  |
| Purple         | `#9575cd`                                  |
| Blue           | `#5c6bc0`, `#7986cb`                       |
| Indigo         | `#7e57c2`                                  |
| Dark navy      | `#1a1a2e`, `#0a0a0f`                       |
| Light bg       | `#f5f5f5`, `#fafafa`                       |
| Gradient text  | `linear-gradient(135deg, #9575cd, #5c6bc0)`|

### Typography

- **Display font:** `var(--font-display)` — Inter Tight
- **Headings:** 700-800 weight, tight letter-spacing (`-0.02em` to `-0.03em`)
- **Body:** 400 weight, relaxed line-height (1.6-1.8)
- **Labels:** Uppercase, `0.12em`-`0.2em` letter-spacing, 600 weight

### Visual Effects

- **Glassmorphism:** `backdrop-filter: blur(12px)` on cards over dark backgrounds
- **Noise texture:** Inline SVG `feTurbulence` filter as CSS `background-image`
- **Gradient text:** `-webkit-background-clip: text` with linear gradients
- **Amoeba blobs:** Large blurred gradient elements with CSS `@keyframes` transform animations
- **3D transforms:** `perspective`, `preserve-3d`, `rotateX/Y/Z`, `translateZ`
- **Scroll animations:** Framer Motion `whileInView` with `once: true`

---

## Performance Optimizations

### React

- **Memoized cubes:** Each of the 100 Hero3D cubes is wrapped in `React.memo`, only re-rendering when its own hover/glow state changes
- **Lazy-loaded routes:** Service and contact pages use `React.lazy()` + `Suspense` for code splitting
- **Batched state updates:** Click wave groups cubes by distance, reducing state updates from ~300 to ~19
- **Set-based lookups:** `nearbyHovered` uses `Set.has()` (O(1)) instead of `Array.includes()` (O(n))

### CSS

- **GPU-only animations:** Blob keyframes animate only `transform` (not `border-radius`), keeping animations on the compositor thread
- **Targeted transitions:** `.hero__face` transitions specific properties (`background, box-shadow, border-color`) instead of `all`
- **Reduced backdrop-filter:** Blur values lowered from 20-24px to 12px, `saturate()` removed
- **Content visibility:** Off-screen sections (About, CTA, Footer) use `content-visibility: auto` to skip rendering until near viewport

### Build

- **Code splitting:** Vite produces separate chunks for each lazy-loaded page (~4KB each)
- **Main bundle:** ~301KB (96KB gzipped) including React, Framer Motion, and landing page

---

## Tech Stack

| Technology       | Version | Purpose                        |
|------------------|---------|--------------------------------|
| React            | 18.3    | UI framework                   |
| Vite             | 5.4     | Build tool and dev server      |
| Framer Motion    | 11.5    | Page transitions and scroll animations |
| React Router DOM | 6.26    | Client-side routing            |
| CSS              | -       | Styling (no preprocessor)      |

---

## Scripts

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```
