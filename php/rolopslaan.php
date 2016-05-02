<?php

require_once 'config.php';

$rol = $_POST['rol'];

$sql="INSERT INTO student(STU_rol) VALUES ('".$rol."') where STU_id = '" . $_SESSION["id"] . "' ";

$result=mysqli_query($con,$sql);

mysqli_close($con);

?>
