document.addEventListener("DOMContentLoaded", function () {
  // Input
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  // Logic & output
  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show-menu");
  });
});
