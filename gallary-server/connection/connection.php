<?php

    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    $host = "localhost";
    $user = "root";
    $password = "";
    $port = 3307;
    $db_name = "faqforumdb";

    $conn = new mysqli($host, $user, $password, $port, $db_name);

    if ($conn->connect_error){
        http_response_code(400);
        echo "connection error :(";
    }

?>