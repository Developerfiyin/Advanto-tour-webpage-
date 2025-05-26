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

scrollReveal();
