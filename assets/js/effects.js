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

