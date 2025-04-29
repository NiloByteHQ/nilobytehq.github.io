// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Home CTA Button Logic (Ripple + Navigation) & Other Initializations
document.addEventListener('DOMContentLoaded', () => {
  // Home Button
  const homeBtn = document.querySelector('.home-cta');
  if (homeBtn) {
      homeBtn.addEventListener('click', e => {
          const ripple = document.createElement('span');
          const diameter = Math.max(homeBtn.clientWidth, homeBtn.clientHeight);
          const radius = diameter / 2;
          ripple.style.width = ripple.style.height = `${diameter}px`;
          const rect = homeBtn.getBoundingClientRect();
          ripple.style.left = `${e.clientX - rect.left - radius}px`;
          ripple.style.top = `${e.clientY - rect.top - radius}px`;
          ripple.classList.add('ripple');
          const existingRipple = homeBtn.querySelector('.ripple');
          if (existingRipple) {
              existingRipple.remove();
          }
          homeBtn.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
          setTimeout(() => {
              window.location.href = 'index.html';
          }, 150);
      });
  }

  // --- Theme Toggle Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const setTheme = (theme) => {
      if (theme === 'dark') {
          htmlElement.classList.add('dark');
      } else {
          htmlElement.classList.remove('dark');
      }
      try {
          localStorage.setItem('theme', theme);
      } catch (e) {
          console.warn("LocalStorage is not available.");
      }
  };

  if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
          const currentTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
          setTheme(currentTheme);
      });
      let initialTheme = 'light';
      try {
          const storedTheme = localStorage.getItem('theme');
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (storedTheme) initialTheme = storedTheme;
          else if (systemPrefersDark) initialTheme = 'dark';
      } catch (e) { console.warn("LocalStorage or matchMedia not available."); }
       setTheme(initialTheme);
  } else { console.warn("Theme toggle button not found."); }

  // --- AOS Initialization ---
  if (typeof AOS !== 'undefined') {
       AOS.init({ once: true, duration: 800, offset: 50, easing: 'ease-in-out' });
  } else { console.warn("AOS library not found."); }


  // --- Added SwiperJS Initialization ---
  // Check if Swiper is defined (loaded via CDN) and the container exists
  if (typeof Swiper !== 'undefined' && document.querySelector('.email-template-swiper')) {
    const swiper = new Swiper('.email-template-swiper', {
        effect: 'coverflow', // Change effect to 'coverflow'
        grabCursor: true,
        centeredSlides: true, // Center the active slide
        slidesPerView: 'auto', // Adjust slides per view automatically
        loop: true, // Enable continuous loop

        coverflowEffect: {
            rotate: 40, // Rotation angle of slides
            stretch: 0, // Space between slides (pixels)
            depth: 100, // Depth effect
            modifier: 1, // Effect multiplier
            slideShadows: true, // Add slide shadows
        },

         // Responsive breakpoints (adjust for coverflow)
        breakpoints: {
            // Maybe show slightly more space or adjust depth on larger screens
            768: {
                 // slidesPerView: 2, // Often 'auto' works best with coverflow
                 coverflowEffect: {
                    rotate: 30,
                    stretch: -20, // Overlap slightly maybe
                    depth: 150,
                 }
            },
            1024: {
                // slidesPerView: 3,
                 coverflowEffect: {
                    rotate: 30,
                    stretch: -40, // Increase overlap
                    depth: 200,
                 }
            }
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

         // Keyboard navigation
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
    });
} else {
    if(document.querySelector('.email-template-swiper')) {
         console.warn("Swiper library not found, but '.email-template-swiper' container exists. Carousel will not initialize.");
    }
}
}); // End DOMContentLoaded