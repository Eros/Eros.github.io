<?php
/**
 * Created by PhpStorm.
 * User: George
 * Date: 05-May-18
 * Time: 1:38 PM
 */

$nameErr = $emailErr;
$name = $email = $comment;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(empty($_POST['name'])){
        $nameErr = 'Please input your name';
    }
}