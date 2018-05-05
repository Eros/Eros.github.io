<?php
/**
 * Created by PhpStorm.
 * User: George
 * Date: 05-May-18
 * Time: 1:38 PM
 */

$nameErr = $emailErr;
$name = $email = $comment;
$nameRegex = '/^[a-zA-Z ]*$/';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(empty($_POST['name'])){
        $nameErr = 'Please input your name';
    } else {
        $name = test_input($_POST['name']);
        if(!preg_match($nameRegex, $name)){
            $nameErr = "Only letters are allowed in your name";
        }
    }

    if(empty($_POST['email'])){
        $emailErr = 'Email is required';
    } else {
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $emailErr = 'Invalid email format!';
        }
    }

    if(empty($_POST['comment'])){
        $comment = '';
    } else {
        $comment = test_input($_POST['comment']);
    }
}