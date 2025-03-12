<?php

    class UserSkeleton{

        private static $full_name;
        private static $email;
        private static $password;

        public static function create($full_name, $email, $password) {
            self::$full_name = $full_name;
            self::$email = $email;
            self::$password = $password;
        }

        public static function getFullName() {
            return self::$full_name;
        }

        public static function getEmail() {
            return self::$email;
        }

        public static function getPassword() {
            return self::$password;
        }

        public static function setFullName($full_name) {
            self::$full_name = $full_name;
        }

        public static function setEmail($email) {
            self::$email = $email;
        }

        public static function setPassword($password) {
            self::$password = $password;
        }
    }
    
?>