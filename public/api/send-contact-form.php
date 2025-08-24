<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $phone = $input['phone'] ?? '';
    $subject = $input['subject'] ?? '';
    $message = $input['message'] ?? '';
    $timestamp = $input['timestamp'] ?? '';
    
    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'info@nourineinstitute.com'; // Replace with your email
        $mail->Password = 'your_email_password'; // Replace with your password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
        
        // Recipients
        $mail->setFrom('info@nourineinstitute.com', 'NourineInstitute Website');
        $mail->addAddress('info@nourineinstitute.com');
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Inquiry - ' . $subject;
        
        $mail->Body = "
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Service:</strong> General Contact</p>
        <p><strong>Submission Time:</strong> $timestamp</p>
        <hr>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
        ";
        
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
        
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>