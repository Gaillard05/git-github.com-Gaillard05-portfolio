let contenuLexique = document.getElementById('contenus-lexique');

let titreLexique = document.getElementById("titre-lexique");

contenuLexique.classList.add("cacher");

titreLexique.addEventListener("mouseover", afficherLexique);
titreLexique.addEventListener("mouseout", cacherLexique);

function afficherLexique() {
    titreLexique.style.color = "#2566A4";
    contenuLexique.classList.remove("cacher");
    contenuLexique.classList.add("affich");
}

function cacherLexique() {
    titreLexique.style.color = "#000000";
    contenuLexique.classList.remove("affich");
    contenuLexique.classList.add("cacher");
}