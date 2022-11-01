<?php
require_once('conexion.php');
$campomodificar = $_POST [ 'tmodificacion' ];
$dato=  $_POST [ 'boxmodificar' ];
$id=  $_POST [ 'boxid' ];
 
print "<p>el campo es $campomodificar</p>\n";
print "<p>el id es $id</p>\n";
print "<p>el dato es es $dato</p>\n";
 
$sql=("UPDATE `usuarios` SET `$campomodificar` = '$dato' WHERE `usuarios`.`identificacion` = $id ");
 
if (mysqli_query($conn, $sql)) {
    echo "Exito en la insercion";
    header("Location: ../index.html", TRUE, 301);
    exit();
    mysqli_close($conn);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
 
?>