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

function openCertificatesCarousel() {
  currentSlideIndex = 1; // Reset to first slide
  document.getElementById('certificatesModal').style.display = 'block';
  showSlide();

  // Add touch event listeners for mobile swipe support
  addTouchSupport();
}

function closeCertificatesCarousel() {
  document.getElementById('certificatesModal').style.display = 'none';
}

function changeSlide(n) {
  currentSlideIndex = currentSlideIndex + n;
  showSlide();
}

function showSlide() {
  var i;
  var slides = document.getElementsByClassName('certificate-slide');
  var indicator = document.getElementById('slideIndicator');

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
  indicator.innerHTML = currentSlideIndex + ' / ' + slides.length;
}

// Add touch swipe support for mobile
function addTouchSupport() {
  var startX = 0;
  var endX = 0;
  var carouselContainer = document.querySelector('.carousel-slides');

  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    }, { passive: true });

    carouselContainer.addEventListener('touchmove', function(e) {
      endX = e.touches[0].clientX;
    }, { passive: true });

    carouselContainer.addEventListener('touchend', function() {
      var threshold = 50; // minimum swipe distance
      if (startX - endX > threshold) {
        // Swiped left, go to next
        changeSlide(1);
      } else if (endX - startX > threshold) {
        // Swiped right, go to previous
        changeSlide(-1);
      }
    });
  }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById('certificatesModal');
  if (event.target == modal) {
    closeCertificatesCarousel();
  }
}