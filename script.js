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
    ctx.fillStyle = 'rgba(16, 20, 28, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d4a853';
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
  const PARTICLE_COUNT = 20;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 15) + 's';
    p.style.background = ['#d4a853', '#c97b63', '#b8a9c9'][Math.floor(Math.random() * 3)];
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

  /* ---------- Assistant Widget ---------- */
  const assistantFab = $('#assistantFab');
  const assistantWindow = $('#assistantWindow');
  const assistantClose = $('#assistantClose');
  const assistantBody = $('#assistantBody');
  const assistantQuick = $('#assistantQuick');

  const responses = {
    who: "Amina Naseem is a cybersecurity professional from Bahawalnagar, Pakistan, specializing in digital forensics, AI-powered security, and automation engineering. She holds a BS in Cyber Security & Digital Forensics from The Islamia University of Bahawalpur with a CGPA of 3.80/4.00.",
    skills: "Her core skills include:\n- Digital Forensics: Autopsy, Volatility 3, The Sleuth Kit, PhotoRec\n- Security: Wireshark, Nmap, Metasploit, Burp Suite, Snort\n- AI/ML: YOLOv8, LogBERT, CNNs, RAG/LLM, Sentence Transformers\n- Programming: Python, C++, PHP, JavaScript, SQL, Bash\n- Automation Engineering: MCP connectors, n8n workflows, JSON-RPC\n\nShe's currently looking for opportunities to grow her career in SOC, security, automation, and beyond!",
    projects: "She's built 10+ projects including:\n- HawkEye (Final Year Project): AI-powered forensics platform with Autopsy, Volatility 3, and LLM agent\n- Phish Defender: Published research on email phishing detection using ensemble ML\n- Custom YouTube MCP Connector for AI agent orchestration\n- Network IDS using Snort & Suricata\n- Plus forensics labs, web dev projects, and a CVSS calculator",
    education: "BS Cyber Security & Digital Forensics from The Islamia University of Bahawalpur (Sep 2022 - Jun 2026). CGPA: 3.80/4.00. Subjects include Network Security, Digital Forensics, Ethical Hacking, Cryptography, and more.",
    experience: "8 leadership and professional roles:\n- Cyber Security Analyst at PAC Kamra (Jan 2025 - Mar 2026)\n- SOC Intern at Corvit Networks (Aug-Sep 2025)\n- Chairperson, IEEE ComSoc at UCET IUB\n- General Secretary, Center for Cyber Security & Digital Forensics\n- Plus marketing, secretary roles and PHP dev internship at BixiSoft",
    contact: "You can reach Amina at:\n- Email: aminanaseem101@gmail.com\n- Phone: +92 325 1528381\n- LinkedIn: linkedin.com/in/amina-naseem-b25001330\n- Or use the contact form on this page!"
  };

  assistantFab.addEventListener('click', () => {
    assistantWindow.classList.toggle('open');
    if (assistantWindow.classList.contains('open')) {
      assistantBody.scrollTop = assistantBody.scrollHeight;
    }
  });

  assistantClose.addEventListener('click', () => {
    assistantWindow.classList.remove('open');
  });

  function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = 'assistant-msg ' + type;
    msg.textContent = text;
    assistantBody.appendChild(msg);
    assistantBody.scrollTop = assistantBody.scrollHeight;
  }

  assistantQuick.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      const questionMap = {
        who: "Who is Amina?",
        skills: "What are her top skills?",
        projects: "Tell me about her projects",
        education: "What's her education?",
        experience: "What's her experience?",
        contact: "How can I reach her?"
      };
      addMessage(questionMap[q] || q, 'user');
      setTimeout(() => {
        addMessage(responses[q] || "I don't have info on that yet. Try one of the buttons below!", 'bot');
      }, 400);
    });
  });
});
