let toggle = document.querySelector(".toggle");
let toggleSpan = document.querySelector(".toggle");
let navbar = document.querySelector(".nav-list");
toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggleSpan.classList.toggle("active");
});
