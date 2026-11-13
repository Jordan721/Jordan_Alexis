// Top navigation, accessible mobile menu, theme selection, project expansion.
function toggleProjects() {
    const extra = document.getElementById('projectsExtra');
    const button = document.getElementById('projectsToggleBtn');
    const open = extra.classList.toggle('open');
    button.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    document.getElementById('projectsToggleText').textContent = open ? 'Show less' : `Explore ${extra.querySelectorAll('.project-card').length} more projects`;
}
function initTheme() {
    let theme = 'light';
    try { theme = localStorage.getItem('studio-theme') || 'light'; } catch (_) {}
    applyTheme(theme === 'dark' ? 'dark' : 'light');
}
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const button = document.getElementById('themeButton');
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    button.innerHTML = '<span class="theme-orbit" aria-hidden="true"><i class="fas fa-sun theme-sun"></i><i class="fas fa-moon theme-moon"></i><span class="theme-star star-one">✦</span><span class="theme-star star-two">·</span></span>';
    button.setAttribute('title', theme === 'dark' ? 'Bring on the sunshine' : 'A little night magic');
}
let themeSwitching = false;
function toggleTheme(event) {
    if (themeSwitching) return;
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rect = document.getElementById('themeButton').getBoundingClientRect();
    const x = event?.clientX || rect.left + rect.width / 2;
    const y = event?.clientY || rect.top + rect.height / 2;
    const root = document.documentElement;
    root.style.setProperty('--theme-x', x + 'px');
    root.style.setProperty('--theme-y', y + 'px');
    root.style.setProperty('--theme-radius', Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 'px');
    const update = () => {
        applyTheme(next);
        try { localStorage.setItem('studio-theme', next); } catch (_) {}
    };
    if (document.startViewTransition && !reduced) {
        themeSwitching = true;
        try {
            const transition = document.startViewTransition(update);
            transition.finished.catch(() => {}).finally(() => { themeSwitching = false; });
        } catch (_) { themeSwitching = false; update(); }
    } else {
        if (!reduced) {
            root.classList.add('theme-changing');
            window.setTimeout(() => root.classList.remove('theme-changing'), 650);
        }
        update();
    }
}
function initSiteNavigation() {
    const button = document.getElementById('menuButton');
    const nav = document.getElementById('primaryNav');
    const mobile = window.matchMedia('(max-width: 850px)');
    const setOpen = (open, restoreFocus = false) => {
        nav.classList.toggle('open', open);
        button.setAttribute('aria-expanded', String(open));
        button.innerHTML = open ? 'Close <span aria-hidden="true">×</span>' : 'Menu <span aria-hidden="true">☰</span>';
        nav.inert = mobile.matches && !open;
        if (restoreFocus) button.focus();
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        setOpen(false);
        const target = document.querySelector(link.getAttribute('href'));
        if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    }));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && nav.classList.contains('open')) setOpen(false, true);
    });
    document.addEventListener('click', event => {
        if (nav.classList.contains('open') && !event.target.closest('.site-header')) setOpen(false);
    });
    mobile.addEventListener('change', () => setOpen(false));
    document.getElementById('themeButton').addEventListener('click', toggleTheme);
    const projectsButton = document.getElementById('projectsToggleBtn');
    projectsButton.setAttribute('aria-expanded', 'false');
    projectsButton.setAttribute('aria-controls', 'projectsExtra');
    setOpen(false);
}
