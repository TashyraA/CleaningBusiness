<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Email configuration
    $to = "support@prestigeprocleaners.com"; 
    $subject = "New Consultation Request";
    $boundary = md5(uniqid(time()));

    $headers = "From: " . strip_tags($_POST['email']) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Message Body
    $message = "--$boundary\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $message .= "Name: " . $_POST['name'] . "\r\n";
    $message .= "Email: " . $_POST['email'] . "\r\n";
    $message .= "Phone: " . $_POST['phone'] . "\r\n";
    $message .= "Bedrooms: " . $_POST['bedrooms'] . "\r\n";
    $message .= "Bathrooms: " . $_POST['bathrooms'] . "\r\n";
    $message .= "Family Rooms: " . $_POST['family-rooms'] . "\r\n";
    $message .= "Finished Basement: " . $_POST['basement'] . "\r\n";
    $message .= "Pets: " . $_POST['pets'] . "\r\n";
    $message .= "Message: " . $_POST['message'] . "\r\n\r\n";

    $message .= "--$boundary--";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your request has been sent successfully!";
    } else {
        echo "There was a problem sending your request. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
