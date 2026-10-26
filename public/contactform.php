<?php
// Configuration & Error Logging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/contact-error.log');

// CORS & Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Read and Decode JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit;
}

/**
 * 1. HONEYPOT VALIDATION
 * 'website_url' should be hidden in your CSS. If it's filled, it's a bot.
 */
if (!empty($data["website_url"])) {
    // We return a success message to trick the bot into thinking it worked
    echo json_encode(["success" => true, "message" => "Spam detected"]);
    exit;
}

// 2. SANITIZATION & ASSIGNMENT
$name    = strip_tags(trim($data["name"] ?? ""));
$email   = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$phone   = strip_tags(trim($data["phone"] ?? ""));
$company = strip_tags(trim($data["company"] ?? ""));
$subject = strip_tags(trim($data["subject"] ?? ""));
$message = strip_tags(trim($data["message"] ?? ""));

// 3. VALIDATION
$errors = [];
if (strlen($name) < 2) $errors[] = "Name too short";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Invalid email";
if (strlen($phone) < 6) $errors[] = "Invalid phone number";
if (strlen($subject) < 5) $errors[] = "Subject too short";
if (strlen($message) < 1) $errors[] = "Message too short";

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["error" => "Validation failed", "details" => $errors]);
    exit;
}

// 4. EMAIL PREPARATION
$to      = "revanthrevi131@gmail.com";
$headers = [
    "From" => "Website <no-reply@opslogic.team>",
    "Reply-To" => $email,
    "Content-Type" => "text/plain; charset=UTF-8",
    "X-Mailer" => "PHP/" . phpversion()
];

$email_body = "--- New Contact Form Submission ---\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: $phone\n";
$email_body .= "Company: $company\n\n";
$email_body .= "Message:\n$message\n";

// 5. SENDING
// Using implode for headers is cleaner and more modern
$sent = mail($to, "[Contact] $subject", $email_body, $headers);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    error_log("Mail failure for $email");
    http_response_code(500);
    echo json_encode(["error" => "Internal mail server error"]);
}
