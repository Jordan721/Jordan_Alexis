// Scroll Navigation
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSiteNavigation();
    initScrollNavigation();


    initHTimeline();

});

// scroll navigation

// Animate the experience stats counters — called once when #experience enters view
let _expStatsTriggered = false;

function triggerExpStats() {
    if (_expStatsTriggered) return;
    _expStatsTriggered = true;
    document.querySelectorAll('.exp-stat-num').forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        if (!target) return;
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
}

function initScrollNavigation() {
    const sections = document.querySelectorAll('.section, .hero');

    // Update active state across all nav elements for a given section id
    function setActiveSection(sectionId) {
        document.querySelectorAll('.primary-nav a').forEach(el => {
            const active = el.getAttribute('data-section') === sectionId;
            el.classList.toggle('active', active);
            if (active) el.setAttribute('aria-current', 'location');
            else el.removeAttribute('aria-current');
        });
        document.querySelectorAll('.panel-nav-item').forEach(el => {
            el.classList.toggle('active', el.getAttribute('data-section') === sectionId);
        });
        if (sectionId === 'experience') {
            triggerExpStats();
        }
    }

    // Update active section on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.getAttribute('id'));
            }
        });
    }, observerOptions);

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

function switchArsenalTab(category) {
    document.querySelectorAll('.mobile-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === category);
    });
    document.querySelectorAll('.mobile-tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === category);
    });
}

// tag cloud filter & animation

function initTagCloud() {
    const section = document.getElementById('arsenal');
    const legend = section?.querySelector('.arsenal-legend');
    const tags = Array.from(section?.querySelectorAll('.cloud-tag') || []);
    if (!legend || !tags.length) return;

    const toolbar = section.querySelector('.arsenal-toolbar');
    const toggle = section.querySelector('.arsenal-toggle');
    const summary = section.querySelector('.arsenal-summary');
    const cloud = section.querySelector('.tag-cloud');
    const toggleLabel = toggle.querySelector('.arsenal-toggle-label');
    const buttons = Array.from(legend.querySelectorAll('.legend-item'));
    const categories = buttons.map(button => button.dataset.category).filter(category => category !== 'all');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let category = 'all';
    let expanded = false;
    let layoutAnimation;
    let revealAnimations = [];
    let initialized = false;

    // Keep each discipline represented, prioritizing its strongest skills.
    const ranked = items => [...items].sort((a, b) => {
        const rank = tag => tag.classList.contains('size-lg') ? 2 : tag.classList.contains('size-md') ? 1 : 0;
        return rank(b) - rank(a);
    });
    const highlights = new Set(categories.flatMap(value =>
        ranked(tags.filter(tag => tag.dataset.category === value)).slice(0, 3)
    ));

    function render() {
        const animate = initialized && !reducedMotion.matches && typeof cloud.animate === 'function';
        const previousHeight = cloud.getBoundingClientRect().height;
        const previousPositions = new Map(tags.filter(tag => !tag.classList.contains('filtered-out'))
            .map(tag => [tag, tag.getBoundingClientRect()]));
        layoutAnimation?.cancel();
        revealAnimations.forEach(animation => animation.cancel());
        revealAnimations = [];
        cloud.classList.remove('is-reflowing');
        const matching = tags.filter(tag => category === 'all' || tag.dataset.category === category);
        const visible = expanded ? matching : category === 'all' ?
            matching.filter(tag => highlights.has(tag)) : ranked(matching).slice(0, 12);
        const visibleSet = new Set(visible);
        tags.forEach(tag => {
            tag.classList.toggle('filtered-out', !visibleSet.has(tag));
            tag.classList.remove('tag-enter');
        });
        buttons.forEach(button => {
            const active = button.dataset.category === category;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        summary.textContent = `${visible.length} of ${matching.length} skills${expanded ? ' · Full toolkit' : ' · Highlights'}`;
        toggle.hidden = matching.length <= visible.length && !expanded;
        toggle.setAttribute('aria-expanded', String(expanded));
        toggleLabel.textContent = expanded ? 'Show highlights' : `Explore all ${matching.length} skills`;
        section.classList.toggle('arsenal-expanded', expanded);

        if (animate) {
            const nextHeight = cloud.getBoundingClientRect().height;
            // Read the final layout in one pass before starting the animations.
            const positions = visible.map(tag => [tag, tag.getBoundingClientRect()]);
            cloud.classList.add('is-reflowing');
            layoutAnimation = cloud.animate([{
                height: `${previousHeight}px`
            }, {
                height: `${nextHeight}px`
            }], {
                duration: 520,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
            });
            layoutAnimation.onfinish = () => cloud.classList.remove('is-reflowing');
            positions.forEach(([tag, position], index) => {
                const previous = previousPositions.get(tag);
                const frames = previous ?
                    [{
                        translate: `${previous.left - position.left}px ${previous.top - position.top}px`
                    }, {
                        translate: '0px 0px'
                    }] :
                    [{
                        opacity: 0,
                        translate: '0px 16px',
                        scale: '0.94'
                    }, {
                        opacity: 1,
                        translate: '0px 0px',
                        scale: '1'
                    }];
                revealAnimations.push(tag.animate(frames, {
                    duration: 420,
                    delay: previous ? 0 : Math.min(index * 12, 240),
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    fill: 'backwards'
                }));
            });
        }
        initialized = true;
    }

    // A viewport change must not leave the cloud constrained to an old height.
    window.addEventListener('resize', () => {
        layoutAnimation?.cancel();
        revealAnimations.forEach(animation => animation.cancel());
        cloud.classList.remove('is-reflowing');
    });
    legend.addEventListener('click', event => {
        const button = event.target.closest('.legend-item');
        if (!button) return;
        category = button.dataset.category;
        expanded = false;
        render();
    });
    toggle.addEventListener('click', () => {
        expanded = !expanded;
        render();
    });
    section.classList.add('arsenal-enhanced');
    toolbar.hidden = false;
    render();
}
// flip cards (mobile tap-to-flip)

function switchProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    document.querySelectorAll('.profile-panel').forEach(p => {
        p.classList.toggle('active', p.dataset.panel === tab);
    });
}

// bento grid

function initHTimeline() {
    // Primary trigger is in setActiveSection (initScrollNavigation).
    // This scroll fallback handles cases where the section is already in view on load.
    function scrollFallback() {
        const statsBar = document.querySelector('.exp-stats-bar');
        if (!statsBar) return;
        const rect = statsBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            triggerExpStats();
            window.removeEventListener('scroll', scrollFallback);
        }
    }
    window.addEventListener('scroll', scrollFallback, {
        passive: true
    });
    scrollFallback();
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
        const active = btn.dataset.filter === value;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    // Apply both filters to every entry
    const entries = document.querySelectorAll('.split-entry');
    entries.forEach(entry => {
        const yearMatch = timelineFilterState.year === 'all' || entry.dataset.year === timelineFilterState.year;
        const typeMatch = timelineFilterState.type === 'all' || entry.dataset.type === timelineFilterState.type;
        entry.classList.toggle('filtered-out', !(yearMatch && typeMatch));
        entry.hidden = !(yearMatch && typeMatch);
    });
    const visible = [...entries].filter(entry => !entry.hidden).length;
    document.getElementById("journeyResultCount").textContent = `${visible} of ${entries.length} experiences & milestones`;
    document.getElementById("journeyEmpty").hidden = visible > 0;
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
    staggerObserve('.bento-card', 0.08);
    staggerObserve('.edu-chip', 0.1);
    staggerObserve('.exp-stat-pill', 0.08);

    // Hero parallax depth on scroll
    // The editorial introduction stays stable while scrolling.

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


function resetJourneyFilters() {
    timelineFilterState.type = "all";
    filterTimeline("all", "year");
    filterTimeline("all", "type");
}
