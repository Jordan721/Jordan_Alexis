// smooth scroll for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Reveal older journey entries before attempting to scroll to them.
            if (target.matches('#journeyChapters .split-entry')) {
                showWholeJourney();
            }
            target.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
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

