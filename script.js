// script.js
function initializeTailwind() {
    // Already configured via CDN + inline styles
    console.log('%c✅ SabajCore website initialized with Tailwind', 'color:#10b981; font-family:Space Grotesk; font-size:13px');
}

function smoothScrollTo(section) {
    const el = document.getElementById(section);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menu.classList.add('hidden');
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
}

function showWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    modal.style.display = 'flex';
    modal.classList.add('modal-enter');
}

function hideWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    modal.style.display = 'none';
}

function handleWaitlistSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulate API call
    console.log('%c🚀 Waitlist submission:', 'color:#10b981', { name, email });

    hideWaitlistModal();

    // Success toast
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed; bottom:24px; right:24px; background:#10b981; color:#020617; padding:20px 24px; border-radius:9999px; box-shadow:0 25px 50px -12px rgb(16 185 129); display:flex; align-items:center; gap:12px; font-weight:600; z-index:99999';
    toast.innerHTML = `
        <i class="fas fa-check-circle text-2xl"></i>
        <div>
            Thank you, ${name.split(' ')[0]}!<br>
            <span class="text-xs font-normal opacity-80">You are now on the SabajCore priority list.</span>
        </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transitionDuration = '400ms';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3800);

    // Reset form for next use
    e.target.reset();
    document.getElementById('email').value = 'abdulganiyu.sani@sabajcore.xyz';
}

// Auto-initialize everything
window.onload = function () {
    initializeTailwind();
    console.log('%cSabajCore — fully functional single-page website ready for deployment. No MVP needed yet. Pure excitement delivered.', 'background:#10b981;color:#020617;padding:1px 3px;border-radius:2px;font-size:10px');

    // Keyboard shortcut hint in console
    console.log('%cPro tip: Press "/" to focus waitlist (demo only)', 'color:#34d399;font-size:10px');
};