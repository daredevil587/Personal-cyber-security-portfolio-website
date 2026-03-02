/* ============================================
   UTTAM YADAV — CYBER SECURITY PORTFOLIO
   main.js
   ============================================ */

/**
 * showPage — hides all pages, shows the target page
 * @param {string} pageId  e.g. 'home', 'about', 'skills'
 */
function showPage(pageId) {
  // 1. Hide every page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // 2. Show the target page
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // 3. Update nav active highlight
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  // 4. Close mobile menu
  document.getElementById('navLinks').classList.remove('open');

  // 5. Trigger scroll-reveal animations
  setTimeout(triggerReveals, 80);
}

/**
 * showCertDetail — opens a cert detail sub-page
 * Keeps CERTIFICATIONS highlighted in the nav
 * @param {string} certId  e.g. 'deloitte-cyber'
 */
function showCertDetail(certId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById('page-cert-' + certId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Keep CERTIFICATIONS nav item highlighted
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const certsLink = document.querySelector('[data-page="certs"]');
  if (certsLink) certsLink.classList.add('active');

  setTimeout(triggerReveals, 80);
}

/**
 * toggleMenu — opens/closes the mobile hamburger menu
 */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/**
 * triggerReveals — animates .reveal elements in the active page
 * Staggers each element by 100ms
 */
function triggerReveals() {
  const reveals = document.querySelectorAll('.page.active .reveal');
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 100);
  });
}

// ── INITIALISE ON PAGE LOAD ──
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});
