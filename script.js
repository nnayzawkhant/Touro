const heroMenu = document.querySelector(".hero-menu");
const navMenu = document.querySelector(".nav-menu");

heroMenu.addEventListener("click", () => {
    heroMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => 
  n.addEventListener("click", () => {
    heroMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
