let contenuForm = document.getElementsByClassName("champs");

let form = document.getElementById("form");

let listInput = document.querySelectorAll("input, textarea");

let longeurNumeroTel = 10;

form.addEventListener("submit", valide);

for (elements of contenuForm) {
    let messErreurs = document.createElement("p");
    messErreurs.classList.add("nonValide");
    elements.append(messErreurs);
}

function valide(event) {
    event.preventDefault();
    for (input of listInput) {
        input.parentNode.lastElementChild.innerText = "";
        switch (input.type) {
            case "text":
                if (input.value == "") {
                    input.parentNode.lastElementChild.innerText = "Veuillez renseigner votre nom";
                }
                break;
            case "tel":
                if (input.value == "") {
                    input.parentNode.lastElementChild.innerText = "Veuillez renseigner votre numéro de téléphone";
                }
                break;
            case "email":
                if (input.value == "") {
                    input.parentNode.lastElementChild.innerText = "Veuillez renseigner votre adresse mail";
                }
                break;
            case "textarea":
                if (input.value == "") {
                    input.parentNode.lastElementChild.innerText = "Veuillez écrire le motif de votre demande";
                }
                break;
            default: "erreur champs non valides";
                break;
        }
    }
}
