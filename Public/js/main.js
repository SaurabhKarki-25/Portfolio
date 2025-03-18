// public/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navbar Toggle
  const toggleButton = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Scroll Animation for Elements with the Class "animate-on-scroll"
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        // Optionally unobserve the element if you only want the animation to run once.
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  animateElements.forEach(el => {
    observer.observe(el);
  });
});
