<?php

$db = new PDO('sqlite:form.sqlite');
@$db->exec("CREATE TABLE message (name text, mail text, text text)");
if (!empty($_GET['action'])) {
	switch ($_GET['action']) {
    	case 'view':
            echo json_encode($db->query('SELECT * from message')->fetchAll(PDO::FETCH_ASSOC));
    		exit;
    	case 'send':
			$to = "info@tento.tech";
			$name = $_GET['name'];
			$mail = $_GET['mail'];
			$text = $_GET['text'];
    		$db->query("INSERT INTO message(name,mail,text) VALUES ('{$name}','{$mail}','{$text}')");
				mail($to,$name,$text,$mail);
            if(!mail()){
                echo "NO";
            } else {
                echo "OK";
            }
    		exit;
    	default :
    		echo 'api error';
    		exit;
    }
}
