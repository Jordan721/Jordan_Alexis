# Jordan Alexis — Portfolio

A personal portfolio showcasing my work in full-stack development, data analytics, and multimedia. Built with HTML, CSS, and vanilla JavaScript.

[View the portfolio](https://jordan721.github.io/Jordan_Alexis/)

## Current design and features

- **Creative studio design:** oversized typography, a portrait collage, hand-drawn details, illustrated project covers, and solid backgrounds.
- **Responsive navigation:** sticky header, sliding link highlight, active-section tracking, and an animated mobile menu.
- **Light and dark themes:** animated sun/moon toggle, saved preference, and a circular reveal in browsers supporting View Transitions. Other browsers use a color transition; reduced-motion preferences are respected.
- **Selected projects:** three featured projects with links to live work, plus six more available through the expand/collapse control.
- **Interactive toolkit:** search skills, filter by discipline, and pin up to five skills to a personal workbench. Includes clear/reset controls and keyboard-accessible buttons.
- **About and experience:** profile cards, side-by-side chapter cards for roles and milestones, expandable role details, year/type filters with reset and result counts, and animated experience counters.
- **Education and credentials:** education cards, resume selection, and a searchable 17-credential gallery with category filters, completed professional certificate highlights, PDF previews/downloads, existing provider badge links, program details, and certificate-specific top-skill highlights sourced from provider curricula.
- **GitHub activity:** recent repositories, commits, profile statistics, and a contribution chart.
- **Readability:** improved dark-mode contrast and stable toolkit cards without the 3D tilt effect.

## Run locally

Open `index.html` in a browser. No installation, build step, or API key is required.

An internet connection is needed for Google Fonts, Font Awesome, GitHub activity, and the contribution chart. Local images and PDFs keep their existing relative paths.

## Project structure

```text
Jordan_Alexis/
├── index.html
├── assets/
│   ├── css/
│   │   ├── modals.css          # Resume and certification dialog layouts
│   │   ├── studio.css          # Base layout, sections, themes, responsive styles
│   │   ├── creative.css        # Collage design and project illustrations
│   │   ├── motion-toolkit.css  # Theme/nav animation, toolkit, contrast fixes
│   │   └── credentials.css     # Credential gallery and PDF detail viewer
│   └── js/
│       ├── main.js             # Section initialization, filters, counters
│       ├── modals.js           # Accessible dialogs and nested program details
│       ├── credentials.js      # Credential data, search/filtering, PDF viewer
│       ├── interactions.js     # Shared scrolling and back-to-top behavior
│       ├── activity.js         # GitHub activity
│       ├── navigation-theme.js # Menu, themes, project expansion
│       └── motion-toolkit.js   # Navigation highlight and skill playground
├── main.css                   # Main entry point importing organized styles
├── script.js                  # Pointer to the scripts in assets/js/
├── Me.png
├── Pics/
├── Certifications/
├── Jordan_Alexis*.pdf          # Resume variants
├── Trail_*/                   # Previous portfolio versions
├── SOURCE-STRUCTURE.md
└── ReadMe.md
```

The tree lists the active CSS and JavaScript files. Earlier stylesheets and `effects.js` remain in `assets/` as inactive source.

Skill sources and selection notes are documented in [docs/CREDENTIAL-SOURCES.md](docs/CREDENTIAL-SOURCES.md).

## Editing the site

Update portfolio content and links in `index.html`. The page links to `main.css`, which imports the organized styles in order; later stylesheets refine the base design. Add new CSS imports there. Keep mobile and reduced-motion rules with the feature they affect.

JavaScript files load as ordered classic scripts so existing inline button handlers continue to work. Preserve their order in `index.html` when reorganizing code. See [SOURCE-STRUCTURE.md](SOURCE-STRUCTURE.md) for the file responsibilities.

## Recent updates

### November 7, 2026

- Replaced dashboard sidebar navigation with a sticky top header and mobile menu.
- Introduced the creative studio layout, portrait collage, and illustrated project covers.
- Organized CSS and JavaScript into separate folders and feature files.
- Added theme-switch and navbar animation, skill search/filtering, and the five-skill workbench.
- Improved dark-mode contrast, removed dotted background textures, and removed toolkit card tilt to keep text sharp.
- Replaced certificate folders and the carousel with a searchable gallery, category filters, completed professional certificate highlights, and a larger PDF detail view.

## Earlier updates

These entries describe previous versions and may reference features that have since been replaced.

### 📅 February 19, 2026
Projects section collapsible expand/collapse and new project links added.

- 📂 **Show More / Show Less** — Featured Projects now shows 3 cards by default. A toggle button expands the remaining 6 with a smooth animated reveal and a chevron that rotates on open/close.
- 🔗 **New Projects Added** — YUU Capstone Projects, YUU Workshops, and Orbit Control added to the projects grid.

### 📅 February 17, 2026
Dashboard side navigation, dark/light mode, and visual refresh.

- 🗂️ **Dashboard Side Nav** — Replaced the old floating dot nav and social sidebar with a two-panel dashboard-style sidebar. Icon rail always visible on the left (60px), expands into a full panel with profile, labeled navigation, and social links (GitHub, LinkedIn, Linktree).
- 🌙 **Dark / Light Mode** — Full theme toggle in the sidebar. Preference persists via localStorage. Light mode features clean white cards, proper text hierarchy, and a polished slate background instead of just inverting dark colors.
- 📱 **Mobile Hamburger Menu** — On mobile the icon rail is hidden and replaced with a floating hamburger button (top-left). Animates into an X when the panel is open.
- 🔗 **Connect Section in Rail** — GitHub, LinkedIn, and Linktree icon links added directly to the icon rail with hover tooltips, in addition to the expanded panel.
- ✨ Big UX overhaul — removed accordions and hidden content across the site in favor of always-visible layouts.
- 💼 **Experience** — Replaced bento grid with a **Split Panel layout** (year/company on left, role + details on right, glowing divider line). Filters and stats bar preserved.
- 👤 **About Me** — Replaced 6 expandable cards with a single **Tabbed Profile Card**. Mobile tabs scroll with a fade hint.
- 🎓 **Education** — Unified into a split-panel timeline matching the experience section. Progress bars and status badges included.
- ⚙️ **Tech Arsenal** — Each category has a unique visual identity and hover animation. Mobile redesigned as a tabbed interface.

### 📅 February 13, 2026
Swapped horizontal timeline for a bento grid and upgraded Tech Arsenal tag filtering with hide/reflow animations.

### 📅 February 12, 2026
Major redesign — terminal hero greeting, click-to-reveal about cards, merged experience section with stats bar and dual filters, interactive tag cloud for skills, featured projects section, stacked education layout, and GitHub contribution heatmap.

### 📅 January 16, 2026
Replaced 3D floating shapes with an interactive Animated Grid background — canvas-based, mouse-responsive, 60fps.

### 📅 January 8, 2026
Added info modals to certification folders with detailed curriculum, progress tracking, and technology badges.

### 📅 January 7, 2026
Added Career Journey Timeline, live GitHub Activity Feed, and Animated Grid background.

### 📅 January 6, 2026
Scroll animations — progress indicator, parallax orbs, section reveals, unique hover effects per title, rainbow nav trail, and dynamic scrollbar.

### 📅 January 3, 2026
Gamification system with toggle panel (cursor trail, floating particles, card tilt, click ripples, animated grid, icon colors). All settings saved to localStorage. Also added interactive letter hover effects on hero name.

### 📅 December 2025
Certificate folder system with carousel, responsive year filtering, folder hover animations, and complete site redesign from Trail_7.

## Connect

- [LinkedIn](https://www.linkedin.com/in/jordan-alexis/)
- [GitHub](https://github.com/Jordan721)
- [Linktree](https://linktr.ee/Jordan_Alexis_)

Last updated: November 7, 2026
