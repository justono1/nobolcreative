<?php

	$to = "justin@wearenobol.com";
	$phone = $_POST['phone'];
	$sender = $_POST['name'];
	$from = $_POST['email'];
	$company = $_POST['company'];
	$message = $_POST['message'];
	$budget = $_POST['budget'];
	$services = $_POST['services'];

	$data = array();
	
	$headers = "From: ".$from."\r\nReply-To: ".$from."\r\n";
	$body = "Message from: ".$sender."\r\nPhone: ".$phone."\r\nEmail: ".$from."\r\n";
	$body.= "Sent: ".date('l F jS')."\r\n\r\n";
	
	$body.= $message;

	$subject = "Website Contact Form";

	if($phone != "" && $sender != "" && $from != "" && $message != "" && $budget != "" && $services != "") {
		$sent = mail($to,$subject,$body,$headers);
	} else {

		$data['status'] = "error";
		$data['response'] = "You must fill in all required fields before submittiing";
		
		echo json_encode($data);
		exit;
	}
	
	if($sent) {
		echo json_encode("Your message has been sent successfully.");
	} else {
		echo json_encode("Whoops there was an error, please try again.");
	}

?>