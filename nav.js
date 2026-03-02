const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Toggle scroll lock on body
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking a link
navLinks.forEach((n) =>
  n.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      toggleMenu();
    }
  }),
);

// Dynamic shadow on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
