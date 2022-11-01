<?php
$servername = "localhost";
$database = "empresa";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
console_log ("Conexion exitosa");

function console_log( $data){
    echo '<script>';
    echo 'console.log('. json_encode( $data) . ')';
    echo '</script>';
}
?>