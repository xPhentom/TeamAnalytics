<?php

require_once 'config.php';

$mail = $_POST['mail'];
$paswoord = $_POST['paswoord'];

$sql="SELECT * FROM docent WHERE DOC_mail='".$mail."' AND DOC_paswoord='".$paswoord."'";

if ($result=mysqli_query($con,$sql))
  {

  $rowcount=mysqli_num_rows($result);
  echo $rowcount;

  mysqli_free_result($result);
  }

mysqli_close($con);

?>
