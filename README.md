# PRAIMERO Version 6 - Content Documentation

## Overview
Version 6 is a modern React-based enterprise AI solutions website featuring interactive 3D elements, smooth animations, and a comprehensive service showcase. The site uses a dark noisy gradient theme with purple/blue color accents.

---

## Pages Structure

### 1. Landing Page (`/`)
**Route:** `/`  
**Component:** `LandingPage.jsx`

#### Sections:

##### A. Hero Section (`Hero3D`)
- **3D Interactive Scene:**
  - Base plane with wave ripple effects on cube clicks
  - 10x10 grid of 3D cubes (100 total cubes)
  - Interactive cube hover effects (highlighted cube + nearby cubes)
  - Click-to-trigger wave animation across all cubes
  - Plane wave ripple animation from click position

- **Content:**
  - **Brand Title:** "PRAI" + "MERO" (with gradient accent)
  - **Subtitle:** "Transforming Enterprise with Intelligent Solutions"
  - **Description:** 
    - "We architect AI-powered solutions across Oracle ERP, Salesforce, and ServiceNow—driving efficiency, insight, and measurable growth. PRAIMERO empowers enterprises to modernize operations, optimize decision-making, and unlock growth through AI-driven platforms and intelligent automation."
  - **Tags:** AI | ERP | CRM | CLOUD | AUTOMATION
  - **Action Buttons:**
    - "Explore Services" (outline)
    - "Get Started" (primary with + icon)

##### B. About Section (`About`)
- **Label:** "Who We Are"
- **Title:** "A New Generation of Enterprise AI Partner"
- **Content:**
  - Paragraph 1: "PRAIMERO is a specialized AI consultancy focused exclusively on enterprise platforms. We don't just implement technology—we transform how organizations think, operate, and compete in the digital age."
  - Paragraph 2: "Our team of certified experts brings deep platform knowledge combined with cutting-edge AI expertise to deliver solutions that are both powerful and practical. We bridge the gap between enterprise complexity and intelligent simplicity."
  - Paragraph 3: "Built on a singular belief: that artificial intelligence should be at the core of every enterprise decision. We bring fresh thinking to established platforms like Oracle, Salesforce, and ServiceNow, helping organizations move beyond traditional implementations to truly intelligent operations."
- **Statistics Grid:**
  - 50+ Enterprise Clients
  - 3 Core Platforms
  - 99% Client Retention
  - 24/7 Support Coverage

##### C. Services Section (`Services`)
- **Label:** "What We Do"
- **Title:** "Enterprise Solutions Powered by AI"
- **Subtitle:** "Delivering intelligent automation and transformative insights across three core enterprise platforms. We help enterprises harness the power of AI to drive efficiency, innovation, and measurable growth."
- **Service Cards (3):**
  1. **Oracle ERP** (⚡)
     - Features: Financial Management, Supply Chain, Human Capital, Analytics & BI
     - Description: "End-to-end enterprise resource planning powered by AI-driven insights and intelligent automation for seamless operations."
   
  2. **Salesforce** (☁️)
     - Features: Sales Cloud, Service Cloud, Marketing Cloud, Einstein AI
     - Description: "Transform customer relationships with AI-enhanced CRM solutions that drive engagement, revenue, and lasting loyalty."
   
  3. **ServiceNow** (🛠️)
     - Features: ITSM, ITOM, Customer Service, HR Service Delivery
     - Description: "Streamline enterprise operations with AI-powered workflow automation and intelligent service management."

##### D. Footer (`Footer`)
- **Brand:**
  - Logo: "PR" + "AI" (accent) + "MERO"
  - Tagline: "Enterprise AI solutions that transform how organizations operate, compete, and grow. We bridge the gap between enterprise complexity and intelligent simplicity, delivering powerful and practical solutions."
- **Links Grid:**
  - **Services:** Oracle ERP, Salesforce, ServiceNow
  - **Company:** Home, Services, Contact
  - **Get in Touch:**
    - Email: info@praimero.com
    - Phone: +1 (555) 000-0000
    - Social: LinkedIn, Twitter
- **Bottom:**
  - Copyright: "© {year} PRAIMERO. All rights reserved."
  - Legal: Privacy, Terms

---

### 2. Oracle ERP Page (`/erp`)
**Route:** `/erp`  
**Component:** `ERPPage.jsx`

#### Sections:

##### A. Hero Section
- **Breadcrumb:** Home / Oracle ERP
- **Title:** "Oracle ERP Solutions"
- **Description:** "End-to-end enterprise resource planning powered by AI-driven insights and intelligent automation for seamless operations."
- **Tags:** Financial Management, Supply Chain, Human Capital, Analytics & BI
- **3D Model:** ERPModel3D component

##### B. Core Modules Section
- **Title:** "Core Modules"
- **Modules (4):**
  1. **Oracle Financials Cloud**
     - "Comprehensive financial management with AI-powered forecasting, automated reconciliation, and real-time reporting across your entire organization."
  
  2. **Oracle Supply Chain Management**
     - "Intelligent supply chain optimization leveraging machine learning for demand planning, inventory management, and logistics coordination."
  
  3. **Oracle HCM Cloud**
     - "Transform human capital management with AI-driven talent acquisition, workforce analytics, and employee experience optimization."
  
  4. **Oracle Analytics Cloud**
     - "Advanced analytics and business intelligence platform with embedded AI/ML capabilities for predictive insights and data-driven decision making."

##### C. Key Benefits Section
- **Title:** "Key Benefits"
- **Benefits:**
  - Unified data platform across all business functions
  - AI-powered forecasting and predictive analytics
  - Scalable cloud architecture for enterprise growth
  - Reduced operational costs through intelligent automation
- **CTA Button:** "Get Started"

##### D. Footer
- Same as Landing Page

---

### 3. Salesforce Page (`/salesforce`)
**Route:** `/salesforce`  
**Component:** `SalesforcePage.jsx`

#### Sections:

##### A. Hero Section
- **Breadcrumb:** Home / Salesforce
- **Title:** "Salesforce Solutions"
- **Description:** "Transform customer relationships with AI-enhanced CRM solutions that drive engagement, revenue, and lasting loyalty."
- **Tags:** Sales Cloud, Service Cloud, Marketing Cloud, Einstein AI
- **3D Model:** SalesforceModel3D component

##### B. Core Modules Section
- **Title:** "Core Modules"
- **Modules (4):**
  1. **Sales Cloud**
     - "Accelerate sales cycles with AI-powered lead scoring, opportunity insights, and automated pipeline management for consistent revenue growth."
  
  2. **Service Cloud**
     - "Deliver exceptional customer service with intelligent case routing, AI chatbots, and omnichannel support that resolves issues faster."
  
  3. **Marketing Cloud**
     - "Orchestrate personalized customer journeys with AI-driven segmentation, predictive content, and cross-channel campaign optimization."
  
  4. **Einstein AI**
     - "Embedded artificial intelligence across the Salesforce platform delivering predictions, recommendations, and automation at every touchpoint."

##### C. Key Benefits Section
- **Title:** "Key Benefits"
- **Benefits:**
  - 360-degree customer view with AI insights
  - Automated workflows reducing manual processes by 40%
  - Predictive analytics for proactive engagement
  - Seamless integration with existing enterprise systems
- **CTA Button:** "Get Started"

##### D. Footer
- Same as Landing Page

---

### 4. ServiceNow Page (`/servicenow`)
**Route:** `/servicenow`  
**Component:** `ServiceNowPage.jsx`

#### Sections:

##### A. Hero Section
- **Breadcrumb:** Home / ServiceNow
- **Title:** "ServiceNow Solutions"
- **Description:** "Streamline enterprise operations with AI-powered workflow automation and intelligent service management."
- **Tags:** ITSM, ITOM, Customer Service, HR Service Delivery
- **3D Model:** ServiceNowModel3D component

##### B. Core Modules Section
- **Title:** "Core Modules"
- **Modules (4):**
  1. **IT Service Management (ITSM)**
     - "Modernize IT service delivery with AI-powered incident management, predictive intelligence, and automated resolution workflows."
  
  2. **IT Operations Management (ITOM)**
     - "Gain full visibility into IT infrastructure with AIOps-driven event management, cloud optimization, and proactive health monitoring."
  
  3. **Customer Service Management**
     - "Deliver connected customer experiences with AI-assisted agents, self-service portals, and automated case management workflows."
  
  4. **HR Service Delivery**
     - "Transform employee experiences with intelligent HR workflows, AI-powered case management, and unified service portals."

##### C. Key Benefits Section
- **Title:** "Key Benefits"
- **Benefits:**
  - Single platform for enterprise-wide workflows
  - AI-driven automation reducing ticket resolution time
  - Proactive issue detection with predictive intelligence
  - Enhanced employee and customer satisfaction scores
- **CTA Button:** "Get Started"

##### D. Footer
- Same as Landing Page

---

### 5. Contact Page (`/contact`)
**Route:** `/contact`  
**Component:** `ContactPage.jsx`

#### Sections:

##### A. Hero Section
- **Breadcrumb:** Home / Contact
- **Title:** "Let's Build Something Great"
- **Subtitle:** "Ready to transform your enterprise? Tell us about your project and we'll get back to you within 24 hours."

##### B. Contact Form Section
- **Form Fields:**
  - Name (required)
  - Email (required)
  - Company
  - Service (dropdown: Oracle ERP, Salesforce, ServiceNow, Other)
  - Message (required, textarea)
- **Submit Button:** "Send Message"

##### C. Contact Info Sidebar
- **Email:** info@praimero.com
- **Phone:** +1 (555) 000-0000
- **Follow Us:** LinkedIn, Twitter
- **Services Links:**
  - Oracle ERP
  - Salesforce
  - ServiceNow

##### D. Footer
- Same as Landing Page

---

## Navigation

### Navbar Component
- **Logo:** "PR" + "AI" (accent) + "MERO"
- **Links:**
  - Home (`/`)
  - Oracle ERP (`/erp`)
  - Salesforce (`/salesforce`)
  - ServiceNow (`/servicenow`)
- **CTA:** "Let's Talk" (links to `/contact`)
- **Mobile Menu:** Hamburger menu with slide-out navigation

---

## Design Theme

### Colors
- **Primary Gradient:** Pink (#e8a4c4) to Blue (#a8c4e8)
- **Background:** Dark noisy gradient (purple/blue tones)
- **Text:** White with varying opacity
- **Accents:** Gradient text for highlights

### Typography
- **Font Family:** Inter Tight (Awwwards-inspired)
- **Headings:** Bold, tight letter spacing
- **Body:** Regular weight, relaxed line height

### Visual Effects
- **Noisy Gradient Background:** SVG noise texture overlay
- **3D Elements:** CSS transforms for cubes and planes
- **Animations:** Framer Motion for smooth transitions
- **Grid Patterns:** Subtle embossed grid on service cards

---

## Technical Stack

- **Framework:** React 18
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Styling:** CSS with CSS Variables
- **Build Tool:** Vite
- **Font:** Inter Tight (Google Fonts)

---

## Data Structure

### Services Data (`src/data/services.js`)
Each service object contains:
- `id`: Unique identifier
- `title`: Service name
- `icon`: Emoji icon
- `shortDescription`: Brief description
- `route`: URL path
- `features`: Array of feature names
- `modules`: Array of module objects (name, description)
- `benefits`: Array of benefit strings

---

## Component Architecture

```
src/
├── components/
│   ├── Hero3D/          # 3D hero section with interactive cubes
│   ├── About/            # About section with stats
│   ├── Services/         # Services grid section
│   ├── Footer/           # Site footer
│   ├── Navbar/           # Navigation bar
│   └── ServiceModels/    # 3D models for service pages
├── pages/
│   ├── Landing/          # Home page
│   ├── ERP/              # Oracle ERP page
│   ├── Salesforce/       # Salesforce page
│   ├── ServiceNow/       # ServiceNow page
│   └── Contact/          # Contact page
├── data/
│   └── services.js       # Service data
└── styles/
    └── index.css         # Global styles
```

---

## Key Features

1. **Interactive 3D Hero:** Clickable cube grid with wave animations
2. **Smooth Animations:** Page transitions and scroll-triggered animations
3. **Responsive Design:** Mobile-first approach with breakpoints
4. **Service Showcase:** Detailed pages for each enterprise platform
5. **Contact Form:** Functional contact form with validation
6. **Modern UI:** Glassmorphism effects, gradient accents, noisy textures

---

## Content Summary

### Total Pages: 5
1. Landing Page (Home)
2. Oracle ERP Page
3. Salesforce Page
4. ServiceNow Page
5. Contact Page

### Total Services: 3
1. Oracle ERP (4 modules, 4 benefits)
2. Salesforce (4 modules, 4 benefits)
3. ServiceNow (4 modules, 4 benefits)

### Total Sections on Landing: 4
1. Hero (3D Interactive)
2. About (with stats)
3. Services (3 cards)
4. Footer

---

*Last Updated: Based on current codebase structure*
