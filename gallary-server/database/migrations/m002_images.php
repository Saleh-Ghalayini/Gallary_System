<?php

    require("../../connection/connection.php");

        $query = "CREATE TABLE IF NOT EXISTS images(
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                added_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                title VARCHAR(25) NOT NULL,
                tag_name VARCHAR(25) NOT NULL,
                description VARCHAR(255) NOT NULL,
                image_name VARCHAR(255) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);";

        if($conn->query($query))
        echo 'table "images" was successfully created';
        else
        echo 'table "images" was not successfully created';

?>