function mostrar()
{
//tomo la edad  
var estado;
var edad ;

edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil").value;

if (edad < 18 && estado != "Soltero"){
    alert ("Es muy pequeño para no ser soltero")
}



	


}//FIN DE LA FUNCIÓN