<?php
//Arquivo em php que é responsável de enviar o formulário! 
	include('classes/Mail.class.php');
	$m = new Mail($_POST);
	$m->sendMail();
?>