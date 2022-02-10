let btn = document.getElementById("afficherMenu");
let nav = document.querySelector("nav");

btn.addEventListener("click", afficherCacher);

function afficherCacher() {
    if (nav.classList.contains("afficher")) {
        nav.classList.toggle("afficher");
    } else {
        nav.classList.toggle("cache");
    }
}