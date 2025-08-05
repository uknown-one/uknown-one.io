// Simple vanilla parallax: moves background positions based on scroll and data-speed attribute

(function () {
  const sections = document.querySelectorAll('.parallax-section');

  function updateParallax() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
      const speed = parseFloat(section.dataset.speed) || 0.5;
      const offsetTop = section.offsetTop;
      const height = section.offsetHeight;
      // Only apply if in or near viewport for performance
      if (scrollY + viewportHeight >= offsetTop && scrollY <= offsetTop + height) {
        // Calculate the relative scroll inside the section (0 to 1)
        const relativeY = (scrollY - offsetTop) / height;
        const translate = (relativeY * 100 * speed);
        // Using transform on a pseudo layer: adjust background-position
        section.style.backgroundPosition = `center ${-translate}px`;
      }
    });
  }

  // Throttle with requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial
  document.addEventListener('DOMContentLoaded', updateParallax);
  window.addEventListener('resize', updateParallax);
})();
