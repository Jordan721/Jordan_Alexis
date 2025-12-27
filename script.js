// Scroll Navigation
document.addEventListener('DOMContentLoaded', () => {
    initScrollNavigation();
    initSkillCategories();
    initScrollAnimations();
});

// scroll navigation

function initScrollNavigation() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.section, .hero');

    // Smooth scroll to section
    navDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = dot.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active dot on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navDots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.getAttribute('data-section') === sectionId) {
                        dot.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        if (section.getAttribute('id')) {
            observer.observe(section);
        }
    });
}

// skill categories

function toggleSkillCategory(headerElement) {
    const category = headerElement.parentElement;

    // Simply toggle the current category without affecting others
    category.classList.toggle('active');
}

function toggleAllSkills() {
    const allCategories = document.querySelectorAll('.skill-category');
    const button = document.getElementById('toggleAllSkillsBtn');

    // Check if any category is open
    const anyOpen = Array.from(allCategories).some(cat => cat.classList.contains('active'));

    // Add animation class
    button.classList.add('changing');

    // Add fade-out effect
    button.style.opacity = '0.5';

    setTimeout(() => {
        if (anyOpen) {
            // If any are open, close all
            allCategories.forEach(category => {
                category.classList.remove('active');
            });
            button.innerHTML = '<i class="fas fa-chevron-down"></i> Expand All';
        } else {
            // If all are closed, open all
            allCategories.forEach(category => {
                category.classList.add('active');
            });
            button.innerHTML = '<i class="fas fa-chevron-up"></i> Collapse All';
        }

        // Fade back in
        button.style.opacity = '1';

        // Remove animation class after animation completes
        setTimeout(() => {
            button.classList.remove('changing');
        }, 150);
    }, 75);
}

// scroll animations

function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill categories
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// certificates modal

let currentSlide = 0;
let currentCategory = null;

function openCertificatesModal() {
    const modal = document.getElementById('certificatesModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificatesModal() {
    const modal = document.getElementById('certificatesModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset to folder view
    document.getElementById('folderView').style.display = 'block';
    document.getElementById('certView').style.display = 'none';
}

function openCertFolder(category) {
    currentCategory = category;
    currentSlide = 0;

    // Hide folder view, show cert view
    document.getElementById('folderView').style.display = 'none';
    document.getElementById('certView').style.display = 'block';

    // Show only certificates from selected category
    const allSlides = document.querySelectorAll('.cert-slide');
    allSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    const categorySlides = document.querySelectorAll(`.${category}-cert`);
    if (categorySlides.length > 0) {
        categorySlides[currentSlide].classList.add('active');
        updateSlideIndicator(categorySlides.length);
    }
}

function backToFolders() {
    document.getElementById('folderView').style.display = 'block';
    document.getElementById('certView').style.display = 'none';
}

function changeSlide(direction) {
    const categorySlides = document.querySelectorAll(`.${currentCategory}-cert`);

    if (categorySlides.length === 0) return;

    // Remove active class from current slide
    categorySlides[currentSlide].classList.remove('active');

    // Calculate new slide index
    currentSlide += direction;

    // Wrap around
    if (currentSlide < 0) {
        currentSlide = categorySlides.length - 1;
    } else if (currentSlide >= categorySlides.length) {
        currentSlide = 0;
    }

    // Add active class to new slide
    categorySlides[currentSlide].classList.add('active');
    updateSlideIndicator(categorySlides.length);
}

function updateSlideIndicator(total) {
    const indicator = document.getElementById('slideNumber');
    indicator.textContent = `${currentSlide + 1} / ${total}`;
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certificatesModal');
    if (!modal.classList.contains('active')) return;

    const certView = document.getElementById('certView');
    const isCertView = certView.style.display !== 'none';

    if (e.key === 'Escape') {
        closeCertificatesModal();
    } else if (isCertView) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    }
});

// Close modal when clicking overlay
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeCertificatesModal();
    }
});

// smooth scroll for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// performance optimizations

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// accessibility improvements

// Add focus visible class for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// games modal

function openGamesModal() {
    const modal = document.getElementById('gamesModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGamesModal() {
    const modal = document.getElementById('gamesModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// back to top button

const backToTopButton = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', throttle(() => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}, 100));

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// console message

console.log('%c👋🏾 Welcome to Jordan Alexis Portfolio!', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #8b5cf6; font-size: 14px;');
console.log('%chttps://github.com/Jordan721', 'color: #06b6d4; font-size: 12px;');
