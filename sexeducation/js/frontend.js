function ver(n)
{
    document.getElementById("subseccion"+n).style.display="block" 
}
function ocultar(n)
{
    document.getElementById("subseccion"+n).style.display="none"
}
function funcion360480()
{
    if(x.matches)
    {
         console.log("360-480"); 
         //alert("tamaño entre 360 y 480"); 
         //document.body.style.backgroundColor="pink"; 
         document.getElementById("titulo").style.fontSize="80%";
         document.getElementById("titulo2").style.fontSize="80%";
         document.getElementById("titulo3").style.fontSize="70%";

         document.getElementById("seccion1").style.marginRight="20%";
         document.getElementById("seccion2").style.marginRight="20%";

    }
    else
    {
        document.getElementById("titulo").style.fontSize="150%";
        document.getElementById("titulo2").style.fontSize="150%";
        document.getElementById("titulo3").style.fontSize="150%";

        document.getElementById("seccion1").style.marginRight="5%";
        document.getElementById("seccion2").style.marginRight="5%";
    }
}
function funcion481900()
{
    if(y.matches)
    {
         console.log("481-900"); 
         //alert("tamaño entre 360 y 480"); 
         //document.body.style.backgroundColor="pink"; 
         document.getElementById("titulo").style.fontSize="90%";
         document.getElementById("titulo2").style.fontSize="90%";
         document.getElementById("titulo3").style.fontSize="90%";

         document.getElementById("seccion1").style.marginRight="10%";
         document.getElementById("seccion2").style.marginRight="10%";

    }
}
var x = window.matchMedia("(min-width : 360px) and (max-width : 480px )")
var y = window.matchMedia("(min-width : 481px) and (max-width : 900px)")
funcion360480(x);
funcion481900(y);
x.addListener(funcion360480); 
y.addListener(funcion481900); 
function mostrarmenu()
{
    console.log("mouse sobre la imagen");
    document.getElementById("menulateral").style.display="block" 


}
function ocultarmenu()
{
    console.log("mouse fuera de la imagen");
    document.getElementById("menulateral").style.display="none"
}
