<?php
include ('includes/class.phpmailer.php');
include ('includes/class.smtp.php');
include ('includes/class.exception.php');

$to = 'yuda8855@gmail.com';
$to_2 = 'yuda8855@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$tel = $_POST['tel'];

$mail = new PHPMailer();
try {
    //Server settings
    $mail->SMTPDebug = 4;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";};
   // $mail->Host = '192.168.160.7';  					// Specify main and backup SMTP servers
    $mail->SMTPAuth = false;                               // Enable SMTP authentication
    $mail->Port = 25;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('noreply@oakandcarterhomes.com','Oak & Carter Homes - Website step 1 Lead ');
    $mail->addAddress($to, $name);     // Add a recipient            // Name is optional
    $mail->addAddress($to_2, $name);     // Add a recipient            // Name is optional
    $mail->addReplyTo('noreply@oakandcarterhomes.com', 'Oak & Carter Homes - Website step 1  Lead');
	$mail->CharSet = 'UTF-8';

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Step 1 lead from Oak & Carter Homes Home Page Form ';
    $mail->Body    = '<h1>Step 1 Lead from Oak & Carter Homes Home Page Form</h1><br/>
    <table style="border: 1px solid #171717;">
    <thead>
        <tr style="border: 1px solid #171717;">
            <th style="border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Name</th>
            <th style="border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Email</th>
            <th style="border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Address</th>
            <th style="border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Phone</th>
        </tr>
    </thead>
    <tbody>
            <tr style="border: 1px solid #171717;">
                <td style="border: 2px solid #171717;">
                    '. $name .'
                </td>
                <td style="border: 2px solid #171717;">
                    ' . $email . '
                </td>
                <td style="border: 2px solid #171717;">
                ' . $address . '
                </td>
                <td style="border: 2px solid #171717;">
                ' . $tel . '
                </td>
            </tr>
    </tbody>
</table>';
//    $mail->Body    = $email;
//    $mail->Body    = $name;
        
        
        
//        '<html dir="rtl" >
//    <body style="text-align:right; color:#000;">
//    <div>
//    <p>טלפון: '$phone'</p>
//    <p>שם: '$name'</p>
//    <p>מייל: '$email'</p>
// 
//    </div></body>
//    </html>';

    $mail->send();
    //echo 'Message has been sent';
} catch (Exception $e) {
   // echo 'Message could not be sent.';
    //echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>