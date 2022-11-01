function recibirdatos() //esta es la funcion
{
    alert("ESTA ES LA FUNCIÓN") //mensaje de alerta


var nombre=(document.getElementById("cajanombre").value); //definir variable y obtener el valor de la caja po id
console.log(nombre);
var apellido=(document.getElementById("cajaapellido").value); //definir variable y obtener el valor de la caja po id
console.log(apellido);
var gmail=(document.getElementById("cajaemail").value); //definir variable y obtener el valor de la caja po id
console.log(gmail);
var documento=(document.getElementById("cajadocumento").value); //definir variable y obtener el valor de la caja po id
console.log(documento);

alert("EL NOMBRE COMPLETO ES: " +nombre+" "+apellido); //mensaje de alerta
alert("SU CORREO Y DOCUMENTO SON: " +gmail+" "+documento);//mensaje de alerta
if(nombre=="MRM" && documento==1027802801); //la expreccion logica
{
   alert("MRM ERES TU");//mensaje de alerta 
}

}
function funcionvelocidad()//esta es la funcion
{
var distancia=parseFloat(document.getElementById("cajadistancia").value);//definir variable y obtener el valor de la caja po id
console.log(distancia);
var tiempo=parseFloat(document.getElementById("cajatiempo").value);//definir variable y obtener el valor de la caja po id
console.log(tiempo);

alert("LA VELOCIDAD EN M/S ES: " +distancia/tiempo);//mensaje de alerta
}

function funciontrabajo()//esta es la funcion
{
var fuerza=parseFloat(document.getElementById("cajafuerza").value);//definir variable y obtener el valor de la caja po id
console.log(fuerza);
var distancia=parseFloat(document.getElementById("cajadistancia").value);//definir variable y obtener el valor de la caja po id
console.log(distancia);
var angulo= parseFloat(document.getElementById("cajaangulo").value);//definir variable y obtener el valor de la caja po id
console.log(angulo);
alert("EL TRABAJO EN JOULS ES: " +fuerza*distancia*Math.cos(angulo));//mensaje de alerta
}  

function funcionbiblioteca()
{
var tipo=(document.getElementById("cajatipo").value);
console.log(tipo);
var autor=(document.getElementById("cajaautor").value);
console.log(autor);
var cantidad= parseInt(document.getElementById("cajacantidad").value);
console.log(cantidad);
var valor= parseFloat(document.getElementById("cajavalor").value);
console.log(valor);

if (tipo=="A" & autor=="X"|| autor=="Y" & cantidad>=1 & cantidad<=10)
{
    var descuento=(1500*cantidad);
    
}
if ((tipo=="A" & autor=="Z") & cantidad>=1 & cantidad<=5)
{
    var descuento=(1000*cantidad);
    
}
if (tipo=="B" & autor=="X" & cantidad>=1 & cantidad<=5)
{
    var descuento=(900*cantidad);
   
}
if (tipo=="C" & autor=="Z" & cantidad>=1 & cantidad<=3)
{
    var descuento=(750*cantidad);
   
}
if (tipo=="C" & autor=="X" & cantidad>=1 & cantidad<=5)
{
    var descuento=(600*cantidad);
   
}


valorapagar= (cantidad*valor)-descuento;
console.log(cantidad);
console.log(valor);

   alert("EL DESCUENTO ES DE: " +descuento+ " EL VALOR TOTAL A PAGAR ES: " +valorapagar);

}
function funcionparimpar()
{
    var numero=(document.getElementById("cajanumero").value);
    console.log(numero);

if (numero%2==0)
{
    alert ("EL NUMERO "+numero+" ES PAR")
}
else 
{
    alert ("EL NUMERO "+numero+" ES IMPAR")
}
}
function funcionmayor()

{
    var numero1=parseFloat(document.getElementById("cajanumero1").value);
    console.log(numero1);
    var numero2=parseFloat(document.getElementById("cajanumero2").value);
    console.log(numero2);
    var numero3=parseFloat(document.getElementById("cajanumero3").value);
    console.log(numero3);

    if (numero1>numero2 & numero1>numero3 )
    {
        alert (+numero1+" ES EL NUMERO MAYOR Y...");
    }
    if (numero2>numero1 & numero2>numero3 )
    {
        alert (+numero2+" ES EL NUMERO MAYOR Y...");
    }
    if (numero3>numero1 & numero3>numero2)
    {
        alert (+numero3+" ES EL NUMERO MAYOR Y...");
    }
    if (numero1<numero2 & numero1<numero3 )
    {
        alert (+numero1+" ES EL NUMERO MENOR");
    }
    if (numero2<numero1 & numero2<numero3 )
    {
        alert (+numero2+" ES EL NUMERO MENOR");
    }
    if (numero3<numero1 & numero3<numero2)
    {
        alert (+numero3+" ES EL NUMERO MENOR");
    }
    if (numero1==numero2 & numero1==numero3 )
    {
        alert ("LOS NUMEROS SON IGUALES");
    }
    if (numero2==numero1 & numero2==numero3 )
    {
        alert ("LOS NUMEROS SON IGUALES");
    }
    if (numero3==numero1 & numero3==numero2)
    {
        alert ("LOS NUMEROS SON IGUALES");
    }
    
}
function funcionporcentaje()
{
    var mujeres=parseFloat(document.getElementById("cajamujer").value); //definir variable
    console.log(mujeres); //leer variable
    var hombres=parseFloat(document.getElementById("cajahombre").value); //definir variable
    console.log(hombres); //leer variable
    var porcentaje=parseFloat(document.getElementById.value); //definir variable
    console.log(porcentaje); //leer variable
    var total=parseFloat(document.getElementById.value); //definir variable
    console.log(total); //leer variable
    var porcentajem=parseFloat(document.getElementById.value); //definir variable
    console.log(porcentajem); //leer variable
    var porcentajeh=parseFloat(document.getElementById.value); //definir variable
    console.log(porcentajeh); //leer variable
    {
      total=(hombres+mujeres); //procedimiento matematico
      porcentajem=(mujeres*100/total); //procedimiento matematico
      porcentajeh=(hombres*100/total); //procedimiento matematico
      porcentaje=(total*100/total); //procedimiento matematico
    }
    {
        alert ("EL PORCENTAJE DE MUJERES ES: "+porcentajem+"%");  //mensaje de alerta al usuario
        alert ("EL PORCENTAJE  DE HOMBRES ES: "+porcentajeh+"%"); //mensaje de alerta al usuario
        alert ("EL PORCENTAJE DE LOS ESTUDIANTES EN  TOTAL ES: " +porcentaje+"%"); //mensaje de alerta al usuario
    }
}
 function funciondescuento()   
  {
var articulo=(document.getElementById("cajaarticulo").value);
console.log(articulo)
var precio=parseFloat(document.getElementById("cajaprecio").value);
console.log(precio)
var clave=parseFloat(document.getElementById("cajaclave").value);
console.log(clave)
var descuento=parseFloat(document.getElementById.value);
console.log(descuento)
var total=parseFloat(document.getElementById.value);
console.log(total)

{
  alert ("EL NOMBRE DE ARTICULO ES: " +articulo+"")
  alert ("EL PRECIO DEL ARTICULO ES: "+precio+"")
  alert ("LA CLAVE DEL ARTICULO ES: " +clave+ "")
}

  if (clave==2)
  {
      descuento=precio*0.2;
      alert ("EL DESCUENTO ES DEL 20%")
      total=precio-descuento;
      alert ("EL PRECIO TOTAL DEL ARTICULO ES: "+total+"")
  }
  if (clave==1)
  {
    descuento=precio*0.1;
    alert ("EL DESCUENTO ES DEL 10%")
    total=precio-descuento;
    alert ("EL PRECIO TOTAL DEL ARTICULO ES: "+total+"")

  }
  
}
