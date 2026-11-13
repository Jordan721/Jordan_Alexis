// Shared inline disclosures keep their controls in view when content collapses.
function preserveDisclosurePosition(control, update) {
    const top = control.getBoundingClientRect().top;
    update();
    control.focus({
        preventScroll: true
    });
    requestAnimationFrame(() => {
        window.scrollBy({
            top: control.getBoundingClientRect().top - top,
            behavior: 'instant'
        });
    });
}

function setDisclosureButton(button, label, expanded) {
    button.classList.add('disclosure-control');
    button.setAttribute('aria-expanded', String(expanded));
    button.replaceChildren();
    const text = document.createElement('span');
    text.textContent = label;
    const icon = document.createElement('span');
    icon.className = 'disclosure-chevron';
    icon.setAttribute('aria-hidden', 'true');
    button.append(text, icon);
}

function updateDisclosureLabels() {
    document.querySelectorAll('.toolkit-card details, .journey-more, .project-case-study').forEach(details => {
        const summary = details.querySelector('summary');
        let label = details.open ? 'Read less' : 'Read more';
        if (details.closest('.toolkit-card')) {
            const card = details.closest('.toolkit-card');
            const total = [...card.querySelectorAll('.skill-sticker')].filter(item => !item.hidden).length;
            label = details.open ? 'Show fewer skills' : `Show all ${total} skills`;
        } else if (details.classList.contains('project-case-study')) {
            label += details.open ? ' about this workflow' : ' about the data workflow';
        } else {
            label += ' about this role';
        }
        // Native summary already exposes its expanded state to assistive technology.
        summary.classList.add('disclosure-control');
        summary.replaceChildren();
        const text = document.createElement('span');
        text.textContent = label;
        const icon = document.createElement('span');
        icon.className = 'disclosure-chevron';
        icon.setAttribute('aria-hidden', 'true');
        summary.append(text, icon);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const disclosures = document.querySelectorAll('.toolkit-card details, .journey-more, .project-case-study');
    disclosures.forEach(details => {
        const summary = details.querySelector('summary');
        summary.addEventListener('click', () => {
            if (!details.open) return;
            const top = summary.getBoundingClientRect().top;
            requestAnimationFrame(() => {
                summary.focus({
                    preventScroll: true
                });
                window.scrollBy({
                    top: summary.getBoundingClientRect().top - top,
                    behavior: 'instant'
                });
            });
        });
        details.addEventListener('toggle', updateDisclosureLabels);
    });
    updateDisclosureLabels();
    document.querySelectorAll('.course-module.expandable').forEach((control, index) => {
        const content = control.parentElement.querySelector('.course-module-details');
        if (!content) return;
        if (!content.id) content.id = `course-content-${index + 1}`;
        control.setAttribute('role', 'button');
        control.tabIndex = 0;
        control.setAttribute('aria-controls', content.id);
        control.setAttribute('aria-expanded', String(control.classList.contains('expanded')));
        control.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                control.click();
            }
        });
    });
});
