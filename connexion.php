<?php

$servername = 'localhost';
$dbname = 'portfolio_maylis_gaillard';
$username = 'root';
$password = '';


try {
    $bdco = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
} catch (PDOException $e) {
    echo "Erreur :" . $e->getMessage();
}

// $bdco = null;
