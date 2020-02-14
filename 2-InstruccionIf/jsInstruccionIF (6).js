function mostrar()
{
//tomo la edad  
var edad ;
 edad = document.getElementById("edad").value;

 if (edad > 18){
     alert ("eres mayor de edad");

 }
 else if (edad < 13) {
     alert ("eres menor de edad");
 }
 else {
     alert ("eres adolecente ");
 }



}//FIN DE LA FUNCIÓN