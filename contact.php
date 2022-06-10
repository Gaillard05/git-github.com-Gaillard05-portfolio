<?php
require_once "connexion.php";

$nom = $_POST['nom'];
$tel = $_POST['num'];
$email = $_POST['mail'];
$message = $_POST['message'];


try {
    $sql = $bdco->prepare("INSERT INTO contact(nom,tel,email,message)
            VALUES(:nom, :tel, :email, :message)");
    $sql->bindParam(':nom', $nom);
    $sql->bindParam(':tel', $tel);
    $sql->bindParam(':email', $email);
    $sql->bindParam(':message', $message);
    $sql->execute();
} catch (PDOException $e) {
    echo 'Impossible de traiter les données. Erreur : ' . $e->getMessage();
}
