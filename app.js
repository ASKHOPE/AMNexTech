/* ═══════════════════════════════════════════════
   AMNexTech – app.js
   Pure Vanilla JavaScript — No dependencies
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Footer year ──────────────────────────────
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Header scroll effect ──────────────────────
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', y > 400);
    updateActiveNav();
    animateOnScroll();
  }, { passive: true });

  // ── Scroll to top ─────────────────────────────
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Hamburger / Mobile nav ────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (mobileNav && mobileNav.classList.contains('open')) {
      if (!header.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
      }
    }
  });

  // ── Active Nav highlight ──────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 120) currentId = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
    });
  }

  // ── Scroll animations (lightweight AOS) ──────
  const aosElements = document.querySelectorAll('[data-aos]');

  function animateOnScroll() {
    aosElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('aos-animate');
      }
    });
  }

  // Run once on load
  animateOnScroll();

  // ── Smooth scroll for anchor links ────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = header ? header.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Contact Form Validation ───────────────────
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Simulate submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
          formSuccess.textContent = '✓ Message received! We\'ll get back to you shortly.';
          form.reset();
          setTimeout(() => { formSuccess.textContent = ''; }, 5000);
        }, 1800);
      }
    });

    // Live validation
    ['f-name', 'f-email', 'f-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('blur', () => validateField(el));
        el.addEventListener('input', () => {
          if (el.classList.contains('error')) validateField(el);
        });
      }
    });
  }

  function validateField(el) {
    const id = el.id;
    const val = el.value.trim();
    let errId = '';
    let msg = '';

    if (id === 'f-name') {
      errId = 'err-name';
      if (!val) msg = 'Name is required.';
      else if (val.length < 2) msg = 'Name must be at least 2 characters.';
    } else if (id === 'f-email') {
      errId = 'err-email';
      if (!val) msg = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) msg = 'Please enter a valid email.';
    } else if (id === 'f-message') {
      errId = 'err-message';
      if (!val) msg = 'Message is required.';
      else if (val.length < 10) msg = 'Message must be at least 10 characters.';
    }

    const errEl = document.getElementById(errId);
    if (errEl) errEl.textContent = msg;
    el.classList.toggle('error', !!msg);
    return !msg;
  }

  function validateForm() {
    const fields = ['f-name', 'f-email', 'f-message'];
    let valid = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (el && !validateField(el)) valid = false;
    });
    return valid;
  }

  // ── Typing effect in hero ─────────────────────
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) {
    // Just add a subtle cursor blink to punctuation for polish
  }

  // ── Counter animation for stats ───────────────
  function animateCounter(el, target, suffix = '') {
    const start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(easeOut(progress) * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    let startTime = null;
    requestAnimationFrame(step);
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // Trigger counter when hero stats become visible
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate stat numbers
        const stats = [
          { el: document.querySelectorAll('.stat-num')[0], target: 3, suffix: '+' },
          { el: document.querySelectorAll('.stat-num')[1], target: 4, suffix: '' },
          { el: document.querySelectorAll('.stat-num')[2], target: 100, suffix: '%' },
        ];
        stats.forEach(({ el, target, suffix }) => {
          if (el) animateCounter(el, target, suffix);
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

  // ── Parallax on hero orbs ─────────────────────
  window.addEventListener('mousemove', (e) => {
    const mx = (e.clientX / window.innerWidth - 0.5) * 20;
    const my = (e.clientY / window.innerHeight - 0.5) * 20;
    const orbs = document.querySelectorAll('.hero-orb');
    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 0.4;
      orb.style.transform = `translate(${mx * factor}px, ${my * factor}px)`;
    });
  }, { passive: true });

  // ── Input error style ─────────────────────────
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .form-group input.error,
    .form-group textarea.error {
      border-color: var(--error);
      background: rgba(239, 68, 68, 0.05);
    }
  `;
  document.head.appendChild(styleTag);
});
