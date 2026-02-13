// Scroll Navigation
document.addEventListener('DOMContentLoaded', () => {
    initScrollNavigation();
    initTagCloud();
    initFlipCards();
    initHTimeline();
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

// tag cloud filter & animation

function initTagCloud() {
    const legend = document.querySelector('.arsenal-legend');
    const tags = document.querySelectorAll('.cloud-tag');

    if (!legend || !tags.length) return;

    // Assign staggered float delays for organic movement
    tags.forEach((tag, i) => {
        tag.style.setProperty('--float-delay', (Math.random() * 5).toFixed(2) + 's');
    });

    // Staggered entrance on first scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tags.forEach((tag, i) => {
                    const delay = i * 0.025;
                    tag.classList.add('tag-enter');
                    tag.style.setProperty('--enter-delay', delay.toFixed(3) + 's');
                    // Remove entrance class after it finishes so float animation resumes
                    setTimeout(() => tag.classList.remove('tag-enter'), (delay + 0.5) * 1000);
                });
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.15
    });

    const cloud = document.querySelector('.tag-cloud');
    if (cloud) observer.observe(cloud);

    // Category filter
    legend.addEventListener('click', (e) => {
        const btn = e.target.closest('.legend-item');
        if (!btn) return;

        const category = btn.dataset.category;

        // Update active legend button
        legend.querySelectorAll('.legend-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter tags
        if (category === 'all') {
            tags.forEach(tag => tag.classList.remove('filtered-out'));
        } else {
            tags.forEach(tag => {
                if (tag.dataset.category === category) {
                    tag.classList.remove('filtered-out');
                } else {
                    tag.classList.add('filtered-out');
                }
            });
        }
    });
}

// flip cards (mobile tap-to-flip)

function toggleAboutCard(el) {
    el.classList.toggle('expanded');
}

function toggleAboutExpandAll() {
    const btn = document.querySelector('.about-expand-actions .h-expand-all-btn');
    const cards = document.querySelectorAll('.about-card');
    const isExpanding = !btn.classList.contains('active');

    btn.classList.toggle('active');
    btn.innerHTML = isExpanding ?
        '<i class="fas fa-compress-alt"></i> Collapse All' :
        '<i class="fas fa-expand-alt"></i> Expand All';

    cards.forEach(card => {
        if (isExpanding) {
            card.classList.add('expanded');
        } else {
            card.classList.remove('expanded');
        }
    });
}

function initFlipCards() {
    // legacy — no longer used
}

// horizontal timeline

function initHTimeline() {
    const timeline = document.querySelector('.h-timeline');
    const leftArrow = document.querySelector('.h-timeline-arrow-left');
    const rightArrow = document.querySelector('.h-timeline-arrow-right');

    if (!timeline || !leftArrow || !rightArrow) return;

    const scrollSpeed = 12;
    let scrollInterval = null;

    function startScroll(direction) {
        stopScroll();
        scrollInterval = setInterval(() => {
            timeline.scrollLeft += direction * scrollSpeed;
        }, 10);
    }

    function stopScroll() {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }

    leftArrow.addEventListener('mousedown', () => startScroll(-1));
    rightArrow.addEventListener('mousedown', () => startScroll(1));
    leftArrow.addEventListener('touchstart', (e) => { e.preventDefault(); startScroll(-1); });
    rightArrow.addEventListener('touchstart', (e) => { e.preventDefault(); startScroll(1); });

    document.addEventListener('mouseup', stopScroll);
    document.addEventListener('touchend', stopScroll);
    document.addEventListener('mouseleave', stopScroll);

    // Stat counter animation
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nums = document.querySelectorAll('.exp-stat-num');
                nums.forEach(num => {
                    const target = parseInt(num.dataset.target);
                    if (!target || num.dataset.animated) return;
                    num.dataset.animated = 'true';
                    let current = 0;
                    const step = Math.ceil(target / 30);
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(interval);
                        }
                        num.textContent = current;
                    }, 40);
                });
                statObserver.disconnect();
            }
        });
    }, {
        threshold: 0.3
    });

    const statsBar = document.querySelector('.exp-stats-bar');
    if (statsBar) statObserver.observe(statsBar);
}

function toggleHCard(el) {
    el.classList.toggle('expanded');
}

function toggleExpandAll() {
    const btn = document.querySelector('.h-expand-all-btn');
    const bodies = document.querySelectorAll('.job .h-card-body');
    const isExpanding = !btn.classList.contains('active');

    btn.classList.toggle('active');
    btn.innerHTML = isExpanding ?
        '<i class="fas fa-compress-alt"></i> Collapse All' :
        '<i class="fas fa-expand-alt"></i> Expand All';

    bodies.forEach(body => {
        if (isExpanding) {
            body.classList.add('expanded');
        } else {
            body.classList.remove('expanded');
        }
    });
}

/* Timeline filter state — tracks active year and type independently */
const timelineFilterState = {
    year: 'all',
    type: 'all'
};

function filterTimeline(value, filterType) {
    // Update state
    timelineFilterState[filterType] = value;

    // Update active button styles for this filter group
    const groupClass = filterType === 'type' ? '.h-filter-type' : '.h-filter-group:not(.h-filter-type)';
    document.querySelectorAll(`${groupClass} .h-filter-btn`).forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === value);
    });

    // Apply both filters to every card
    const cards = document.querySelectorAll('.h-timeline-card');
    cards.forEach(card => {
        const yearMatch = timelineFilterState.year === 'all' || card.dataset.year === timelineFilterState.year;
        const typeMatch = timelineFilterState.type === 'all' || card.dataset.type === timelineFilterState.type;
        card.classList.toggle('filtered-out', !(yearMatch && typeMatch));
    });
}

function toggleEduChip(el) {
    const wasExpanded = el.classList.contains('expanded');
    // close all other chips
    document.querySelectorAll('.edu-chip.expanded').forEach(c => c.classList.remove('expanded'));
    if (!wasExpanded) el.classList.add('expanded');
}

function toggleEduExpandAll() {
    const btn = document.querySelector('.edu-expand-actions .h-expand-all-btn');
    const chips = document.querySelectorAll('.edu-chip');
    const isExpanding = !btn.classList.contains('active');

    btn.classList.toggle('active');
    btn.innerHTML = isExpanding ?
        '<i class="fas fa-compress-alt"></i> Collapse All' :
        '<i class="fas fa-expand-alt"></i> Expand All';

    chips.forEach(chip => {
        if (isExpanding) {
            chip.classList.add('expanded');
        } else {
            chip.classList.remove('expanded');
        }
    });
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

    // Helper to stagger-animate a group of elements
    function staggerObserve(selector, delay = 0.1) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * delay}s, transform 0.6s ease ${index * delay}s`;
            observer.observe(el);
        });
    }

    // Observe all key sections with staggered delays
    staggerObserve('.timeline-item', 0.1);
    staggerObserve('.education-card', 0.12);
    staggerObserve('.skill-category', 0.1);
    staggerObserve('.feature-card', 0.15);
    staggerObserve('.contact-btn', 0.1);
    staggerObserve('.section-header', 0.05);
    staggerObserve('.about-card', 0.12);
    staggerObserve('.project-card', 0.12);
    staggerObserve('.h-timeline-card', 0.08);
    staggerObserve('.edu-chip', 0.1);
    staggerObserve('.exp-stat-pill', 0.08);

    // Hero parallax depth on scroll
    initHeroParallax();

    // Scroll-progress animations
    initScrollProgress();
}

// Hero parallax - text shifts on scroll for depth effect (scroll indicator stays fixed)
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const heroText = document.querySelector('.hero-text');
    if (!hero || !heroText) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;

        if (scrollY < heroHeight) {
            const progress = scrollY / heroHeight;
            heroText.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroText.style.opacity = 1 - progress * 1.2;
        }
    }, {
        passive: true
    });
}

// Scroll-progress: animate counters and progress elements when in view
function initScrollProgress() {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe stat numbers for counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => progressObserver.observe(stat));

    // Observe progress bars for fill animation
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.getPropertyValue('--target-width');
        bar.style.width = '0%';
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    entry.target.style.transition = 'width 1.5s ease-out';
                    entry.target.style.width = targetWidth;
                }
            });
        }, {
            threshold: 0.5
        });
        barObserver.observe(bar);
    });
}

function animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/(\d+)/);
    if (!match) return;

    const target = parseInt(match[0]);
    const suffix = text.replace(match[0], '');
    const prefix = text.substring(0, text.indexOf(match[0]));
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = prefix + Math.floor(current) + suffix;
    }, 30);
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
    const folderView = document.getElementById('folderView');
    const certView = document.getElementById('certView');

    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset to folder view with proper styles
    folderView.style.display = 'block';
    folderView.style.opacity = '1';
    folderView.style.transform = 'scale(1)';

    certView.style.display = 'none';
}

function openYearUpInfoModal() {
    const modal = document.getElementById('yearUpInfoModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeYearUpInfoModal() {
    const modal = document.getElementById('yearUpInfoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openCourseInfoModal() {
    const modal = document.getElementById('courseInfoModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCourseInfoModal() {
    const modal = document.getElementById('courseInfoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle course module details dropdown
function toggleCourseDetails(element) {
    const wrapper = element.parentElement;
    const details = wrapper.querySelector('.course-module-details');

    // Toggle expanded class on both the module and details
    element.classList.toggle('expanded');
    details.classList.toggle('expanded');
}

function openCertFolder(category) {
    currentCategory = category;
    currentSlide = 0;

    const folderView = document.getElementById('folderView');
    const certView = document.getElementById('certView');

    // Check if certificates exist for this category first
    const categorySlides = document.querySelectorAll(`.${category}-cert`);

    if (categorySlides.length === 0) {
        console.error(`No certificates found for category: ${category}`);
        // Don't proceed if no certificates found
        return;
    }

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

        // Show first certificate of the selected category
        categorySlides[currentSlide].classList.add('active');
        updateSlideIndicator(categorySlides.length);

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
    if (!currentCategory) {
        console.error('No category selected');
        return;
    }

    const categorySlides = document.querySelectorAll(`.${currentCategory}-cert`);

    if (categorySlides.length === 0) {
        console.error(`No certificates found for category: ${currentCategory}`);
        return;
    }

    // Remove active class from current slide (with safety check)
    if (categorySlides[currentSlide]) {
        categorySlides[currentSlide].classList.remove('active');
    }

    // Calculate new slide index
    currentSlide += direction;

    // Wrap around
    if (currentSlide < 0) {
        currentSlide = categorySlides.length - 1;
    } else if (currentSlide >= categorySlides.length) {
        currentSlide = 0;
    }

    // Add active class to new slide
    if (categorySlides[currentSlide]) {
        categorySlides[currentSlide].classList.add('active');
        updateSlideIndicator(categorySlides.length);
    }
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
    return function () {
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
    ripple: localStorage.getItem('ripple') !== 'false',
    shapes3D: localStorage.getItem('shapes3D') === 'true',
    gradientMesh: localStorage.getItem('gradientMesh') !== 'false',
    scanLines: localStorage.getItem('scanLines') !== 'false'
};

// Initialize settings from localStorage
function initializeGamificationSettings() {
    document.getElementById('cursorTrailToggle').checked = gamificationState.cursorTrail;
    document.getElementById('particlesToggle').checked = gamificationState.particles;
    document.getElementById('cardTiltToggle').checked = gamificationState.cardTilt;
    document.getElementById('rippleToggle').checked = gamificationState.ripple;
    document.getElementById('shapes3DToggle').checked = gamificationState.shapes3D;

    // Initialize gradient mesh toggle (mobile only)
    const gradientMeshToggle = document.getElementById('gradientMeshToggle');
    if (gradientMeshToggle) {
        gradientMeshToggle.checked = gamificationState.gradientMesh;
        applyGradientMeshState();
    }

    // Initialize scan lines toggle (mobile only)
    const scanLinesToggle = document.getElementById('scanLinesToggle');
    if (scanLinesToggle) {
        scanLinesToggle.checked = gamificationState.scanLines;
        applyScanLinesState();
    }
}

// Toggle Gradient Mesh (mobile only)
function toggleGradientMesh() {
    gamificationState.gradientMesh = document.getElementById('gradientMeshToggle').checked;
    localStorage.setItem('gradientMesh', gamificationState.gradientMesh);
    applyGradientMeshState();
}

// Apply gradient mesh visibility
function applyGradientMeshState() {
    const gradientMesh = document.querySelector('.gradient-mesh');
    if (gradientMesh) {
        gradientMesh.style.display = gamificationState.gradientMesh ? '' : 'none';
    }
}

// Toggle Scan Lines (mobile only)
function toggleScanLines() {
    gamificationState.scanLines = document.getElementById('scanLinesToggle').checked;
    localStorage.setItem('scanLines', gamificationState.scanLines);
    applyScanLinesState();
}

// Apply scan lines visibility
function applyScanLinesState() {
    const scanLines = document.querySelector('.scan-lines');
    if (scanLines) {
        scanLines.style.display = gamificationState.scanLines ? '' : 'none';
    }
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
document.addEventListener('click', function (e) {
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

document.addEventListener('mousemove', function (e) {
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
    card.addEventListener('mousemove', function (e) {
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

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Ripple Click Effect (Desktop Only)
document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) return; // Skip on mobile

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

// Performance: Reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.cursor-dot, .particles').forEach(element => {
        element.remove();
    });
}

// new scroll animations

// scroll progress indicator
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    if (!scrollProgress) return;

    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';

    // update scrollbar color based on scroll position
    updateScrollbarColor(scrolled);
}

// dynamic scrollbar color based on scroll position
function updateScrollbarColor(scrollPercentage) {
    // create dynamic gradient based on scroll position
    let color1, color2, color3, shadow;

    if (scrollPercentage < 33) {
        // top third: cyan dominant
        color1 = '#06b6d4';
        color2 = '#06b6d4';
        color3 = '#8b5cf6';
        shadow = 'rgba(6, 182, 212, 0.5)';
    } else if (scrollPercentage < 66) {
        // middle third: purple dominant
        color1 = '#06b6d4';
        color2 = '#8b5cf6';
        color3 = '#f59e0b';
        shadow = 'rgba(139, 92, 246, 0.5)';
    } else {
        // bottom third: orange dominant
        color1 = '#8b5cf6';
        color2 = '#f59e0b';
        color3 = '#f59e0b';
        shadow = 'rgba(245, 158, 11, 0.5)';
    }

    // update or create the style element
    let style = document.getElementById('dynamic-scrollbar-style');
    if (!style) {
        style = document.createElement('style');
        style.id = 'dynamic-scrollbar-style';
        document.head.appendChild(style);
    }

    style.textContent = `
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, ${color1} 0%, ${color2} 50%, ${color3} 100%);
            border-radius: 10px;
            border: 2px solid #1e293b;
            box-shadow: 0 0 10px ${shadow};
        }

        ::-webkit-scrollbar-thumb:hover {
            box-shadow: 0 0 20px ${shadow}, 0 0 30px rgba(139, 92, 246, 0.6);
            filter: brightness(1.2);
        }
    `;
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('load', updateScrollProgress);

// parallax scrolling for hero background orbs
function updateParallaxOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');
    const scrolled = window.scrollY;

    orbs.forEach((orb, index) => {
        // Different speeds for each orb (0.3, 0.5, 0.7)
        const speed = 0.3 + (index * 0.2);
        const yPos = scrolled * speed;
        orb.style.transform = `translateY(${yPos}px)`;
    });
}

window.addEventListener('scroll', updateParallaxOrbs);

// section header reveal animations
function initSectionHeaderAnimations() {
    const sectionHeaders = document.querySelectorAll('.section-header');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                entry.target.classList.add('revealed');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionHeaders.forEach(header => {
        observer.observe(header);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionHeaderAnimations);
} else {
    initSectionHeaderAnimations();
}

// timeline line drawing animation
function initTimelineAnimation() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timeline.classList.add('draw-line');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(timeline);
}

// Initialize timeline animation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimelineAnimation);
} else {
    initTimelineAnimation();
}

// Career Journey Timeline Animation
function initJourneyTimeline() {
    const journeySection = document.querySelector('.journey-section');
    if (!journeySection) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                // Start counting stats when section is visible
                animateStats();
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(journeySection);
}

// Animate stat counters
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
}

// Initialize journey timeline
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJourneyTimeline);
} else {
    initJourneyTimeline();
}

// Animated Grid Background
function toggle3DShapes() {
    gamificationState.shapes3D = document.getElementById('shapes3DToggle').checked;
    localStorage.setItem('shapes3D', gamificationState.shapes3D);

    const gridCanvas = document.getElementById('gridCanvas');
    if (gamificationState.shapes3D) {
        if (!gridCanvas) {
            createAnimatedGrid();
        } else {
            gridCanvas.style.display = 'block';
        }
    } else {
        if (gridCanvas) {
            gridCanvas.style.display = 'none';
        }
    }
}

// Animated Grid Effect
let gridAnimation = null;

function createAnimatedGrid() {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'gridCanvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.6;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouseX = 0,
        mouseY = 0;
    let time = 0;

    // Grid settings
    const gridSize = 60;
    const glowRadius = 150;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function drawGrid() {
        ctx.clearRect(0, 0, width, height);
        time += 0.01;

        // Calculate grid offset for subtle movement
        const offsetX = Math.sin(time * 0.5) * 10;
        const offsetY = Math.cos(time * 0.3) * 10;

        // Draw vertical lines
        for (let x = offsetX % gridSize; x < width; x += gridSize) {
            const distX = Math.abs(x - mouseX);

            for (let y = 0; y < height; y += 2) {
                const distY = Math.abs(y - mouseY);
                const dist = Math.sqrt(distX * distX + distY * distY);

                // Calculate opacity based on distance from mouse
                let alpha = 0.1;
                if (dist < glowRadius) {
                    alpha = 0.1 + (1 - dist / glowRadius) * 0.4;
                }

                // Add wave effect
                const wave = Math.sin((y + time * 50) * 0.02) * 0.05;
                alpha += wave;

                ctx.fillStyle = `rgba(6, 182, 212, ${Math.max(0.05, Math.min(0.5, alpha))})`;
                ctx.fillRect(x, y, 1, 1);
            }
        }

        // Draw horizontal lines
        for (let y = offsetY % gridSize; y < height; y += gridSize) {
            const distY = Math.abs(y - mouseY);

            for (let x = 0; x < width; x += 2) {
                const distX = Math.abs(x - mouseX);
                const dist = Math.sqrt(distX * distX + distY * distY);

                let alpha = 0.1;
                if (dist < glowRadius) {
                    alpha = 0.1 + (1 - dist / glowRadius) * 0.4;
                }

                const wave = Math.sin((x + time * 50) * 0.02) * 0.05;
                alpha += wave;

                ctx.fillStyle = `rgba(6, 182, 212, ${Math.max(0.05, Math.min(0.5, alpha))})`;
                ctx.fillRect(x, y, 1, 1);
            }
        }

        // Draw intersection points with glow
        for (let x = offsetX % gridSize; x < width; x += gridSize) {
            for (let y = offsetY % gridSize; y < height; y += gridSize) {
                const distX = Math.abs(x - mouseX);
                const distY = Math.abs(y - mouseY);
                const dist = Math.sqrt(distX * distX + distY * distY);

                // Base glow
                let glowSize = 2;
                let alpha = 0.3;

                // Enhanced glow near mouse
                if (dist < glowRadius) {
                    const intensity = 1 - dist / glowRadius;
                    glowSize = 2 + intensity * 6;
                    alpha = 0.3 + intensity * 0.7;
                }

                // Pulse effect
                const pulse = Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.2 + 0.8;
                glowSize *= pulse;

                // Draw outer glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize * 3);
                gradient.addColorStop(0, `rgba(6, 182, 212, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.5})`);
                gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

                ctx.beginPath();
                ctx.arc(x, y, glowSize * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Draw center point
                ctx.beginPath();
                ctx.arc(x, y, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }
        }

        gridAnimation = requestAnimationFrame(drawGrid);
    }

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Handle resize
    window.addEventListener('resize', resize);

    // Initialize
    resize();
    drawGrid();
}

// Initialize animated grid if enabled
if (gamificationState.shapes3D) {
    createAnimatedGrid();
}

// GitHub Activity Feed
async function fetchGitHubActivity() {
    const username = 'Jordan721';

    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        const reposData = await reposResponse.json();

        // Display GitHub stats
        displayGitHubStats(userData);

        // Display recent repositories
        displayRecentRepos(reposData);

        // Fetch and display recent commits from the user's repositories
        await fetchRecentCommits(username, reposData);

    } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        showError();
    }
}

function displayGitHubStats(userData) {
    const statsContainer = document.getElementById('githubStats');

    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="stat-item-number">${userData.public_repos || 0}</span>
            <span class="stat-item-label">Repositories</span>
        </div>
        <div class="stat-item">
            <span class="stat-item-number">${userData.followers || 0}</span>
            <span class="stat-item-label">Followers</span>
        </div>
        <div class="stat-item">
            <span class="stat-item-number">${userData.following || 0}</span>
            <span class="stat-item-label">Following</span>
        </div>
        <div class="stat-item">
            <span class="stat-item-number">${userData.public_gists || 0}</span>
            <span class="stat-item-label">Gists</span>
        </div>
    `;
}

function displayRecentRepos(repos) {
    const reposContainer = document.getElementById('recentRepos');

    if (!repos || repos.length === 0) {
        reposContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-light);">No repositories found</p>';
        return;
    }

    reposContainer.innerHTML = repos.slice(0, 5).map(repo => `
        <div class="activity-item">
            <div class="activity-item-title">
                <a href="${repo.html_url}" target="_blank" class="repo-link">${repo.name}</a>
            </div>
            <div class="activity-item-desc">${repo.description || 'No description'}</div>
            <div class="activity-item-time">
                ${repo.language ? `<i class="fas fa-circle" style="color: ${getLanguageColor(repo.language)}; font-size: 0.5rem;"></i> ${repo.language} • ` : ''}
                ⭐ ${repo.stargazers_count} • Updated ${getTimeAgo(repo.updated_at)}
            </div>
        </div>
    `).join('');
}

async function fetchRecentCommits(username, repos) {
    const commitsContainer = document.getElementById('recentCommits');

    try {
        const allCommits = [];

        // Fetch commits from the most recently updated repositories
        for (const repo of repos.slice(0, 3)) {
            try {
                const commitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`);
                const commitsData = await commitsResponse.json();

                if (Array.isArray(commitsData)) {
                    commitsData.forEach(commitData => {
                        allCommits.push({
                            message: commitData.commit.message,
                            repo: repo.name,
                            time: commitData.commit.author.date,
                            url: commitData.html_url,
                            sha: commitData.sha.substring(0, 7)
                        });
                    });
                }
            } catch (error) {
                console.error(`Error fetching commits for ${repo.name}:`, error);
            }
        }

        // Sort commits by date (most recent first)
        allCommits.sort((a, b) => new Date(b.time) - new Date(a.time));

        if (allCommits.length === 0) {
            commitsContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-light);">No recent commits found</p>';
            return;
        }

        // Display the 5 most recent commits
        commitsContainer.innerHTML = allCommits.slice(0, 5).map(commit => `
            <div class="activity-item">
                <div class="activity-item-title">${truncateText(commit.message.split('\n')[0], 50)}</div>
                <div class="activity-item-desc">
                    <a href="${commit.url}" target="_blank" class="repo-link">${commit.repo}</a>
                    <span style="color: var(--color-gray-light); margin-left: 8px;">@${commit.sha}</span>
                </div>
                <div class="activity-item-time">${getTimeAgo(commit.time)}</div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error displaying commits:', error);
        commitsContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-light);">Failed to load commits</p>';
    }
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function getLanguageColor(language) {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        Java: '#b07219',
        HTML: '#e34c26',
        CSS: '#563d7c',
        TypeScript: '#2b7489',
        PHP: '#4F5D95',
        Ruby: '#701516',
        Go: '#00ADD8',
        Rust: '#dea584',
        C: '#555555',
        'C++': '#f34b7d',
        'C#': '#178600',
        Shell: '#89e051'
    };
    return colors[language] || '#8b8b8b';
}

function showError() {
    const containers = ['recentCommits', 'recentRepos', 'githubStats'];
    containers.forEach(id => {
        const container = document.getElementById(id);
        container.innerHTML = `
            <div class="activity-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Failed to load GitHub activity</p>
                <small>API rate limit may have been reached</small>
            </div>
        `;
    });
}

// Initialize GitHub activity feed
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchGitHubActivity);
} else {
    fetchGitHubActivity();
}