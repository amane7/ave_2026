/* ===========================================================
   ものづくりアベンジャーズ - Landing Page Script
   =========================================================== */

(() => {
  'use strict';

  /* -----------------------------------------------------------
     1) Header shadow on scroll
  ------------------------------------------------------------ */
  const header = document.getElementById('siteHeader');
  const onScrollHeader = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* -----------------------------------------------------------
     2) Mobile nav toggle
  ------------------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const siteNav   = document.getElementById('siteNav');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    siteNav.classList.toggle('active');
  });
  // close after clicking
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('active');
      siteNav.classList.remove('active');
    });
  });

  /* -----------------------------------------------------------
     3) Reveal on scroll (IntersectionObserver)
  ------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => io.observe(el));

  /* -----------------------------------------------------------
     4) Stats counter animation
  ------------------------------------------------------------ */
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // easeOutQuad
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(eased * target);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      statIO.unobserve(el);
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statIO.observe(el));

  /* -----------------------------------------------------------
     5) Smooth anchor scroll with header offset
  ------------------------------------------------------------ */
  const headerHeight = () => header.offsetHeight;
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight() + 2;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* -----------------------------------------------------------
     6) Parallax for hero glow (subtle)
  ------------------------------------------------------------ */
  const glow = document.querySelector('.hero-glow');
  if (glow) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  }
})();
