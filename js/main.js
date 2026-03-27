/* ============================================
   CRNTech — main.js
   ============================================ */

// --- Scroll reveal (IntersectionObserver) ---
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
})();


// --- Mobile nav toggle ---
(function initNav() {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    const expanded = nav.classList.contains('nav--open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // Close nav when a link is clicked (mobile)
  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();


// --- Subtle nav shadow on scroll ---
(function initNavShadow() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const update = () => {
    if (window.scrollY > 8) {
      nav.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
    } else {
      nav.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
