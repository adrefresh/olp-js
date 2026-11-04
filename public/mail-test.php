<?php
// Open https://your-site/mail-test.php once to see why contact-form mail is (not) arriving.
// It sends ONE test mail to revanthrevi131@gmail.com and prints what happened. DELETE this file afterwards.
header("Content-Type: text/plain; charset=utf-8");
header("X-Robots-Tag: noindex");

$lock = sys_get_temp_dir() . "/opslogic-mail-test.lock";
if (file_exists($lock) && time() - filemtime($lock) < 60) { echo "Wait a minute between tests.\n"; exit; }
touch($lock);

$to = "revanthrevi131@gmail.com";
echo "PHP version: " . PHP_VERSION . "\n";
echo "mail() available: " . (function_exists("mail") ? "yes" : "NO (disabled by the host)") . "\n";
echo "sendmail_path: " . (ini_get("sendmail_path") ?: "(not set)") . "\n";
$cfgFile = __DIR__ . "/mail-config.php";
echo "mail-config.php present: " . (file_exists($cfgFile) ? "yes (Gmail SMTP will be tried first)" : "no (PHP mail() only)") . "\n";
echo "Folder writable (for contact-error.log): " . (is_writable(__DIR__) ? "yes" : "NO") . "\n\n";

if (file_exists($cfgFile)) {
    $cfg = require $cfgFile;
    $host = (($cfg["secure"] ?? "ssl") === "ssl" ? "ssl://" : "") . $cfg["host"];
    $fp = @stream_socket_client($host . ":" . $cfg["port"], $en, $es, 10);
    if (!$fp) { echo "SMTP connect to {$cfg['host']}:{$cfg['port']}: FAILED ($es)\n  -> the host is blocking outbound SMTP, or the port is wrong.\n"; }
    else {
        echo "SMTP connect: ok\n";
        stream_set_timeout($fp, 10);
        $r = function () use ($fp) { $o = ""; while (($l = fgets($fp, 515)) !== false) { $o .= $l; if (strlen($l) < 4 || $l[3] === " ") break; } return trim($o); };
        $r(); fwrite($fp, "EHLO opslogic.team\r\n"); $r();
        fwrite($fp, "AUTH LOGIN\r\n"); $r();
        fwrite($fp, base64_encode($cfg["user"]) . "\r\n"); $r();
        fwrite($fp, base64_encode($cfg["pass"]) . "\r\n"); $a = $r();
        echo "SMTP login: " . (substr($a, 0, 3) === "235" ? "ok" : "FAILED -> $a\n  -> wrong App Password, or 2-Step Verification is not on.") . "\n";
        fwrite($fp, "QUIT\r\n"); fclose($fp);
    }
    echo "\n";
}

$ok = mail($to, "[Test] OpsLogic mail test", "If you can read this, PHP mail() works on this server.\n" . date("c"),
    "From: Website <no-reply@opslogic.team>\r\nContent-Type: text/plain; charset=UTF-8", "-fno-reply@opslogic.team");
echo "PHP mail() test: " . ($ok ? "accepted by the server (now check Inbox and Spam for '[Test] OpsLogic mail test')" : "REFUSED by the server") . "\n";
echo "\nIf mail() says accepted but nothing arrives: create the mailbox no-reply@opslogic.team in your hosting panel,\n";
echo "or use the Gmail App Password setup (mail-config.php).\n";
if (file_exists(__DIR__ . "/contact-error.log")) {
    echo "\n--- last lines of contact-error.log ---\n" . implode("", array_slice(file(__DIR__ . "/contact-error.log"), -10));
}
