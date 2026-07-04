/* ========== Typewriter Effect ========== */
const typingElement = document.getElementById('typingText');
const phrases = [
  'Computer Science Engineering Student',
  'Aspiring Full-Stack Developer',
  'Web Developer',
  'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting && charIndex <= currentPhrase.length) {
    typingElement.textContent = currentPhrase.substring(0, charIndex);
    charIndex++;
    
    if (charIndex > currentPhrase.length) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
        typeEffect();
      }, 2000);
      return;
    }
    
    setTimeout(typeEffect, 80);
  } else if (isDeleting && charIndex >= 0) {
    typingElement.textContent = currentPhrase.substring(0, charIndex);
    charIndex--;
    
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 400);
      return;
    }
    
    setTimeout(typeEffect, 40);
  }
}

typeEffect();

/* ========== Mobile Menu ========== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* ========== Active Nav Link ========== */
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  const scrollY = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

/* ========== Scroll Reveal ========== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

const revealElements = document.querySelectorAll(
  '.section-header, .carousel-view, .carousel-nav, .about-content, .about-sidebar, .contact-info, .contact-form, .hero-left, .skills-card-header, .skill-panel, .cert-carousel-wrap, .resume-card'
);

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ========== Contact Form ========== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formName = document.getElementById('formName');
    const formEmail = document.getElementById('formEmail');
    const formMessage = document.getElementById('formMessage');
    
    if (formName.value && formEmail.value && formMessage.value) {
      const submitBtn = contactForm.querySelector('.btn-primary');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = '#FF6F59';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        contactForm.reset();
      }, 3000);

      showToast('Message sent successfully! I\'ll get back to you soon.');
    }
  });
}

/* ========== Toast Notification ========== */
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ========== Certificate Premium Carousel ========== */
const certData = [
  { file: 'acc1.jpeg', title: 'Digital Skills User Experience', org: 'Accenture', cat: 'Web Development', desc: 'Comprehensive certification covering user experience design principles, usability testing, and digital skills essential for creating intuitive web interfaces.' },
  { file: 'c1.jpeg', title: 'Fluency AI Capabilities and Limitations', org: 'Claude AI', cat: 'AI', desc: 'In-depth understanding of AI capabilities, limitations, ethical considerations, and best practices for responsible AI deployment.' },
  { file: 'c2.jpeg', title: 'AI Fluency for Educators', org: 'Claude AI', cat: 'AI', desc: 'Certification focused on integrating AI tools and concepts into educational environments to enhance teaching and learning outcomes.' },
  { file: 'c3.jpeg', title: 'AI Fluency for Non-Profits', org: 'Claude AI', cat: 'AI', desc: 'Training on leveraging AI technologies to drive social impact, optimize operations, and scale non-profit initiatives effectively.' },
  { file: 'c4.jpeg', title: 'AI Fluency for Students', org: 'Claude AI', cat: 'AI', desc: 'Foundational AI literacy program designed to equip students with practical knowledge of AI concepts and applications.' },
  { file: 'c5.jpeg', title: 'AI Fluency Frameworks and Foundations', org: 'Claude AI', cat: 'AI', desc: 'Comprehensive exploration of AI frameworks, core foundations, and architectural patterns used in modern AI systems.' },
  { file: 'c6.jpeg', title: 'Claude 101', org: 'Claude AI', cat: 'AI', desc: 'Introductory certification covering Claude AI fundamentals, capabilities, and practical usage patterns for various applications.' },
  { file: 'c7.jpeg', title: 'Claude Code in Action', org: 'Claude AI', cat: 'AI', desc: 'Hand-on certification demonstrating Claude AI\'s code generation, analysis, and development assistance capabilities.' },
  { file: 'c8.jpeg', title: 'Claude with Amazon Bedrock', org: 'Claude AI', cat: 'AI', desc: 'Integration certification for deploying and managing Claude AI models on Amazon Bedrock platform for scalable AI solutions.' },
  { file: 'c9.jpeg', title: 'Claude with Google Vertex AI', org: 'Claude AI', cat: 'AI', desc: 'Certification covering the deployment and optimization of Claude AI models using Google Vertex AI platform.' },
  { file: 'c10.jpeg', title: 'Claude with Anthropic AI', org: 'Claude AI', cat: 'AI', desc: 'Advanced certification on Anthropic\'s Claude AI architecture, safety features, and enterprise integration patterns.' },
  { file: 'c11.jpeg', title: 'Introduction to AI Agents Skills', org: 'Claude AI', cat: 'AI', desc: 'Foundational certification on building, training, and deploying intelligent AI agents for autonomous task execution.' },
  { file: 'c12.jpeg', title: 'Introduction to Claude Co-Work', org: 'Claude AI', cat: 'AI', desc: 'Certification on collaborative AI workflows using Claude Co-Work for enhanced productivity and team efficiency.' },
  { file: 'c13.jpeg', title: 'Introduction to Model Context Protocol', org: 'Claude AI', cat: 'AI', desc: 'Training on the Model Context Protocol for standardizing AI model interactions and contextual data exchange.' },
  { file: 'c14.jpeg', title: 'Introduction to Sub-agents', org: 'Claude AI', cat: 'AI', desc: 'Certification covering the design and implementation of hierarchical sub-agent systems for complex AI workflows.' },
  { file: 'c15.jpeg', title: 'Model Context Protocol Advanced Topics', org: 'Claude AI', cat: 'AI', desc: 'Advanced certification exploring complex MCP patterns, optimization strategies, and real-world implementation scenarios.' },
  { file: 'c16.jpeg', title: 'Teaching the AI Fluency Framework', org: 'Claude AI', cat: 'AI', desc: 'Certification for educators on delivering the AI Fluency Framework curriculum effectively across diverse learning environments.' },
  { file: 'f1.jpeg', title: 'Legacy Responsive Web Design V8', org: 'FreeCodeCamp', cat: 'Web Development', desc: 'Completion of FreeCodeCamp\'s legacy responsive web design curriculum covering HTML5, CSS3, and responsive layout techniques.' },
  { file: 'f2.jpeg', title: 'Responsive Web Design', org: 'FreeCodeCamp', cat: 'Web Development', desc: 'Modern responsive web design certification covering Flexbox, CSS Grid, media queries, and accessible web development practices.' },
  { file: 'g1.jpeg', title: 'Student Report Card Management System in Java', org: 'Great Learning', cat: 'Programming', desc: 'Java project-based certification demonstrating OOP principles, data structures, and file I/O through a report card management system.' },
  { file: 'g2.jpeg', title: 'Visual Web Game in Java', org: 'Great Learning', cat: 'Programming', desc: 'Certification on building interactive visual web games using Java, covering game loops, rendering, and user input handling.' },
  { file: 'h1.jpeg', title: 'Java Completion', org: 'HackerRank', cat: 'Programming', desc: 'HackerRank certification validating proficiency in Java programming including data structures, algorithms, and problem-solving.' },
  { file: 'i1.jpeg', title: 'Java Programming', org: 'Infosys', cat: 'Programming', desc: 'Professional certification from Infosys covering core Java concepts, object-oriented programming, and enterprise Java development.' },
  { file: 'l2.jpeg', title: 'Python Fundamentals', org: 'Infosys', cat: 'Programming', desc: 'Infosys certification on Python programming fundamentals including data types, control flow, functions, and standard libraries.' },
  { file: 'm1.jpeg', title: 'Secure Storage for Azure Files and Azure Blob Storage', org: 'Microsoft Applied Skills', cat: 'Cloud', desc: 'Microsoft Applied Skills certification on implementing secure storage solutions using Azure Files and Azure Blob Storage.' },
  { file: 'm2.jpeg', title: 'Create and Manage Canvas Apps with Power Apps', org: 'Microsoft', cat: 'Cloud', desc: 'Microsoft certification on building and managing custom canvas applications using the Power Apps platform for business solutions.' },
  { file: 'ncc.jpeg', title: 'Basics of Cybersecurity', org: 'NCC', cat: 'Cybersecurity', desc: 'Foundational cybersecurity certification covering threat landscapes, security best practices, network protection, and risk management.' },
  { file: 'nptel.jpeg', title: 'Object-Oriented Programming in C++', org: 'NPTEL', cat: 'Programming', desc: 'NPTEL certification on C++ object-oriented programming covering classes, inheritance, polymorphism, templates, and STL.' },
  { file: 'sc1.jpeg', title: 'Java Mastering the Fundamentals', org: 'Scala Topics', cat: 'Programming', desc: 'Comprehensive Java fundamentals certification covering syntax, data structures, exception handling, and core libraries.' },
  { file: 'sc2.jpeg', title: 'Unlocking the Power of JavaScript', org: 'Scala Topics', cat: 'Web Development', desc: 'JavaScript certification covering modern ES6+ features, DOM manipulation, asynchronous programming, and web APIs.' },
  { file: 'tcs1.jpeg', title: 'Communication Skills', org: 'TCS', cat: 'Professional Skills', desc: 'Professional communication skills certification covering verbal, written, and interpersonal communication for workplace effectiveness.' },
  { file: 'u1.jpeg', title: 'CSS and JavaScript Crash Course', org: 'Udemy', cat: 'Web Development', desc: 'Intensive crash course covering CSS styling, layout techniques, and JavaScript fundamentals for rapid web development.' },
  { file: 'u2.jpeg', title: 'Java Object-Oriented Programming with Exercises 2026', org: 'Udemy', cat: 'Programming', desc: 'Hands-on Java OOP certification with practical exercises covering design patterns, inheritance, polymorphism, and encapsulation.' },
  { file: 'u3.jpeg', title: 'Learn Figma UI UX Design Masterclass', org: 'Udemy', cat: 'Web Development', desc: 'Comprehensive Figma masterclass covering UI/UX design principles, prototyping, design systems, and collaborative workflows.' },
  { file: 'u4.jpeg', title: 'HTML and CSS for Beginners', org: 'Udemy', cat: 'Web Development', desc: 'Beginner-friendly HTML and CSS certification covering semantic markup, styling, responsive design, and web fundamentals.' }
];

/* ---------- Carousel ---------- */
const track = document.getElementById('certCarouselTrack');
const view = document.getElementById('certCarouselView');
const arrowLeft = document.getElementById('certArrowLeft');
const arrowRight = document.getElementById('certArrowRight');

let cards = [];
let currentPos = 0;
let cardWidth = 0;
let cardsPerView = 3;
let maxPos = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartPos = 0;
let dragDelta = 0;

function getCardsPerView() {
  const w = view.offsetWidth;
  if (w < 500) return 1;
  if (w < 800) return 2;
  return 3;
}

function buildTrack() {
  track.innerHTML = '';
  const originals = certData.map((d, i) => createCard(d, i));

  const total = certData.length;
  const clonesBefore = [];
  const clonesAfter = [];

  for (let i = 0; i < total; i++) {
    clonesAfter.push(createCard(certData[i], i, true));
  }
  for (let i = total - 1; i >= 0; i--) {
    clonesBefore.push(createCard(certData[i], i, true));
  }

  cards = [...clonesBefore, ...originals, ...clonesAfter];
  cards.forEach(c => track.appendChild(c.el));
}

function createCard(data, index, isClone = false) {
  const card = document.createElement('div');
  card.className = 'cert-card';
  card.innerHTML = `
    <img class="cert-card-img" src="certificates/${data.file}" alt="${data.title}" loading="lazy">
    <div class="cert-card-body">
      <span class="cert-card-title">${data.title}</span>
      <span class="cert-card-org">${data.org}</span>
      <span class="cert-card-badge">${data.cat}</span>
    </div>
  `;
  const realIndex = isClone ? index : index;
  card.addEventListener('click', () => openCertModal(realIndex));
  return { el: card, dataIndex: index };
}

function updateLayout() {
  cardsPerView = getCardsPerView();
  const gap = 20;
  const totalGap = gap * (cardsPerView - 1);
  cardWidth = (view.offsetWidth - totalGap) / cardsPerView;

  cards.forEach(c => {
    c.el.style.flex = `0 0 ${cardWidth}px`;
  });

  maxPos = certData.length - cardsPerView;
  const cloneOffset = certData.length;
  currentPos = cloneOffset;
  applyTransform(false);
}

function applyTransform(animate = true) {
  if (!animate) track.style.transition = 'none';
  else track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  const gap = 20;
  const offset = currentPos * (cardWidth + gap);
  track.style.transform = `translateX(-${offset}px)`;

  if (!animate) {
    track.offsetHeight;
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  }
}

function snapToValid() {
  const total = certData.length;
  const cloneOffset = total;

  if (currentPos < 0) currentPos = cloneOffset - (cardsPerView - 1);
  if (currentPos > cloneOffset + total - cardsPerView) currentPos = cloneOffset;

  applyTransform();
}

function slideLeft() {
  if (currentPos <= 0) {
    currentPos = certData.length;
    applyTransform(false);
    requestAnimationFrame(() => {
      currentPos--;
      applyTransform();
    });
  } else {
    currentPos--;
    applyTransform();
  }
}

function slideRight() {
  const max = certData.length * 2;
  if (currentPos >= max - cardsPerView) {
    currentPos = certData.length - cardsPerView;
    applyTransform(false);
    requestAnimationFrame(() => {
      currentPos++;
      applyTransform();
    });
  } else {
    currentPos++;
    applyTransform();
  }
}

/* ---------- Drag / Swipe ---------- */
function onDragStart(x) {
  isDragging = true;
  dragStartX = x;
  dragStartPos = currentPos;
  track.classList.add('dragging');
  track.style.transition = 'none';
}

function onDragMove(x) {
  if (!isDragging) return;
  const gap = 20;
  const dx = x - dragStartX;
  dragDelta = dx;
  const offset = (dragStartPos * (cardWidth + gap)) - dx;
  track.style.transform = `translateX(-${offset}px)`;
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  track.classList.remove('dragging');

  const threshold = cardWidth * 0.25;
  if (dragDelta < -threshold) slideRight();
  else if (dragDelta > threshold) slideLeft();
  else applyTransform();

  dragDelta = 0;
}

/* Mouse */
track.addEventListener('mousedown', (e) => {
  e.preventDefault();
  onDragStart(e.clientX);
});
document.addEventListener('mousemove', (e) => {
  if (isDragging) onDragMove(e.clientX);
});
document.addEventListener('mouseup', onDragEnd);

/* Touch */
track.addEventListener('touchstart', (e) => {
  onDragStart(e.touches[0].clientX);
}, { passive: true });
track.addEventListener('touchmove', (e) => {
  onDragMove(e.touches[0].clientX);
}, { passive: true });
track.addEventListener('touchend', onDragEnd, { passive: true });

/* Arrow buttons */
arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

/* Keyboard */
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && isElementVisible(view)) slideLeft();
  if (e.key === 'ArrowRight' && isElementVisible(view)) slideRight();
});

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

/* Init + Resize */
buildTrack();
setTimeout(updateLayout, 50);
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateLayout, 200);
});
window.addEventListener('load', updateLayout);

/* ---------- Detail Modal ---------- */
const certModal = document.getElementById('certModal');
const certModalOverlay = document.getElementById('certModalOverlay');
const certModalInner = document.getElementById('certModalInner');
const certModalClose = document.getElementById('certModalClose');
let modalOpenIndex = 0;

function openCertModal(index) {
  modalOpenIndex = index;
  const d = certData[index];
  certModalInner.innerHTML = `
    <img class="cert-modal-img" src="certificates/${d.file}" alt="${d.title}">
    <div class="cert-modal-body">
      <span class="cert-card-badge">${d.cat}</span>
      <h3 class="cert-modal-title">${d.title}</h3>
      <span class="cert-modal-org">${d.org}</span>
      <div class="cert-modal-meta">
        <div class="cert-modal-meta-item">
          <span>Certificate</span>
          <span>#${String(index + 1).padStart(2, '0')}</span>
        </div>
        <div class="cert-modal-meta-item">
          <span>Category</span>
          <span>${d.cat}</span>
        </div>
      </div>
      <p class="cert-modal-desc">${d.desc}</p>
    </div>
  `;
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
}

certModalOverlay.addEventListener('click', closeCertModal);
certModalClose.addEventListener('click', closeCertModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModal.classList.contains('open')) closeCertModal();
});

/* ---------- View All Grid ---------- */
const gridModal = document.getElementById('certGridModal');
const gridOverlay = document.getElementById('certGridOverlay');
const gridContainer = document.getElementById('certGridContainer');
const gridClose = document.getElementById('certGridClose');
const viewAllBtn = document.getElementById('certViewAllBtn');

function buildGrid() {
  gridContainer.innerHTML = '';
  certData.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <img class="cert-card-img" src="certificates/${d.file}" alt="${d.title}" loading="lazy">
      <div class="cert-card-body">
        <span class="cert-card-title">${d.title}</span>
        <span class="cert-card-org">${d.org}</span>
        <span class="cert-card-badge">${d.cat}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      closeGridModal();
      setTimeout(() => openCertModal(i), 350);
    });
    gridContainer.appendChild(card);
  });
}

function openGridModal() {
  buildGrid();
  gridModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGridModal() {
  gridModal.classList.remove('open');
  document.body.style.overflow = '';
}

viewAllBtn.addEventListener('click', openGridModal);
gridOverlay.addEventListener('click', closeGridModal);
gridClose.addEventListener('click', closeGridModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && gridModal.classList.contains('open')) closeGridModal();
});

/* ========== Project Carousel with Drag/Swipe ========== */
(function () {
  const track = document.getElementById('projectSlides');
  const view = track.closest('.carousel-view');
  const dots = document.querySelectorAll('#projectDots .nav-dot');
  const prev = document.getElementById('prevProject');
  const next = document.getElementById('nextProject');

  let slides = [];
  let current = 0;
  let slidesCount = 0;
  let isDragging = false;
  let startX = 0;
  let startPos = 0;
  let dragDelta = 0;

  function build() {
    const originals = [...track.querySelectorAll('.carousel-slide')];
    slidesCount = originals.length;

    const clonesAfter = originals.map(s => s.cloneNode(true));
    const clonesBefore = originals.slice().reverse().map(s => s.cloneNode(true));

    track.innerHTML = '';
    clonesBefore.forEach(c => track.appendChild(c));
    originals.forEach(c => track.appendChild(c));
    clonesAfter.forEach(c => track.appendChild(c));

    slides = track.querySelectorAll('.carousel-slide');
    current = slidesCount;
    applyTransform(false);
    updateDots();
  }

  function applyTransform(animate) {
    track.style.transition = animate
      ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      : 'none';
    track.style.transform = `translateX(-${current * 100}%)`;
    if (!animate) {
      track.offsetHeight;
      track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
  }

  function updateDots() {
    const realIndex = ((current - slidesCount) % slidesCount + slidesCount) % slidesCount;
    dots.forEach((d, i) => d.classList.toggle('active', i === realIndex));
  }

  function goTo(index) {
    current = index;
    applyTransform(true);
    updateDots();
  }

  function slideLeft() {
    if (current <= 0) {
      current = slidesCount;
      applyTransform(false);
      requestAnimationFrame(() => { current--; applyTransform(true); updateDots(); });
    } else {
      current--; applyTransform(true); updateDots();
    }
  }

  function slideRight() {
    if (current >= slidesCount * 2 - 1) {
      current = slidesCount - 1;
      applyTransform(false);
      requestAnimationFrame(() => { current++; applyTransform(true); updateDots(); });
    } else {
      current++; applyTransform(true); updateDots();
    }
  }

  function onDragStart(x) {
    isDragging = true;
    startX = x;
    startPos = current;
    dragDelta = 0;
    track.classList.add('dragging');
    track.style.transition = 'none';
  }

  function onDragMove(x) {
    if (!isDragging) return;
    const dx = x - startX;
    dragDelta = dx;
    const pct = startPos * 100 - (dx / view.offsetWidth) * 100;
    track.style.transform = `translateX(-${pct}%)`;
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('dragging');
    const threshold = 25;
    const pctDragged = (dragDelta / view.offsetWidth) * 100;
    if (pctDragged < -threshold) slideRight();
    else if (pctDragged > threshold) slideLeft();
    else applyTransform(true);
    dragDelta = 0;
  }

  track.addEventListener('mousedown', e => { e.preventDefault(); onDragStart(e.clientX); });
  document.addEventListener('mousemove', e => { if (isDragging) onDragMove(e.clientX); });
  document.addEventListener('mouseup', onDragEnd);

  track.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchmove', e => onDragMove(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchend', onDragEnd, { passive: true });

  prev.addEventListener('click', slideLeft);
  next.addEventListener('click', slideRight);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(slidesCount + i));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') slideLeft();
    if (e.key === 'ArrowRight') slideRight();
  });

  build();
})();

