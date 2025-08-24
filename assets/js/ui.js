(function(){
  // Smooth scroll, nav active, animations, toggles...
  /* existing code for navigation/animations/scroll progress */
  // Dark mode toggle:
  const darkToggle = document.querySelector('.dark-toggle');
  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.dark = document.body.classList.contains('dark-mode');
  });
  if (localStorage.dark === 'true') {
    document.body.classList.add('dark-mode');
  }
})();
