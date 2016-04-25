<?php

require_once 'config.php';

$voornaam = $_POST['voornaam'];
$achternaam = $_POST['achternaam'];
$paswoord = $_POST['paswoord'];
$mail = $_POST['mail'];
$klas = $_POST['klas'];
$les = $_POST['les'];

$sql="INSERT INTO student(STU_voornaam, STU_achternaam, STU_mail, STU_paswoord, STU_klas, STU_les) VALUES ('".$voornaam."', '".$achternaam."', '".$mail."', '".$paswoord."', '".$klas."', '".$les."')";

mysqli_query($con,$sql) or die(mysqli_error($this->db_link));

mysqli_close($con);

?>
