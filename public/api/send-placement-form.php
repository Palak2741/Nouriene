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
    $city = $input['city'] ?? '';
    $gender = $input['gender'] ?? '';
    $experience = $input['experience'] ?? '';
    $preferences = $input['preferences'] ?? [];
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
        $mail->Subject = 'New Teacher Placement Registration - ' . $name;
        
        $preferencesText = '';
        foreach ($preferences as $pref) {
            $preferencesText .= "Level: " . $pref['level'] . "\n";
            if (!empty($pref['subjects'])) {
                $preferencesText .= "Subjects: " . implode(', ', $pref['subjects']) . "\n";
            }
            $preferencesText .= "\n";
        }
        
        $mail->Body = "
        <h2>New Teacher Placement Registration</h2>
        <p><strong>Service:</strong> Placement Services</p>
        <p><strong>Submission Time:</strong> $timestamp</p>
        <hr>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>City:</strong> $city</p>
        <p><strong>Gender:</strong> $gender</p>
        <p><strong>Experience:</strong> $experience years</p>
        <p><strong>Teaching Preferences:</strong></p>
        <pre>$preferencesText</pre>
        ";
        
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Registration submitted successfully']);
        
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>