// Initialize Lucide icons
lucide.createIcons();
// Mobile menu toggle
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobile-nav').classList.toggle('open', menuOpen);
  const icon = document.getElementById('menu-icon');
  icon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
  lucide.createIcons();
}
function closeMenu() {
  menuOpen = false;
  document.getElementById('mobile-nav').classList.remove('open');
  const icon = document.getElementById('menu-icon');
  icon.setAttribute('data-lucide', 'menu');
  lucide.createIcons();
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
