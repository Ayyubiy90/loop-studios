document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const closeBtn = document.querySelector(".close-btn");
  const body = document.body;

  function toggleMenu() {
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  hamburger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  //   hamburger.addEventListener("click", () => {
  //     navLinks.classList.toggle("active");
  //     hamburger.classList.toggle("active");
  //   });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // "See all" button functionality
  const seeAllButton = document.querySelector(".see-all");
  const creationsGrid = document.querySelector(".creations-grid");

  seeAllButton.addEventListener("click", () => {
    creationsGrid.classList.toggle("show-all");
    seeAllButton.textContent = creationsGrid.classList.contains("show-all")
      ? "See less"
      : "See all";
  });

  // Intersection Observer for fade-in animations
  const fadeElems = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  fadeElems.forEach((elem) => {
    appearOnScroll.observe(elem);
  });
});
