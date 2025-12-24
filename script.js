// Toggle between hiding and showing blog replies/comments
var myBtn = document.getElementById("myBtn");
if (myBtn) {
  myBtn.click();
}
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}

// Certificates Carousel functionality with folder navigation
var currentSlideIndex = 1;
var touchListenersAdded = false;
var keyboardListenerAdded = false;
var currentFolder = null;

function openCertificatesCarousel() {
  var modal = document.getElementById('certificatesModal');
  if (modal) {
    modal.style.display = 'block';
    // Show folder view by default
    showFolderView();

    // Add touch event listeners for mobile swipe support (only once)
    if (!touchListenersAdded) {
      addTouchSupport();
      touchListenersAdded = true;
    }
    // Add keyboard event listeners for desktop (only once)
    if (!keyboardListenerAdded) {
      addKeyboardSupport();
      keyboardListenerAdded = true;
    }
  }
}

function closeCertificatesCarousel() {
  var modal = document.getElementById('certificatesModal');
  if (modal) {
    modal.style.display = 'none';
    // Reset to folder view when closing
    showFolderView();
  }
}

function showFolderView() {
  var folderView = document.getElementById('folderView');
  var carouselView = document.getElementById('carouselView');
  var modalTitle = document.getElementById('modalTitle');

  if (folderView) folderView.style.display = 'block';
  if (carouselView) carouselView.style.display = 'none';
  if (modalTitle) modalTitle.innerHTML = 'My Certifications';
  currentFolder = null;
}

function openFolder(folderName) {
  currentFolder = folderName;
  var folderView = document.getElementById('folderView');
  var carouselView = document.getElementById('carouselView');
  var modalTitle = document.getElementById('modalTitle');

  // Hide folder view, show carousel
  if (folderView) folderView.style.display = 'none';
  if (carouselView) carouselView.style.display = 'block';

  // Update title based on folder
  if (modalTitle) {
    if (folderName === 'yearup') {
      modalTitle.innerHTML = 'Year Up United Certifications';
    } else if (folderName === 'dataanalytics') {
      modalTitle.innerHTML = 'Data Analytics Certifications';
    }
  }

  // Reset to first slide of this folder
  currentSlideIndex = 1;
  filterSlidesByFolder(folderName);
  showSlide();
}

function backToFolders() {
  showFolderView();
}

function filterSlidesByFolder(folderName) {
  var allSlides = document.getElementsByClassName('certificate-slide');

  // Hide all slides first
  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = 'none';
    allSlides[i].classList.remove('active-folder');
  }

  // Show only slides from the selected folder
  var folderClass = folderName + '-cert';
  var folderSlides = document.getElementsByClassName(folderClass);

  for (var i = 0; i < folderSlides.length; i++) {
    folderSlides[i].classList.add('active-folder');
  }
}

function changeSlide(n) {
  currentSlideIndex = currentSlideIndex + n;
  showSlide();
}

function showSlide() {
  var i;
  var slides;
  var indicator = document.getElementById('slideIndicator');

  // Get only the slides from the active folder
  if (currentFolder) {
    slides = document.getElementsByClassName('active-folder');
  } else {
    slides = document.getElementsByClassName('certificate-slide');
  }

  if (!slides || slides.length === 0) {
    return;
  }

  // Wrap around
  if (currentSlideIndex > slides.length) {
    currentSlideIndex = 1;
  }
  if (currentSlideIndex < 1) {
    currentSlideIndex = slides.length;
  }

  // Hide all slides from the active folder
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Show current slide
  slides[currentSlideIndex - 1].style.display = 'block';

  // Update indicator
  if (indicator) {
    indicator.innerHTML = currentSlideIndex + ' / ' + slides.length;
  }
}

// Add touch swipe support for mobile
function addTouchSupport() {
  var startX = 0;
  var endX = 0;
  var startY = 0;
  var endY = 0;
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
          // Swiped left, go to next
          changeSlide(1);
        } else {
          // Swiped right, go to previous
          changeSlide(-1);
        }
      }
    });
  }
}

// Add keyboard support for desktop
function addKeyboardSupport() {
  document.addEventListener('keydown', function(e) {
    var modal = document.getElementById('certificatesModal');
    // Only respond to keys if modal is open
    if (modal && modal.style.display === 'block') {
      if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        // Left arrow - previous slide
        changeSlide(-1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
        // Right arrow - next slide
        changeSlide(1);
        e.preventDefault();
      } else if (e.key === 'Escape' || e.keyCode === 27) {
        // Escape key - close modal
        closeCertificatesCarousel();
        e.preventDefault();
      }
    }
  });
}

// Skills Category Dropdown Toggle
function toggleSkillCategory(headerElement) {
  var skillCategory = headerElement.parentElement;
  var content = skillCategory.querySelector('.skill-category-content');
  var arrow = headerElement.querySelector('.skill-dropdown-arrow');

  // Toggle the active class
  skillCategory.classList.toggle('active');

  // Animate the arrow
  if (skillCategory.classList.contains('active')) {
    arrow.style.transform = 'rotate(180deg)';
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    arrow.style.transform = 'rotate(0deg)';
    content.style.maxHeight = '0';
  }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById('certificatesModal');
  if (event.target == modal) {
    closeCertificatesCarousel();
  }

  var resumeModal = document.getElementById('resumeModal');
  if (event.target == resumeModal) {
    closeResumeViewer();
  }
}

// Resume Viewer functionality
function openResumeViewer() {
  var modal = document.getElementById('resumeModal');
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeResumeViewer() {
  var modal = document.getElementById('resumeModal');
  if (modal) {
    modal.style.display = 'none';
  }
}



// Scroll Progress Indicator
function updateScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressBar = document.querySelector('.progress-indicator');
  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }
}

// Intersection Observer for Fade-in Animations
function initScrollAnimations() {
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in-up elements
  var fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(function(element) {
    // Check if element is already in viewport on page load
    var rect = element.getBoundingClientRect();
    var isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInViewport) {
      element.classList.add('visible');
    }
    observer.observe(element);
  });

  // Observe skill items
  var skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(function(item) {
    // Check if element is already in viewport on page load
    var rect = item.getBoundingClientRect();
    var isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInViewport) {
      item.classList.add('visible');
    }
    observer.observe(item);
  });
}

// Animate Skill Bars
function animateSkillBars() {
  var skillBars = document.querySelectorAll('.skill-bar-fill');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        var percentage = bar.getAttribute('data-percentage');
        if (percentage) {
          setTimeout(function() {
            bar.style.width = percentage + '%';
          }, 200);
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(function(bar) {
    observer.observe(bar);
  });
}

// Floating Navigation Active State
function updateFloatingNav() {
  var sections = document.querySelectorAll('[id]');
  var navItems = document.querySelectorAll('.floating-nav-item');

  if (navItems.length === 0) return; // Exit if no floating nav

  var scrollPosition = window.scrollY + 200;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navItems.forEach(function(item) {
        item.classList.remove('active');
        var href = item.getAttribute('href');
        if (href === '#' + sectionId) {
          item.classList.add('active');
        }
      });
    }
  });
}


// Initialize all enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create progress indicator
  var progressBar = document.createElement('div');
  progressBar.className = 'progress-indicator';
  document.body.appendChild(progressBar);

  // Initialize animations
  initScrollAnimations();
  animateSkillBars();

  // Add scroll event listeners
  window.addEventListener('scroll', function() {
    updateScrollProgress();
    updateFloatingNav();
  });

  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add console message
  console.log('%c👋 Welcome to Jordan Alexis Portfolio!', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
  console.log('%c✨ Enhanced with modern animations and glassmorphism', 'color: #14b8a6; font-size: 14px;');
});