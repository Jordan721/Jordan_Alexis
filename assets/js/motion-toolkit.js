// Presentation enhancements are optional: core navigation and skill lists work without them.
document.addEventListener('DOMContentLoaded', () => {
    initNavigationMotion();
    initSkillPlayground();
});

function initNavigationMotion() {
    const nav = document.getElementById('primaryNav');
    const marker = nav.querySelector('.nav-highlight');
    const links = [...nav.querySelectorAll('a')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let hovered = null;
    const positionMarker = () => {
        const link = hovered || nav.querySelector('a.active');
        links.forEach(item => item.classList.toggle('is-highlighted', item === link));
        if (!link || window.matchMedia('(max-width: 850px)').matches) {
            marker.classList.remove('visible');
            return;
        }
        marker.style.width = link.offsetWidth + 'px';
        marker.style.height = link.offsetHeight + 'px';
        marker.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop}px) rotate(-2deg)`;
        marker.classList.add('visible');
    };
    links.forEach((link, index) => {
        link.style.setProperty('--nav-order', index);
        link.addEventListener('pointerenter', () => { hovered = link; positionMarker(); });
        link.addEventListener('focus', () => { hovered = link; positionMarker(); });
        link.addEventListener('blur', () => { hovered = null; positionMarker(); });
    });
    nav.addEventListener('pointerleave', () => { hovered = null; positionMarker(); });
    new MutationObserver(positionMarker).observe(nav, { subtree: true, attributes: true, attributeFilter: ['aria-current'] });
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(positionMarker).observe(nav);
    window.addEventListener('resize', positionMarker, { passive: true });
    document.fonts?.ready.then(positionMarker);
    const header = document.querySelector('.site-header');
    let framePending = false;
    window.addEventListener('scroll', () => {
        if (framePending) return;
        framePending = true;
        requestAnimationFrame(() => {
            header.classList.toggle('has-scrolled', window.scrollY > 60);
            framePending = false;
        });
    }, { passive: true });
    if (!reduced.matches && header.animate) header.animate([
        { opacity: 0, transform: 'translateY(-15px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 550, easing: 'cubic-bezier(.2,.8,.2,1)' });
    positionMarker();
}

function initSkillPlayground() {
    const section = document.getElementById('arsenal');
    const controls = section.querySelector('.toolkit-controls');
    const cards = [...section.querySelectorAll('.toolkit-card')];
    const stickers = [...section.querySelectorAll('.skill-sticker')];
    const filters = [...section.querySelectorAll('[data-filter]')];
    const search = document.getElementById('toolkitSearch');
    const count = document.getElementById('toolkitResultCount');
    const feedback = document.getElementById('toolkitFeedback');
    const mix = document.getElementById('skillMix');
    const clear = document.getElementById('clearSkillMix');
    const hint = section.querySelector('.workbench-hint');
    const empty = section.querySelector('.toolkit-empty');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const selected = new Map();
    const defaultDetails = new Map(cards.map(card => [card, card.querySelector('details')?.open || false]));
    let category = 'all';
    let searchActive = false;
    let searchTimer;

    const announce = message => { feedback.textContent = message; };
    const animate = (element, frames, options) => {
        if (!reduced.matches && element.animate) element.animate(frames, options);
    };
    function renderCards() {
        const query = search.value.trim().toLocaleLowerCase();
        const isSearching = Boolean(query);
        if (isSearching && !searchActive) {
            cards.forEach(card => defaultDetails.set(card, card.querySelector('details')?.open || false));
        }
        searchActive = isSearching;
        let total = 0;
        let visibleIndex = 0;
        cards.forEach(card => {
            const allowed = category === 'all' || category === card.dataset.discipline;
            const buttons = [...card.querySelectorAll('.skill-sticker')];
            let matches = 0;
            buttons.forEach(button => {
                const match = !query || button.textContent.toLocaleLowerCase().includes(query);
                button.hidden = !match;
                if (match) matches++;
            });
            const wasHidden = card.hidden;
            card.hidden = !allowed || matches === 0;
            const details = card.querySelector('details');
            if (details) {
                if (query) {
                    const extraMatches = [...details.querySelectorAll('.skill-sticker')].some(button => !button.hidden);
                    details.hidden = !extraMatches;
                    details.open = extraMatches;
                } else {
                    details.hidden = false;
                    if (!isSearching) details.open = defaultDetails.get(card);
                }
            }
            card.querySelector('.toolkit-card-count').textContent = `${matches} skill${matches === 1 ? '' : 's'}`;
            if (!card.hidden) {
                total += matches;
                if (wasHidden) animate(card, [
                    { opacity: 0, translate: '0 14px', scale: '.98' },
                    { opacity: 1, translate: '0 0', scale: '1' }
                ], { duration: 330, delay: visibleIndex * 35, fill: 'backwards', easing: 'ease-out' });
                visibleIndex++;
            }
        });
        count.textContent = `${total} of ${stickers.length} skills · ${visibleIndex} discipline${visibleIndex === 1 ? '' : 's'}`;
        empty.hidden = total > 0;
        filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
        return total;
    }
    function renderMix() {
        mix.replaceChildren();
        for (const [name, discipline] of selected) {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'pinned-skill';
            chip.dataset.discipline = discipline;
            chip.setAttribute('aria-label', `Remove ${name} from your mix`);
            const label = document.createElement('span');
            label.textContent = name;
            const cross = document.createElement('span');
            cross.textContent = '×';
            cross.setAttribute('aria-hidden', 'true');
            chip.append(label, cross);
            chip.addEventListener('click', () => {
                const oldIndex = [...mix.children].indexOf(chip);
                selected.delete(name);
                renderMix();
                announce(`${name} removed. ${selected.size} of 5 skills pinned.`);
                const nextChip = mix.children[Math.min(oldIndex, mix.children.length - 1)];
                (nextChip || search).focus({ preventScroll: true });
            });
            mix.append(chip);
        }
        stickers.forEach(button => button.setAttribute('aria-pressed', String(selected.has(button.textContent.trim()))));
        hint.hidden = selected.size > 0;
        clear.hidden = selected.size === 0;
        section.querySelector('.skill-workbench').classList.toggle('has-skills', selected.size > 0);
    }
    stickers.forEach(button => button.addEventListener('click', () => {
        const name = button.textContent.trim();
        if (selected.has(name)) {
            selected.delete(name);
            announce(`${name} removed. ${selected.size} of 5 skills pinned.`);
        } else {
            if (selected.size >= 5) {
                announce('Your mix has 5 skills. Unpin one to make room for another.');
                return;
            }
            selected.set(name, button.dataset.discipline);
            announce(`${name} pinned. ${selected.size} of 5 skills in your mix.`);
        }
        renderMix();
        const added = mix.lastElementChild;
        if (selected.has(name) && added) animate(added, [
            { opacity: 0, transform: 'translateY(-16px) rotate(-12deg) scale(1.15)' },
            { opacity: 1, transform: 'translateY(0) rotate(-2deg) scale(1)' }
        ], { duration: 350, easing: 'cubic-bezier(.2,.9,.3,1.2)' });
    }));
    filters.forEach(button => button.addEventListener('click', () => {
        window.clearTimeout(searchTimer);
        category = button.dataset.filter;
        const total = renderCards();
        announce(`${total} skills shown in ${button.textContent}.`);
    }));
    search.addEventListener('input', () => {
        const total = renderCards();
        window.clearTimeout(searchTimer);
        searchTimer = window.setTimeout(() => announce(`${total} matching skills.`), 250);
    });
    clear.addEventListener('click', () => {
        window.clearTimeout(searchTimer);
        selected.clear(); renderMix(); announce('Your workbench is clear. Pick a new mix.'); search.focus({ preventScroll: true });
    });
    document.getElementById('resetToolkit').addEventListener('click', () => {
        window.clearTimeout(searchTimer);
        search.value = ''; category = 'all'; selected.clear();
        defaultDetails.forEach((_, card) => defaultDetails.set(card, false));
        renderMix(); renderCards(); announce('Playground reset. All skills are showing.');
    });
    controls.hidden = false;
    renderCards(); renderMix();
}
