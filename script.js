const menuBtn = document.getElementById("menu-btn");
const navoLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navoLinks.classList.toggle("open");

  const isOpen = navoLinks.classList.contains("open");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navoLinks.addEventListener("click", (e) => {
  navoLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .secion__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .secion__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__signature", {
  ...scrollRevealOption,
  delay: 1000,
});
