// ================================
// LANGLINK MAIN JAVASCRIPT
// ================================

console.log('🚀 LangLink loaded successfully!');

// Import navigation
{{ $nav := resources.Get "js/navigation.js" }}
{{ $nav.Content | safeJS }}

// ================================
// READY STATE
// ================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM fully loaded');
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});