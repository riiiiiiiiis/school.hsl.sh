# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.3 school website for "Школа Hashslash" (Hashslash School), offering Russian-language courses in modern development with AI tools. The site features multiple course routes and uses React 19, Tailwind CSS v4, and is built with the App Router pattern.

## Common Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Note: No testing framework is currently configured.

## Architecture

### Technology Stack
- **Framework**: Next.js 15.3.3 with App Router
- **UI**: React 19.0.0
- **Styling**: Tailwind CSS v4 (using @tailwindcss/postcss)
- **Language**: JavaScript (not TypeScript)
- **Analytics**: Google Analytics GA4

### Key Architectural Decisions

1. **Multi-Route Structure**: The school website has dedicated routes for different courses:
   - `/` - Main school homepage with course overview
   - `/ai` - AI Tools course landing page
   - `/vibecoding` - Vibe-coding course landing page

2. **Tailwind CSS v4 Configuration**: Custom theme variables are defined in `app/globals.css` using CSS custom properties:
   ```css
   @theme {
     --color-apple-black: #1d1d1f;
     --color-apple-gray: #86868b;
     --color-apple-light-gray: #f5f5f7;
     --color-apple-blue: #0071e3;
     --font-family-apple: -apple-system, BlinkMacSystemFont, ...
   }
   ```

3. **Component Structure**: All components are in `/app/components/`. Components are organized by:
   - `/app/components/` - Shared components (Navbar, Footer, AccordionItem, Instructor)
   - `/app/components/school/` - School homepage specific components
   - `/app/components/vibecoding/` - Vibecoding course specific components

4. **SEO & Metadata**: Comprehensive metadata including structured data (JSON-LD) for course information is configured in `app/layout.js`. Each course page has its own metadata export.

### Project-Specific Context

- The site is a multi-page school website with separate course landing pages
- All text content is in Russian
- The design follows Apple's design language (fonts, colors, spacing)
- Shared instructor component (Sergey Ris) across all course pages
- Two main courses:
  - **AI Tools**: 4-week course, pricing from 9,990₽
  - **Vibecoding**: 3-week course, pricing from 2,990₽ (three tiers: Вуайерист 2,990₽, Вайбкодер 11,991₽, Визионер 23,992₽)

### Course Pages Structure

#### Main School Page (`/`)
```
page.js
├── Navbar (fixed navigation)
├── main
│   ├── SchoolHero (school branding)
│   └── ProductCards (course overview cards)
└── Footer (links and navigation)
```

#### AI Tools Page (`/ai`)
```
page.js
├── Navbar
├── main
│   ├── Hero (AI Tools branding)
│   ├── Course sections
│   └── Instructor (shared component)
└── Footer
```

#### Vibecoding Page (`/vibecoding`)
```
page.js
├── Navbar
├── main
│   ├── Hero (Vibecoding branding)
│   ├── VibeCodingIntro
│   ├── Instructor (shared component)
│   ├── LeadMagnet
│   ├── CourseProjects
│   ├── Testimonials
│   ├── Program (with accordions)
│   ├── StudentProjects
│   ├── Pricing (3 tiers)
│   └── CTA (Telegram bot signup)
└── Footer
```