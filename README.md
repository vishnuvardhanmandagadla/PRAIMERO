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
│   ├── Intro/                       # Splash intro animation with curtain rising effect
│   ├── About/                       # "Who We Are" section (two-column layout)
│   ├── Metrics/                     # Enterprise metrics with animated counters
│   ├── WhyChooseUs/                 # "Why PRAIMERO" features grid
│   ├── Partners/                    # Technology partners marquee
│   ├── Services/                     # "Our Expertise" service cards
│   ├── CTA/                         # Call-to-action section
│   ├── Footer/                      # Site footer
│   └── ServiceModels/                # 3D models for service pages
│       ├── ERPModel3D               # Stacked data layers
│       ├── SalesforceModel3D        # Orbiting network nodes
│       └── ServiceNowModel3D        # Interlocking gears
└── pages/
    ├── Landing/LandingPage.jsx      # Home page
    ├── ERP/ERPPage.jsx              # Oracle ERP service page
    ├── Salesforce/SalesforcePage.jsx # Salesforce service page
    ├── ServiceNow/ServiceNowPage.jsx # ServiceNow service page
    ├── CaseStudies/                 # Case studies listing page
    ├── Insights/                    # Insights/blog listing page
    └── Contact/ContactPage.jsx      # Contact form page
```

---

## Pages & Routes

| Route          | Page            | Description                          |
|----------------|-----------------|--------------------------------------|
| `/`            | LandingPage     | Home with intro, hero, about, partners, services, metrics, why choose us, CTA |
| `/erp`         | ERPPage         | Oracle ERP service details           |
| `/salesforce`  | SalesforcePage  | Salesforce CRM service details       |
| `/servicenow`  | ServiceNowPage  | ServiceNow automation details        |
| `/case-studies`| CaseStudies     | Case studies listing page            |
| `/case-studies/:id` | CaseDetail | Individual case study detail page   |
| `/insights`    | Insights        | Insights/blog listing page           |
| `/insights/:slug` | Post         | Individual blog post page            |
| `/contact`     | ContactPage     | Contact form with info sidebar       |

All non-landing pages are **lazy-loaded** via `React.lazy()` for faster initial page load.

---

## Sections Breakdown

### Intro Animation

Splash screen animation that plays on initial page load, featuring:

- **Animation Sequence:**
  1. AI text appears first with thick purple gradient
  2. Letters "PR" and "MERO" swipe in from left
  3. All letters hold visible
  4. Text content fades out and rises slightly
  5. **Curtain rising effect:** Entire intro component unmasked from bottom to top using `clip-path`, progressively revealing the hero section underneath

- **Design:** Black background with white text, purple gradient on "AI" word
- **Technology:** GSAP timeline animations
- **Integration:** Shows only on home page (`/`), skips on other routes

---

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
- Tag badge: "Enterprise AI Solutions" with pulsing dot indicator
- Title: "Empowering Enterprises Through Intelligent Innovation" (with gradient accent on "Intelligent Innovation")
- Description: Concise two-sentence overview of AI-driven platforms
- Pill-styled tags: AI, ERP, CRM, AUTOMATION
- Two action buttons: "Explore" (outline) and "Get Started" (primary with + icon)

**Typography:**
- Uses CSS variable typography system (`var(--text-5xl)`, `var(--font-display)`, etc.)
- Enhanced text colors for better contrast and readability
- Proper letter-spacing and line-height following design system

**Background:** Light purplish gradient matching landing page theme with decorative radial accent glows.

---

### About (Landing Page)

"Who We Are" section with two-column grid layout.

**Layout:**
- Left column: Text content (title, description paragraphs)
- Right column: Image placeholder (purple gradient with dashed border)

**Content:**
- Title with purple-blue gradient accent on key words
- Multiple paragraphs describing PRAIMERO's mission and approach
- No box shape - clean, minimal design

**Design:** Two-column grid (`grid-template-columns: 1fr 1fr`), no rounded card styling, integrated with landing page background.

---

### Metrics (Landing Page)

Enterprise metrics section with animated counters that trigger on scroll.

**Metrics:**
- 50+ Enterprise Clients
- 99% Client Retention
- 24/7 Support Coverage
- 3 Core Platforms

**Features:**
- Animated counters that count from 0 to target value when section enters viewport
- Handles suffixes: `+`, `%`, `/7`
- Clean, minimal design with gradient text on numbers
- Light purplish background matching landing page theme

**Typography:** Uses design system typography variables for consistent sizing and spacing.

---

### WhyChooseUs (Landing Page)

"Why PRAIMERO" features section with collage-style grid layout.

**Layout:**
- Responsive grid with varied card sizes (large, tall, wide, normal)
- Expanded to full viewport width
- Left column: 2 cards (AI-First, Fast Delivery)
- Middle column: 1 large card (Experts)
- Right column: 3 cards (Scalable, PRAIMERO logo, Innovation)

**Features (10 total):**
- AI-First, Fast Delivery, Experts, Scalable, Innovation, Compliance, Customization, Integration, and more

**Design:**
- Light purplish background matching landing page
- Clean cards with icons using SVG gradients
- No borders or backgrounds on cards - minimal, elegant design
- Icons from `react-icons` library

---

### Partners (Landing Page)

Technology partners section with infinite marquee animation.

**Features:**
- Horizontal scrolling marquee of partner logos
- Infinite loop animation
- Partner icons from `react-icons/si` (Simple Icons)
- Purple-blue gradient text matching theme
- White background with subtle borders

**Design:** Clean, minimal marquee with smooth scrolling animation.

---

### Services (Landing Page)

"Our Expertise" section with animated background effects.

**Background:**
- Light purplish gradient (matching landing page theme)
- Rich purple-dominant radial gradient layers (more purple than blue)
- Four animated blue amoeba blobs (blurred gradient elements) drifting across the background with organic shapes
- Fine-grain SVG noise texture overlay (`feTurbulence`, `mix-blend-mode: overlay`)

**Cards (3 service cards in a grid):**
Each card displays:
- Custom SVG icon (from `ServiceIcon` component)
- Numbered label (01-03)
- Service title and short description
- Feature pills (e.g., "Financial Intelligence", "Supply Chain Optimization")
- "Learn More" link with arrow icon

**Card styling:** Glassmorphic effect with `backdrop-filter: blur(12px)`, embossed grid pattern overlay, and hover lift animation.

| # | Service    | Features                                                                  |
|---|------------|---------------------------------------------------------------------------|
| 1 | Oracle ERP | Financial Intelligence, Supply Chain Optimization, Human Capital Analytics, Business Intelligence |
| 2 | Salesforce | Revenue Acceleration, Smart Service Management, Marketing Automation, Einstein AI Integration |
| 3 | ServiceNow | IT Service Automation, Infrastructure Intelligence, Customer Support Systems, HR Service Platforms |

**Note:** AI Engineering service has been removed.

---

### CTA (Landing Page)

Call-to-action section with premium dark purple gradient background.

**Content:**
- Title: "The **Revolution** Starts Here" (with gradient accent on "Revolution")
- Subtitle: "Transform your enterprise into an unstoppable force..."
- Three feature points: 60-Day MVP, 99% Client Retention, 24/7 Support
- Two buttons: "Join the Revolution" (outline) and "Claim Your Future" (primary)

**Design:**
- Dark purple gradient background with noise texture
- Animated orb in background
- Glassmorphic buttons with curved edges (`border-radius: 999px`)
- Custom icons from `react-icons` (FaBolt, FaBullseye, FaRocket)
- Feature points displayed as plain text with icons (no shapes to avoid confusion with buttons)

**Typography:** Uses design system typography variables.

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

**Primary Colors:**
- **Purple gradient (thick):** `linear-gradient(135deg, #1a0a1f 0%, #2d1b3d 25%, #4a2040 50%, #6a4c9a 75%, #7e57c2 100%)` - Used for Services background, CTA background, intro AI text
- **Purple-blue gradient (text):** `linear-gradient(135deg, #7e57c2 0%, #9575cd 40%, #5c6bc0 100%)` - Used for heading accents
- **Light purplish background:** Multiple radial gradients with purple tones - Used for landing page, Metrics, WhyChooseUs, Partners, Hero sections

**Accent Colors:**
- Pink accent: `#e8a4c4`
- Purple: `#9575cd`, `#7e57c2`
- Blue: `#5c6bc0`, `#7986cb`
- Indigo: `#7e57c2`

**Text Colors:**
- Dark text: `#0a0a1a`, `#1a1a2e`
- Body text: `rgba(10, 10, 26, 0.85)`
- Muted text: `#3a3a4e`, `#5a5a6e`

**Backgrounds:**
- Light base: `#ffffff` with purplish gradient overlays
- Dark (CTA): `#0a0a0f` with purple gradients

### Typography

**Font Families:**
- **Display font:** `var(--font-display)` — Inter Tight (for headings, buttons, UI elements)
- **Body font:** `var(--font-body)` — Inter Tight (for body text, descriptions)

**Font Sizes (CSS Variables):**
- `--text-xs` to `--text-6xl`: Responsive clamp-based sizes
- Example: `--text-5xl` = `clamp(2.8rem, 2rem + 4vw, 4.5rem)`

**Letter Spacing:**
- `--letter-tight`: -0.05em (headings)
- `--letter-normal`: -0.02em (body)
- `--letter-wide`: 0.01em (body text)
- `--letter-wider`: 0.05em (tags, labels)
- `--letter-widest`: 0.1em (uppercase labels)

**Line Heights:**
- `--leading-none`: 1 (large headings)
- `--leading-tight`: 1.1 (headings)
- `--leading-snug`: 1.2 (subheadings)
- `--leading-normal`: 1.5 (body)
- `--leading-relaxed`: 1.6 (descriptions)
- `--leading-loose`: 1.8 (long-form text)

**Usage:** All components use these CSS variables for consistent typography across the site.

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
- **Intro animation:** Uses GSAP timeline for smooth, performant animations with proper cleanup

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
| GSAP             | Latest  | Intro animation timeline       |
| React Router DOM | 6.26    | Client-side routing            |
| react-icons      | Latest  | Custom SVG icons               |
| CSS              | -       | Styling (no preprocessor)      |

---

## Scripts

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```
