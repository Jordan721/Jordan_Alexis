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

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById('certificatesModal');
  if (event.target == modal) {
    closeCertificatesCarousel();
  }
}