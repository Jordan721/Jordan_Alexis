# 🎨 Jordan Alexis' Portfolio Website

A sleek, modern portfolio website showcasing my journey as a developer. Built from scratch with a complete redesign - way different from Trail_7! 🚀✨

Previous versions live in the Trail folder. 📂

## 📅 Recent Updates

### February 12, 2026 🔥✨
Major portfolio redesign — restructured sections, new interactions, and a cleaner experience!

**Hero Section:**
- 💻 **Terminal Greeting** - Replaced "Hello World" with a CSS typing animation: `> const developer = new Jordan("Programmer")` with a blinking cursor

**About Me Section:**
- 🃏 **Click-to-Reveal Cards** - Replaced flip cards with 4 expandable cards (Who I Am, What I Build, My Stack, Certifications)
- ⬇️ **Smooth Expand** - Click any card to slide open its content with chevron arrow indicator
- 🎨 **Glass Card Styling** - Consistent hover lift and glow effects

**Experience Section (Merged with Career Journey):**
- 🔀 **Merged Sections** - Combined Work Experience and Career Journey Timeline into one horizontal timeline
- ⏳ **Horizontal Scroll Timeline** - Chronological cards from 2014–2025 with left/right arrow navigation
- 📊 **Stats Bar** - Animated counters for Years, Organizations, Degrees, and Certs
- 🏷️ **Two Card Types** - Job cards (expandable with bullet points) and milestone cards (key career moments)
- 🔍 **Dual Filters** - Filter by year and by type (Jobs vs Milestones), both work independently
- 📂 **Expand All Button** - One-click to expand/collapse all job card details
- 📱 **Mobile Fallback** - Switches to vertical timeline layout on small screens

**Tech Arsenal (formerly Skills & Competencies):**
- ☁️ **Interactive Tag Cloud** - Desktop shows floating, filterable skill tags with category colors
- 🏷️ **Category Filters** - Filter by Business, Data, Tech, Tools, or Strategic
- 📱 **Mobile Accordion** - Kept the existing accordion layout for mobile

**New Featured Projects Section:**
- 🎮 **Game Vault** - Browser-based games collection
- ✨ **AnimateLab** - Web animation techniques showcase
- 📚 **Bagely Bytes** - Programming education platform
- 🗄️ **Data Pipeline** - Interactive enterprise data pipeline simulation
- 🔗 **View All Projects** link to full Development Showcase

**Education Section:**
- 🏗️ **Stacked Hierarchy** - Primary tier (large cards with progress bars) for current/recent programs
- 💊 **Expandable Chips** - Secondary tier shows older programs as compact chips that expand on click

**GitHub Activity:**
- 📊 **Contribution Heatmap** - Added visual contribution chart above the activity grid

**Sitewide:**
- 🔢 **Section Renumbering** - Cleaned up to 01–07 sequential ordering
- 🧭 **Updated Navigation** - Removed Journey dot, added Projects dot, renamed Skills to Arsenal
- 🧹 **Removed "Current Role"** - Morgan Stanley card updated to reflect completed apprenticeship (July 2025 – Jan 2026)

### January 16, 2026 🔲✨
Replaced 3D Floating Shapes with a sleeker Animated Grid background effect!

**New Animated Grid:**
- 🔲 **Interactive Grid** - Subtle moving grid lines with glowing intersection points
- 🖱️ **Mouse Responsive** - Grid brightens and intersections glow larger near your cursor
- 🌊 **Wave Animation** - Gentle wave effect flows through the grid lines
- 💜 **Gradient Glow** - Intersection points pulse with cyan-to-purple gradient
- 🎨 **Canvas-Based** - Uses HTML5 Canvas for smooth 60fps performance
- ⚡ **Optimized** - Minimal CPU usage, only runs when enabled

**Why the change?**
The new Animated Grid provides a cleaner, more professional tech aesthetic compared to the previous 3D shapes. It's subtle enough to not distract from content while still adding visual interest and interactivity.

Toggle it on in the gamification panel to see the effect!

### January 8, 2026 ℹ️✨
Added interactive info modals to certification folders!

**Certification Details:**
- ℹ️ **Info Buttons** - Cyan circular info icons on Year Up United and Data Analytics folders
- 📋 **Detailed Modals** - Comprehensive course/program information on click
- 🎓 **Year Up United Modal** - App Dev track details with Java, Spring Boot, JetBrains, SQL integration
- 📊 **Data Analytics Modal** - Google certificate course info with progress tracking (3 of 8 courses completed)
- 🎨 **Learning Highlights** - Key learning areas in interactive cards (Java Ecosystem, Database Integration, Spring Boot, Enterprise Development)
- 🛠️ **Technology Badges** - Visual display of tools learned (Java, SQL, R, Tableau, Excel, etc.)
- ✅ **Skills Checklists** - Professional and technical skills with checkmarks
- 📈 **Progress Bar** - Visual completion tracker for Data Analytics (37.5% complete)
- 🔗 **External Links** - Direct links to Year Up United and Coursera
- 📱 **Responsive Design** - Fully optimized for mobile and desktop viewing

**Technical Implementation:**
- Clean HTML structure with separate modals for each folder
- Reusable CSS classes (`.course-info-modal`, `.learning-highlights`, `.tool-badge`)
- JavaScript functions (`openYearUpInfoModal()`, `openCourseInfoModal()`)
- Glass morphism design matching portfolio aesthetic
- Fixed nested button issue with wrapper divs

Perfect for recruiters and hiring managers who want detailed information about my certifications! 🎯

### January 7, 2026 🚀✨
Added three major new features to showcase my work and career journey!

**New Sections:**
- 🗺️ **Career Journey Timeline** (Section 02.5) - Interactive visual timeline showing career milestones from 2014-2025
  - Color-coded dots for education vs work experiences
  - Animated timeline that "draws" as you scroll
  - Stats cards with animated counters (11 years experience, 8 organizations, 5 degrees, 4 certs)
  - Alternating left/right layout on desktop, mobile-optimized view
  - Positioned after Work Experience for logical flow

- 🐙 **GitHub Activity Feed** (Section 04.5) - Live GitHub activity showcasing recent work
  - Real-time data from GitHub API
  - Recent commits with timestamps and repo links
  - Latest repositories with descriptions, languages, and star counts
  - GitHub stats (repos, followers, following, gists)
  - Language color indicators
  - Positioned after Education section

- 🔲 **Animated Grid** - Interactive grid background effect
  - Subtle moving grid lines with glowing intersections
  - Mouse-responsive - grid brightens near cursor
  - Pulsing intersection points with cyan-purple gradient
  - Toggle on/off in gamification panel
  - Canvas-based for smooth 60fps performance

**Navigation Updates:**
- Updated floating nav to include Journey (after Experience) and Activity (after Education)
- Color-coded dots: Home (cyan), About (purple), Experience (orange), Journey (green), Skills (green), Education (pink), Activity (purple), Contact (red)

All three features integrate seamlessly with existing design language - glass cards, gradients, and smooth animations! 🎨

### January 6, 2026 🎨✨
Added advanced scroll animations and interactive effects throughout the site!

**New Scroll Effects:**
- 📊 **Scroll Progress Indicator** - Gradient bar at top shows your progress through the page
- 🌊 **Parallax Hero Orbs** - Background orbs move at different speeds while scrolling for depth effect
- ✨ **Section Header Reveals** - Numbers pulse, titles slide in, lines grow on scroll
- 📈 **Timeline Drawing Animation** - Work experience timeline "draws" as you scroll into view

**Interactive Section Titles:**
Each section title has its own unique hover animation:
- 💫 **About Me** - Floats up with cyan glow
- 🔄 **Work Experience** - Shakes left-right rapidly
- 💗 **Skills & Competencies** - Pulses and scales with orange glow
- 🎡 **Education** - 3D spin rotation with cyan glow
- 🌈 **Get In Touch** - Animated rainbow gradient flow

**Navigation & Scrollbar Enhancements:**
- 🎨 **Rainbow Trail Effect** - Navigation dots change colors per section (cyan, purple, orange, green, pink, red)
- 🌈 **Dynamic Scrollbar** - Custom gradient scrollbar that changes colors as you scroll (cyan → purple → orange) with matching glow effects

All animations are smooth, GPU-accelerated, and respect user's motion preferences!

### January 3, 2026 - Part 2 🎮✨
Added comprehensive gamification system with user controls! Features include:
- 🎮 **Gamification Toggle Button** - Transparent glass button in bottom-right corner with cyan glow
- ⚙️ **Settings Panel** - Control all interactive effects individually
- ✨ **Cursor Trail** - Glowing dots follow your mouse (desktop only)
- 🎆 **Floating Particles** - Animated background particles
- 🎲 **Card Tilt Effect** - 3D card hover interactions
- 💧 **Click Ripples** - Button click animations
- 🎨 **Icon Color Change** - Section icons change colors on hover
- 💾 **LocalStorage Persistence** - Your preferences are saved
- 📱 **Mobile Optimized** - Smart UI that adapts to screen size
- 🔝 **Back-to-Top Button** - Positioned on left side for mobile (doesn't conflict with gamification toggle)
- 💎 **Enhanced Glass Cards** - Super transparent glass effect on feature cards (Games, Dev Showcase, Certifications)

Removed Konami Code easter egg for cleaner experience. All effects can now be toggled on/off individually! 🎯

### January 3, 2026 - Part 1 ✨
Added interactive letter hover effects to my name in the hero section! Each letter in "Jordan Alexis" now bounces up, scales, rotates, changes color, and glows when you hover over it individually. Smooth gradient text with playful animations create a memorable first impression! 🎨💫

### December 28, 2025 📱
Implemented responsive year filtering for Work Experience! Desktop shows interactive button filters, while mobile gets a clean dropdown menu. Multi-year positions (like B&A Appliances: 2020-2025) now appear when filtering by ANY year within their range. Smart UX for both platforms! 🎯✨

### December 27, 2025 ✨
Added smooth animations to certification folders! Folders now have radial glow effects on hover, 3D icon rotations, and buttery-smooth fade transitions when opening/closing. The whole experience feels polished and professional! 🎭🎨

### December 26, 2025 🎨
Complete redesign from the ground up! The entire website has been rebuilt with a modern, professional look - totally different from the old Trail_7 version. New animations, better layouts, improved navigation, and way cleaner design! 🚀✨

### December 19, 2025 📁
Added folder-based navigation system to organize certifications by category! Now you can browse Year Up United and Data Analytics certs separately with a slick folder interface that's fun to click! 🎯

### December 17, 2025 ✨
Added CSS animations (typing effects, wave emoji, card fade-ins), improved footer messaging, and refined modal styling.

### December 16, 2025 🎠
Implemented interactive certificate carousel with responsive design and multiple navigation methods.

---

## 🗺️ Career Journey Timeline

A beautiful, interactive timeline visualizing your professional journey from 2014 to present! 🚀

### ✨ Visual Design
- **Animated Timeline Line** - Gradient line (cyan → purple → orange) that draws from top to bottom as you scroll
- **Color-Coded Milestones** - Purple dots for education, cyan dots for work, orange glow for current position
- **Alternating Layout** - Cards alternate left/right on desktop for visual interest
- **Pulsing Dots** - Each milestone dot has a gentle pulsing animation with colored glow
- **Glass Cards** - Consistent glassmorphism design matching site aesthetic

### 📊 Journey Stats
Four animated stat cards displaying your career highlights:
- 📅 **11 Years Experience** - Total professional journey
- 💼 **8 Organizations** - Companies and institutions worked with
- 🎓 **5 Degrees/Programs** - Educational achievements
- 📜 **4 Certifications** - Professional certifications earned

Numbers count up from 0 when section enters viewport for engaging reveal! ⚡

### 🎯 Key Milestones
- **2014** - 🎮 Game Design Journey Begins (Bramson ORT)
- **2017** - 💼 First Professional Experience (St. John's & BNIA)
- **2018** - 📰 Digital Transformation Lead (Challenge Publisher Group)
- **2019** - 🎓 Associate Degree (CUNY BMCC)
- **2020** - 📊 Data Entry Specialist (B&A Appliances)
- **2021** - 💻 Software Engineering Intern (Unadat)
- **2023** - 🛍️ E-commerce Optimization (Tip Top Shoes)
- **2025** - 🚀 Data Analytics Developer (Morgan Stanley)

### 📱 Mobile Responsive
- Timeline moves to left side with all cards stacking vertically
- Maintains readability and visual hierarchy
- Stats grid adapts to 2-column layout
- Smooth animations preserved across devices

### 🎨 Technical Implementation
```javascript
// Timeline animation triggers on scroll
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            animateStats(); // Start counting animation
        }
    });
};
```

---

## 🐙 GitHub Activity Feed

Live integration with GitHub API showcasing your latest coding activity! 🚀

### 📊 Three Activity Cards

1. **Recent Commits** 💻
   - Latest commit messages from push events
   - Repository names with links
   - Time ago formatting ("2 days ago")
   - Truncated messages for clean display
   - Shows up to 5 most recent commits

2. **Recent Repositories** 📁
   - 5 most recently updated repos
   - Repo descriptions
   - Programming language indicators with color coding
   - Star counts
   - Direct links to GitHub repos
   - "Updated X time ago" timestamps

3. **GitHub Stats** 📈
   - Total public repositories
   - Follower count
   - Following count
   - Public gists
   - All stats displayed in gradient numbers

### 🎨 Language Colors
Repos display language indicators with authentic GitHub colors:
- 🟨 JavaScript: `#f1e05a`
- 🔵 Python: `#3572A5`
- 🟤 Java: `#b07219`
- 🟠 HTML: `#e34c26`
- 🟣 CSS: `#563d7c`
- And more!

### ⚡ Real-Time Data
- Fetches data on page load
- Uses GitHub REST API (no auth required for public data)
- Graceful error handling for rate limits
- Loading spinners while fetching
- Error messages if API fails

### 💡 Smart Features
- **Time Ago** - Converts timestamps to readable format (2 hours ago, 3 days ago)
- **Text Truncation** - Long commit messages shortened with ellipsis
- **Clickable Links** - Everything links back to GitHub
- **Responsive Grid** - Adapts from 3 columns to single column on mobile
- **Glass Cards** - Consistent design with rest of portfolio

### 🎯 API Integration
```javascript
async function fetchGitHubActivity() {
    const username = 'Jordan721';

    // Fetch user stats, repos, and events
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
    const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`);

    // Display all data with formatted output
}
```

---

## 🔲 Animated Grid Background

A sleek, interactive grid effect that responds to your mouse! 🌟

### 🎨 Visual Design
- **Grid Lines** - Subtle cyan grid lines that subtly breathe and move
- **Glowing Intersections** - Each intersection point pulses with a cyan-to-purple gradient
- **Wave Effect** - Gentle wave animation flows through the grid lines
- **Mouse Glow** - Grid brightens as your cursor moves near it

### ✨ Interactive Features
- **Mouse Tracking** - Grid responds to cursor position in real-time
- **Dynamic Brightness** - Intersections grow and glow brighter near the mouse
- **Pulse Animation** - Each point has a unique pulse timing for organic feel
- **Subtle Movement** - Grid slowly shifts position for living background effect

### 🎛️ User Control
- Toggle on/off via gamification panel (under "Animated Grid")
- Settings persist via localStorage
- Dynamic enable/disable without page reload
- Canvas element hidden when disabled (no performance impact)

### 🎯 Technical Details
```javascript
function createAnimatedGrid() {
    const canvas = document.createElement('canvas');
    canvas.id = 'gridCanvas';

    function drawGrid() {
        // Draw grid lines with distance-based opacity
        for (let x = offsetX % gridSize; x < width; x += gridSize) {
            const dist = Math.sqrt(distX * distX + distY * distY);
            let alpha = dist < glowRadius ? 0.1 + (1 - dist / glowRadius) * 0.4 : 0.1;
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
        }

        // Draw glowing intersection points
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize * 3);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.5})`);

        requestAnimationFrame(drawGrid);
    }
}
```

### 📱 Performance
- **Canvas-Based** - Uses HTML5 Canvas for efficient rendering
- **60fps Smooth** - requestAnimationFrame for optimal frame rate
- **Conditional Loading** - Only runs animation loop when enabled
- **Low CPU Usage** - Optimized drawing with minimal calculations
- **Responsive** - Automatically resizes with window

---

## 🎮 Gamification System

A fully customizable interactive experience system that lets users control exactly which effects they want! 🎯

### 🎨 Features Overview

#### 🔘 Gamification Toggle Button
- **Design**: Ultra-transparent glass morphism with cyan accents
- **Position**: Fixed bottom-right corner (desktop: 30px, mobile: 20px)
- **Effect**: Backdrop blur with layered shadows and glow
- **Hover**: Scales, rotates 15°, and intensifies glow
- **Mobile**: Smaller size (50px) but same premium feel

#### ⚙️ Settings Panel
Interactive control panel with individual toggles for each effect:

1. **✨ Cursor Trail** (Desktop Only)
   - Glowing cyan dots follow mouse movement
   - Max 15 dots with fade-out effect
   - Auto-cleanup and performance optimized
   - Hidden on mobile (not functional on touch devices)

2. **🎆 Floating Particles**
   - 30 animated particles floating upward
   - Random sizes, durations, and delays
   - Cyan glow with subtle opacity changes
   - Can be toggled on/off dynamically

3. **🎲 Card Tilt Effect**
   - 3D perspective tilt on glass cards
   - Follows mouse position on desktop
   - Smooth return animation on mouse leave
   - Disabled on mobile for performance

4. **💧 Click Ripples**
   - Material Design-style ripple on button clicks
   - Works on all buttons and interactive cards
   - Smooth scale animation with fade-out
   - Dynamic positioning from click location

5. **🔲 Animated Grid**
   - Interactive grid background with glowing intersections
   - Mouse-responsive brightness and glow effects
   - Pulsing points with cyan-purple gradient
   - Canvas-based for smooth 60fps performance
   - Toggle on/off dynamically

6. **🎨 Icon Color Change**
   - Section header icons change to random gradients on hover
   - 5 vibrant gradient options
   - Scale and rotation animation
   - Smooth color transitions

### 💾 Persistence with LocalStorage

All settings are automatically saved:
```javascript
localStorage.setItem('cursorTrail', gamificationState.cursorTrail);
localStorage.getItem('particles') !== 'false'; // Default: enabled
```

Settings persist across:
- Page refreshes
- Browser sessions
- Different tabs
- Return visits

### 📱 Mobile-Specific Adaptations

**Settings Panel on Mobile:**
- Cursor Trail option hidden (doesn't work on touch)
- Konami Code hint replaced with "View on desktop for more features"
- Panel positioned above toggle button
- Scrollable with custom cyan-themed scrollbar
- Full-width minus 40px padding

**Back-to-Top Button:**
- Only visible on mobile devices
- Positioned on **left side** (20px from left)
- Doesn't conflict with gamification toggle on right
- Glass morphism design matching site aesthetic

### 🎨 Enhanced Glass Cards

Feature cards (Games, Dev Showcase, Certifications) have ultra-premium glass effect:

**At Rest:**
- Background: `rgba(255, 255, 255, 0.02)` - nearly transparent
- Border: `rgba(255, 255, 255, 0.08)` - subtle outline
- Backdrop blur: 20px for frosted glass
- Inset highlight: Creates depth

**On Hover:**
- Background tints cyan: `rgba(6, 182, 212, 0.05)`
- Border brightens: `rgba(6, 182, 212, 0.4)`
- Multiple shadow layers with glow
- Lifts 8px with smooth transition
- Icon background becomes fully opaque

### 🚀 Performance Optimizations

- **Respect User Preferences**: Checks `prefers-reduced-motion`
- **Hardware Acceleration**: Uses transform/opacity for 60fps
- **Smart Cleanup**: Removes elements when disabled
- **Throttled Effects**: Cursor trail limits to 15 dots max
- **Conditional Execution**: Only runs when toggles are enabled

### 🎯 Technical Implementation

**State Management:**
```javascript
const gamificationState = {
    cursorTrail: localStorage.getItem('cursorTrail') !== 'false',
    particles: localStorage.getItem('particles') !== 'false',
    cardTilt: localStorage.getItem('cardTilt') !== 'false',
    ripple: localStorage.getItem('ripple') !== 'false',
    shapes3D: localStorage.getItem('shapes3D') === 'true', // Animated Grid
    iconColor: localStorage.getItem('iconColor') !== 'false'
};
```

**Toggle Functions:**
- Individual toggle functions for each effect
- Real-time enable/disable without page reload
- Cleanup functions remove DOM elements when disabled
- State synced to localStorage immediately

**Panel Interaction:**
- Click outside to close
- Smooth slide-in animation
- Custom toggle switches with gradient when active
- Icon-labeled options for clarity

### 🎨 Design Philosophy

**Transparent & Glass:**
- Toggle button uses glass morphism (not solid gradient)
- Feature cards super transparent for modern look
- Consistent backdrop blur throughout
- Layered shadows for depth

**User Control:**
- Every effect can be toggled independently
- No forced animations
- Settings persist across sessions
- Clear visual feedback

**Accessibility:**
- Respects `prefers-reduced-motion`
- Keyboard accessible (ESC to close panel)
- Clear labels and icons
- High contrast on hover states

---

## 📊 Work Experience Year Filter

A smart, responsive filtering system that adapts to your device! 🎯

### 🖥️ Desktop Experience
- 🔘 **Interactive Buttons** - Click any year (2017-2025) or "View All"
- ✨ **Active State** - Selected year highlights with gradient and glow
- 🎨 **Hover Effects** - Smooth transitions with cyan accent color
- ⚡ **Instant Filtering** - Timeline items show/hide instantly

### 📱 Mobile Experience
- 📋 **Clean Dropdown** - Single select menu replaces buttons
- 🎯 **Centered Layout** - Label and options centered for better mobile UX
- 🎨 **Matching Style** - Same glass morphism design as rest of site
- 💨 **Space Saving** - No button wrapping on small screens

### 🧠 Smart Multi-Year Handling
Positions spanning multiple years show up correctly across filters:

```html
<div class="timeline-item" data-year="2020" data-year-range="2020,2021,2022,2023,2024,2025">
    <!-- B&A Appliances: Jan 2020 - Mar 2025 -->
</div>
```

**How it works:**
- 📅 Filter by **2020**: Shows B&A Appliances ✅
- 📅 Filter by **2023**: Still shows B&A Appliances ✅
- 📅 Filter by **2018**: Hides B&A Appliances ❌
- 🌟 Filter by **View All**: Shows everything ✅

### 🎯 Implementation Details

**JavaScript Logic:**
```javascript
function filterExperienceByYear(year) {
    timelineItems.forEach(item => {
        const itemYear = item.getAttribute('data-year');
        const yearRange = item.getAttribute('data-year-range');

        if (year === 'all') {
            item.classList.remove('hidden');
        } else if (itemYear === year) {
            item.classList.remove('hidden');
        } else if (yearRange && yearRange.includes(year)) {
            item.classList.remove('hidden'); // Multi-year magic! ✨
        } else {
            item.classList.add('hidden');
        }
    });
}
```

**Responsive CSS:**
```css
/* Desktop: Show buttons */
.year-filter-buttons.desktop-only {
    display: flex;
}

/* Mobile: Show dropdown */
@media (max-width: 968px) {
    .year-filter-buttons.desktop-only {
        display: none;
    }
    .year-filter-dropdown.mobile-only {
        display: flex;
    }
}
```

### ✨ Why It's Awesome
- 🎯 **Context-Aware** - Different UI for different devices
- 🚀 **Performance** - Instant filtering with CSS classes
- 💡 **Intuitive** - Works exactly how you'd expect
- ♿ **Accessible** - Keyboard navigation on both platforms
- 🎨 **Consistent** - Matches overall design aesthetic

---

## ℹ️ Certification Info Modals

Detailed program and course information at your fingertips! 🎓

### 🎯 Overview
Each certification folder now has an interactive info button (ℹ️) that opens a comprehensive modal with detailed information about the program or course. Perfect for recruiters and hiring managers who want to understand the depth of your training!

### 🎓 Year Up United Info Modal

**Program Details:**
- 🚀 **Career Accelerator** - Intensive program partnering with 250+ leading corporations
- 💻 **App Dev Track Focus** - Java-centered curriculum with enterprise development
- 🛠️ **Technologies**: Java, JetBrains IDEs, SQL, Spring Boot, Java Libraries, Excel
- ✅ **10 Technical Skills**: Core Java, OOP, JDBC, Spring Boot, RESTful APIs, Testing, etc.
- 💼 **4 Professional Skills**: Business Writing, Public Speaking, Excel, Communication

**Key Learning Areas** (Interactive Cards):
1. **Java Ecosystem** 📚
   - Deep dive into Java libraries and internal functions
   - Effective usage in application development

2. **Database Integration** 🗄️
   - SQL interaction with Java applications
   - JDBC connections and database operations

3. **Spring Boot Development** 🌱
   - Web application and RESTful API development
   - Integrated database connectivity

4. **Enterprise Development** 🏢
   - Java's role in enterprise environments
   - Building scalable, maintainable applications

### 📊 Data Analytics Info Modal

**Course Details:**
- 📜 **Google Data Analytics Professional Certificate**
- 🎯 **Job-Ready Skills** - Practical data cleaning, analysis, and visualization
- 🛠️ **Technologies**: Spreadsheets, SQL, Python, Tableau, Jupyter Notebooks, NumPy, Pandas
- ✅ **9 Core Skills**: Data Cleaning, Analysis, Visualization, SQL, Python, etc.

**Progress Tracking:**
- 📈 **Visual Progress Bar** - Shows 37.5% completion (3 of 8 courses)
- ✅ **Completed Courses** (highlighted in cyan):
  1. Foundations: Data, Data, Everywhere
  2. Ask Questions to Make Data-Driven Decisions
  3. Prepare Data for Exploration
- ⭕ **Upcoming Courses** (5 remaining):
  - Process Data from Dirty to Clean
  - Analyze Data to Answer Questions
  - Share Data Through the Art of Visualization
  - Introduction to Data Analysis Using Python
  - Google Data Analytics Capstone

### 🎨 Visual Design

**Info Button:**
- 🔵 Circular cyan button in top-right corner of folder
- 💡 Subtle glow effect on hover
- 🎯 Positioned absolutely to not interfere with folder click
- ⚡ `event.stopPropagation()` prevents folder opening when clicking info

**Modal Layout:**
- 🎨 Glass morphism design matching portfolio aesthetic
- 🌈 Gradient icon backgrounds (rocket for Year Up, chart for Data Analytics)
- 📋 Organized sections with icons
- 🏷️ Technology badges with hover effects
- ✅ Checklist format for skills
- 📊 Progress visualization for Data Analytics

**Responsive Design:**
- 📱 Smaller modal on mobile (95% width)
- 📐 Single column layouts for skills and highlights
- 🔤 Reduced font sizes for readability
- 👆 Optimized touch targets

### 🛠️ Technical Implementation

**HTML Structure:**
```html
<div class="cert-folder-wrapper">
    <button class="cert-folder" onclick="openCertFolder('yearup')">
        <!-- Folder content -->
    </button>
    <div class="cert-info-btn" onclick="openYearUpInfoModal();" role="button">
        <i class="fas fa-info-circle"></i>
    </div>
</div>
```

**CSS Classes:**
```css
.course-info-modal        /* Main modal container */
.course-header           /* Title section with icon */
.course-section          /* Each content section */
.course-tools            /* Technology badge grid */
.tool-badge              /* Individual tech badges */
.course-skills-list      /* Skills checklist grid */
.learning-highlights     /* Learning areas grid */
.highlight-item          /* Individual highlight cards */
.course-progress         /* Progress bar container */
.course-module           /* Course module items */
.progress-fill           /* Animated progress bar */
```

**JavaScript Functions:**
```javascript
// Year Up Modal
function openYearUpInfoModal() {
    const modal = document.getElementById('yearUpInfoModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeYearUpInfoModal() {
    const modal = document.getElementById('yearUpInfoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Data Analytics Modal
function openCourseInfoModal() { /* ... */ }
function closeCourseInfoModal() { /* ... */ }
```

### 💡 Why This Feature Rocks

**For Recruiters:**
- 📋 Instant access to detailed curriculum information
- 🎯 Clear understanding of skills gained
- 📊 Visual progress tracking for ongoing courses
- 🔗 Direct links to official course pages

**For You:**
- 🎨 Professional presentation of credentials
- 📱 Works perfectly on mobile during interviews
- ✨ Engaging, interactive showcase
- 🚀 Demonstrates attention to detail and UX skills

**Design Philosophy:**
- 🎯 Information on demand (not overwhelming the main page)
- ⚡ Quick access without navigating away
- 🎨 Consistent with overall portfolio aesthetic
- 📱 Mobile-first responsive design

---

## 📁 Certificate Folder System

Your certs deserve their own filing cabinet! 🗄️ Click "View My Certifications" and you'll see gorgeous gradient folder cards for different categories. It's like a digital office but way cooler! 😎

### 🎨 The Folders
- 💜 **Year Up United** - That sweet purple gradient holds your bootcamp completion cert
- 💖 **Data Analytics** - Pink vibes for your 2 Google Data Analytics course certificates
- ✨ **Hover Magic** - Watch the folders lift and tilt when you hover! It's oddly satisfying 🤤

### 🎭 Folder Animations
The certification folders come alive with smooth, professional animations:

- 🌟 **Radial Glow Effect** - A cyan glow expands from the center on hover (300px radial gradient)
- 🔄 **3D Icon Rotation** - Folder icons scale up (1.1x) and rotate (10deg) with smooth transitions
- 🎨 **Color Transitions** - Titles shift to cyan-light, descriptions brighten on hover
- 📈 **Lift Animation** - Cards elevate with shadow (`translateY(-5px)`) for depth
- 🎯 **Click Feedback** - Active state plays a special "folder open" animation with scale & rotate
- 🔀 **View Transitions** - Smooth 300ms fade and scale animations when switching between folder/cert views
- ⚡ **Hardware Accelerated** - Uses transform & opacity for 60fps performance

### 🚀 How It Works
1. 👆 Click a folder card (they're basically begging to be clicked)
2. 🎠 Boom! The carousel opens with ONLY certs from that category
3. ⬅️➡️ Navigate through the certs with arrows/swipe (same smooth carousel action)
4. 🔙 Hit "Back to Categories" to return to folder view
5. 🔄 Pick another folder and keep exploring!

### 🧠 Smart Features
- 📊 Each folder shows how many certs it contains (because transparency matters)
- 🎯 Modal title updates to show which category you're viewing
- 🎨 Beautiful gradient backgrounds that match your site's aesthetic
- 📱 Fully responsive - works great on mobile too!
- 🌟 Folder icons do a little dance on hover (because why not?)

### 🖥️ Desktop (>768px)
- ⬅️➡️ Arrow buttons for navigation
- ⌨️ Keyboard controls (Arrow keys, Escape to close)
- 🖱️ Click outside to close
- 📄 Embedded PDF viewer + "Open in New Tab" button

### 📱 Mobile/Tablet (≤768px)
- ⬅️➡️ Visible navigation buttons (smaller size for mobile)
- ⌨️ Keyboard controls work on tablets
- 📄 PDF fallback message for devices that can't display PDFs
- ✨ Optimized touch targets

---

## ✨ Modern Design Features

Clean, professional animations and interactions that enhance the experience.

### 🎨 Visual Elements
- ✨ **Animated Name Letters** - Each letter in "Jordan Alexis" bounces and glows on hover
- 🌊 **Wave Emoji** - Interactive wave on hover
- 📋 **Glass Cards** - Modern glassmorphism effect throughout
- 🎪 **Smooth Transitions** - Hover effects on all interactive elements
- 💫 **Gradient Orbs** - Animated floating background gradients
- ⬆️ **Back to Top** - Mobile-only floating button

### 🎯 Interactive Features
- 📂 **Skill Categories** - Expandable/collapsible sections
- 🎠 **Certificate Carousel** - Smooth navigation with folder organization
- 📱 **Floating Navigation** - Fixed side navigation dots
- 🔗 **Social Sidebar** - Fixed social links with tooltips

### 🚀 Why It Works
- Professional & modern aesthetic
- GPU-accelerated animations
- Responsive across all devices
- Accessibility-focused design

---

## 💻 Technical Implementation

### 1. ✨ Interactive Name Letter Animations

Individual letter hover effects for the hero section name:

**HTML Structure:**
```html
<h1 class="hero-title fade-in-up">
    I'm <span class="gradient-text animated-name">
        <span class="letter">J</span><span class="letter">o</span><span class="letter">r</span><span class="letter">d</span><span class="letter">a</span><span class="letter">n</span><span class="letter space"> </span><span class="letter">A</span><span class="letter">l</span><span class="letter">e</span><span class="letter">x</span><span class="letter">i</span><span class="letter">s</span>
    </span>
</h1>
```

**CSS Animation:**
```css
.animated-name .letter {
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    cursor: pointer;
    background: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
}

.animated-name .letter:hover {
    transform: translateY(-20px) scale(1.2) rotate(5deg);
    filter: hue-rotate(180deg) brightness(1.5) drop-shadow(0 0 10px rgba(6, 182, 212, 0.8));
}
```

💡 **Key Features:**
- 🎯 **Individual Control** - Each letter is wrapped in a `<span>` for independent animation
- 🎨 **Gradient Inheritance** - Letters inherit the gradient from parent while maintaining transparency
- 🎪 **Bouncy Easing** - Custom cubic-bezier creates playful bounce effect
- 🌈 **Color Shift** - `hue-rotate(180deg)` cycles through rainbow colors
- ✨ **Glow Effect** - Cyan drop-shadow creates luminous hover state
- 📍 **Stays Elevated** - Letter remains transformed while hovering
- 🔄 **Smooth Return** - Transitions back naturally when hover ends

🎯 **Design Decision:** Used CSS-only solution (no JavaScript) for optimal performance. Each letter animates independently, creating an engaging, playful interaction that draws attention to the hero section.

### 2. 🎨 Glassmorphism Cards

Modern glass effect using CSS backdrop filters:

```css
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.glass-card:hover {
    border-color: rgba(6, 182, 212, 0.3);
    box-shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.2);
    transform: translateY(-4px);
}
```

💡 **Key insight:** Backdrop blur creates depth while maintaining readability.

### 2. ⌨️ Keyboard Navigation

```javascript
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certificatesModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeCertificatesModal();
    } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});
```

💡 **Key insight:** Always check if modal is active to avoid interfering with other interactions.

### 3. 📁 Certificate Carousel System

Dynamic slide management with category filtering:

```javascript
function openCertFolder(category) {
    currentCategory = category;
    currentSlide = 0;

    const folderView = document.getElementById('folderView');
    const certView = document.getElementById('certView');

    // Fade out folder view
    folderView.style.opacity = '0';
    folderView.style.transform = 'scale(0.95)';

    setTimeout(() => {
        folderView.style.display = 'none';
        certView.style.display = 'block';
        certView.style.opacity = '0';
        certView.style.transform = 'scale(0.95)';

        // Filter and display slides
        const categorySlides = document.querySelectorAll(`.${category}-cert`);
        categorySlides[currentSlide].classList.add('active');
        updateSlideIndicator(categorySlides.length);

        // Fade in cert view
        requestAnimationFrame(() => {
            certView.style.opacity = '1';
            certView.style.transform = 'scale(1)';
        });
    }, 300);
}

function changeSlide(direction) {
    const categorySlides = document.querySelectorAll(`.${currentCategory}-cert`);
    categorySlides[currentSlide].classList.remove('active');

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = categorySlides.length - 1;
    if (currentSlide >= categorySlides.length) currentSlide = 0;

    categorySlides[currentSlide].classList.add('active');
    updateSlideIndicator(categorySlides.length);
}
```

🎯 **Design decision:** Each cert has a category class (`yearup-cert`, `dataanalytics-cert`) for easy filtering. Smooth transitions use `requestAnimationFrame` for optimal timing.

### 4. 🎭 Folder Hover Animations

Multi-layered animation effects for engaging interactions:

```css
.cert-folder {
    position: relative;
    overflow: hidden;
    transition: all var(--transition-base);
}

/* Radial glow effect */
.cert-folder::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
}

.cert-folder:hover::before {
    width: 300px;
    height: 300px;
}

/* 3D icon animation */
.folder-icon {
    transition: transform 0.4s ease;
    position: relative;
    z-index: 1;
}

.cert-folder:hover .folder-icon {
    transform: scale(1.1) rotateY(10deg);
}

/* Click animation */
.cert-folder:active .folder-icon {
    animation: folderOpen 0.5s ease;
}

@keyframes folderOpen {
    0% { transform: scale(1) rotateY(0deg); }
    50% { transform: scale(1.15) rotateY(15deg) translateY(-5px); }
    100% { transform: scale(1) rotateY(0deg); }
}
```

💡 **Key insight:** Layered pseudo-element for glow effect keeps DOM clean. `z-index: 1` on content ensures it stays above the glow. Hardware-accelerated `transform` properties ensure 60fps animations.

### 5. 📱 Responsive Navigation Buttons

Visible on all devices with adjusted sizing:

```css
.carousel-btn {
    background: rgba(15, 23, 42, 0.9);
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    backdrop-filter: blur(10px);
}

@media (max-width: 968px) {
    .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 0.875rem;
    }

    .prev-btn { left: 5px; }
    .next-btn { right: 5px; }
}
```

🎯 **Design decision:** Buttons stay visible on mobile but smaller. Dark background ensures visibility on white PDFs.

---

## 🐛 Challenges & Solutions

### Issue #1: 🔘 Navigation Buttons at Screen Edge
**Problem:** Carousel buttons positioned outside modal (`left: -60px`), making them hard to see.

**Solution:**
- Moved buttons inside modal: `left: 10px` and `right: 10px`
- Added dark background with cyan border for visibility
- Smaller sizing on mobile (`5px` from edges)

```css
.carousel-btn {
    background: rgba(15, 23, 42, 0.9);
    border: 2px solid var(--color-primary);
    backdrop-filter: blur(10px);
}

.prev-btn { left: 10px; }
.next-btn { right: 10px; }
```

### Issue #2: 📱 No Mobile Navigation
**Problem:** Buttons were hidden on mobile, making it impossible to view multiple certificates.

**Solution:** Keep buttons visible but optimize for mobile:

```css
@media (max-width: 968px) {
    .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 0.875rem;
    }
}
```

### Issue #3: 👁️ Low Visibility on White Background
**Problem:** Transparent buttons hard to see over white PDF backgrounds.

**Solution:**
- Solid dark background: `rgba(15, 23, 42, 0.9)`
- Bright cyan border and icon color
- Shadow for depth: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3)`
- Hover state with glow effect

```css
.carousel-btn:hover {
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
    transform: translateY(-50%) scale(1.1);
}
```

### Issue #4: 🎯 Multi-Year Work Experience Filtering
**Problem:** Positions spanning multiple years (like B&A Appliances: 2020-2025) would only show when filtering by their start year, making it confusing when users filtered by intermediate years.

**Solution:**
- Added `data-year-range` attribute to track all years a position spans
- Modified filter logic to check both `data-year` and `data-year-range`
- Now positions appear when filtering by ANY year within their duration

```javascript
if (yearRange && yearRange.includes(year)) {
    item.classList.remove('hidden'); // Multi-year magic! ✨
}
```

### Issue #5: 📱 Year Filter Button Wrapping on Mobile
**Problem:** Year filter buttons (2017-2025 + "View All") wrapped awkwardly on mobile screens, creating a cluttered UI with multiple rows.

**Solution:**
- Created two separate filter UIs: buttons for desktop, dropdown for mobile
- Used media queries to show/hide based on screen size
- Centered dropdown layout for better mobile UX

```css
@media (max-width: 968px) {
    .year-filter-buttons.desktop-only { display: none; }
    .year-filter-dropdown.mobile-only { display: flex; }
}
```

### Issue #6: ✨ Name Animation Performance with Gradient Text
**Problem:** Animating individual letters while maintaining smooth gradient text effect required careful CSS architecture to avoid flickering or gradient breaks.

**Solution:**
- Used `background-clip: text` inheritance from parent gradient
- Each letter maintains transparency with `-webkit-text-fill-color: transparent`
- Applied `display: inline-block` to allow transforms without breaking text flow
- Used hardware-accelerated properties (`transform`, not `margin/position`) for 60fps performance

```css
.animated-name .letter {
    background: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Issue #7: 🎭 Smooth Folder-to-Carousel Transitions
**Problem:** Instant view switching between folder grid and certificate carousel felt jarring and unprofessional.

**Solution:**
- Implemented staged animation sequence using `setTimeout` and `requestAnimationFrame`
- Fade-out current view → Hide → Show next view → Fade-in
- Used scale transforms (`scale(0.95)` to `scale(1)`) for depth perception
- 300ms timing creates smooth, premium feel

```javascript
setTimeout(() => {
    requestAnimationFrame(() => {
        certView.style.opacity = '1';
        certView.style.transform = 'scale(1)';
    });
}, 300);
```

---

## 🎨 UX Improvements

### Visual Polish
- 🌊 **Interactive** - Wave emoji on hover
- 💎 **Glass Cards** - Modern glassmorphism throughout
- 🎨 **Gradient Orbs** - Animated floating backgrounds
- 📂 **Certificate Folders** - Organized navigation system
- ⬆️ **Back to Top** - Mobile-only floating button

### Design Philosophy
- 🎯 **Professional** - Clean, modern aesthetic
- ⚡ **Performant** - Optimized animations and transitions
- 🤫 **Subtle** - Enhances without overwhelming
- ♿ **Accessible** - Keyboard navigation and semantic HTML

### Responsive Excellence
- 📐 Adapts seamlessly to any screen size
- 📱 Touch-optimized for mobile devices
- 🖥️ Desktop-enhanced with floating navigation
- 🎯 Context-aware UI elements

---

## 🛠️ Technologies

- 📝 **HTML5** - Semantic markup
- 🎨 **CSS3** - Custom design with CSS variables, glassmorphism, animations
- ⚡ **JavaScript (ES6)** - Vanilla JS for interactivity
- 🎯 **Font Awesome** - Icon library
- ✨ **Modern CSS** - Grid, Flexbox, backdrop-filter, transforms

---

## 📁 Project Structure

```
Jordan_Alexis/
├── index.html              # Main portfolio page
├── main.css                # Custom styles + carousel responsive design
├── script.js               # Carousel logic & event handlers
├── Certifications/         # PDF certificates
│   ├── Year_Up_United_LTCA_Certificate.pdf
│   ├── Foundations_Data_Data_Everywhere.pdf
│   └── Ask_Questions_to_Make_Data_Driven_Decisions_Certification.pdf
├── Trail_#/                  # Older versions of the website
└── ReadMe.md              # Project documentation
```

---

## 🎮 Usage

### 🖥️ Desktop
- ⬅️➡️ Arrow keys to navigate
- 🖱️ Click side buttons
- ⎋ Escape to close

### 📱 Mobile
- ⬅️➡️ Tap arrow buttons to navigate
- ❌ Tap X to close
- ⬆️ Use "Back to Top" button for quick scrolling

---

## 🚀 Future Plans

Always evolving! More features and improvements coming based on new trends and ideas. Stay tuned! ✨

---

## 📧 Connect With Me

- 💼 [LinkedIn](https://www.linkedin.com/in/jordan-alexis/)
- 🐙 [GitHub](https://github.com/Jordan721)
- 🌳 [Linktree](https://linktr.ee/Jordan_Alexis_)

---

**Last Updated:** February 12, 2026 📅

Made with 💻 and 🍫 by Jordan Alexis

P.S. - Click those folders, they're fun! 📁✨
P.P.S. - Don't forget to check out the gamification toggle! 🎮
P.P.P.S. - Try the Animated Grid toggle for a sleek tech vibe! 🔲
