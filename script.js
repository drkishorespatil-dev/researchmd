// ── NAVBAR: add shadow on scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── HAMBURGER MENU (mobile) ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── CONTACT FORM: show success message ──
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop normal form submission

  // Simple validation — all required fields filled
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const degree  = document.getElementById('degree').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !degree || !service || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Show success message
  formSuccess.classList.add('show');
  form.reset();

  // Hide success after 6 seconds
  setTimeout(() => formSuccess.classList.remove('show'), 6000);
});

// ── SCROLL ANIMATIONS: fade-in on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Add animation class to cards and steps
document.querySelectorAll(
  '.service-card, .step, .pricing-card, .testimonial-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ── SMOOTH STAT COUNTER ──
function animateCount(el, target, suffix = '') {
  let start = 0;
  const duration = 1500;
  const step = 16;
  const increment = target / (duration / step);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + suffix;
    }
  }, step);
}

// Trigger counter when hero stats come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = document.querySelectorAll('.stat-num');
      nums[0] && animateCount(nums[0], 500, '+');
      nums[1] && animateCount(nums[1], 200, '+');
      nums[2] && animateCount(nums[2], 100, '%');
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) statsObserver.observe(statsSection);
