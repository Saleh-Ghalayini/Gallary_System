<?php

    require("../../connection/connection.php");

    $query = "CREATE TABLE IF NOT EXISTS users(
              id INT AUTO_INCREMENT PRIMARY KEY,
              full_name VARCHAR(50) NOT NULL,
              email VARCHAR(50) NOT NULL UNIQUE,
              password TEXT NOT NULL,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
              image_count INT DEFAULT 0
            );";

    if($conn->query($query))
        echo 'table "users" was successfully created';
    else
        echo 'table "users" was not successfully created';

?>