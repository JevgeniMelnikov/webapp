<?php

$app->register(new Silex\Provider\DoctrineServiceProvider(), array (
	'db.options' => array (
		'driver' => 'pdo_mysql',
		'host' => 'localhost',
		'dbname' => 'testbase',
		'user' => 'admin',
		'password' => '123',
	)
));

return $app;
?>
