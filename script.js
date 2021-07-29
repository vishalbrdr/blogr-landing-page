const menuBtn = document.querySelectorAll(".menu img")
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
    menuBtn.forEach((e) => e.classList.toggle("toggle"))
    nav.classList.toggle("nav")
})