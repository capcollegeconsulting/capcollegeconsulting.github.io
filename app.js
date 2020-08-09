const hamburger = document.querySelector(".hamburger-btn");
const navbar__items = document.querySelector(".navbar__items");
const navbar__icons = document.querySelector(".navbar__icons");

function show() {
  navbar__items.classList.toggle("show");
  navbar__icons.classList.toggle("show");
}
hamburger.addEventListener("click", show);
