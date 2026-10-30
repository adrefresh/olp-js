<?php
// 1) Copy this file to "mail-config.php" ON THE SERVER (same folder as contactform.php).
// 2) Put your Gmail App Password below (Google Account > Security > 2-Step Verification > App passwords).
// Never share the real mail-config.php with anyone.
return [
    "host"   => "smtp.gmail.com",
    "port"   => 465,
    "secure" => "ssl",
    "user"   => "revanthrevi131@gmail.com",
    "pass"   => "xxxxxxxxxxxxxxxx", // 16-character App Password, no spaces
];
