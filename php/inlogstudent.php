<?php

require_once 'config.php';

session_start();

$mail = $_POST['mail'];
$paswoord = $_POST['paswoord'];

$sql = "SELECT STU_id from student WHERE STU_mail='".$mail."' AND STU_paswoord='".$paswoord."'";
$result = mysqli_query($con,$sql);

while ($row = $result->fetch_assoc()) {
      $_SESSION["id"] = $row['STU_id'];
  }

$sql="SELECT * FROM student WHERE STU_mail='".$mail."' AND STU_paswoord='".$paswoord."'";

if ($result=mysqli_query($con,$sql))
  {

  $rowcount=mysqli_num_rows($result);
  echo $rowcount;

  mysqli_free_result($result);
  }

mysqli_close($con);

?>
