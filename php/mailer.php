<?php
	$to = 'kashif.scholion@gmail.com';
	$subject = 'Marriage Proposal';
	$from = 'rekhi.adeel@gmail.com';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-Type': 'text/html',
				  'Access-Control-Allow-Origin': '*',
				  'Access-Control-Allow-Headers': 'Content-Type',
				  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
				  'Authorization': 'Bearer key',
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	 
	// Compose a simple HTML email message
	$message = '<html><body>';
	$message .= '<h1 style="color:#f40;">Hi Jane!</h1>';
	$message .= '<p style="color:#080;font-size:18px;">Will you marry me?</p>';
	$message .= '</body></html>';
	 
	// Sending email
	if(mail($to, $subject, $message, $headers)){
		echo 'success';
	} else{
		echo 'Unable to send email. Please try again.';
	}
?>