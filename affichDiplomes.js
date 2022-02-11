let d = document.getElementById("contenus-diplomes");

let titreDiplomes = document.getElementById("Mes_diplomes");

d.classList.add("cacher");

titreDiplomes.addEventListener("click", afficherDiplomes);

function afficherDiplomes() {
    if (d.classList.contains("cacher")) {
        d.classList.remove("cacher");
        d.classList.add("affich");
    } else {
        d.classList.remove("affich");
        d.classList.add("cacher");
    }
}