# 🎨 Jordan Alexis' Portfolio Website

A sleek, modern portfolio website showcasing my journey as a developer. Built from scratch with a complete redesign - way different from Trail_7! 🚀✨

Previous versions live in the Trail folder. 📂

## 📅 Recent Updates

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

### 1. 🎨 Glassmorphism Cards

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

**Last Updated:** December 28, 2025 📅

Made with 💻 and ☕ by Jordan Alexis

P.S. - Click those folders, they're fun! 📁✨
