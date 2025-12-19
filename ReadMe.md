# 🎨 Jordan Alexis' Portfolio Website

A responsive portfolio website showcasing my journey as a developer. Previous versions live in the Trail folder. 📂

## 📅 Recent Updates

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
- 👆 Swipe left/right to navigate
- 🎯 Buttons hidden for cleaner look
- 💡 Hint text: "← Swipe to navigate →"
- ✨ Optimized touch targets

---

## ✨ Animation Enhancements

Lightweight CSS animations that bring the site to life without overwhelming content.

### 🎬 Header Animations
- ⌨️ **Typing Effect** - Name appears typewriter-style (2s, 13 steps)
- 💫 **Cursor Blink** - Blinks 8 times then fades out
- 👋 **Hello Fade-In** - Greeting appears after name animation
- 🌊 **Wave Emoji** - Waves on hover

### 🎯 Content Animations
- 📋 **Card Fade-Ins** - Employment/skills sections animate in with staggered timing
- 🎪 **Social Icons Bounce** - Icons bounce in with 0.1s delays
- 🎪 **Carousel Title Bounce** - Subtle bounce on hover
- ⬆️ **Arrow Bounce** - "Back to Top" bounces on hover

### 🚀 Why It Works
- Subtle & non-intrusive
- GPU-accelerated (CSS transforms + opacity)
- Progressive disclosure through timing
- No motion sickness risks

---

## 💻 Technical Implementation

### 1. ⌨️ CSS Typing Animation

Typewriter effect with coordinated cursor blinking:

```css
/* Typing Animation for Name */
.typing-name {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing-name 2s steps(13) 0s 1 normal both;
}

.typing-name::after {
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: blink 0.75s step-end 2s 8 normal,
               cursorFadeOut 0.3s ease-in 8s forwards;
}

@keyframes typing-name {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes cursorFadeOut {
    to { opacity: 0; }
}
```

💡 **Key insight:** `steps(13)` matches "Jordan Alexis" character count. Cursor blinks 8 times over 6s, then fades out.

### 2. 👋 Interactive Wave Emoji

```css
.wave-emoji {
    display: inline-block;
    animation-play-state: paused;
}

.wave-emoji:hover {
    animation: wave 0.6s ease-in-out;
}

@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10%, 30%, 50%, 70%, 90% { transform: rotate(14deg); }
    20%, 40%, 60%, 80% { transform: rotate(-8deg); }
}
```

🎯 **Design decision:** Hover-only animation avoids distraction. Uses `transform: rotate()` for smooth GPU acceleration.

### 3. 👆 Touch Swipe Detection

Horizontal swipes trigger navigation without hijacking vertical scrolling:

```javascript
// Add touch swipe support for mobile
function addTouchSupport() {
  var startX = 0, endX = 0;
  var startY = 0, endY = 0;
  var carouselContainer = document.querySelector('.carousel-slides');

  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    carouselContainer.addEventListener('touchmove', function(e) {
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    }, { passive: true });

    carouselContainer.addEventListener('touchend', function() {
      var threshold = 50; // minimum swipe distance
      var xDiff = startX - endX;
      var yDiff = Math.abs(startY - endY);

      // Only trigger if horizontal swipe is larger than vertical
      if (Math.abs(xDiff) > threshold && Math.abs(xDiff) > yDiff) {
        if (xDiff > 0) {
          changeSlide(1);  // Swiped left = next
        } else {
          changeSlide(-1); // Swiped right = previous
        }
      }
    });
  }
}
```

💡 **Key insight:** `yDiff` comparison prevents carousel from hijacking vertical scrolling.

### 4. ⌨️ Keyboard Navigation

```javascript
// Add keyboard support for desktop
function addKeyboardSupport() {
  document.addEventListener('keydown', function(e) {
    var modal = document.getElementById('certificatesModal');

    // Only respond to keys if modal is open
    if (modal && modal.style.display === 'block') {
      if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        changeSlide(-1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
        changeSlide(1);
        e.preventDefault();
      } else if (e.key === 'Escape' || e.keyCode === 27) {
        closeCertificatesCarousel();
        e.preventDefault();
      }
    }
  });
}
```

💡 **Key insight:** Always check if modal is open to avoid interfering with other page interactions.

### 6. 📁 Folder Navigation System

Dynamic filtering shows only relevant certificates per category:

```javascript
function openFolder(folderName) {
  currentFolder = folderName;

  // Update modal title based on folder
  if (folderName === 'yearup') {
    modalTitle.innerHTML = 'Year Up United Certifications';
  } else if (folderName === 'dataanalytics') {
    modalTitle.innerHTML = 'Data Analytics Certifications';
  }

  // Filter slides by folder
  filterSlidesByFolder(folderName);
  showSlide();
}

function filterSlidesByFolder(folderName) {
  var allSlides = document.getElementsByClassName('certificate-slide');

  // Hide all slides first
  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = 'none';
    allSlides[i].classList.remove('active-folder');
  }

  // Show only slides from selected folder
  var folderClass = folderName + '-cert';
  var folderSlides = document.getElementsByClassName(folderClass);

  for (var i = 0; i < folderSlides.length; i++) {
    folderSlides[i].classList.add('active-folder');
  }
}
```

🎯 **Design decision:** Each cert has a class like `yearup-cert` or `dataanalytics-cert`. The `active-folder` class tracks which slides to display, making it super easy to add more folders!

### 7. 🎨 Folder Hover Effects

Smooth CSS animations make folders feel interactive:

```css
.cert-folder {
    transition: all 0.3s ease;
}

.cert-folder:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.35);
}

.cert-folder:hover i {
    transform: scale(1.1) rotateZ(-5deg);
}
```

✨ **The magic:** Folders lift up (`translateY`), grow slightly (`scale`), get a bigger shadow, AND the folder icon tilts a bit. It's like they're jumping into your hand! 🤲

### 5. 📱 Responsive CSS

```css
/* Carousel Mobile Responsive Styles */
@media screen and (max-width: 768px) {
    /* Hide navigation buttons on tablets and mobile - use swipe instead */
    .carousel-btn-prev,
    .carousel-btn-next {
        display: none !important;
    }

    /* Add swipe hint text for mobile users */
    .carousel-slides::after {
        content: "← Swipe to navigate →";
        display: block;
        text-align: center;
        color: #999;
        font-size: 12px;
        margin-top: 10px;
        font-style: italic;
    }
}
```

🎯 **Design decision:** Swipe gestures > tiny buttons on mobile. Cleaner + contextual hints.

---

## 🐛 Challenges & Solutions

### Issue #1: 📱 Touch Events Not Working
**Problem:** Click handlers ignored on mobile.

**Solution:**
- Added `onclick` + `ontouchend` event handlers
- Prevented default behavior (`return false;` + `event.preventDefault()`)
- Added CSS `touch-action: manipulation` for faster response

```html
<button onclick="changeSlide(-1); return false;"
        ontouchend="changeSlide(-1); event.preventDefault();"
        type="button">
    &#10094;
</button>
```

### Issue #2: 🔁 Duplicate Event Listeners
**Problem:** Multiple listeners added every time carousel opened = chaos.

**Solution:** Flag variables ensure one-time setup:

```javascript
var touchListenersAdded = false;
var keyboardListenerAdded = false;

function openCertificatesCarousel() {
  // ... modal opening code ...

  if (!touchListenersAdded) {
    addTouchSupport();
    touchListenersAdded = true;
  }
  if (!keyboardListenerAdded) {
    addKeyboardSupport();
    keyboardListenerAdded = true;
  }
}
```

### Issue #3: ❌ Hidden Close Button
**Problem:** Close button hidden behind browser bookmark bar.

**Solution:**
- Reduced max-height: 100vh → 85vh
- Added 40px top margin
- Better visibility across devices

```css
.carousel-modal-content {
    max-width: 850px;
    max-height: 85vh;
    margin: auto;
    margin-top: 40px;
}
```

### Issue #4: 🖼️ Invisible Slides
**Problem:** Slides sometimes didn't show when carousel opened.

**Solution:** 100ms delay + null checks = DOM ready:

```javascript
function openCertificatesCarousel() {
  var modal = document.getElementById('certificatesModal');
  if (modal) {
    modal.style.display = 'block';
    setTimeout(function() {
      showSlide(); // Ensure DOM is ready
    }, 100);
  }
}

function showSlide() {
  var slides = document.getElementsByClassName('certificate-slide');

  // Safety check
  if (!slides || slides.length === 0) {
    return;
  }
  // ... rest of the code ...
}
```

---

## 🎨 UX Improvements

### Visual Polish
- ⌨️ **Header** - Typing animation + cursor blink
- 👋 **Interactive** - Wave emoji on hover
- 📝 **Modal** - "Hello" → "Resources & Portfolio"
- 👣 **Footer** - "Welcome to the Footer Enjoy Your Stay 👋🏾"
- ⬆️ **Button** - "To the top" → "Back to Top"

### Animation Philosophy
- 🎯 **Purposeful** - Each serves a UX goal
- ⚡ **Performant** - CSS transforms + opacity = 60fps
- 🤫 **Subtle** - Enhances, doesn't distract
- ♿ **Accessible** - No motion sickness triggers

### Responsive Magic
- 📐 Adapts to viewport size
- 📱 Touch-optimized for mobile
- ⏱️ Staggered timing for natural flow

---

## 🛠️ Technologies

- 📝 **HTML5** - Semantic markup + W3.CSS
- 🎨 **CSS3** - Responsive design + keyframe animations
- ⚡ **JavaScript (ES5)** - Vanilla JS carousel + events
- 🎯 **Font Awesome** - UI icons
- 🎭 **W3.CSS** - Base framework
- ✨ **CSS Animations** - Typing, transforms, fade-ins

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
- 👆 Swipe left/right
- ❌ Tap X to close

---

## 🚀 Future Plans

Always evolving! More features and improvements coming based on new trends and ideas. Stay tuned! ✨

---

## 📧 Connect With Me

- 💼 [LinkedIn](https://www.linkedin.com/in/jordan-alexis/)
- 🐙 [GitHub](https://github.com/Jordan721)
- 🌳 [Linktree](https://linktr.ee/Jordan_Alexis_)

---

**Last Updated:** December 19, 2025 📅

Made with 💻 and ☕ by Jordan Alexis

P.S. - Click those folders, they're fun! 📁✨
