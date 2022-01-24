let btn = document.getElementById("afficherMenu");
let nav = document.querySelector("nav");

btn.addEventListener("click", afficherCacher);

function afficherCacher() {
    if (nav.classList.contains("cache")) {
        nav.classList.remove("cache");
        nav.classList.toggle("afficher");
    } else {
        nav.classList.remove("afficher");
        nav.classList.toggle("cache");
    }
}