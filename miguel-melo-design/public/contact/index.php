<?php
// defini as variáveis
define('GUSER', 'user');	// <-- Insira aqui o email
define('GPWD', 'pass'); // <-- Insira aqui a senha
$destino = "santana@dnadevendas.com.br"; // email que receberá as mensagens
$enviadoPor = "contact@miguelmello.com.br";
$enviadoPorName = "SiteEmail";
$assuntoEmail = "Form do site";
// editar server host e port
function smtpmailer($para, $de, $de_nome, $assunto, $corpo) {
	$serverHost = "smtp.sendgrid.net";
	$serverPort = 587; // SSL 465  ou TLS 587
	global $error;
	$mail = new PHPMailer();
	$mail->IsSMTP();		// Ativar SMTP
	$mail->SMTPDebug = 0;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
	$mail->SMTPAuth = true;		// Autenticação ativada
	$mail->SMTPSecure = 'tls';	// SSL 465  ou TLS 587 
	$mail->Host = $serverHost;
	$mail->Port = $serverPort;
	$mail->Username = GUSER;
	$mail->Password = GPWD;
	$mail->SetFrom($de, $de_nome);
	$mail->Subject = $assunto;
	$mail->Body = $corpo;
	$mail->AddAddress($para);
	if(!$mail->Send()) {
		$error = 'Mail error: '.$mail->ErrorInfo; 
		return false;
	} else {
		$error = 'Mensagem enviada!';
		return true;
	}
}

// pega as informacoes do POST
if ( isset($_POST["name"]) || isset($_POST["from"]) || isset($_POST["phone"])) {
	$nome = $_POST["name"];
	$email = $_POST["from"];
	$tel = $_POST["phone"];
} else {
	http_response_code(400);
	echo json_encode(array(
		"msg" => "Faltam informacoes",
	));
	return;
}
// monta a mensagem
$corpoEmail = "Nome: $nome\n\nEmail: $email\n\nTelefone: $tel";

require_once("phpmailer/class.phpmailer.php");

$resp = array();
if (smtpmailer($destino, $enviadoPor, $enviadoPorName, $assuntoEmail, $corpoEmail)) {
	http_response_code(201);
	$resp["msg"] = "Enviada!";
}

if (!empty($error)) {
	if (!http_response_code()) {
		// verifica se caiu na condicional acima
		// sim pode ter enviado e ter mensagem de erro caso tenha preenchido SMTPDebug
		http_response_code(503);
	}
	$resp['error'] = $error;
}
echo json_encode($resp);
return;