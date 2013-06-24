<?php
   $str = shell_exec("/sbin/ifconfig  | grep 'inet '| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}'");
$list = preg_split('~[\s\n\t]+~',$str);
    foreach ($list as $ip)
    {
            $app['db']->query("INSERT INTO addresses (ip) VALUES ('$ip')");
    }
?>
