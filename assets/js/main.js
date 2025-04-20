document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.home-cta');
    if (!btn) return;
  
    btn.addEventListener('click', e => {
      // ripple
      const d = btn.clientWidth;
      const circle = document.createElement('span');
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = e.clientX - btn.offsetLeft - d/2 + 'px';
      circle.style.top  = e.clientY - btn.offsetTop  - d/2 + 'px';
      circle.classList.add('ripple');
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
  
      // navigate home
      window.location.href = 'index.html';
    });
  });
  