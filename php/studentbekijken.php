<?php
require_once 'config.php';

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "select STU_voornaam, STU_achternaam, STU_klas, STU_mail, STU_rol from student order by STU_voornaam";
$result = $con->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);

$con->close();

 ?>
