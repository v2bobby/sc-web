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
}

function hideWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    modal.style.display = 'none';
}

function handleWaitlistSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    hideWaitlistModal();
    
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed; bottom:24px; right:24px; background:#10b981; color:#020617; padding:20px 24px; border-radius:9999px; box-shadow:0 25px 50px -12px rgb(16 185 129); display:flex; align-items:center; gap:12px; font-weight:600; z-index:99999';
    toast.innerHTML = `
        <i class="fas fa-check-circle text-2xl"></i>
        <div>
            Thank you, ${name.split(' ')[0]}!<br>
            <span class="text-xs font-normal opacity-80">You are now on the priority list.</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'all 0.4s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
    
    e.target.reset();
}

window.onload = function() {
    console.log('%cSabajCore website loaded successfully.', 'color:#10b981; font-size:12px');
};
