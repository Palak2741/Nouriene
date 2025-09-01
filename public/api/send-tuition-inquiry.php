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
    $studentClass = $input['studentClass'] ?? '';
    $subjects = $input['subjects'] ?? [];
    $mode = $input['mode'] ?? '';
    $address = $input['address'] ?? '';
    $preferredTime = $input['preferredTime'] ?? '';
    $timestamp = $input['timestamp'] ?? '';
    
    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'info@norieneinstitute.com';
        $mail->Password = 'your_email_password'; // Replace with your password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
        
        // Recipients
        $mail->setFrom('info@norieneinstitute.com', 'Noriene Institute Website');
        $mail->addAddress('info@norieneinstitute.com');
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Tuition Inquiry - ' . $name;
        
        $subjectsText = implode(', ', $subjects);
        
        $mail->Body = "
        <h2>New Tuition Service Inquiry</h2>
        <p><strong>Service:</strong> Academic Excellence (Tuition)</p>
        <p><strong>Submission Time:</strong> $timestamp</p>
        <hr>
        <p><strong>Student/Parent Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Student Class:</strong> $studentClass</p>
        <p><strong>Subjects Required:</strong> $subjectsText</p>
        <p><strong>Preferred Mode:</strong> $mode</p>
        <p><strong>Address:</strong> $address</p>
        <p><strong>Preferred Time:</strong> $preferredTime</p>
        ";
        
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Inquiry submitted successfully']);
        
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>