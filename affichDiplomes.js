let d = document.getElementById("contenus-diplomes");

let titreDiplomes = document.getElementById("Mes_diplomes");

d.classList.add("cacher");

titreDiplomes.addEventListener("click", afficherDiplomes);

function afficherDiplomes() {
    if (d.classList.contains("cacher")) {
        titreDiplomes.style.color = "#6495ED";
        d.classList.remove("cacher");
        d.classList.add("affich");
    } else {
        titreDiplomes.style.color = "#2566A4";
        d.classList.remove("affich");
        d.classList.add("cacher");
    }
}