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
// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  const expanded = nav.classList.contains("open");
  hamburger.setAttribute("aria-expanded", expanded);
});
// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.querySelector(".scroll-progress .bar").style.width =
    `${(scrollTop / height) * 100}%`;
});

// Animate on scroll
const animatedItems = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

animatedItems.forEach(item => observer.observe(item));
