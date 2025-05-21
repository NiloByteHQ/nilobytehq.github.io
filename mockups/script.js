// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-navigation');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            // Toggle icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

      // Dark Mode Toggle Functionality
      const darkModeToggle = document.getElementById('darkModeToggle');
      const body = document.body;
      const lightIcon = document.querySelector('.dark-mode-toggle .fa-moon'); // This selector might not be used if icons are handled by CSS
      const darkIcon = document.querySelector('.dark-mode-toggle .fa-sun'); // This selector might not be used if icons are handled by CSS

      // Function to apply dark mode
      const enableDarkMode = () => {
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
      }

      // Function to disable dark mode
      const disableDarkMode = () => {
          body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', 'disabled');
      }

      // Check localStorage for saved preference
      if (localStorage.getItem('darkMode') === 'enabled') {
          enableDarkMode();
          if (darkModeToggle) darkModeToggle.checked = true; // Sync checkbox state
      } else {
          disableDarkMode(); // Default to light mode if no preference or disabled
          if (darkModeToggle) darkModeToggle.checked = false;
      }

      // Event listener for the toggle
      if (darkModeToggle) {
          darkModeToggle.addEventListener('change', () => {
              if (darkModeToggle.checked) {
                  enableDarkMode();
              } else {
                  disableDarkMode();
              }
          });
      }

    // Sticky Header (already handled by position:sticky CSS, but you might add a class for styling)
    // const siteHeader = document.querySelector('.site-header');
    // window.addEventListener('scroll', function() {
    //     if (window.scrollY > 100) { // Adjust scroll distance
    //         siteHeader.classList.add('scrolled');
    //     } else {
    //         siteHeader.classList.remove('scrolled');
    //     }
    // });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // Show after 300px scroll
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for anchor links (if not fully handled by CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Make sure it's a valid internal link and not just "#"
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // If mobile nav is open, close it
                if (mainNav && mainNav.classList.contains('active')) {
                    menuToggle.click();
                }
            }
        });
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Simple Gallery Lightbox functionality placeholder
    // For a real site, use a library like Lity, PhotoSwipe, or Lightbox2
    // This is a very basic example if you were to build one (not recommended for production)
    const galleryItems = document.querySelectorAll('.gallery-item[data-lightbox]');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                // Here you would implement the lightbox logic
                // For example, create an overlay, create an image element,
                // set its src to this.href, and append it to the overlay.
                // Add controls for next/prev/close.
                alert(`Lightbox functionality for ${this.href} would open here. Title: ${this.dataset.title || ''}. Consider using a dedicated lightbox library.`);
            });
        });
    }

    // Testimonial Slider (placeholder - needs a library like Swiper.js or Splide.js)
    // const testimonialSlider = document.querySelector('.testimonial-slider');
    // if (testimonialSlider) {
    //    // Initialize your chosen slider library here
    //    // e.g., new Swiper(testimonialSlider, { /* options */ });
    //    console.log("Testimonial slider would be initialized here.");
    // }


// Intersection Observer for animations
const animatedElements = document.querySelectorAll('.feature-item, .service-card, .testimonial-item, .gallery-item');

if ("IntersectionObserver" in window) {
    // Add the preparation class to all elements that will be animated
    animatedElements.forEach(el => {
        el.classList.add('js-prepare-animate-on-scroll');
    });

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('js-animate-in');
                observerInstance.unobserve(entry.target); // Optional: stop observing after it has animated in
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed (0.1 means 10% of element is visible)

    animatedElements.forEach(el => {
        observer.observe(el);
    });

} else {
    // Fallback for browsers that don't support IntersectionObserver:
    // Make elements visible immediately.
    animatedElements.forEach(el => {
        el.classList.remove('js-prepare-animate-on-scroll'); // Remove the hiding class
        el.classList.add('js-animate-in'); // Or apply the animation class directly (it will just show the 'to' state)
        // A simpler alternative for fallback:
        // el.style.opacity = '1';
    });
}

});