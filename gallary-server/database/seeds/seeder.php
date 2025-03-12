<?php

    require_once("../../models/User.php");
    require_once("../../models/Image.php");
    require("../../connection/connection.php");

    $users = [
        [
            'full_name' => 'Adam Salah',
            'email' => 'adamsalah3@gmail.com',
            'password' => 'midnightowl7'
        ],[
            'full_name' => 'Hana Kareem',
            'email' => 'hanakareem8@gmail.com',
            'password' => 'glowingstar5'
        ],[
            'full_name' => 'Tariq Hadi',
            'email' => 'tariqhadi2@gmail.com',
            'password' => 'riverflow12'
        ],[
            'full_name' => 'Lina Ahmed',
            'email' => 'linaahmed4@gmail.com',
            'password' => 'softbreeze6'
        ],[
            'full_name' => 'Bilal Sami',
            'email' => 'bilalsami7@gmail.com',
            'password' => 'mountainpeak9'
        ],[
            'full_name' => 'Rana Farid',
            'email' => 'ranafarid5@gmail.com',
            'password' => 'sunflower8'
        ],[
            'full_name' => 'Othman Zaki',
            'email' => 'othmanzaki1@gmail.com',
            'password' => 'darkshadow11'
        ],[
            'full_name' => 'Salma Nader',
            'email' => 'salmanader6@gmail.com',
            'password' => 'oceanwave10'
        ],[
            'full_name' => 'Walid Amr',
            'email' => 'walidamr9@gmail.com',
            'password' => 'redphoenix7'
        ],[
            'full_name' => 'Nada Sami',
            'email' => 'nadasami2@gmail.com',
            'password' => 'brightmoon12'
        ]
    ];
    
    foreach($users as $user) {
        $user_object = new UserSkeleton($user["full_name"], $user["email"], hash('sha256', $user["password"]));
         
    }
    

?>