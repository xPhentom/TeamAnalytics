<?php

require_once 'config.php';

session_start();

echo $_SESSION["id"];

$rol = $_POST['rol'];

echo $rol, $_SESSION["id"];

$sql="UPDATE student set STU_rol= '".$rol."' where STU_id = '".$_SESSION['id']."' ";

$result=mysqli_query($con,$sql);

mysqli_close($con);

echo $rol, $_SESSION["id"];

?>
