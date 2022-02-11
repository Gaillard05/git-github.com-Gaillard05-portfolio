let cv = document.getElementById("cv");

let div = document.getElementById("modale");

let btnFermeture = document.getElementById("fermerCv");

cv.addEventListener("click", fenetreCV);


function fenetreCV() {
    div.classList.remove("cacher");
    div.classList.add("affiche");
}

btnFermeture.addEventListener("click", fermerCV);

function fermerCV() {
    div.classList.remove("affiche");
    div.classList.add("cacher");
}