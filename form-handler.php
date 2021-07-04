<?php
  if (isset($_POST['submit'])) {

   $firstname=$_POST['first-name'];
   $lastname=$_POST['last-name'];
   $email=$_POST['email'];
   $phone=$_POST['phone'];
   $message=$_POST['message'];

   $email_from='forms@delhimolecular.com';

   $email_subject= "New Form Submission";

   $email_body= "User First Name: $firstname . \n".
                "User Last Name: $lastname.\n"
                   "User Email: $email.\n"
                       "User Phone: $phone.\n"
                       "User Message: $message.\n"

   $mailTo="admin@delhimolecular.com"

   $headers = "From:" .$email_from;

   $txt = "You have received an e-mail from ".$name.".\n\n".$message;

   mail($mailTo,$email_subject,$email_body,$headers,$txt);

   header("Location: form.php?mailsend");

}
 ?>
