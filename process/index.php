<?php

	$to = "justin@wearenobol.com";
	$phone = $_POST['phone'];
	$sender = $_POST['name'];
	$from = $_POST['email'];
	$company = $_POST['company'];
	$message = $_POST['message'];
	$budget = $_POST['budget'];
	$services = $_POST['services'];

	
	$headers = "From: ".$from."\r\nReply-To: ".$from."\r\n";
	$body = "Message from: ".$sender."\r\nPhone: ".$phone."\r\nEmail: ".$from."\r\n";
	$body.= "Sent: ".date('l F jS')."\r\n\r\n";
	
	$body.= $message;

	$subject = "Website Contact Form";
	
	$sent = mail($to,$subject,$body,$headers);
	
	if($sent) {
		echo json_encode("Your message has been sent successfully.");
	} else {
		echo json_encode("Whoops there was an error, please try again.");
	}

?>