let btn = document.getElementById("afficherMenu");
let nav = document.querySelector("nav");

btn.addEventListener("click", afficherCacher);

function afficherCacher() {
    if (nav.classList.contains("afficher")) {
        nav.classList.remove("afficher");
        nav.classList.add("cache");
    } else {
        nav.classList.add("afficher");
        nav.classList.remove("cache");
    }
}