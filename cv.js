let cv = document.getElementById("cv");

let div = document.getElementById("modale");

let btnFermeture = document.getElementById("fermerCv");

cv.addEventListener("click", fenetreCV);


function fenetreCV() {
    // window.open('img/Cv_Maylis_Gaillard.png');
    div.classList.remove("cacher");
    div.classList.add("affiche");
}

btnFermeture.addEventListener("click", fermerCV);

function fermerCV() {
    // window.open('img/Cv_Maylis_Gaillard.png');
    div.classList.remove("affiche");
    div.classList.add("cacher");
}