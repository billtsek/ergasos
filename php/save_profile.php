<?php
  $con = mysqli_connect("localhost","root","","ergasos");
  $name = $_POST['name'];
  $address = $_POST['address'];
  $email = $_POST['email'];
  $telephone = $_POST['telephone'];
  $query = "UPDATE account_details SET name='$name',address='$address',email='$email',telephone='$telephone' WHERE userID = 1";
  if(mysqli_query($con,$query)) {
    setcookie("info_change_success","true",time() + 10,"/");
  }
  else {
    setcookie("info_change_success","false",time() + 10,"/");
  }
  header("Location: {$_SERVER["HTTP_REFERER"]}");
?>
