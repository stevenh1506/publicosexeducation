<?php

require_once('conexion.php');

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto</title>
    <link href="../css/estilos.css" type="text/css" rel="stylesheet">
</head>
<body class="grid-container">
    <header class="header">

        <ul>

            <li id="seccion1" onmouseover="ver(1)" onmouseout="ocultar(1)"> 
                   <a id="titulo">USUARIOS</a>
                   <div id="subseccion1">
                       <p><a href="html/indexformulario.html">REGISTRO</a></p>
                       <p><a href="html/indexlogin.html">LOGIN</a></p>
   
            </li>
               <li id="seccion2" onmouseover="ver(2)" onmouseout="ocultar(2)"> 
               <a id="titulo2">FUNCIONES</a>
               <div id="subseccion2">
                   <p><a href="html/indexmru.html">MRU</a></p>
                   <p><a href="html/indexbiblioteca.html">BIBLIOTECA</a></p>
                   <p><a href="html/indextrabajo.html">TRABAJO</a></p>
                   <p><a href="html/paresimpares.html">PARES E IMPARES</a></p>
                   <p><a href="html/mayor.html">NUMERO MAYOR</a></p>
                   <p><a href="html/estudiantes.html">PORCENTAJE DE ESTUDIANTES</a></p>
                   <p><a href="html/articulo.html">DESCUENTOS ARTICULOS</a></p>
                   <p><a href="html/area.html">AREA-REC</a></p>
                   <p><a href="html/cilindro.html">AREA-CILINDRO</a></p>
                   <p><a href="html/triangulo.html">AREA-TRIANGULO</a></p>
           </li>
           <li id="seccion3" onmouseover="ver(3)" onmouseout="ocultar(3)"> 
               <a id="titulo3">NOSOTROS</a>
               <div id="subseccion3">
                   <p><a href="html/mision.html">MISION</a></p>
                   <p><a href="html/vision.html">VISION</a></p>
               </li>
       </ul>
    </header>

    <nav class="navbar">NAVBAR
    </nav>
    
    <aside class="sidebar">SIDEBAR
    </aside>
    
    <div id="contenedor">
        <h1 id="textocontenedor">LEER USUARIOS</h1>
        <br>
        <br>
        <br>
        <br>
        <table border="3">
            <tr>
                <td>NOMBRE</td>
                <td>APELLIDO</td>
                <td>EMAIL</td>
                <td>TELEFONO</td>
                <td>TIPO DE USUARIO</td>
</tr>

<?php
$sql="SELECT * from usuarios";
$result=mysqli_query($conn,$sql);

while($mostrar=mysqli_fetch_array($result)){
    ?>
    <tr>
            <td>    <?php echo $mostrar['identificacion'] ?></td>
            <td><?php echo $mostrar['nombre'] ?></td>
            <td><?php echo $mostrar['apellido'] ?></td>
            <td><?php echo $mostrar['email'] ?></td>
            <td><?php echo $mostrar['ntel'] ?></td>
            <td><?php echo $mostrar['tusr'] ?></td>
            
        </tr>
        <?php
}
?>
</table>







   
    </div>

</body>
</html>