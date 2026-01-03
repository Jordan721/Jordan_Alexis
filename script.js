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

// experience year filter

function filterExperienceByYear(year) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const filterButtons = document.querySelectorAll('.year-filter-btn');

    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-year') === year) {
            btn.classList.add('active');
        }
    });

    // Filter timeline items
    timelineItems.forEach(item => {
        const itemYear = item.getAttribute('data-year');
        const yearRange = item.getAttribute('data-year-range');

        if (year === 'all') {
            item.classList.remove('hidden');
        } else if (itemYear === year) {
            item.classList.remove('hidden');
        } else if (yearRange && yearRange.includes(year)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
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

    const folderView = document.getElementById('folderView');
    const certView = document.getElementById('certView');

    // Add fade-out animation to folder view
    folderView.style.opacity = '0';
    folderView.style.transform = 'scale(0.95)';

    setTimeout(() => {
        // Hide folder view, show cert view
        folderView.style.display = 'none';
        certView.style.display = 'block';

        // Reset cert view for animation
        certView.style.opacity = '0';
        certView.style.transform = 'scale(0.95)';

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

        // Trigger fade-in animation
        requestAnimationFrame(() => {
            certView.style.opacity = '1';
            certView.style.transform = 'scale(1)';
        });
    }, 300);
}

function backToFolders() {
    const folderView = document.getElementById('folderView');
    const certView = document.getElementById('certView');

    // Add fade-out animation to cert view
    certView.style.opacity = '0';
    certView.style.transform = 'scale(0.95)';

    setTimeout(() => {
        // Hide cert view, show folder view
        certView.style.display = 'none';
        folderView.style.display = 'block';

        // Reset folder view for animation
        folderView.style.opacity = '0';
        folderView.style.transform = 'scale(0.95)';

        // Trigger fade-in animation
        requestAnimationFrame(() => {
            folderView.style.opacity = '1';
            folderView.style.transform = 'scale(1)';
        });
    }, 300);
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

// GAMIFICATION FEATURES

// Gamification Settings State - Default OFF for first-time visitors
const gamificationState = {
    cursorTrail: localStorage.getItem('cursorTrail') === 'true',
    particles: localStorage.getItem('particles') === 'true',
    cardTilt: localStorage.getItem('cardTilt') === 'true',
    ripple: localStorage.getItem('ripple') === 'true',
    iconColor: localStorage.getItem('iconColor') === 'true'
};

// Initialize settings from localStorage
function initializeGamificationSettings() {
    document.getElementById('cursorTrailToggle').checked = gamificationState.cursorTrail;
    document.getElementById('particlesToggle').checked = gamificationState.particles;
    document.getElementById('cardTiltToggle').checked = gamificationState.cardTilt;
    document.getElementById('rippleToggle').checked = gamificationState.ripple;
    document.getElementById('iconColorToggle').checked = gamificationState.iconColor;
}

// Toggle Gamification Settings Panel
function toggleGamificationSettings() {
    const panel = document.getElementById('gamificationPanel');
    const tooltip = document.getElementById('clickMeTooltip');

    panel.classList.toggle('active');

    // Hide tooltip and mark as seen when opening panel
    if (panel.classList.contains('active')) {
        tooltip.classList.remove('show');
        localStorage.setItem('hasSeenGamificationTooltip', 'true');
    }
}

// Close panel when clicking outside
document.addEventListener('click', function(e) {
    const panel = document.getElementById('gamificationPanel');
    const toggle = document.getElementById('gamificationToggle');

    if (panel.classList.contains('active') &&
        !panel.contains(e.target) &&
        !toggle.contains(e.target)) {
        panel.classList.remove('active');
    }
});

// Individual Toggle Functions
function toggleCursorTrail() {
    gamificationState.cursorTrail = document.getElementById('cursorTrailToggle').checked;
    localStorage.setItem('cursorTrail', gamificationState.cursorTrail);

    if (!gamificationState.cursorTrail) {
        // Remove all cursor dots
        document.querySelectorAll('.cursor-dot').forEach(dot => dot.remove());
        cursorTrail = [];
    }
}

function toggleParticles() {
    gamificationState.particles = document.getElementById('particlesToggle').checked;
    localStorage.setItem('particles', gamificationState.particles);

    const particleContainer = document.querySelector('.particles');
    if (gamificationState.particles) {
        if (!particleContainer) {
            createParticles();
        }
    } else {
        if (particleContainer) {
            particleContainer.remove();
        }
    }
}

function toggleCardTilt() {
    gamificationState.cardTilt = document.getElementById('cardTiltToggle').checked;
    localStorage.setItem('cardTilt', gamificationState.cardTilt);

    if (!gamificationState.cardTilt) {
        // Reset all card transforms
        document.querySelectorAll('.glass-card').forEach(card => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
}

function toggleRipple() {
    gamificationState.ripple = document.getElementById('rippleToggle').checked;
    localStorage.setItem('ripple', gamificationState.ripple);
}

function toggleIconColor() {
    gamificationState.iconColor = document.getElementById('iconColorToggle').checked;
    localStorage.setItem('iconColor', gamificationState.iconColor);

    if (!gamificationState.iconColor) {
        // Reset all icon styles
        document.querySelectorAll('.section-header i, .card-header i').forEach(icon => {
            icon.style.background = '';
            icon.style.webkitBackgroundClip = '';
            icon.style.webkitTextFillColor = '';
            icon.style.backgroundClip = '';
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// Show "Click me!" tooltip for first-time visitors
function showClickMeTooltip() {
    const hasSeenTooltip = localStorage.getItem('hasSeenGamificationTooltip');

    if (!hasSeenTooltip) {
        const tooltip = document.getElementById('clickMeTooltip');

        // Show tooltip after 2 seconds
        setTimeout(() => {
            tooltip.classList.add('show');
        }, 2000);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
            localStorage.setItem('hasSeenGamificationTooltip', 'true');
        }, 7000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeGamificationSettings();
    showClickMeTooltip();
});

// Cursor Trail Effect (Desktop Only)
let cursorTrail = [];
const maxTrailLength = 15;

document.addEventListener('mousemove', function(e) {
    if (window.innerWidth > 768 && gamificationState.cursorTrail) { // Only on desktop and if enabled
        createCursorDot(e.pageX, e.pageY);
    }
});

function createCursorDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 8px;
        background: rgba(6, 182, 212, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.5s ease;
    `;

    document.body.appendChild(dot);
    cursorTrail.push(dot);

    if (cursorTrail.length > maxTrailLength) {
        const oldDot = cursorTrail.shift();
        oldDot.remove();
    }

    setTimeout(() => {
        dot.style.opacity = '0';
        dot.style.transform = 'scale(0)';
        setTimeout(() => dot.remove(), 500);
    }, 100);
}

// Floating Particles Background
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;

    document.body.appendChild(particleContainer);

    for (let i = 0; i < 30; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 5 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(6, 182, 212, 0.3);
        border-radius: 50%;
        left: ${startX}px;
        bottom: -10px;
        animation: float-up ${duration}s ${delay}s infinite ease-in-out;
        box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
    `;

    container.appendChild(particle);

    // Add keyframes if not already added
    if (!document.getElementById('particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize particles if enabled
if (gamificationState.particles) {
    createParticles();
}

// Interactive Card Tilt Effect
const glassCards = document.querySelectorAll('.glass-card');

glassCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768 || !gamificationState.cardTilt) return; // Skip on mobile or if disabled

        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Ripple Click Effect
document.addEventListener('click', function(e) {
    const button = e.target.closest('.btn, .contact-btn, .download-btn, .view-cert-btn, .feature-card');

    if (button && gamificationState.ripple) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
        `;

        const currentPosition = window.getComputedStyle(button).position;
        if (currentPosition === 'static') {
            button.style.position = 'relative';
        }
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        if (!document.getElementById('ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple-effect {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => ripple.remove(), 600);
    }
});

// Enhanced Section Icons Color Change
const sectionIcons = document.querySelectorAll('.section-header i, .card-header i');
const iconGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
];

sectionIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        if (!gamificationState.iconColor) return;

        const randomGradient = iconGradients[Math.floor(Math.random() * iconGradients.length)];
        this.style.background = randomGradient;
        this.style.webkitBackgroundClip = 'text';
        this.style.webkitTextFillColor = 'transparent';
        this.style.backgroundClip = 'text';
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });

    icon.addEventListener('mouseleave', function() {
        if (!gamificationState.iconColor) return;

        this.style.background = '';
        this.style.webkitBackgroundClip = '';
        this.style.webkitTextFillColor = '';
        this.style.backgroundClip = '';
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Performance: Reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.cursor-dot, .particles').forEach(element => {
        element.remove();
    });
}
