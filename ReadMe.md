# 🎨 Jordan Alexis' Portfolio Website

Welcome to my portfolio website repository! 👋 This website has been evolving over the years, showcasing my journey as a developer. You can find older versions in the "Trail" folder, documenting the progression of my work.

## 📅 Recent Updates

### December 16, 2025
Finally decided to create a proper README after years of maintaining this website! Also implemented a certificate carousel feature with some interesting technical challenges along the way.

---

## 🎠 Certificate Carousel Feature

### Overview
Built a professional carousel modal to showcase my certifications from Year Up United and Google Data Analytics courses. The carousel adapts to different devices with responsive design and multiple navigation methods.

### 🎯 Key Features

#### Desktop Experience (>768px)
- ⬅️ **Left/Right arrow buttons** for navigation
- ⌨️ **Keyboard controls**: Arrow keys to navigate, Escape to close
- 🖱️ Click outside modal to close
- Embedded PDF viewer with "Open in New Tab" option

#### Mobile/Tablet Experience (≤768px)
- 👆 **Swipe gestures** (left/right) to navigate between certificates
- 📱 Buttons hidden for cleaner interface
- 💡 Helpful hint text: "← Swipe to navigate →"
- Optimized touch targets and spacing

---

## 💻 Interesting Code Snippets

### 1. Touch Swipe Detection with Direction Filtering

One of the challenges was ensuring swipes only triggered horizontal navigation and didn't interfere with vertical scrolling:

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

**Why this matters:** The `yDiff` comparison prevents the carousel from hijacking vertical scrolling, ensuring users can still scroll the page naturally.

### 2. Keyboard Navigation with Modal State Check

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

**Key insight:** Always check if the modal is open before responding to keyboard events to avoid interfering with other page interactions.

### 3. Responsive CSS - Hiding Buttons on Mobile

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

**Design decision:** Rather than cramming small buttons on mobile screens, we hide them and rely on intuitive swipe gestures with a helpful hint.

---

## 🐛 Challenges & Solutions

### Issue #1: Navigation Buttons Not Working on Mobile
**Problem:** Initially, the onclick handlers weren't responding to touch events on mobile devices.

**Solution:**
- Added both `onclick` and `ontouchend` event handlers
- Used `return false;` and `event.preventDefault()` to prevent default mobile behavior
- Added CSS `touch-action: manipulation` for faster tap response

```html
<button onclick="changeSlide(-1); return false;"
        ontouchend="changeSlide(-1); event.preventDefault();"
        type="button">
    &#10094;
</button>
```

### Issue #2: Duplicate Event Listeners
**Problem:** Every time the carousel opened, new event listeners were being added, causing multiple navigation triggers.

**Solution:** Implemented flag variables to ensure listeners are only added once:

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

### Issue #3: Close Button Hidden Behind Browser UI
**Problem:** The modal's close button was partially hidden behind the browser's bookmark bar on some screens.

**Solution:**
- Reduced modal max-height from 100vh to 85vh
- Added 40px top margin to push content down
- Adjusted overall modal size for better visibility

```css
.carousel-modal-content {
    max-width: 850px;
    max-height: 85vh;
    margin: auto;
    margin-top: 40px;
}
```

### Issue #4: Slides Not Displaying Initially
**Problem:** When the carousel opened, sometimes no slides would be visible.

**Solution:** Added a 100ms delay and null checks to ensure DOM is ready:

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

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with W3.CSS framework
- **CSS3** - Custom responsive design with media queries
- **JavaScript (ES5)** - Vanilla JS for carousel functionality
- **Font Awesome** - Icons for UI elements
- **W3.CSS** - Base styling framework

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
├── Trail/                  # Older versions of the website
└── ReadMe.md              # You are here! 📍
```

---


### Desktop:
- Use arrow keys ⬅️ ➡️ to navigate
- Click the side buttons
- Press Escape to close

### Mobile:
- Swipe left/right to navigate 👆
- Tap the X to close

---

## 📝 Future Improvements

Who knows what's next? 🤷‍♂️ Knowing me, I'll probably redesign the whole site again or add some cool new features. Stay tuned!


---

## 📧 Contact

Feel free to reach out or connect with me:
- 💼 [LinkedIn](https://www.linkedin.com/in/jordan-alexis/)
- 🐙 [GitHub](https://github.com/Jordan721)
- 🌳 [Linktree](https://linktr.ee/Jordan_Alexis_)

---

**Last Updated:** December 16, 2025

Made with ❤️ and lots of 💻 by Jordan Alexis
