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
    for (input of listInput) {
        input.parentNode.lastElementChild.innerText = "";
        if (input.value == "") {
            event.preventDefault();
        }
        if (input.value == "" && input.type == 'text') {
            input.parentNode.lastElementChild.innerText = "Veuillez renseigner votre nom";
        }
        if (input.value == "" && input.type == 'tel') {
            input.parentNode.lastElementChild.innerText = "Veuillez renseigner votre numéro de téléphone";
        }
        if (input.value == "" && input.type == 'email') {
            input.parentNode.lastElementChild.innerText = "Veuillez renseigner votre email";
        }
        if (input.value == "" && input.type == 'textarea') {
            input.parentNode.lastElementChild.innerText = "Veuillez renseigner la raison de votre demande";
        }
    }

}

