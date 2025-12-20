// ================================
// NAVIGATION SCROLL EFFECT
// ================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ================================
// MOBILE MENU TOGGLE
// ================================

const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', isActive);
    document.body.classList.toggle('nav-open', isActive);
  });
  
  // Close menu when clicking on a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });
}

// ================================
// DROPDOWN FUNCTIONALITY
// ================================

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.nav-link');
  const menu = dropdown.querySelector('.dropdown-menu');
  
  if (button && menu) {
    // Desktop: hover
    if (window.innerWidth > 768) {
      dropdown.addEventListener('mouseenter', () => {
        button.setAttribute('aria-expanded', 'true');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        button.setAttribute('aria-expanded', 'false');
      });
    }
    
    // Mobile: click
    button.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
        const isExpanded = dropdown.classList.contains('active');
        button.setAttribute('aria-expanded', isExpanded);
      }
    });
  }
});

// ================================
// RESIZE HANDLER
// ================================

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      document.body.classList.remove('nav-open');
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  }, 250);
});