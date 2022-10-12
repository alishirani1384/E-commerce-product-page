const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active")
}
function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active")
}


menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);