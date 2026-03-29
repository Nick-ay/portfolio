/* =============================================
   NIKITA SHEORAN — PORTFOLIO SCRIPTS
   script.js
   ============================================= */

/* ── CURSOR GLOW ── */
const glow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', function (e) {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(function (el) {
  observer.observe(el);
});
