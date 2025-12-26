# 🎨 Jordan Alexis' Portfolio Website

A sleek, modern portfolio website showcasing my journey as a developer. Built from scratch with a complete redesign - way different from Trail_7! 🚀✨

Previous versions live in the Trail folder. 📂

## 📅 Recent Updates

### December 26, 2025 🎨
Complete redesign from the ground up! The entire website has been rebuilt with a modern, professional look - totally different from the old Trail_7 version. New animations, better layouts, improved navigation, and way cleaner design! 🚀✨

### December 19, 2025 📁
Added folder-based navigation system to organize certifications by category! Now you can browse Year Up United and Data Analytics certs separately with a slick folder interface that's fun to click! 🎯

### December 17, 2025 ✨
Added CSS animations (typing effects, wave emoji, card fade-ins), improved footer messaging, and refined modal styling.

### December 16, 2025 🎠
Implemented interactive certificate carousel with responsive design and multiple navigation methods.

---

## 📁 Certificate Folder System

Your certs deserve their own filing cabinet! 🗄️ Click "View My Certifications" and you'll see gorgeous gradient folder cards for different categories. It's like a digital office but way cooler! 😎

### 🎨 The Folders
- 💜 **Year Up United** - That sweet purple gradient holds your bootcamp completion cert
- 💖 **Data Analytics** - Pink vibes for your 2 Google Data Analytics course certificates
- ✨ **Hover Magic** - Watch the folders lift and tilt when you hover! It's oddly satisfying 🤤

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

    // Show cert view
    document.getElementById('folderView').style.display = 'none';
    document.getElementById('certView').style.display = 'block';

    // Filter and display slides
    const categorySlides = document.querySelectorAll(`.${category}-cert`);
    categorySlides[currentSlide].classList.add('active');
    updateSlideIndicator(categorySlides.length);
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

🎯 **Design decision:** Each cert has a category class (`yearup-cert`, `dataanalytics-cert`) for easy filtering.

### 4. 📱 Responsive Navigation Buttons

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

**Last Updated:** December 26, 2025 📅

Made with 💻 and ☕ by Jordan Alexis

P.S. - Click those folders, they're fun! 📁✨
