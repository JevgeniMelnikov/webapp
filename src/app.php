<?php

$app = new Silex\Application();

require("registerdoc.php");
$app->get('', function () use ($app) {

    $all = $app['db']->fetchAll("SELECT * FROM addresses");
    
    if(count($all)<1) // if table is empty
    {
        require("putdb.php");
        $all = $app['db']->fetchAll("SELECT * FROM addresses");
    }
    
    $values = array();
    for ($i=0; $i <count($all); $i++)
    {
        $values[] = array_values($all[$i]); //data without keys
    }
    $json = json_encode($values);
require("grid.php");
return '';
});
/*
$app->post('', function (Request $request) use ($app) {

echo $request->get('comment');
 }); 
*/
?>

