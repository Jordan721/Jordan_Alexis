// Shared dialog management preserves focus and scroll when program details open over the gallery.
const dialogStack = [];
let dialogOriginalOverflow = '';
function showPortfolioDialog(id) {
    const modal = document.getElementById(id);
    if (!modal || dialogStack.some(entry => entry.modal === modal)) return;
    if (!dialogStack.length) dialogOriginalOverflow = document.body.style.overflow;
    const states = [...document.body.children].filter(el => el !== modal && el.tagName !== 'SCRIPT').map(el => [el, el.inert]);
    dialogStack.push({ modal, focus: document.activeElement, states });
    states.forEach(([el]) => { el.inert = true; });
    modal.inert = false;
    modal.style.zIndex = String(1000 + dialogStack.length * 10);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    (modal.querySelector('.modal-close') || modal).focus({ preventScroll: true });
}
function hidePortfolioDialog(id) {
    const entry = dialogStack.at(-1);
    if (!entry || entry.modal.id !== id) return;
    dialogStack.pop();
    entry.modal.classList.remove('active');
    entry.modal.style.zIndex = '';
    entry.states.forEach(([el, inert]) => { el.inert = inert; });
    document.body.style.overflow = dialogStack.length ? 'hidden' : dialogOriginalOverflow;
    if (entry.focus?.isConnected && !entry.focus.closest('[hidden]')) entry.focus.focus({ preventScroll: true });
}
function openResumeModal() { showPortfolioDialog('resumeModal'); }
function closeResumeModal() { hidePortfolioDialog('resumeModal'); }
function openCertificatesModal() {
    window.credentialGallery?.showCollection(false);
    showPortfolioDialog('certificatesModal');
}
function closeCertificatesModal() {
    hidePortfolioDialog('certificatesModal');
    if (!document.getElementById('certificatesModal').classList.contains('active')) window.credentialGallery?.releasePreview();
}
function openYearUpInfoModal() { showPortfolioDialog('yearUpInfoModal'); }
function closeYearUpInfoModal() { hidePortfolioDialog('yearUpInfoModal'); }
function openCourseInfoModal() { showPortfolioDialog('courseInfoModal'); }
function closeCourseInfoModal() { hidePortfolioDialog('courseInfoModal'); }
function openITSupportInfoModal() { showPortfolioDialog('itSupportInfoModal'); }
function closeITSupportInfoModal() { hidePortfolioDialog('itSupportInfoModal'); }
function toggleCourseDetails(element) {
    const details = element.parentElement.querySelector('.course-module-details');
    const expanded = element.classList.toggle('expanded');
    details.classList.toggle('expanded', expanded);
    element.setAttribute('aria-expanded', String(expanded));
}
document.addEventListener('keydown', event => {
    const entry = dialogStack.at(-1);
    if (!entry) return;
    if (event.key === 'Escape') {
        event.preventDefault();
        if (entry.modal.id === 'certificatesModal') closeCertificatesModal();
        else hidePortfolioDialog(entry.modal.id);
    }
    if (event.key !== 'Tab') return;
    const items = [...entry.modal.querySelectorAll('button:not([disabled]), a[href], input, summary, object, [tabindex="0"]')]
        .filter(el => !el.closest('[hidden]') && el.getClientRects().length);
    const first = items[0], last = items.at(-1);
    if (!first) { event.preventDefault(); entry.modal.focus(); return; }
    if (event.shiftKey && (document.activeElement === first || !items.includes(document.activeElement))) {
        event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !items.includes(document.activeElement))) {
        event.preventDefault(); first.focus();
    }
});
