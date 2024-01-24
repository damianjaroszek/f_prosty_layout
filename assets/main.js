const menu = document.querySelector(".container__menu");
const hamburger = document.querySelector(".container__hamburger");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });
}