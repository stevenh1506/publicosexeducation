<?php
require_once('conexion.php');
$tipodeindetificacion = $_POST ['tipoid'];
$id=  $_POST ['boxid'];
$nombre = $_POST ['boxname']; 
$apellido=  $_POST [ 'boxlastname' ];
$email=  $_POST [ 'boxlastname' ];
$celular=  $_POST [ 'boxnumerocel' ];
$pass=  $_POST [ 'boxpass' ];
$tipodeusuario = $_POST [ 'tipousr' ];

print "<p>el nombre es $nombre</p>\n";
print "<p>el apellido es $apellido</p>\n";
print "<p>el email es $email</p>\n";
print "<p>el celular es $celular</p>\n";
print "<p>el select es $tipodeindetificacion</p>\n";
print "<p>el select tipo de usuario es $tipodeusuario</p>\n";
print "<p>la identificacion es $id</p>\n";

$sql=("INSERT INTO `usuarios` (`identificacion`, `tipoid`, `nombre`, `apellido`, `email`, `ntel`, `password`, `tusr`)
VALUES ('$id', '$tipodeindetificacion', '$nombre', '$apellido', '$email', '$celular', '$pass', '$tipodeusuario')");
 

if (mysqli_query($conn, $sql)) {
    echo "Exito en la insercion";
    header("Location: ../index.html", TRUE, 301);
    exit();
    mysqli_close($conn);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>