// ==========================================
// LANGLINK NAVIGATION INTELLIGENTE
// ==========================================

(function() {
    'use strict';
    
    // === VARIABLES ===
    const navbar = document.querySelector('.navbar');
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    let lastScrollTop = 0;
    let scrollThreshold = 100;
    
    // === HEADER INTELLIGENT (Hide on scroll down, show on scroll up) ===
    function handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ajouter classe scrolled pour l'ombre
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Cacher/Montrer le header selon la direction du scroll
        if (scrollTop > scrollThreshold) {
            if (scrollTop > lastScrollTop && !mobileMenu.classList.contains('active')) {
                // Scroll vers le bas ET menu fermé → Cacher
                navbar.classList.add('header-hidden');
            } else {
                // Scroll vers le haut OU menu ouvert → Montrer
                navbar.classList.remove('header-hidden');
            }
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
    
    // Throttle pour performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleScroll);
    });
    
    // ================================
// MENU MOBILE OPTIMISÉ
// ================================

const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.body;

// Ouvrir/Fermer le menu
function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    burgerMenu.classList.add('active');
    body.classList.add('menu-open');
    burgerMenu.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    burgerMenu.classList.remove('active');
    body.classList.remove('menu-open');
    burgerMenu.setAttribute('aria-expanded', 'false');
}

// Event listeners
burgerMenu?.addEventListener('click', toggleMenu);
menuOverlay?.addEventListener('click', closeMenu);

// Fermer le menu au clic sur un lien
const menuLinks = mobileMenu?.querySelectorAll('a');
menuLinks?.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
    }
});
    
    // === INDICATEUR DE PAGE ACTIVE ===
    function highlightActivePage() {
        const currentPath = window.location.pathname;
        const menuLinks = document.querySelectorAll('.mobile-menu-item, nav a');
        
        menuLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            
            if (currentPath === linkPath || 
                (linkPath !== '/' && currentPath.startsWith(linkPath))) {
                link.classList.add('active-page');
            }
        });
    }
    
    // === SMOOTH SCROLL POUR LES ANCRES ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorer les liens sans destination ou juste "#"
            if (!href || href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Fermer le menu mobile si ouvert
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
                
                // Scroll smooth
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // === INITIALISATION ===
    document.addEventListener('DOMContentLoaded', function() {
        highlightActivePage();
    });
    
})();
