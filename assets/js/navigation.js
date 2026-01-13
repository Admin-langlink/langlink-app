// ================================
// NAVIGATION INTELLIGENTE
// ================================

// Variables
const header = document.querySelector('.navbar');
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.body;

let lastScroll = 0;
let isMenuOpen = false;

// ================================
// HEADER INTELLIGENT (hide on scroll)
// ================================

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll vers le bas - cacher le header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut - montrer le header
            header.style.transform = 'translateY(0)';
            header.classList.add('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ================================
// MENU MOBILE
// ================================

// Ouvrir/Fermer le menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
    if (burgerMenu) burgerMenu.classList.add('active');
    body.classList.add('menu-open');
    if (burgerMenu) burgerMenu.setAttribute('aria-expanded', 'true');
    isMenuOpen = true;
}

function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    if (burgerMenu) burgerMenu.classList.remove('active');
    body.classList.remove('menu-open');
    if (burgerMenu) burgerMenu.setAttribute('aria-expanded', 'false');
    isMenuOpen = false;
}

// Event listeners
if (burgerMenu) {
    burgerMenu.addEventListener('click', toggleMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}

// Fermer le menu au clic sur un lien
if (mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Fermer avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
    }
});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        }
    });
});

// ================================
// PAGE ACTIVE
// ================================

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link, #mobileMenu a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});
