// Toggle between hiding and showing blog replies/comments
document.getElementById("myBtn").click();
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

// Certificates Carousel functionality
var currentSlideIndex = 1;
var touchListenersAdded = false;
var keyboardListenerAdded = false;

function openCertificatesCarousel() {
  currentSlideIndex = 1; // Reset to first slide
  var modal = document.getElementById('certificatesModal');
  if (modal) {
    modal.style.display = 'block';
    // Small delay to ensure DOM is ready
    setTimeout(function() {
      showSlide();
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
    }, 100);
  }
}

function closeCertificatesCarousel() {
  var modal = document.getElementById('certificatesModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function changeSlide(n) {
  currentSlideIndex = currentSlideIndex + n;
  showSlide();
}

function showSlide() {
  var i;
  var slides = document.getElementsByClassName('certificate-slide');
  var indicator = document.getElementById('slideIndicator');

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

  // Hide all slides
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

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById('certificatesModal');
  if (event.target == modal) {
    closeCertificatesCarousel();
  }
}