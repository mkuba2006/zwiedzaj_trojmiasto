<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['mail']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']); 

    $to = "anna.fischer@zwiedzajtrojmiasto.pl";
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $body = "Imię: $name\nEmail: $email\n\nWiadomość:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>
