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
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$bedrooms = $_POST['bedrooms'];
$bath = $_POST['bath'];
$garage = $_POST['garage'];
$basement = $_POST['basement'];
$square = $_POST['square'];
$year = $_POST['year'];
$how_long = $_POST['how_long'];
$condition = $_POST['condition'];
$living = $_POST['living'];
$realtor = $_POST['realtor'];
$priority = $_POST['priority'];
$time_to_call = $_POST['time_to_call'];
$message = $_POST['message'];

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
    $mail->setFrom('noreply@sellhousefastusa.com
    ','Sell House Fast USA - Website step 2 Lead ');
    $mail->addAddress($to, $name);     // Add a recipient            // Name is optional
    $mail->addAddress($to_2, $name);     // Add a recipient            // Name is optional
    $mail->addReplyTo('noreply@sellhousefastusa.com
    ', 'Sell House Fast USA - Website step 2  Lead');
	$mail->CharSet = 'UTF-8';

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Step 2 lead from Sell House Fast USA Website Extended Form ';
    $mail->Body    = '<h1>Step 2 Lead from Sell House Fast USA Website Extended Form</h1><br/>
    <table style="border: 1px solid #171717;">
    <thead>
        <tr style="border: 1px solid #171717;">
            <th style="text-align:left; border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Name</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $name .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Email</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $email .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Address</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $address .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">City</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $city .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">State</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $state .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Zip Code</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $zip .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Phone Number</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $tel .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Bedrooms</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $bedrooms .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Bathrooms</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $bath .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Garage</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $garage .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Basement</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $basement .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Square Footage</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $square .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Year Built</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $year .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">How Long have he owned the property</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $how_long .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Condition of the property</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $condition .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Anyone Living in property</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $living .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Is the house listed with a realtor</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $realtor .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Does he need to sell his house fast</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $priority .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Best time to call</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $time_to_call .'
            </td>
        </tr>
        <tr style="text-align:left;border: 1px solid #171717;">
            <th style="text-align:left;border: 2px solid #171717;padding: 4px 10px;background: #f8f8f8;">Notes From The Seller</th>
            <td style="border: 2px solid #171717;padding: 4px 10px;">
            '. $message .'
            </td>
        </tr>
    </thead>

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