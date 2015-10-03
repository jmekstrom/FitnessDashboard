<?php
//You should add code to prevent requests from other domains
require(consumer_secret.php);
echo(hash_hmac("sha1", $_GET["string"], $consumer_secret)); 
?>
