<?php

$nom = $_POST['nom'];
$tel = $_POST['num'];
$email = $_POST['mail'];
$message = $_POST['message'];

if (!empty($nom) && !empty($tel) && !empty($email) && !empty($message)) {
    echo "informations valides";
} else {
    echo "erreurs";
}
