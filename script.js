/* ============================================================
   AMINA NASEEM — ANIMATED INTERACTIVE PORTFOLIO
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- Helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ---------- Preloader ---------- */
  const preloader = $('#preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 400);
  });
  // Fallback in case load already fired
  setTimeout(() => preloader.classList.add('hidden'), 2500);

  /* ---------- Custom Cursor ---------- */
  const cursorDot = $('.cursor-dot');
  const cursorRing = $('.cursor-ring');
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .tag, .project-card, .gallery-item')) {
        cursorRing.classList.add('hover');
      } else {
        cursorRing.classList.remove('hover');
      }
    });
  }

  /* ---------- Matrix Rain Background ---------- */
  const canvas = $('#matrix');
  const ctx = canvas.getContext('2d');
  let matrixCols, fontSize = 16;
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEF#$%&*';

  function resizeMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixCols = Math.ceil(canvas.width / fontSize);
  }
  resizeMatrix();
  window.addEventListener('resize', resizeMatrix);

  const matrixDrops = Array.from({ length: matrixCols || 1 }, () => Math.floor(Math.random() * -50));

  function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < matrixCols; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, matrixDrops[i] * fontSize);
      if (matrixDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        matrixDrops[i] = 0;
      }
      matrixDrops[i]++;
    }
  }
  // Matrix animation (moderate for perf)
  let matrixRunning = true;
  function matrixLoop() {
    if (matrixRunning) drawMatrix();
    requestAnimationFrame(matrixLoop);
  }
  matrixLoop();

  /* ---------- Floating Particles ---------- */
  const particleContainer = $('#particles');
  const PARTICLE_COUNT = 40;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 15) + 's';
    p.style.background = ['#00d4ff', '#00ff88', '#a855f7'][Math.floor(Math.random() * 3)];
    particleContainer.appendChild(p);
  }

  /* ---------- Navbar Scroll ---------- */
  const navbar = $('#navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ---------- Active Nav Link (scroll spy) ---------- */
  const sections = $$('section, header');
  const navLinks = $$('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((sec) => {
      const top = window.scrollY + 100;
      if (top >= sec.offsetTop) {
        current = sec.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  /* ---------- Mobile Menu ---------- */
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ---------- Typed Effect ---------- */
  const roles = [
    'Cybersecurity Analyst',
    'Digital Forensics Investigator',
    'AI Security Researcher',
    'SOC Enthusiast',
    'Threat Hunter'
  ];
  const typedEl = $('#typed');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      typedEl.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
      setTimeout(typeLoop, 80);
    } else {
      typedEl.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(typeLoop, 40);
    }
  }
  typeLoop();

  /* ---------- Scroll Reveal ---------- */
  const revealEls = $$('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Counter Animation ---------- */
  const statNumbers = $$('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const isDecimal = target % 1 !== 0;
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
        }, 16);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach((el) => counterObserver.observe(el));

  /* ---------- Project Filter ---------- */
  const filterBtns = $$('.filter-btn');
  const projectCards = $$('.project-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach((card) => {
        const categories = card.dataset.category;
        const shouldShow = filter === 'all' || (categories && categories.includes(filter));
        card.classList.toggle('hide', !shouldShow);
      });
    });
  });

  /* ---------- Gallery Lightbox ---------- */
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImg');
  $$('.gallery-item a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      lightboxImg.src = link.getAttribute('href');
      lightbox.classList.add('open');
    });
  });
  $('.lightbox-close').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });

  /* ---------- Contact Form ---------- */
  const contactForm = $('#contactForm');
  const formStatus = $('#formStatus');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();
    if (!name || !email || !message) {
      formStatus.textContent = '⚠ Please fill out all required fields.';
      formStatus.style.color = '#ff5f57';
      return;
    }
    const mailto = `mailto:aminanaseem101@gmail.com?subject=${encodeURIComponent(name + ' — Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    formStatus.textContent = '✓ Thank you! Your email client has been opened.';
    formStatus.style.color = 'var(--accent)';
    contactForm.reset();
  });

  /* ---------- Back To Top ---------- */
  const toTop = $('#backToTop');
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Footer Year ---------- */
  $('#year').textContent = new Date().getFullYear();
});
